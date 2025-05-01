export const searchPostsApi = async (query: string) => {
  const res = await fetch(`/api/posts/search?q=${query}`);
  const data = await res.json();
  return { posts: data.posts, total: data.total };
};
