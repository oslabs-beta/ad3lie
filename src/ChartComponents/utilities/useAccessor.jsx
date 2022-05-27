export const useAccessor = (accessor, d, i) => (
  typeof accessor == "function" ? accessor(d, i) : accessor
)