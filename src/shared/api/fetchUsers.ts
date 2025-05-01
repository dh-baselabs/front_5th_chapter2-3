import { User } from "../model/types.ts"

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("/api/users?limit=0&select=username,image");
  const data = await res.json();
  return data.users;
};