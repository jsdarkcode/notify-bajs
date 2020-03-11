import "./notify.css";

("use strict");
const DURATION_DEFAULT = 3000;

export default function NotifyBaJS(payload = {}) {
  this.self = this;
  this.options = payload;
  this.el = null;

  this.renderPlacement();
  this.render();
}

// prettier-ignore
NotifyBaJS.prototype.renderPlacement = function() {
  const placement = this.options.placement ? this.options.placement : "top-right";
  const elWrap = document.querySelector(`[data-placement="${placement}"]`);
  if (elWrap) return;
  const template = `<div class="ba-notify-placement" data-placement="${placement}"></div>`;
  document.body.insertAdjacentHTML("afterend", template);
};

// prettier-ignore
NotifyBaJS.prototype.render = function() {
  const placement = this.options.placement ? this.options.placement : "top-right"; 
  const title = this.options.title ? `<div class="ba-notify__title">${this.options.title}</div>` : ""; 
  const content = this.options.content ? `<div class="ba-notify__content">${this.options.content}</div>` : ""; 
  const type = this.options.type ? `ba-notify--${this.options.type}` : ""; 

  const template = `
    <div class="ba-notify ${type}">
        <div class="ba-notify__wrap">
            ${title}
            ${content}
        </div>
    </div>
    `;

  const parser = new DOMParser();
  const doc = parser.parseFromString(template, "text/html");
  this.el = doc.querySelector(".ba-notify");
  const elPlacement = document.querySelector(`[data-placement="${placement}"]`)
  elPlacement.insertAdjacentElement("beforeend", this.el);

  setTimeout(() => {
    this.el.classList.add("ba-notify--open");
    this.runHide();
  }, 100);
};

// prettier-ignore
NotifyBaJS.prototype.hide = function() {
  if (!this.el) return;
  this.el.classList.remove("ba-notify--open");
};

// prettier-ignore
NotifyBaJS.prototype.runHide = function() {
  const self = this;
  const duration = this.options.duration ? this.options.duration : DURATION_DEFAULT;
  let count = 0;
  let speed = 100;
  const timer = setInterval(() => {
    if (count > duration) {
      if (!this.el) return;
      this.el.classList.remove("ba-notify--open");
      this.el.addEventListener('transitionend', () => {
        clearInterval(timer);
        self.destroy();
      });
    }

    count += speed;
}, speed);
};

NotifyBaJS.prototype.destroy = function() {
  if (!this.el) return;
  this.el.remove();
};
