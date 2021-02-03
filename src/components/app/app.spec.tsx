import {configure, shallow, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import SearchBox from "../search-box/search-box.component";
import SearchResults from "../search-results/search-results.component";
import App from "./app.component";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe(`App`, () => {
  describe(`Search and result rendering`, () => {
    it(`Search box should be empty`, () => {
      render(<SearchBox onSearchBoxChange={() => {}} />);
      const searchBox = screen.getByPlaceholderText('Enter torrent hash');
      expect(searchBox).toHaveTextContent('');
    });

    it(`Search button should be active`, () => {
      render(<SearchBox onSearchBoxChange={() => {}} />);
      const searchButton = screen.getByRole('button');

      expect(searchButton).not.toHaveAttribute('disabled');
    });

    it(`Search button should be active if search query is valid`, () => {
      render(<SearchBox onSearchBoxChange={() => {}} />);
      const searchBox = screen.getByPlaceholderText('Enter torrent hash');
      const searchButton = screen.getByRole('button');

      userEvent.type(searchBox, '69A9C60FC327DBF5659D5B74E221F9EDC489E033');
      expect(searchButton).not.toHaveAttribute('disabled');
  });

    it(`Search button should be disabled if search query is not valid`, () => {
      render(<SearchBox onSearchBoxChange={() => {}} />);
      const searchBox = screen.getByPlaceholderText('Enter torrent hash');
      const searchButton = screen.getByRole('button');

      userEvent.type(searchBox, 'Hello');
      expect(searchButton).toHaveAttribute('disabled');
    });

    it(`При вводе текста и нажатии на кнопку поиска рендерится результат`, () => {});
    it(`При отсутствии результата рендерится сообщение об ошибке`, () => {});
    it(`Пока происходит поиск, рендерится throbber`, () => {});
    it(``, () => {});
    it(``, () => {});
  });
});
