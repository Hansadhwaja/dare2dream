import { serverApiFetch } from "./server"

interface GetVideosParams {
  page?: string
  limit?: string
  sortBy?: string
  sortOrder?: string
  pageFilter?: string
}

export const getVideos = (params: GetVideosParams = {}) => {
  const { page, limit, sortBy, sortOrder, pageFilter } = params

  const qs = new URLSearchParams()

  if (page) qs.set("page", page)
  if (limit) qs.set("limit", limit)
  if (sortBy) qs.set("sortBy", sortBy)
  if (sortOrder) qs.set("sortOrder", sortOrder)
  if (pageFilter) qs.set("pageFilter", pageFilter)

  const queryString = qs.toString()

  const url = queryString ? `/videos?${queryString}` : "/videos"

  return serverApiFetch(url)
}
