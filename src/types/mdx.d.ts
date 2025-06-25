// src/mdx.d.ts
declare module "*.mdx" {
  import { ComponentType } from "react";

  // MDX components get props as an object of unknown values
  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;

  // frontMatter can be any shape, so use a more precise fallback
  export const frontMatter: Record<string, unknown>;
}
