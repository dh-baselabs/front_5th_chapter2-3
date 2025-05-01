
export interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  userId: number
  author?: {
    id: number
    username: string
    image: string
  }
  reactions?: {
    likes: number
    dislikes: number
  }
}
