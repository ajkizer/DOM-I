const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

logo.src = "img/logo.png";

//title
let title = document.querySelector("title");
title.textContent = "Great Idea! DOM";

//navbar

let link1 = document.createElement("a");
let node1 = document.createTextNode("Blog");
link1.appendChild(node1);
document.querySelector("nav").appendChild(link1);

let link2 = document.createElement("a");
let node2 = document.createTextNode("Download");
link2.appendChild(node2);
document.querySelector("nav").prepend(link2);

let navItems = document.querySelectorAll("nav a");
for (i = 0; i < navItems.length - 1; i++) {
  navItems[i].innerHTML =
    siteContent["nav"]["nav-item-" + (i + 1).toString(10)];
}

navItems.forEach(item => (item.style.color = "green"));

//cta
let ctaHeader = document.querySelector("h1");
let ctaBtn = document.querySelector(".cta-text button");
let ctaImg = document.querySelector("#cta-img");

ctaHeader.innerHTML = siteContent["cta"]["h1"];
ctaBtn.textContent = siteContent["cta"]["button"];
ctaImg.src = "img/header-img.png";

//features

let mainContentText = document.querySelectorAll(".text-content");

let featureText = mainContentText[0];
let aboutText = mainContentText[1];
let servicesText = mainContentText[2];
let productText = mainContentText[3];
let visionText = mainContentText[4];
let mainContentObject = siteContent["main-content"];

featureText.firstElementChild.textContent = mainContentObject["features-h4"];
featureText.lastElementChild.textContent =
  mainContentObject["features-content"];

aboutText.firstElementChild.textContent = mainContentObject["about-h4"];
aboutText.lastElementChild.textContent = mainContentObject["about-content"];

let middleImg = document.querySelector("#middle-img");
middleImg.src = "img/mid-page-accent.jpg";

servicesText.firstElementChild.textContent = mainContentObject["services-h4"];
servicesText.lastElementChild.textContent =
  mainContentObject["services-content"];

productText.firstElementChild.textContent = mainContentObject["product-h4"];
productText.lastElementChild.textContent = mainContentObject["product-content"];

visionText.firstElementChild.textContent = mainContentObject["vision-h4"];
visionText.lastElementChild.textContent = mainContentObject["vision-content"];

let contactSection = document.querySelector(".contact");

contactSection.firstElementChild.textContent =
  siteContent.contact["contact-h4"];

contactSection.childNodes[3].textContent = siteContent.contact["address"];

contactSection.childNodes[5].textContent = siteContent.contact["phone"];

contactSection.childNodes[7].textContent = siteContent.contact["email"];
