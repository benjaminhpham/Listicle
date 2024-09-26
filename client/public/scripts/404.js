import { createElement } from "../../utils";

const error404 = (app) => {
  const errorContainerEl = createElement("div", "error__container");
  const h3El = createElement("h3", "error__title", "Error 404");
  const returnBtnEl = createElement("button", "return-button", "Return Home");

  returnBtnEl.addEventListener("click", () => {
    window.location.pathname = "/";
  });

  errorContainerEl.appendChild(h3El);
  errorContainerEl.appendChild(returnBtnEl);

  app.appendChild(errorContainerEl);
};

export default error404;
