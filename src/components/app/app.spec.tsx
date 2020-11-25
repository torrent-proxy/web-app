import {configure, shallow, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import App from "./app.component";

configure({
  adapter: new Adapter(),
});

describe(`App`, () => {
  describe(`Search and result rendering`, () => {
    it(`Поисковая строка пустая, результат рендеринга пустой`, () => {
      const app = mount (
        <App />
      );

      const searchResults = app.find(`.table`);
      expect(searchResults).toEqual(undefined);

      const searchBox = app.find(`.search-box__input`);
      console.log(searchBox.props());
      expect(searchBox.props().value).toEqual(``);
    });


    it(`При вводе текста и нажатии на enter рендерится результат`, () => {});
    it(`При вводе текста и нажатии на кнопку поиска рендерится результат`, () => {});
    it(`При отсутствии результата рендерится сообщение об ошибке`, () => {});
    it(`Пока происходит поиск, рендерится throbber`, () => {});
    it(``, () => {});
    it(``, () => {});
  });
});

// Посмотреть реакт-тест-лайбрари, может там будет удобнее работать с инпутами.
// Посмотреть доку энзима на предмет проверки того, что приходит пустая нода (не существующая)
