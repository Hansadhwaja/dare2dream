"use client"

import { ArrowRight, Globe, User } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Country } from "country-state-city"

import { Button } from "@/components/ui/button"
import FormField from "@/components/common/Form/FormField"
import IconSelect from "@/components/common/Input/IconSelect"
import Loader from "@/components/common/Loader/Loader"
import {
  ProfileFormValues,
  profileSchema,
} from "@/schemas/Profile/profile.schemas"
import AuthField from "@/components/Auth/AuthField"
import { User as UserType } from "@/types/auth.types"

const countries = Country.getAllCountries()

interface Props {
  onSubmit: (data: ProfileFormValues) => void
  isLoading: boolean
  initialData?: UserType | null
}

const ProfileForm = ({ onSubmit, isLoading, initialData }: Props) => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      firstName: initialData?.firstName ?? "",
      lastName: initialData?.lastName ?? "",
      country: initialData?.country ?? "",
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const onFormSubmit = (values: ProfileFormValues) => {
    onSubmit(values)
    reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4">
      {/* First Name / Last Name */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="firstName"
          render={(field) => (
            <AuthField
              {...field}
              label="First name"
              placeholder="First name"
              autoComplete="given-name"
              icon={User}
            />
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={(field) => (
            <AuthField
              {...field}
              label="Last name"
              placeholder="Last name"
              autoComplete="family-name"
              icon={User}
            />
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="country"
        render={(field) => (
          <IconSelect
            label="Country"
            icon={Globe}
            placeholder="Select your country"
            value={field.value}
            onValueChange={field.onChange}
            options={countries.map((country) => ({
              label: country.name,
              value: country.isoCode,
            }))}
          />
        )}
      />

      {/* Submit */}
      <Button
        type="submit"
        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary font-sans text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
        disabled={!isValid || isLoading}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            Update details
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  )
}

export default ProfileForm
