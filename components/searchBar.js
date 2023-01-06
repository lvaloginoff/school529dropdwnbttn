// Пример нативного веб компонента собранного вручную
class SearchBar extends HTMLElement {
  constructor() {
    super();

    // Добавляем shadow DOM tree
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Создаем инпут варинат 1
    const textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("name", "text");
    textInput.setAttribute("class", "search");
    textInput.setAttribute("placeholder", "Поиск");

    // Создаем инпут варинат 2
    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.name = "submit";
    submitBtn.className = "submit";
    submitBtn.value = "Найти";

    // Создаем форму и прикрепляем инпуты внутрь
    const form = document.createElement("form");
    form.appendChild(textInput);
    form.appendChild(submitBtn);

    // Приклепляем форму с инпутами на ShadowRoot
    this.shadowRoot.append(form);
  }
}
// Регистрируемый кастомный тэг <my-search-bar></my-search-bar>
// https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry
customElements.define("my-search-bar", SearchBar);
