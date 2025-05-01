export const addCommentApi = async (comment: { body: string; postId: number; userId: number }) => {
  const res = await fetch(`/api/comments/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
  return res.json();
};
