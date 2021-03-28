export default function sortHealth(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
