export const deletePostApi = async (postId: number) => {
  return fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });
};
