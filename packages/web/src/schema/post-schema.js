import { normalize, schema } from "normalizr";

export const post = new schema.Entity("posts", {}, { idAttribute: "_id" });

export function normalizePosts(posts) {
  return normalize(posts, [post]);
}
