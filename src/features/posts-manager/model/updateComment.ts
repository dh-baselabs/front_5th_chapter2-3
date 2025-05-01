import { useCommentsStore } from "../../../entities/comment/model/comments-store.ts"
import { updateCommentApi } from "../../../entities/comment/api/updateCommentApi.ts"

export const useUpdateComment = () => {
  const { comments, setComments } = useCommentsStore()

  const updateComment = async (commentId: number, postId: number, newBody: string) => {
    try {
      const updated = await updateCommentApi(commentId, newBody)
      const updatedList = comments[postId].map((comment) => (comment.id === updated.id ? updated : comment))
      setComments(postId, updatedList)
    } catch (err) {
      console.error("댓글 업데이트 오류", err)
    }
  }
  return { updateComment }
}
