import "./styles.css";
import Collapse from "./Collapse";

document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector('[data-toggle="collapse"]');
  new Collapse(trigger.parentElement);
});
