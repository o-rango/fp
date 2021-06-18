import html from "./contacts.html";
import "./contacts.css";

export default class ViewContacts extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = html;
  }
}
