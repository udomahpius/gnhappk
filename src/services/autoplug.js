export const DEFAULT_AUTO_PLUG_COMMENT = "default-auto-plug-comment";

export function storeAutoPlugComment(comment) {
  localStorage.setItem(DEFAULT_AUTO_PLUG_COMMENT, comment);
}

export function getAutoPlugComment() {
  return localStorage.getItem(DEFAULT_AUTO_PLUG_COMMENT);
}
