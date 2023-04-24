export function isReactElement(el: any): el is React.ReactElement {
  return !!el && !!el.type
}
