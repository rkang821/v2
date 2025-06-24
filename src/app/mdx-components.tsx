// src/app/mdx-components.tsx

import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ className, ...props }) => (
      <p className={`mt-4 leading-normal ${className ?? ""}`} {...props} />
    ),
    ...components,
  };
}
