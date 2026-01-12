/* eslint-disable */
import { useEffect, useState } from "react";
import "./index.css";


// @font-face {
//   font-family: "DotMatrix";
//   src: url("../../assets/fonts/DotMatrix-BoldItalic.otf") format("opentype");
//   font-weight: normal;
//   font-style: normal;
// }

// @font-face {
//   font-family: "cabin";
//   src: url("../../assets/fonts/Cabin-VariableFont_wdth,wght.ttf")
//     format("opentype");
//   font-weight: normal;
//   font-style: normal;
// }

// @font-face {
//   font-family: "nexa";
//   src: url("../../assets/fonts/Nexa-Heavy.ttf") format("opentype");
//   font-weight: normal;
//   font-style: normal;
// }

// @font-face {
//   font-family: "Fira Sans";
//   src: url("../../assets/fonts/FiraSans-Bold.ttf") format("opentype");
//   font-weight: normal;
//   font-style: normal;
// }


function loadFonts() {
  return document.fonts.ready;
}

function preloadImages(srcList) {
  return Promise.all(
    srcList.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
}

function preloadFonts() {
  const fonts = [
    new FontFace(
      "Montserrat",
      "url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf)",
       {
    weight: "100 900",
    style: "normal",
      }
    ),
     new FontFace(
       "DotMatrix",
       "url(/src/assets/fonts/DotMatrix-BoldItalic.otf)",
       {
    weight: "100 900",
    style: "normal",
  } 
    ),
     new FontFace(
      "cabin",
      "url(/src/assets/fonts/Cabin-VariableFont_wdth,wght.ttf)",
       {
    weight: "100 900",
    style: "normal",
  }
    ),
     new FontFace(
      "nexa",
      "url(/src/assets/fonts/Nexa-Heavy.ttf)",
       {
    weight: "100 900",
    style: "normal",
  }
    ),
     new FontFace(
      "Fira Sans",
      "url(/src/assets/fonts/FiraSans-Bold.ttf)",
       {
    weight: "100 900",
    style: "normal",
      }
    )
  ];

  return Promise.all(
    fonts.map((font) =>
      font.load().then((loadedFont) => {
        document.fonts.add(loadedFont);
      })
    )
  );
}




function BootLoader({ children }) {
  const [ready, setReady] = useState(false);

  const images=['/src/assets/images/home-dark1.png', "/src/assets/images/amjad-portfolio-image-Blue-glow1.png","/src/assets/images/test.jpeg", "/src/assets/images/UrlShortener-image18.png", "/src/assets/images/MyCalculater-image3.png","/src/assets/images/drumMachine-image6.png", "/src/assets/images/markdown-image3.png","/src/assets/images/home-light.jpg"]
  
//   const fonts = ["/src/assets/fonts/FiraSans-Bold.ttf", "/src/assets/fonts/Montserrat-VariableFont_wght.ttf", "/src/assets/fonts/Nexa-Heavy.ttf","src/assets/fonts/DotMatrix-BoldItalic.otf"]


//   useEffect(() => {
    
//     const timer = setTimeout(() => {
//       setReady(true);
//     }, 10000); 

//     return () => clearTimeout(timer);
//   }, []);


 useEffect(() => {
    async function boot() {
    //   try {
    //     await Promise.all([preloadImages(images),
    //     loadFonts()])

    //     setReady(true);
    //   } catch (err) {
    //     console.error("Boot failed:", err);
    //     setReady(true); 
    //   }

    try { 
        await preloadImages(images)
        // await preloadFonts();
        setReady(true);
    }catch(err){
        setReady(true);


    }finally {
        
        document.getElementById("boot-loader")?.remove();
        // document.getElementById("root")?.removeAttribute("hidden");
      }
    }

    boot();
  }, []);

  if (!ready) {
    return ;
  }

  return children;
}

const styles = {
  loader: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
    color: "#fff",
  },
  spinner: {
    width: 40,
    height: 40,
    border: "4px solid #334155",
    borderTop: "4px solid #60a5fa",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default BootLoader;




// /themes/lara-dark-indigo/fonts/InterVariable.woff2
// /themes/lara-light-indigo/fonts/InterVariable.woff2
// /themes/lara-light-indigo/theme.css
// /themes/lara-dark-indigo/theme.css