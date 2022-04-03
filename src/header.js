import { title } from "./title.js";

export const header = () => {
  const headerNode = document.createElement("header");
  headerNode.appendChild(title());
  return headerNode;
};
