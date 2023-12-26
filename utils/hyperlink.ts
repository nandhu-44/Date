import chalk from "chalk";

/**
 * Creates a hyperlink with the specified text, URL, and color.
 * 
 * @param text - The text to be displayed as the hyperlink.
 * @param url - The URL that the hyperlink points to.
 * @param hexColor - The hexadecimal color code to be applied to the hyperlink.
 * @returns The formatted hyperlink string.
 */
function hyperlink(text: string, url: string, hexColor: string): string {
  const hypertext = `\x1b]8;;${url}\x1b\\${text}\x1b]8;;\x1b\\`;
  return chalk.hex(hexColor)(hypertext);
}

export { hyperlink };
