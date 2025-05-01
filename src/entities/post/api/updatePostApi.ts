export const updatePostApi = async (postId: number, post: { title: string; body: string }) => {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return res.json();
};
