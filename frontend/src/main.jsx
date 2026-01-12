/* eslint-disable */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/themes/lara-dark-indigo/theme.css';

import BootLoader from './BootLoader.jsx';

import 'primeicons/primeicons.css';



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
      "url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf)",
    //    {
    // weight: "100 900",
    // style: "normal",
    //   }
    ),
     new FontFace(
       "DotMatrix",
       "url(/src/assets/fonts/DotMatrix-BoldItalic.otf)",
  //      {
  //   weight: "100 900",
  //   style: "normal",
  // } 
    ),
     new FontFace(
      "cabin",
      "url(/src/assets/fonts/Cabin-VariableFont_wdth,wght.ttf)",
  //      {
  //   weight: "100 900",
  //   style: "normal",
  // }
    ),
     new FontFace(
      "nexa",
      "url(/src/assets/fonts/Nexa-Heavy.ttf)",
  //      {
  //   weight: "100 900",
  //   style: "normal",
  // }
    ),
     new FontFace(
      "Fira Sans",
      "url(/src/assets/fonts/FiraSans-Bold.ttf)",
    //    {
    // weight: "100 900",
    // style: "normal",
    //   }
    ),


    //  new FontFace(
    //   "Inter var",
    //   "url(/themes/lara-light-indigo/fonts/InterVariable.woff2)",
   
    // ),
    // new FontFace(
    //   "Inter var",
    //   "url(/themes/lara-dark-indigo/fonts/InterVariable.woff2)",
   
    // )

    
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
    // Theme CSS
    "/themes/lara-dark-indigo/theme.css",
    "/themes/lara-light-indigo/theme.css",

    // Theme fonts
    "/themes/lara-dark-indigo/fonts/InterVariable.woff2",
    "/themes/lara-light-indigo/fonts/InterVariable.woff2",
  ];

  await Promise.all(assets.map(fetchAndCache));
}




/* -----------------------------
   BOOT FUNCTION
--------------------------------*/

async function boot() {
  const images = [
    '/src/assets/images/home-dark1.png', "/src/assets/images/amjad-portfolio-image-Blue-glow1.png","/src/assets/images/test.jpeg", "/src/assets/images/UrlShortener-image18.png", "/src/assets/images/MyCalculater-image3.png","/src/assets/images/drumMachine-image6.png", "/src/assets/images/markdown-image3.png","/src/assets/images/home-light.jpg","/src/assets/images/home-developer9.png"
   
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
      // loadStylesheet("base-theme", "/themes/lara-dark-indigo/theme.css" ),
      loadStylesheet("base-theme-light", "/themes/lara-light-indigo/theme.css" ),
      loadStylesheet("theme-link", themeHref),
    ]);
  } catch (err) {
    console.error("Boot error:", err);
  }
}

/* -----------------------------
   START APPLICATION
--------------------------------*/

const rootEl = document.getElementById("root");
const loaderEl = document.getElementById("boot-loader");

// boot().then(() => {
//   // Remove loader
//   loaderEl?.remove();

//   // Show React root
//   rootEl.hidden = false;

//   // Mount React
//   createRoot(rootEl).render(
//     <StrictMode>
//       <PrimeReactProvider>
//         <App />
//       </PrimeReactProvider>
//     </StrictMode>
//   );
// });



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



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//      <PrimeReactProvider>
//       <BootLoader>
//     <App />
//     </BootLoader> 
//     </PrimeReactProvider>
     
//   </StrictMode>,
// )
