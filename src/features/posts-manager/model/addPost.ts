import { usePostsStore } from "../../../entities/post/model/posts-store.ts"
import { useDialogStore } from "../../../shared/model/dialog-store.ts"
import { Post } from "../../../entities/post/model/types.ts"
import { addPostApi } from "../../../entities/post/api/addPostApi.ts"

export const useAddPost = () => {
  const { setPosts } = usePostsStore()
  const { closeDialog } = useDialogStore()

  const addPost = async (newPost: Omit<Post, "id" | "tags" | "reactions" | "author">) => {
    try {
      const created = await addPostApi(newPost)

      const prevPosts = usePostsStore.getState().posts
      setPosts([created, ...prevPosts])

      closeDialog("showAddPostDialog")
    } catch (err) {
      console.error("게시물 추가 오류", err)
    }
  }
  return { addPost }
}
