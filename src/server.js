const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost',
    // Menerapkan Cross Origin Resource Sharing
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// npm install nodemon --save-dev

// setup eslint
//npm init @eslint/config@latest
// How would you like to use ESLint? -> To check syntax and find problems.
// What type of modules does your project use? -> CommonJS (require/exports).
// Which framework does your framework use? -> None of these.
// Does your project use TypeScript? -> No.
// Where does your code run? -> Node (pilih menggunakan spasi).
// Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.
// npm install --save-dev eslint-config-dicodingacademy
// npm i -D eslint eslint-config-prettier eslint-plugin-prettier prettier

// untuk membuat id
// npm install nanoid@3
