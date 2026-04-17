import {
  __,
  appendChildren,
} from "https://800147.github.io/tools/src/el/el.js";

const __Page = (page, character) =>
  __(
    "div",
    { className: "Page" },
    __("div", { className: "Page-Rotate" }, [
      __("div", {
        className: "Page-Task",
        style: `--bgi: url(./img/page_${page}.png)`,
      }),
      __("div", {
        className: "Page-Character",
        style: `--bgi: url(./img/page_${page}_${character}.png)`,
      }),
    ]),
  );

const body = document.getElementsByTagName("body")[0];

const draw = (character = "princess") => {
  body.querySelectorAll("& > .Page").forEach((el) => {
    body.removeChild(el);
  });

  appendChildren(body, [__Page(0, character), __Page(1, character)]);
};

draw();

characterSelect.addEventListener("change", (e) => draw(e.target.value));
