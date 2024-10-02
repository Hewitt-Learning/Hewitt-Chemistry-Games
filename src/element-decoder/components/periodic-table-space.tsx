/** Adds narrow unicode spaces to element symbols and names to prevent players from using ctrl + F on the elements. */
export function addSpace(word: string): string {
  return word
    .split("")
    .map((letter) => {
      return letter + "\u200a";
    })
    .join("");
}

export function addSpaces(): string{
  return ""
  .split("")
    .map((letter) => {
      return letter + "\u200a";
    })
    .join("");
}
