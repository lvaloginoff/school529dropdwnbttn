// Пример нативного веб компонента с использованием template

// Создаем template элемент (вне DOM)
const template = document.createElement("template");

// Задаем внутренний html для template
// /*html*/ коммент для подсветки синтаксиса (https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
template.innerHTML = /*html*/ `
<style>
    .dropbtn {
        background-color: #78526d;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
    }
    
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #2e1114;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    
    .dropdown-content a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    
    .dropdown-content a:hover {
        background-color: #78526d;
    }
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    .dropdown:hover .dropbtn {
        background-color: #501b1d;
    }
    </style>
    <nav>
    <div class="dropdown">
        <button class="dropbtn">Сведения об образовательной организации</button>
        <div class="dropdown-content">
            <!-- данные ссыдки не будут работать так как они абсолютные на твоей системе -->
            <!-- тебе надо использовать релвтивные например - href="/main_info.hmtl" -->
            <a href="/Users/a1234/Desktop/school 529/osnsvedeniya.html">Основные сведения</a>
            <a href="/Users/a1234/Desktop/school 529/obrazovaniye.html">Образование</a>
            <a href="#">Образовательные стандарты</a>
            <a href="#">Наши педагоги и руководство</a>
            <a href="#">Платные образовательные услуги</a>
            <a href="#">Международное сотрудничество</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Обучение</button>
        <div class="dropdown-content">
            <a href="#">Библиотека</a>
            <a href="#">Смешанный формат обучения</a>
            <a href="#">Олимпиады, конкурсы</a>
            <a href="#">Рабочие программы</a>
            <a href="#">Внеурочная деятельность</a>
            <a href="#">Прием в 1-й класс</a>
            <a href="#">Поступление в другие классы</a>
            <a href="#">ГИА, ЕГЭ, ОГЭ, итоговое сочинение</a>
            <a href="#">Профориентация</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Воспитание</button>
        <div class="dropdown-content">
            <a href="#">Большая Перемена</a>
            <a href="#">Музей боевой славы 1-ой ГИАВД</a>
            <a href="#">Мероприятия</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Здоровье</button>
        <div class="dropdown-content">
            <a href="#">Информация</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Электронный дневник</button>
        <div class="dropdown-content">
            <a href="https://petersburgedu.ru" target="_blank">Портал петербургского образования (электронный
                дневник)</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Разное</button>
        <div class="dropdown-content">
            <a href="/Users/a1234/Desktop/school 529/newsh.html">Главная</a>
            <a href="#">Фотогалерея</a>
            <!-- тут надо поставить target="_blank" чтобы новая таба открылась при клике -->
            <a href="https://vk.com/school529spb">Группа VK</a>
            <a href="#">Контактная информация</a>
        </div>
    </div>
</nav>
`;

class TopMenu extends HTMLElement {
  constructor() {
    super();

    // Добавляем shadow DOM tree
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
    this.attachShadow({ mode: "open" });
  }

  // Это просто для удобвства чтобы имя можно было найти из класса
  // статик позволяет вызывать метода и свойства класса без инстанции
  // get делает фунцию геттером, дает нам возможность TopMenu.is
  // без get было бы TopMenu.is()
  static get is() {
    return "my-top-menu";
  }

  connectedCallback() {
    // Прикрепляем контент template к Shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
// Регистрируем
// https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry
customElements.define(TopMenu.is, TopMenu);
