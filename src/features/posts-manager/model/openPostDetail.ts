import { usePostsStore } from "../../../entities/post/model/posts-store.ts"
import { useCommentsStore } from "../../../entities/comment/model/comments-store.ts"
import { useDialogStore } from "../../../shared/model/dialog-store.ts"
import { Post } from "../../../entities/post/model/types.ts"
import { useFetchComments } from "./fetchComments.ts"

export const useOpenPostDetail = () => {
  const { setSelectedPost } = usePostsStore()
  const { comments } = useCommentsStore()
  const { openDialog } = useDialogStore()
  const { fetchComments } = useFetchComments()

  const openPostDetail = async (post: Post) => {
    setSelectedPost(post)

    if (!comments[post.id]) {
      await fetchComments(post.id)
    }

    openDialog("showPostDetailDialog")
  }

  return { openPostDetail }
}
