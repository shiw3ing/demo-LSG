// Resolves an icon name to its asset path and returns a small helper
// for building CSS mask-image style strings.
export function iconPath(name) {
  return `assets/icons/${name}.svg`;
}

export function iconMaskStyle(name) {
  const url = iconPath(name);
  return `-webkit-mask-image:url(${url});mask-image:url(${url})`;
}
