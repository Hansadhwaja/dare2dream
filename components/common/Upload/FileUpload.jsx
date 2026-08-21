import { useEffect, useRef, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
    File,
    Upload,
    X,
    FileText,
    FileImage,
    FileSpreadsheet,
    FileArchive,
} from "lucide-react";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import { useUploadFileMutation } from "@/stores/api/file/uploadApi";

const FileUpload = ({
    name,
    label = "Attachments",
    buttonLabel = "Upload Files",
    single = false,
    folder = "attachments",
}) => {
    const form = useFormContext();

    const fieldValue = form.watch(name);

    const [uploadFile, { isLoading }] = useUploadFileMutation();

    const [files, setFiles] = useState([]);

    const inputRef = useRef(null);

    // Sync previews with form value
    useEffect(() => {
        if (!fieldValue) {
            setFiles([]);
            return;
        }

        if (single) {
            setFiles(fieldValue ? [fieldValue] : []);
        } else {
            setFiles(Array.isArray(fieldValue) ? fieldValue : []);
        }
    }, [fieldValue, single]);

    // Clear after submit
    useEffect(() => {
        if (form.formState.isSubmitSuccessful) {
            setFiles([]);
        }
    }, [form.formState.isSubmitSuccessful]);

    // Get icon based on file extension
    const getFileIcon = (url) => {
        const extension = url?.split(".").pop()?.toLowerCase();

        if (
            ["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(extension)
        ) {
            return <FileImage size={18} />;
        }

        if (["pdf", "doc", "docx", "txt"].includes(extension)) {
            return <FileText size={18} />;
        }

        if (["xls", "xlsx", "csv"].includes(extension)) {
            return <FileSpreadsheet size={18} />;
        }

        if (["zip", "rar"].includes(extension)) {
            return <FileArchive size={18} />;
        }

        return <File size={18} />;
    };

    const getFileName = (url) => {
        try {
            return decodeURIComponent(url.split("/").pop());
        } catch {
            return "File";
        }
    };

    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field, fieldState }) => {
                const currentFiles = single
                    ? field.value
                        ? [field.value]
                        : []
                    : Array.isArray(field.value)
                        ? field.value
                        : [];

                const handleUpload = async (e) => {
                    if (!e.target.files) return;

                    const selectedFiles = Array.from(e.target.files);

                    if (selectedFiles.length === 0) return;

                    try {
                        if (single) {
                            const res = await uploadFile({
                                file: selectedFiles[0],
                                folder,
                            }).unwrap();

                            toast.success(
                                res?.message || "File uploaded successfully",
                            );

                            field.onChange(res?.data?.url);
                        } else {
                            const uploadedUrls = [];

                            for (const file of selectedFiles) {
                                const res = await uploadFile({
                                    file,
                                    folder,
                                }).unwrap();

                                uploadedUrls.push(res?.data?.url);
                            }

                            toast.success("Files uploaded successfully");

                            field.onChange([
                                ...(field.value || []),
                                ...uploadedUrls,
                            ]);
                        }

                        e.target.value = "";
                    } catch (error) {
                        console.error(error);

                        toast.error(
                            error?.data?.message || "Failed to upload file",
                        );
                    }
                };

                const handleRemove = (index) => {
                    if (single) {
                        field.onChange(null);
                    } else {
                        field.onChange(
                            currentFiles.filter((_, i) => i !== index),
                        );
                    }
                };

                return (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel className="text-xs lg:text-sm">
                            {label}
                        </FieldLabel>

                        <div className="space-y-3">
                            {/* FILE PREVIEWS */}
                            {files.length > 0 && (
                                <div className="space-y-2">
                                    {files.map((fileUrl, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between border rounded-lg p-3 bg-muted/30"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="shrink-0">
                                                    {getFileIcon(fileUrl)}
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="text-sm truncate">
                                                        {getFileName(fileUrl)}
                                                    </p>

                                                    <a
                                                        href={fileUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs text-blue-500 hover:underline"
                                                    >
                                                        View File
                                                    </a>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => handleRemove(index)}
                                                className="text-red-500 hover:text-red-600 shrink-0"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* UPLOAD BUTTON */}
                            {(!single || files.length === 0) && (
                                <label
                                    className={cn(
                                        "flex items-center gap-2 border border-dashed border-gray-300 rounded-lg px-4 py-3 cursor-pointer transition w-fit",
                                        isLoading
                                            ? "opacity-50 pointer-events-none"
                                            : "hover:bg-muted/40",
                                    )}
                                >
                                    <Upload size={16} />

                                    <span className="text-xs lg:text-sm">
                                        {isLoading ? "Uploading..." : buttonLabel}
                                    </span>

                                    <input
                                        ref={inputRef}
                                        type="file"
                                        multiple={!single}
                                        className="hidden"
                                        onChange={handleUpload}
                                    />
                                </label>
                            )}
                        </div>

                        {fieldState.error && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                );
            }}
        />
    );
}

export default FileUpload;