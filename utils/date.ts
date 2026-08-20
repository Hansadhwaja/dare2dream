import { format, parseISO } from "date-fns"

export const formatDate = (
  date: string | Date,
  formatString = "dd MMM yyyy"
) => {
  const parsedDate = typeof date === "string" ? parseISO(date) : date

  return format(parsedDate, formatString)
}

export const formatDateTime = (date: string | Date) => {
  return formatDate(date, "dd MMM yyyy, hh:mm a")
}

export const formatTime = (date: string | Date) => {
  return formatDate(date, "hh:mm a")
}

export const formatLongDate = (date: string | Date) => {
  return formatDate(date, "MMMM d, yyyy")
}
