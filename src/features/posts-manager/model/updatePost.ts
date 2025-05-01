import { usePostsStore } from "../../../entities/post/model/posts-store.ts"
import { useDialogStore } from "../../../shared/model/dialog-store.ts"
import { Post } from "../../../entities/post/model/types.ts"
import { updatePostApi } from "../../../entities/post/api/updatePostApi.ts"

export const useUpdatePost = () => {
  const { setPosts, setSelectedPost } = usePostsStore()
  const { closeDialog } = useDialogStore()

  const updatePost = async (postId: number, updatedData: Partial<Post>) => {
    try {
      const title = updatedData.title ?? ""
      const body = updatedData.body ?? ""

      const updated = await updatePostApi(postId, { title, body })

      const currentPosts = usePostsStore.getState().posts

      const updatedList = currentPosts.map((post) => (post.id === updated.id ? updated : post))

      setPosts(updatedList)
      setSelectedPost(null)
      closeDialog("showEditPostDialog")
    } catch (err) {
      console.error("게시물 업데이트 오류", err)
    }
  }
  return { updatePost }
}
