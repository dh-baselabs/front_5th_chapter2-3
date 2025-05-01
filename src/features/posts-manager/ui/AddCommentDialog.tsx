import { useCommentsStore } from "../../../entities/comment/model/comments-store"
import { useDialogStore } from "../../../shared/model/dialog-store"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "../../../shared/ui"
import { useAddComment } from "../model/addComment.ts"

const AddCommentDialog = () => {
  const { showAddCommentDialog, openDialog, closeDialog } = useDialogStore()
  const { newComment, setNewComment } = useCommentsStore()
  const { addComment } = useAddComment()

  return (
    <Dialog
      open={showAddCommentDialog}
      onOpenChange={(open) => (open ? openDialog("showAddCommentDialog") : closeDialog("showAddCommentDialog"))}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
          <Button onClick={addComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddCommentDialog
