let lastId = 0
export const useUniqueId = (prefix="") => {
  lastId++
  return [prefix, lastId].join("-")
}