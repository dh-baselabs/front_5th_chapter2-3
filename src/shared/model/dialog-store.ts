import { create } from "zustand/react"

interface DialogState {
  showAddPostDialog: boolean
  showEditPostDialog: boolean
  showAddCommentDialog: boolean
  showEditCommentDialog: boolean
  showPostDetailDialog: boolean
  showUserDialog: boolean

  openDialog: (dialog: keyof Omit<DialogState, "openDialog" | "closeDialog" | "closeAllDialogs">) => void
  closeDialog: (dialog: keyof Omit<DialogState, "openDialog" | "closeDialog" | "closeAllDialogs">) => void
  closeAllDialogs: () => void
}

export const useDialogStore = create<DialogState>((set) => ({
  showAddPostDialog: false,
  showEditPostDialog: false,
  showAddCommentDialog: false,
  showEditCommentDialog: false,
  showPostDetailDialog: false,
  showUserDialog: false,

  openDialog: (dialog) => set({ [dialog]: true }),
  closeDialog: (dialog) => set({ [dialog]: false }),
  closeAllDialogs: () =>
    set({
      showAddPostDialog: false,
      showEditPostDialog: false,
      showAddCommentDialog: false,
      showEditCommentDialog: false,
      showPostDetailDialog: false,
      showUserDialog: false,
    }),
}))
