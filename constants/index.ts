export const navItems = [
  { label: "Home", href: "/" },
  { label: "Webinars", href: "/webinar" },
  { label: "Latest Updates", href: "/updates" },
  { label: "Contact", href: "/contact#contact-form" },
]

export const authItems = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
]

export const buttonStyles = {
  primary:
    "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 font-sans text-sm font-semibold text-secondary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95 hover:shadow-md sm:w-auto sm:px-7 sm:py-4",

  secondary:
    "group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-sans text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-md sm:w-auto sm:px-7 sm:py-4",
}

export const excludedCountryCodes = new Set([
  "ET", // Ethiopia
  "AF", // Afghanistan
  "DZ", // Algeria
  "TD", // Chad
  "CU", // Cuba
  "DJ", // Djibouti
  "EG", // Egypt
  "ID", // Indonesia
  "IR", // Iran
  "IQ", // Iraq
  "MM", // Myanmar
  "OM", // Oman
  "PK", // Pakistan
  "PS", // Palestinian Territory Occupied
  "QA", // Qatar
  "RU", // Russia
  "SA", // Saudi Arabia
  "SN", // Senegal
  "SS", // South Sudan
  "LK", // Sri Lanka
  "SD", // Sudan
  "SY", // Syria
  "TN", // Tunisia
  "TR", // Turkey
  "AE", // United Arab Emirates
  "YE", // Yemen
])

export const priorityCountryCodes = ["US", "GB", "IN", "ZA", "EE"]
