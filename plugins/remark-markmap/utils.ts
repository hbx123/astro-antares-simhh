import { walkTree, type IPureNode } from 'markmap-common';

export const template = (template: string, props?: {}) =>
  props
   ? new Function(...Object.keys(props), `return \`${template}\`;`)(...Object.values(props))
   : template

export const foldRoot = (tree: any, maxDepth = 0) => {
  if (!maxDepth) return tree
  maxDepth = +maxDepth;
  walkTree(tree, (node, next) => {
    // Here depths are in sequence of [0, 2, 4, ..., 2n]
    if (node.d >= maxDepth * 2) {
      node.p = Object.assign(node.p, { f: true });
    }
    next();
  });
  return tree
}

export const stringifyRoot = (root: any) =>
  JSON.stringify(root)
   .replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/\'/g, "&#39;")
   .replace(/\"/g, "&quot;")