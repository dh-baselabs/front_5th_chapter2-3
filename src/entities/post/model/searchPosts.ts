import { usePostsStore } from "./posts-store.ts"

export const useSearchPosts = () => {
  const { setPosts, setTotal } = usePostsStore()

  const searchPosts = async (query: string) => {
    if (!query.trim()) return

    try {
      const res = await fetch(`/api/posts/search?q=${query}`)
      const data = await res.json()
      setPosts(data.posts)
      setTotal(data.total)
    } catch (err) {
      console.error("검색 실패:", err)
    }
  }

  return { searchPosts }
}
