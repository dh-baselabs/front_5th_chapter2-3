export const deleteCommentApi = async (commentId: number) => {
  return fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
};
