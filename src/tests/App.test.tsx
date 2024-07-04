/* eslint-disable func-names, object-shorthand */
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import { renderWithRouter } from './util/renderWithRouter';
import DataProvider from '../context/DataProvider';
import { news, searchNews, additionalNews, favoriteNews } from './util/newsMock';

global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {},
  };
};
/* eslint-disable func-names, object-shorthand */

describe('The login screen is rendered correctly.', () => {
  it('Tests if the login screen is correctly rendered.', () => {
    renderWithRouter(<App />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('Tests if it is only possible to login having typed the email and a password with more than 6 characters.', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginBtn = screen.getByRole('button');

    expect(loginBtn).toBeDisabled();

    await userEvent.type(emailInput, 'test@hotmail.com');
    await userEvent.type(passwordInput, '1234567');

    expect(loginBtn).not.toBeDisabled();
  });
});

const LATEST_NEWS = 'latest-news-box';
const OTHER_NEWS = 'news-card';

const MOCK_RESPONSE = {
  ok: true,
  status: 200,
  json: async () => news,
} as Response;

const MOCK_SEARCH = {
  ok: true,
  status: 200,
  json: async () => searchNews,
} as Response;

const MOCK_ADDITIONAL = {
  ok: true,
  status: 200,
  json: async () => additionalNews,
} as Response;

describe('Home and favorite pages, search by text and filter.', () => {
  beforeEach(async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce(MOCK_RESPONSE);

    renderWithRouter((
      <DataProvider>
        <App />
      </DataProvider>), { route: '/home' });

    await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());
  });

  it('Tests if all 30 news are rendered.', async () => {
    const latestNews = screen.getByTestId(LATEST_NEWS);
    const newsCards = screen.getAllByTestId(OTHER_NEWS);
    expect(latestNews).toBeInTheDocument();
    expect(newsCards).toHaveLength(29);
  });

  it('Tests if additional news are rendered.', async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce(MOCK_ADDITIONAL);

    const moreNews = screen.getByTestId('additional-news');
    await userEvent.click(moreNews);

    const newsCards = screen.getAllByTestId(OTHER_NEWS);
    expect(newsCards).toHaveLength(31);
  });

  it('Tests the news "Release" filter.', async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce(MOCK_RESPONSE);

    const radioButtons = screen.getAllByRole('radio');
    await userEvent.click(radioButtons[2]);

    const newsCards = screen.getAllByTestId(OTHER_NEWS);
    expect(newsCards).toHaveLength(3);
  });

  it('Tests the text search.', async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce(MOCK_SEARCH);

    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-button');

    await userEvent.type(searchInput, 'felicidade');
    await userEvent.click(searchButton);

    const searchedNewsResults = screen.getAllByTestId('searched-news-result');
    expect(searchedNewsResults).toHaveLength(5);
  });

  it('Tests if the favorites page renders 3 favorite news.', async () => {
    window.localStorage.clear();
    window.localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));

    const favoriteLink = screen.getByTestId('favorites-link');
    await userEvent.click(favoriteLink);

    const favorites = screen.getAllByTestId(OTHER_NEWS);
    expect(favorites).toHaveLength(3);

    const favoriteButton = screen.getAllByTestId('favorite-button');
    await userEvent.click(favoriteButton[0]);

    const newAmountOfFavorites = screen.getAllByTestId(OTHER_NEWS);
    expect(newAmountOfFavorites).toHaveLength(2);
  });

  it('Tests the share button.', async () => {
    const shareButton = screen.getAllByTestId('share-button');
    await userEvent.click(shareButton[0]);

    const copiedMessage = screen.getAllByTestId('copied-message');
    expect(copiedMessage[0]).toBeInTheDocument();

    const textInClipboard = await navigator.clipboard.readText();
    const expectedText = 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/40601-ence-abrira-pre-inscricoes-para-o-curso-inteligencia-artificial-em-politicas-publicas.html';

    expect(textInClipboard).toBe(expectedText);
  });
});

describe('Panel page', () => {
  beforeEach(async () => {
    const name = {
      email: 'user@hotmail.com',
    };

    window.localStorage.clear();
    window.localStorage.setItem('user', JSON.stringify(name));

    renderWithRouter((
      <DataProvider>
        <App />
      </DataProvider>), { route: '/user-panel' });
  });

  it('Tests if the user panel page is rendered.', () => {
    const userName = screen.getByText('user@hotmail.com');
    expect(userName).toBeInTheDocument();
  });

  it('Tests the logout button', async () => {
    const logoutButton = screen.getByRole('button', { name: 'Sair' });
    await userEvent.click(logoutButton);

    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
  });
});
