export function Host() {
  return process.env.NODE_ENV == "development" ? "localhost" : "backend";
}
