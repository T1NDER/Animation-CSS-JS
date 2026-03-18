export default class Collapse {
  constructor(element) {
    this.element = element;
    this.trigger = this.element.querySelector('[data-toggle="collapse"]');
    this.target = document.querySelector(this.trigger.dataset.target);

    this.isOpen = false;
    this.isAnimating = false;

    this.init();
  }

  init() {
    this.target.style.height = "0";
    this.target.style.overflow = "hidden";
    this.target.style.transition = "height 0.35s ease";

    this.trigger.addEventListener("click", () => this.toggle());
  }

  toggle() {
    if (this.isAnimating) return;

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isAnimating = true;
    this.trigger.classList.add("collapsed");

    const height = this.target.scrollHeight;

    this.target.classList.remove("collapse");
    this.target.classList.add("collapsing");

    this.target.offsetHeight;

    this.target.style.height = height + "px";

    setTimeout(() => {
      this.target.classList.remove("collapsing");
      this.target.classList.add("collapse");
      this.target.classList.add("show");
      this.target.style.height = "auto";
      this.isOpen = true;
      this.isAnimating = false;
      this.trigger.classList.remove("collapsed");
    }, 350);
  }

  close() {
    this.isAnimating = true;
    this.trigger.classList.remove("collapsed");

    const height = this.target.scrollHeight;
    this.target.style.height = height + "px";

    this.target.offsetHeight;

    this.target.classList.remove("collapse");
    this.target.classList.remove("show");
    this.target.classList.add("collapsing");

    this.target.style.height = "0";

    setTimeout(() => {
      this.target.classList.remove("collapsing");
      this.target.classList.add("collapse");
      this.isOpen = false;
      this.isAnimating = false;
    }, 350);
  }
}
