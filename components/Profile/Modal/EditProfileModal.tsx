"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import ProfileForm from "../Form/ProfileForm";
import { useState } from "react";
import { ProfileFormValues } from "@/schemas/Profile/profile.schemas";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth/authStore";
import { updateProfile } from "@/lib/api/profile";

const EditProfileModal = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);

  const handleSubmit = async (values: ProfileFormValues) => {
    try {
      setIsLoading(true);

      const response = await updateProfile(values);

      updateUser(response.user);

      toast.success(
        response?.message ?? "User details updated successfully"
      );

      setOpen(false);
    } catch (error) {
      console.error("Profile update failed:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Error while updating profile"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#214c3c] hover:bg-[#173b2f]">
          <Pencil className="mr-2 size-4" />
          Edit Profile
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Edit Profile</DialogTitle>
          <DialogDescription>
            Update your personal information below. Your changes will be
            saved to your profile.
          </DialogDescription>
        </DialogHeader>

        <ProfileForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          initialData={user}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;