import { Comment } from "../model/types.ts"

export const fetchCommentsApi = async (postId: number): Promise<Comment[]> => {
  const res = await fetch(`/api/comments/post/${postId}`)
  const data = await res.json()
  return data.comments
}
