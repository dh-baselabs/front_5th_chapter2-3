import { usePostsStore } from "../../../entities/post/model/posts-store.ts"
import { deletePostApi } from "../../../entities/post/api/deletePostApi.ts"

export const useDeletePost = () => {
  const { setPosts } = usePostsStore()

  const deletePost = async (postId: number) => {
    try {
      await deletePostApi(postId)

      const currentPosts = usePostsStore.getState().posts
      const updatedList = currentPosts.filter((post) => post.id !== postId)
      setPosts(updatedList)
    } catch (err) {
      console.error("게시물 삭제 오류", err)
    }
  }
  return { deletePost }
}
