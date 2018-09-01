const Koa = require('koa');
const app = new Koa();
const {connect} = require('./database/db');

(async () => {
  await connect()
})();

const IP = '127.0.0.1';
const port = 3000;

app.use(async (ctx) => {
  ctx.body = '<h1>Hello Koa</h1>';
});

app.listen(port, () => {
  console.log(`Koa on http://${IP}:${port}`);
});





