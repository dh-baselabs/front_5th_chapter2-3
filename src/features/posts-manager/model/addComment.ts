import { useCommentsStore } from "../../../entities/comment/model/comments-store.ts"
import { useDialogStore } from "../../../shared/model/dialog-store.ts"
import { addCommentApi } from "../../../entities/comment/api/addCommentApi.ts"

export const useAddComment = () => {
  const { comments, setComments, newComment, setNewComment } = useCommentsStore()
  const { closeDialog } = useDialogStore()

  const addComment = async () => {
    try {
      if (newComment.postId == null) {
        console.error("postId가 없습니다. 댓글을 추가할 수 없습니다.")
        return
      }

      const added = await addCommentApi(newComment as { body: string; postId: number; userId: number })

      setComments(added.postId, [...(comments[added.postId] || []), added])

      setNewComment({ body: "", postId: null, userId: 1 })
      closeDialog("showAddCommentDialog")
    } catch (err) {
      console.error("댓글 추가 오류", err)
    }
  }

  return { addComment }
}
