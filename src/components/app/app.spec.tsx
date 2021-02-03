import {configure, shallow, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import SearchBox from "../search-box/search-box.component";
import SearchResults from "../search-results/search-results.component";
import App from "./app.component";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe(`App`, () => {
  describe(`Search and result rendering`, () => {
    it(`Search box should be empty, search results should not be rendered`, () => {
      render(<SearchBox onSearchBoxChange={() => {}} />);

      const searchBox = screen.getByPlaceholderText('Enter torrent hash');
      expect(searchBox).toHaveTextContent('');
    });

    it(`При вводе текста и нажатии на enter рендерится результат`, () => {
  });

    it(`При вводе текста и нажатии на кнопку поиска рендерится результат`, () => {});
    it(`При отсутствии результата рендерится сообщение об ошибке`, () => {});
    it(`Пока происходит поиск, рендерится throbber`, () => {});
    it(``, () => {});
    it(``, () => {});
  });
});
