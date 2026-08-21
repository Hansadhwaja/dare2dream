export type Video = {
  _id: string
  title: string
  path: string
  page: string
  date: Date
  sequence: number
  description: string
  createdAt: Date
  __v: number
  videoUrl: string
  thumbnail: string
}

export interface VideosResponse {
  videos: Video[]
  totalPages: number
  currentPage: number
  totalVideos: number
}
