const Router = require('koa-router');
const api = new Router();

const books = require('./books');

api.use('/books', books.routes());

api.get('/', (ctx, next) => {
    ctx.body = "🏠 HOME"
});

api.get('/about', (ctx, next) => {
    ctx.body = "소개"
});

api.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params;
    ctx.body = name + "의 소개";
});

api.get('/post', (ctx, next) => {
    const { id } = ctx.request.query; // 쿼리스트링
    if (id) {
        ctx.body = "포스트 #" + id;
    } else {
        ctx.body = "포스트 id가 없습니다.";
    }
});

module.exports = api;