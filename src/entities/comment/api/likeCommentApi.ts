export const likeCommentApi = async (commentId: number, newLikes: number) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ likes: newLikes }),
  });
  return res.json();
};
