import { Post, User } from "../model/types.ts"

export const fetchPostsByTagApi = async (tag: string) => {
  const postsRes = await fetch(`/api/posts/tag/${tag}`);
  const postsData = await postsRes.json();

  const usersRes = await fetch(`/api/users?limit=0&select=username,image`);
  const usersData = await usersRes.json();

  const postsWithUsers = postsData.posts.map((post: Post) => ({
    ...post,
    author: usersData.users.find((user: User) => user.id === post.userId),
  }));

  return { posts: postsWithUsers, total: postsData.total };
};
