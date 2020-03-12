import NotifyBaJS from "./js/notify";

const els = document.querySelectorAll("button");
[...els].forEach(item =>
  item.addEventListener("click", () => {
    const type = item.getAttribute("data-type");
    new NotifyBaJS({
      title: "Notify",
      content: "Lorem ipsum dolor sit amet.",
      type: type
    });
  })
);
