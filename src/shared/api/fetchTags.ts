import { Tag } from "../model/types.ts"

export const fetchTags = async (): Promise<Tag[]> => {
  const res = await fetch("/api/posts/tags");
  const data = await res.json();
  return data;
};