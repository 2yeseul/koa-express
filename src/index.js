require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI).then(
    (response) => {
        console.log("몽고디비와의 연결 성공!");
    }
).catch(err => {
    console.error(err);
});

const port = process.env.PORT || 4000;

router.use('/api', api.routes());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('SERVER IS LISTENING TO PORT 4000!')
});