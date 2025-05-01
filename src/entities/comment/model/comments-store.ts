import { create } from "zustand/react"
import { Comment } from "./types.ts"

interface NewComment {
  body: string
  postId: number | null
  userId: number
}

interface CommentsState {
  comments: Record<number, Comment[]>
  selectedComment: Comment | null
  newComment: NewComment

  setComments: (postId: number, comments: Comment[]) => void
  setSelectedComment: (comment: Comment | null) => void
  setNewComment: (comment: { body: string; postId: number | null; userId: number }) => void
}

export const useCommentsStore = create<CommentsState>((set) => ({
  comments: {},
  selectedComment: null,
  newComment: { body: "", postId: 1, userId: 1 },

  setComments: (postId, comments) =>
    set((state) => ({
      comments: {
        ...state.comments,
        [postId]: comments,
      },
    })),
  setSelectedComment: (selectedComment) => set({ selectedComment }),
  setNewComment: (newComment) => set({ newComment }),
}))