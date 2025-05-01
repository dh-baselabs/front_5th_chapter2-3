import { create } from "zustand/react"
import { Post } from "./types.ts"

interface PostsState {
  posts: Post[]
  total: number
  skip: number
  limit: number
  searchQuery: string
  sortBy: string
  sortOrder: "asc" | "desc"
  selectedTag: string
  selectedPost: Post | null
  newPost: { title: string; body: string; userId: number }

  setPosts: (posts: Post[]) => void
  setTotal: (total: number) => void
  setSkip: (skip: number) => void
  setLimit: (limit: number) => void
  setSearchQuery: (query: string) => void
  setSortBy: (sortBy: string) => void
  setSortOrder: (sortOrder: "asc" | "desc") => void
  setSelectedTag: (tag: string) => void
  setSelectedPost: (post: Post | null) => void
  setNewPost: (post: { title: string; body: string; userId: number }) => void

}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  total: 0,
  skip: 0,
  limit: 10,
  searchQuery: "",
  sortBy: "",
  sortOrder: "asc",
  selectedTag: "",
  selectedPost: null,
  newPost: { title: "", body: "", userId: 1 },

  setPosts: (posts) => set({ posts }),
  setTotal: (total) => set({ total }),
  setSkip: (skip) => set({ skip }),
  setLimit: (limit) => set({ limit }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSortBy: (sortBy) => set({ sortBy }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
  setSelectedTag: (selectedTag) => set({ selectedTag }),
  setSelectedPost: (selectedPost) => set({ selectedPost }),
  setNewPost: (newPost) => set({ newPost }),
}))
