export const addPostApi = async (post: { title: string; body: string; userId: number }) => {
  const res = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return res.json();
};
