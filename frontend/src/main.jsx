/* eslint-disable */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";

function preloadImages(srcList) {
  return Promise.all(
    srcList.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        })
    )
  );
}

async function preloadFonts() {
  const fonts = [
    new FontFace(
      "Montserrat",
      "url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf)"
    ),
    new FontFace(
      "DotMatrix",
      "url(/src/assets/fonts/DotMatrix-BoldItalic.otf)"
    ),
    new FontFace(
      "cabin",
      "url(/src/assets/fonts/Cabin-VariableFont_wdth,wght.ttf)"
    ),
    new FontFace("nexa", "url(/src/assets/fonts/Nexa-Heavy.ttf)"),
    new FontFace("Fira Sans", "url(/src/assets/fonts/FiraSans-Bold.ttf)"),
  ];
  await Promise.all(
    fonts.map((font) =>
      font.load().then((loaded) => document.fonts.add(loaded))
    )
  );
}

function loadStylesheet(id, href) {
  return new Promise((resolve, reject) => {
    const link = document.getElementById(id);

    if (!link) {
      reject(new Error(`Link element #${id} not found`));
      return;
    }

    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load ${href}`));
    link.href = href;
  });
}

async function fetchAndCache(url) {
  const res = await fetch(url, { cache: "force-cache" });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }
}

async function preloadThemesWithFetch() {
  const assets = [
    
    "/themes/lara-dark-indigo/theme.css",
    "/themes/lara-light-indigo/theme.css",
    "/themes/lara-dark-indigo/fonts/InterVariable.woff2",
    "/themes/lara-light-indigo/fonts/InterVariable.woff2",
  ];

  await Promise.all(assets.map(fetchAndCache));
}



async function boot() {
  const images = [
    "/src/assets/images/home-dark1.png",
    "/src/assets/images/amjad-portfolio-image-Blue-glow1.png",
    "/src/assets/images/test.jpeg",
    "/src/assets/images/UrlShortener-image18.png",
    "/src/assets/images/MyCalculater-image3.png",
    "/src/assets/images/drumMachine-image6.png",
    "/src/assets/images/markdown-image3.png",
    "/src/assets/images/home-light.jpg",
    "/src/assets/images/home-developer9.png",
  ];

  const isDark = localStorage.getItem("isDarkMode") === "true";

  const themeHref = isDark
    ? "/themes/lara-dark-indigo/theme.css"
    : "/themes/lara-light-indigo/theme.css";

  try {
    await Promise.all([
      preloadImages(images),
      preloadFonts(),
      document.fonts.ready,
      preloadThemesWithFetch(),

      loadStylesheet(
        "base-theme-light",
        `${isDark ? "/themes/lara-dark-indigo/theme.css" : "/themes/lara-light-indigo/theme.css"}`
      ),
      loadStylesheet("theme-link", themeHref),
    ]);
  } catch (err) {
    console.error("Boot error:", err);
  }
}

const rootEl = document.getElementById("root");
const loaderEl = document.getElementById("boot-loader");

boot().then(async () => {
  const root = document.getElementById("root");
  root.hidden = false;

  const reactRoot = createRoot(root);

  reactRoot.render(
    <StrictMode>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </StrictMode>
  );
});
