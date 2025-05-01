import { Post, User } from "../model/types.ts"

export const fetchPostsApi = async (skip: number, limit: number) => {
  const postsRes = await fetch(`/api/posts?limit=${limit}&skip=${skip}`);
  const postsData = await postsRes.json();

  const usersRes = await fetch(`/api/users?limit=0&select=username,image`);
  const usersData = await usersRes.json();

  const postsWithUsers = postsData.posts.map((post: Post) => ({
    ...post,
    author: usersData.users.find((user: User) => user.id === post.userId),
  }));

  return { posts: postsWithUsers, total: postsData.total };
};
