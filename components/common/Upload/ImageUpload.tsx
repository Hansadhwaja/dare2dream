"use client"

import { useEffect, useState } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { Upload, X } from "lucide-react"
import { toast } from "sonner"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { uploadImage } from "@/lib/api/client/upload"

interface ImageUploadProps {
  name: string
  label?: string
  buttonLabel?: string
}

export default function ImageUpload({
  name,
  label = "Profile Image",
  buttonLabel = "Upload Image",
}: ImageUploadProps) {
  const form = useFormContext()
  const fieldValue = form.watch(name)
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    setPreview(fieldValue || null)
  }, [fieldValue])

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string | null) => void
  ) => {
    const file = event.target.files?.[0]

    if (!file) return

    // Optional validation
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image")
      return
    }

    // Optional size validation
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB")
      return
    }

    try {
      const formData = new FormData()
      formData.append("file", file)
      const response = await uploadImage({
        file: formData,
      })

      const imageUrl = response?.data?.url

      if (!imageUrl) {
        throw new Error("Image URL was not returned")
      }
      onChange(imageUrl)
      setPreview(imageUrl)

      toast.success(response?.message || "Image uploaded successfully")
      event.target.value = ""
    } catch (error: any) {
      console.error("Image upload failed:", error)

      toast.error(
        error?.data?.message || error?.message || "Failed to upload image"
      )
    }
  }

  const handleRemove = (onChange: (value: string | null) => void) => {
    onChange(null)
    setPreview(null)
  }

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel className="text-sm">{label}</FieldLabel>

          <div className="flex flex-wrap items-center gap-4">
            {/* Preview */}
            {preview && (
              <div className="relative">
                <Image
                  src={preview}
                  alt="Profile preview"
                  width={80}
                  height={80}
                  className="size-20 rounded-full border object-cover"
                />

                <button
                  type="button"
                  onClick={() => handleRemove(field.onChange)}
                  disabled={isLoading}
                  className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-red-500 text-white shadow transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <X className="size-3.5" />
                </button>
              </div>
            )}

            {/* Upload button */}
            {!preview && (
              <label
                className={cn(
                  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-input px-4 py-2.5 text-sm font-medium transition",
                  isLoading
                    ? "pointer-events-none cursor-not-allowed opacity-50"
                    : "hover:bg-muted"
                )}
              >
                <Upload className="size-4" />

                <span>{isLoading ? "Uploading..." : buttonLabel}</span>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  disabled={isLoading}
                  onChange={(event) => handleImageUpload(event, field.onChange)}
                />
              </label>
            )}
          </div>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}
