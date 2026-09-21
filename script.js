const translations = {
  navLatest: "Latest News",
  navPolitics: "Politics",
  navSchemes: "Government Schemes",
  navPeople: "People's Issues",
  navAbout: "About Us",

  heroEyebrow: "🗣️ People's Voice • 🔎 Evidence-Based Analysis",
  heroTitle: "Understand Tamil Nadu from a 360° Perspective.",
  heroText: "A public information platform providing Tamil Nadu politics, government announcements, people's issues and important news clearly with sources.",
  heroLatest: "Latest News",
  heroAbout: "About Us",

  heroCardTitle: "Information First.<br>Evidence Next.",
  heroCardText: "Non-partisan • For the people • For truth",

  tickerLabel: "Important",
  tickerText: "Follow the latest information with reliable sources.",

  latestTitle: "Latest News",
  latestAll: "View All →",

  govInfo: "Government Information",
  tamilNadu: "Tamil Nadu",
  govTitle: "Important Government Announcements and Actions",
  govText: "Official announcements, documents and important information can be found in one place.",
  sourceView: "View Source →",

  schemeTag: "Government Scheme",
  schemesTag: "Schemes",
  schemeTitle: "Government Schemes — Who is eligible? How?",
  schemeText: "Eligibility, procedure and official information explained in simple language.",
  more: "More →",

  assemblyTag: "Legislative Assembly",
  politicsTag: "Politics",
  assemblyTitle: "Legislative Assembly News",
  assemblyText: "Information about bills, laws and matters related to the Legislative Assembly.",

  politicsTitle: "Tamil Nadu Politics",
  assembly: "Legislative Assembly",
  assemblyText2: "Bills, debates and resolutions.",
  govtActions: "Government Actions",
  govtActionsText: "Important announcements issued by government departments.",
  sourcesTitle: "Sources",
  sourcesText: "Government gazettes, press releases and official documents.",

  publicServices: "Government Schemes & Services",
  whatScheme: "What is the scheme?",
  whatSchemeText: "Briefly understand who it applies to and the key eligibility requirements.",
  howGet: "How to get it?",
  howGetText: "Official procedure, required information and the relevant department.",
  whereSource: "Where is the source?",
  whereSourceText: "Link to the original government announcement or official document.",

  peopleVoice: "PEOPLE'S VOICE",
  peopleTitle: "People's Issues",
  peopleText: "A section to document local issues and public questions with information and supporting sources.",
  issueTitle: "Is there an issue in your area?",
  issueText: "You can share it with us along with a photo, location and a brief description.",
  sendInfo: "Send Information",

  aboutTitle: "About Us",
  aboutHeading: "Makkal Paarvai – TN 360°",
  aboutText1: "Makkal Paarvai – TN 360° is a public information platform for understanding Tamil Nadu government schemes, people's issues and important news with reliable sources.",
  aboutText2: "We verify available information and present it clearly and responsibly to the public without supporting any political party.",
  aboutText3: "People's Voice • Reliable Information • For a Better Society",

  sourcesHeading: "Sources",
  sourcesPara: "Whenever possible, we give priority to official government documents and primary sources in our news.",
  sourcePill1: "Government of Tamil Nadu",
  sourcePill2: "Government Gazette",
  sourcePill3: "Government Press Releases",
  sourcePill4: "Official Departments",

  footerText: "People's Voice • A View of Reliable Information",
  copyright: "© 2026 Makkal Paarvai – TN 360°. Please verify the source before publication."
};

function applyEnglish() {
  document.documentElement.lang = "en";

  document.querySelector('nav a[href="#latest"]').textContent = translations.navLatest;
  document.querySelector('nav a[href="#politics"]').textContent = translations.navPolitics;
  document.querySelector('nav a[href="#schemes"]').textContent = translations.navSchemes;
  document.querySelector('nav a[href="#people"]').textContent = translations.navPeople;
  document.querySelector('nav a[href="#about"]').textContent = translations.navAbout;

  document.querySelector(".hero .eyebrow").textContent = translations.heroEyebrow;
  document.querySelector(".hero h1").innerHTML = translations.heroTitle;
  document.querySelector(".hero > .container > div > p").textContent = translations.heroText;

  document.querySelector('.hero-actions a[href="#latest"]').textContent = translations.heroLatest;
  document.querySelector('.hero-actions a[href="#about"]').textContent = translations.heroAbout;

  document.querySelector(".hero-card h2").innerHTML = translations.heroCardTitle;
  document.querySelector(".hero-card p").textContent = translations.heroCardText;

  document.querySelector(".ticker b").textContent = translations.tickerLabel;
  document.querySelector("#tickerText").textContent = translations.tickerText;

  document.querySelector("#latest h2").textContent = translations.latestTitle;
  document.querySelector("#latest .section-head > a").textContent = translations.latestAll;

  const cards = document.querySelectorAll("#latest .card");

  cards[0].querySelector(".thumb span").textContent = translations.govInfo;
  cards[0].querySelector(".tag").textContent = translations.tamilNadu;
  cards[0].querySelector("h3").textContent = translations.govTitle;
  cards[0].querySelector("p").textContent = translations.govText;
  cards[0].querySelector("a").textContent = translations.sourceView;

  cards[1].querySelector(".thumb span").textContent = translations.schemeTag;
  cards[1].querySelector(".tag").textContent = translations.schemesTag;
  cards[1].querySelector("h3").textContent = translations.schemeTitle;
  cards[1].querySelector("p").textContent = translations.schemeText;
  cards[1].querySelector("a").textContent = translations.more;

  cards[2].querySelector(".thumb span").textContent = translations.assemblyTag;
  cards[2].querySelector(".tag").textContent = translations.politicsTag;
  cards[2].querySelector("h3").textContent = translations.assemblyTitle;
  cards[2].querySelector("p").textContent = translations.assemblyText;
  cards[2].querySelector("a").textContent = translations.more;

  document.querySelector("#politics h2").textContent = translations.politicsTitle;

  const topics = document.querySelectorAll("#politics .topic-grid > div");
  topics[0].querySelector("b").textContent = translations.assembly;
  topics[0].querySelector("p").textContent = translations.assemblyText2;
  topics[1].querySelector("b").textContent = translations.govtActions;
  topics[1].querySelector("p").textContent = translations.govtActionsText;
  topics[2].querySelector("b").textContent = translations.sourcesTitle;
  topics[2].querySelector("p").textContent = translations.sourcesText;

  document.querySelector("#schemes h2").textContent = translations.publicServices;

  const schemeItems = document.querySelectorAll("#schemes .scheme");
  schemeItems[0].querySelector("h3").textContent = translations.whatScheme;
  schemeItems[0].querySelector("p").textContent = translations.whatSchemeText;
  schemeItems[1].querySelector("h3").textContent = translations.howGet;
  schemeItems[1].querySelector("p").textContent = translations.howGetText;
  schemeItems[2].querySelector("h3").textContent = translations.whereSource;
  schemeItems[2].querySelector("p").textContent = translations.whereSourceText;

  document.querySelector("#people .eyebrow").textContent = translations.peopleVoice;
  document.querySelector("#people h2").textContent = translations.peopleTitle;
  document.querySelector("#people > .container > div > p").textContent = translations.peopleText;
  document.querySelector("#people .contact-card b").textContent = translations.issueTitle;
  document.querySelector("#people .contact-card p").textContent = translations.issueText;
  document.querySelector("#people .contact-card a").textContent = translations.sendInfo;

  document.querySelector("#about h2").textContent = translations.aboutTitle;
  document.querySelector("#about h3").textContent = translations.aboutHeading;

  const aboutParagraphs = document.querySelectorAll("#about .about-box > div p");
  aboutParagraphs[0].textContent = translations.aboutText1;
  aboutParagraphs[1].textContent = translations.aboutText2;
  aboutParagraphs[2].textContent = translations.aboutText3;

  document.querySelector("#sources h2").textContent = translations.sourcesHeading;
  document.querySelector("#sources > .container > p").textContent = translations.sourcesPara;

  const pills = document.querySelectorAll("#sources .source-pills span");
  pills[0].textContent = translations.sourcePill1;
  pills[1].textContent = translations.sourcePill2;
  pills[2].textContent = translations.sourcePill3;
  pills[3].textContent = translations.sourcePill4;

  document.querySelector("footer p").textContent = translations.footerText;
  document.querySelector(".copyright").textContent = translations.copyright;

  document.querySelector(".language-switcher .active").classList.remove("active");
  document.querySelector(".language-switcher button:nth-child(2)").classList.add("active");
}

function setLanguage(language) {
  localStorage.setItem("siteLanguage", language);

  if (language === "en") {
    applyEnglish();
  } else {
    location.reload();
  }
}

if (localStorage.getItem("siteLanguage") === "en") {
  applyEnglish();
}
