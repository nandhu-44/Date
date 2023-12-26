import { Application, Router, send } from "oak/mod.ts";
import { hyperlink } from "./utils/hyperlink.ts";

const app = new Application();
const router = new Router();

const port = 3000;

router.get("/", async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/frontend`,
    index: "index.html",
  });
});

router.get("/yes", async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/frontend/`,
    index: "index.html",
  });
});

router.get("/frontend/:path", async (ctx) => {
  const path = ctx.params.path;
  if(path.endsWith(".css") || path.endsWith(".js") || path.endsWith(".gif") || path.endsWith(".ico")) {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/`,
      index: `${path}`,
  });
}
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(
  hyperlink(`Listening on port ${port}`, `http://localhost:${port}`, "#2f97c1")
);
await app.listen({ port });
