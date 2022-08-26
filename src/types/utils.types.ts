export function createEnum<T extends { [P in keyof T]: P }>(o: T) {
  return o;
}
