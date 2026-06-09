const next = "%2Fsimulate";
function safeNext(next) {
  if (!next) return "/";
  if (!next.startsWith("/") || next.startsWith("//")) return "/";
  return next;
}
console.log(safeNext(next));
