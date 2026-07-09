export function icon(name, extraStyle = "") {
  const url = `assets/icons/${name}.svg`;
  return `<span class="icon" style="-webkit-mask-image:url(${url});mask-image:url(${url});${extraStyle}"></span>`;
}

export function on(root, selector, event, handler) {
  root.addEventListener(event, (e) => {
    const el = e.target.closest(selector);
    if (el && root.contains(el)) handler(el, e);
  });
}
