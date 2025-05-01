import { fetchCommentsApi } from "../../../entities/comment/api/fetchCommentsApi.ts"
import { useCommentsStore } from "../../../entities/comment/model/comments-store.ts"

export const useFetchComments = () => {
  const { setComments } = useCommentsStore()

  const fetchComments = async (postId: number) => {
    try {
      const comments = await fetchCommentsApi(postId)
      setComments(postId, comments)
    } catch (error) {
      console.error("댓글 불러오기 실패:", error)
    }
  }

  return { fetchComments }
}
