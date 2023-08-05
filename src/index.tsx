import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { NavBar } from "./components/navbar";
import { ReviewList } from "./components/review_list";
import { db } from "./db/db";


const app = new Elysia()
  .use(html())
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <NavBar />
        <div
          class="flex w-full h-screen justify-center items-center"
          hx-get="/reviews"
          hx-trigger="load"
          hx-swap="innerHTML"
        />
      </BaseHtml >
    ))
  .get("/reviews", () => <ReviewList reviews={db} />)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

const BaseHtml = ({ children }: elements.Children) => `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE BETH STACK</title>
    <script src="https://unpkg.com/htmx.org@1.9.4"></script>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <main>
    <body>
      ${children}
    </body>
  </main>
`;






