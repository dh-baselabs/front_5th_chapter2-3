import { useAddPost } from "../model/addPost.ts"
import { usePostsStore } from "../../../entities/post/model/posts-store.ts"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "../../../shared/ui"
import { useDialogStore } from "../../../shared/model/dialog-store.ts"

export const AddPostDialog = () => {
  const { showAddPostDialog, openDialog, closeDialog } = useDialogStore()
  const { newPost, setNewPost } = usePostsStore()
  const { addPost } = useAddPost()

  return (
    <Dialog open={showAddPostDialog}
            onOpenChange={(open) => (open ? openDialog("showAddPostDialog") : closeDialog("showAddPostDialog"))}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Textarea
            rows={30}
            placeholder="내용"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={newPost.userId}
            onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
          />
          <Button onClick={() => addPost(newPost)}>게시물 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
