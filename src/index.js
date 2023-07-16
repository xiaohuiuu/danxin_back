const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaRouter = require('@koa/router')
const cors = require('@koa/cors')
const app = new Koa()
const router = new koaRouter()
app.use(bodyParser())
app.use(router.routes())
app.use(cors())



router.get('/',async (ctx)=>{
    ctx.body = {
        user:'james',
        password:'197413'
    }
})












app.listen(3000,()=>{
    console.log('serve running at http://localhost:3000')
})