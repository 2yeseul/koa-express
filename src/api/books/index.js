const Router = require('koa-router');

const books = new Router();

const booksController = require('./books.controller');

books.get('/', booksController.list);

books.post('/', booksController.create);

books.patch('/', booksController.update);

books.delete('/', booksController.delete);

module.exports = books;