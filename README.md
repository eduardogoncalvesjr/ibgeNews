# IBGE News

IBGE News is a simple website made to show the most recent news of IBGE (https://agenciadenoticias.ibge.gov.br/).

It has simple functionalities, such as:

1 - Latest and most recent news display on the home page.
2 - Text search input - Which allows the user to query for a text present in the API's database.
3 - News/releases filter - Which allows the user to select which of the two they want the APP to display.
4 - An ability to add/remove any news to the favorites.
5 - The ability to access the full version of the news (in the original website, as the API doesn't allow the retrieval of specific news by ID, for example).

## Project

### Online Version

You can access the online project running at this link: [IBGE News](https://ibge-news-gules.vercel.app/).

### Downloading and running the project locally.

You may download the project in your machine and run it locally.
To get a local copy of the project, clone it using git.

    $ git clone git@github.com:eduardogoncalvesjr/ibgeNews.git
    $ cd ibgeNews

Next, install all the dependencies.

    $ npm install

After it finishes installing the dependencies, you may run the project.

    $ npm run dev

It will then be available at http://localhost:5173/ .

### Testing

If you want to have access to the Unit Tests, you need to install some specific dependencies. After installing the project with "npm install", you may also run:

    $ npm install -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest

After the dependencies have been installed, run the following command to check the tests:

    $ npm run test

You can also check the test coverage by running:

    $ npm run coverage

The test coverage is currently at 90%.
