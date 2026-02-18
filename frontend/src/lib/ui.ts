/** Shared UI class strings and utilities to avoid duplication across components. */

export const inputClass =
  "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

export const buttonClass =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

export const buttonVariants = {
  default: `${buttonClass} bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2`,
  destructive: `${buttonClass} bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2`,
  outline: `${buttonClass} border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2`,
  ghost: `${buttonClass} hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2`,
} as const;

/**
 * Copy text to clipboard and return a promise.
 * Use with a reactive "copied" flag:
 *   await copyToClipboard(text);
 *   copied = true;
 *   setTimeout(() => copied = false, 2000);
 */
export async function copyToClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}
