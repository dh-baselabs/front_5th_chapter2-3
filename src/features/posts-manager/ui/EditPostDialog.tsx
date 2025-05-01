import { usePostsStore } from "../../../entities/post/model/posts-store.ts"
import { useDialogStore } from "../../../shared/model/dialog-store.ts"
import { useUpdatePost } from "../model/updatePost.ts"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "../../../shared/ui"

const EditPostDialog = () => {
  const { selectedPost, setSelectedPost } = usePostsStore()
  const { showEditPostDialog, openDialog, closeDialog } = useDialogStore()
  const { updatePost } = useUpdatePost()

  if (!selectedPost) return null

  return (
    <Dialog
      open={showEditPostDialog}
      onOpenChange={(open) => (open ? openDialog("showEditPostDialog") : closeDialog("showEditPostDialog"))}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={selectedPost.title || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={selectedPost.body || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost, body: e.target.value })}
          />
          <Button onClick={() => updatePost(selectedPost.id, selectedPost)}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditPostDialog
