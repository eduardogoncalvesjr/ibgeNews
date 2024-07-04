/* eslint-disable func-names, object-shorthand */
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';
import { renderWithRouter } from './utils/renderWithRouter';
import DataProvider from './context/DataProvider';

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

describe('The APP works properly', () => {
  const news = {
    items: [
      {
        titulo: "ENCE abrirá pré-inscrições para o curso Inteligência Artificial em Políticas Públicas",
        introducao: "A Escola Nacional de Ciências Estatísticas (ENCE) abrirá pré-inscrições em 5 de julho para o curso Inteligência Artificial em Políticas Públicas, turma de 2024. O curso tem o objetivo de apresentar e discutir o uso de Inteligência Artificial (IA), em...",
        tipo: 'Noticia',
        imagens: '{"image_intro":"images\/agenciadenoticias\/ibge\/2024_07\/trilha-home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\/agenciadenoticias\/ibge\/2024_07\/trilha-home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        data_publicacao: '04/07/2024 10:08:26',
      },
    ],
  };

  const MOCK_RESPONSE = {
    ok: true,
    status: 200,
    json: async () => news,
  } as Response;

  beforeEach(async () => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce(MOCK_RESPONSE);

    renderWithRouter((
      <DataProvider>
        <App />
      </DataProvider>), { route: '/home' });
  });

  it('Tests if the news are rendered.', async () => {
    await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());
    screen.debug();
  });
});
