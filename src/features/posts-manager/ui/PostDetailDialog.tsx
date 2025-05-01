import { usePostsStore } from "../../../entities/post/model/posts-store.ts"
import { useDialogStore } from "../../../shared/model/dialog-store.ts"
import { useLikeComment } from "../model/likeComment.ts"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui"
import { useCommentsStore } from "../../../entities/comment/model/comments-store.ts"
import { Edit2, Plus, ThumbsUp, Trash2 } from "lucide-react"
import { useDeleteComment } from "../model/deleteComment.ts"

const PostDetailDialog = () => {
  const { selectedPost, searchQuery } = usePostsStore()
  const { showPostDetailDialog, openDialog, closeDialog } = useDialogStore()
  const { likeComment } = useLikeComment()
  const { comments, setSelectedComment } = useCommentsStore()
  const { deleteComment } = useDeleteComment()

  const renderComments = (postId: number) => (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <Button
          size="sm"
          onClick={() => {
            const { setNewComment } = useCommentsStore.getState()
            setNewComment({ body: "", postId, userId: 1 })
            openDialog("showAddCommentDialog")
          }}
        >
          <Plus className="w-3 h-3 mr-1" />
          댓글 추가
        </Button>
      </div>
      <div className="space-y-1">
        {comments[postId]?.map((comment) => (
          <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate">{comment.user.username}:</span>
              <span className="truncate">{highlightText(comment.body, searchQuery)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm" onClick={() => likeComment(comment.id, postId)}>
                <ThumbsUp className="w-3 h-3" />
                <span className="ml-1 text-xs">{comment.likes}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedComment(comment)
                  openDialog("showEditCommentDialog")
                }}
              >
                <Edit2 className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => deleteComment(comment.id, postId)}>
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const highlightText = (text: string, highlight: string) => {
    if (!text) return null
    if (!highlight.trim()) return <span>{text}</span>
    const regex = new RegExp(`(${highlight})`, "gi")
    const parts = text.split(regex)
    return (
      <span>
        {parts.map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>))}
      </span>
    )
  }

  if (!selectedPost) return null

  return (
    <Dialog
      open={showPostDetailDialog}
      onOpenChange={(open) => (open ? openDialog("showPostDetailDialog") : closeDialog("showPostDetailDialog"))}
    >
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost.body, searchQuery)}</p>
          {renderComments(selectedPost.id)}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PostDetailDialog
