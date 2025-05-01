import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui"
import { useDialogStore } from "../../../shared/model/dialog-store.ts"
import { User } from "../../../shared/model/types.ts"

interface UserDetailDialogProps {
  userId: number | null
}

const UserDetailDialog = ({ userId }: UserDetailDialogProps) => {
  const { showUserDialog, closeDialog } = useDialogStore()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return
      try {
        const response = await fetch(`/api/users/${userId}`)
        const data = await response.json()
        setUser(data)
      } catch (error) {
        console.error("사용자 정보 가져오기 오류:", error)
      }
    }
    fetchUser()
  }, [userId])

  if (!user) return null

  return (
    <Dialog open={showUserDialog} onOpenChange={() => closeDialog("showUserDialog")}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>사용자 정보</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img src={user.image} alt={user.username} className="w-24 h-24 rounded-full mx-auto" />
          <h3 className="text-xl font-semibold text-center">{user.username}</h3>
          <div className="space-y-2">
            <p>
              <strong>이름:</strong> {user.firstName} {user.lastName}
            </p>
            <p>
              <strong>나이:</strong> {user.age}
            </p>
            <p>
              <strong>이메일:</strong> {user.email}
            </p>
            <p>
              <strong>전화번호:</strong> {user.phone}
            </p>
            <p>
              <strong>주소:</strong> {user.address?.address}, {user.address?.city}, {user.address?.state}
            </p>
            <p>
              <strong>직장:</strong> {user.company?.name} - {user.company?.title}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UserDetailDialog
