// Пример нативного веб компонента собранного вручную
class SearchBar extends HTMLElement {
  constructor() {
    super();

    // Добавляем shadow DOM tree
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
    this.attachShadow({ mode: "open" });
    // <my-search-bar>
    // #shadow-root(open)
    // </my-search-bar>
  }

  connectedCallback() {
    // Создаем инпут варинат 1
    const textInput = document.createElement("input");
    // <input />
    textInput.setAttribute("type", "text");
    // <input type="text" />
    textInput.setAttribute("name", "text");
    // <input type="text" name="text" />
    textInput.setAttribute("class", "search");
    // <input type="text" name="text" class="search" />
    textInput.setAttribute("placeholder", "Поиск");
    // <input type="text" name="text" class="search" placeholder="Посик"/>

    // Создаем инпут варинат 2
    const submitBtn = document.createElement("input");
    // <input />
    submitBtn.type = "submit";
    // <input type="submit"/>
    submitBtn.name = "submit";
    // <input type="submit" name="submit"/>
    submitBtn.className = "submit";
    // <input type="submit" name="submit" class="submit"/>
    submitBtn.value = "Найти";
    // <input type="submit" name="submit" class="submit" value="Найти"/>

    // Создаем форму и прикрепляем инпуты внутрь
    const form = document.createElement("form");
    // <form>
    // </form>
    form.appendChild(textInput);
    // <form>
    //   <input type="text" name="text" class="search" placeholder="Посик"/>
    // </form>
    form.appendChild(submitBtn);
    // <form>
    //   <input type="text" name="text" class="search" placeholder="Посик"/>
    //   <input type="submit" name="submit" class="submit" value="Найти"/>
    // </form>

    // Приклепляем форму с инпутами на ShadowRoot
    this.shadowRoot.append(form);
    // <my-search-bar>
    // #shadow-root(open)
    //   <form>
    //     <input type="text" name="text" class="search" placeholder="Посик"/>
    //     <input type="submit" name="submit" class="submit" value="Найти"/>
    //   </form>
    // </my-search-bar>
  }
}
// Регистрируемый кастомный тэг <my-search-bar></my-search-bar>
// https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry
customElements.define("my-search-bar", SearchBar);
