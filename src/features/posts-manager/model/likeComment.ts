import { useCommentsStore } from "../../../entities/comment/model/comments-store.ts"
import { likeCommentApi } from "../../../entities/comment/api/likeCommentApi.ts"

export const useLikeComment = () => {
  const { comments, setComments } = useCommentsStore()

  const likeComment = async (commentId: number, postId: number) => {
    try {
      const target = comments[postId].find((c) => c.id === commentId)

      if (!target) return

      const updated = await likeCommentApi(commentId, target.likes + 1)

      const updatedList = comments[postId].map((c) =>
        c.id === updated.id ? { ...updated, likes: target.likes + 1 } : c,
      )

      setComments(postId, updatedList)
    } catch (err) {
      console.error("댓글 좋아요 오류:", err)
    }
  }
  return { likeComment }
}
