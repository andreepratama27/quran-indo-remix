import stylesheet from "../tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import Navbar from "./components/Navbar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-full bg-violet-100">
        <Navbar />

        <div className="relative h-screen max-w-xl mx-auto">
          <Outlet />
          <ScrollRestoration />
          <Scripts />

          <div className="pb-10"></div>
        </div>
        <LiveReload />
      </body>
    </html>
  );
}
