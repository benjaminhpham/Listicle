export const createElement = (htmlTag, className, content = "") => {
  const element = document.createElement(htmlTag);
  if (htmlTag === "img") {
    element.src = content;
  } else {
    element.textContent = content;
  }
  element.className = className;
  return element;
};

export const clearDOM = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
};
