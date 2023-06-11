export function truncateWords(str, count) {
  if (!str) return ''
  return str.split(" ").slice(0, count).join(" ")
}