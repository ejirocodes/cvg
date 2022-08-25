export function createButtonEnum<T extends { [P in keyof T]: P }>(o: T) {
  return o;
}

/**
 * Enum for different type of buttons
 */
export const ButtonType = createButtonEnum({
  Fill: "Fill",
  Outline: "Outline",
});
