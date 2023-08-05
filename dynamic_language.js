
function changeImageSource(newSrc) {
  const imageElement = document.getElementById('prizeImage');
  if (imageElement) {
    imageElement.setAttribute('src', newSrc);
  } else {
    console.error('Image element not found!');
  }
}

async function detectCountryCode() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return "EN";
  }
}


function loadLanguageFile(language_code) {
  const languageFileUrl = `language/${language_code.toLowerCase()}.json`;

  console.log("🚀 ~ file: index.html:254 ~ loadLanguageFile ~ languageFileUrl:", languageFileUrl)

  return fetch(languageFileUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Language file not found');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error loading language file:', error);
      return {
        "heading": "CONGRATULATIONS!",
        "continue_button": "CONTINUE",
        "gift_text": "🔥 🔥 Click on <b>CONTINUE</b> to get your <strong>FREE<strong> gift! 🔥 🔥"
      };
    });
}

function applyTranslations(languageData) {
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach((element) => {
    const key = element.dataset.translate;
    if (languageData[key]) {
      if (key === 'gift_text') {
        element.innerHTML = languageData[key];
      } else {
        element.textContent = languageData[key];
      }
    }
  });
}

async function setLanguageBasedOnCountry() {
  const userCountryCode = await detectCountryCode();
  const languageFile = await loadLanguageFile(userCountryCode);
  applyTranslations(languageFile);
  changeImageSource(`img/${userCountryCode.toLowerCase()}/default@0.5x.png`);
}

window.onload = setLanguageBasedOnCountry;
