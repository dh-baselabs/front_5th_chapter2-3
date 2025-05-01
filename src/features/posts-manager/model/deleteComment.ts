import { useCommentsStore } from "../../../entities/comment/model/comments-store.ts"
import { deleteCommentApi } from "../../../entities/comment/api/deleteCommentApi.ts"

export const useDeleteComment = () => {
  const { setComments } = useCommentsStore()

  const deleteComment = async (commentId: number, postId: number) => {
    try {
      await deleteCommentApi(commentId)
      const current = useCommentsStore.getState().comments
      const updatedComments = current[postId]?.filter((c) => c.id !== commentId) || []

      setComments(postId, updatedComments)
    } catch (err) {
      console.error("댓글 삭제 실패:", err)
    }
  }

  return { deleteComment }
}
