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
      "url(/custom_assets/fonts/Montserrat-VariableFont_wght.ttf)"
    ),
    new FontFace(
      "DotMatrix",
      "url(/custom_assets/fonts/DotMatrix-BoldItalic.otf)"
    ),
    new FontFace(
      "cabin",
      "url(/custom_assets/fonts/Cabin-VariableFont_wdth,wght.ttf)"
    ),
    new FontFace("nexa", "url(/custom_assets/fonts/Nexa-Heavy.ttf)"),
    new FontFace("Inter var", "url(/themes/lara-dark-indigo/fonts/InterVariable.woff2)")
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
    "/themes/lara-dark-indigo/fonts/InterVariable.woff2",
    // "/node_modules/primeicons/fonts/primeicons.woff2"
  ];

  await Promise.all(assets.map(fetchAndCache));
}



async function boot() {
  const images = [
    // "/custom_assets/images/home-dark1.png",
    // "/custom_assets/images/amjad-portfolio-image-Blue-glow1.png",
    // "/custom_assets/images/home-light.jpg",
    // "/custom_assets/images/home-developer9.png",
    "/custom_assets/images/home-dark1-min.png",
    "/custom_assets/images/amjad-portfolio-image-Blue-glow1-min.png",
    "/custom_assets/images/home-light-min.jpg",
    "/custom_assets/images/home-developer9-min.png",
  ];

  const isDark = localStorage.getItem("isDarkMode") === "true";

  const themeHref = isDark
    ? "/themes/lara-dark-indigo/theme.css"
    : "/themes/lara-light-indigo/theme.css";

  try {
    await Promise.all([
      preloadImages(images),
      // preloadThemesWithFetch(),
      preloadFonts(),
      document.fonts.ready
    ]);

    await loadStylesheet(
        "base-theme-light",
        `${isDark ? "/themes/lara-dark-indigo/theme.css" : "/themes/lara-light-indigo/theme.css"}`
    );
    await loadStylesheet("theme-link", themeHref);
  } catch (err) {
    console.error("preload error:", err);
  }
}

// const rootEl = document.getElementById("root");
// const loaderEl = document.getElementById("boot-loader");

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
