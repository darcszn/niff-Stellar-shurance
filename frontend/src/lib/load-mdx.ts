import { compileMDX } from 'next-mdx-remote/rsc';

/**
 * Load and compile an MDX string for use in React Server Components.
 * Returns the compiled content and any frontmatter.
 */
export async function loadMdx<TFrontmatter = Record<string, unknown>>(
  source: string,
) {
  const { content, frontmatter } = await compileMDX<TFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  });
  return { content, frontmatter };
}
