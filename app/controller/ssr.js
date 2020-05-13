const { Controller } = require('egg');
const { parse } = require('url');
class SSRController extends Controller {
    async index() {
        // this.ctx.body = '1231';
        const { ctx, app } = this;
        const parsedUrl = parse(ctx.req.url, true);
        const { query = {}, pathname } = parsedUrl;
        app.handle(ctx.req, ctx.res);
        ctx.body = await app.next.render(ctx.req, ctx.res, '/', query);
        // console.log('body',ctx.body)
        // console.log('render', app.next.render);
    }
}
module.exports = SSRController;