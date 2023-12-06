// Google Font의 Noto Sans Korean 폰트 URL
const fontUrl =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap";

function applyFontStyle() {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `    
    h1, h2, h3, h4, h5, h6, p, strong, li, blockquote {
      font-family: 'Noto Sans Korean', sans-serif !important;
    }

    li{
        font-size: 1.1rem !important;
    }
    
    p, code{
        font-size: 0.9rem !important;
        line-height: 1.3rem !important;
    }

    a{
        color: #004cba !important;
    }

    h2{
        font-size: 1.2rem !important;
    }

    code{
        background-color: #BBD6FB !important;
        color: black !important;
    }

    blockquote{
        border-left: 3px solid #BBD6FB !important;
    }
  `;

  document.head.appendChild(styleElement);
}

function loadFontStylesheet() {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = fontUrl;

  document.head.appendChild(linkElement);
  linkElement.onload = applyFontStyle;
}
window.onload = loadFontStylesheet;
