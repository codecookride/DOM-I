const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])





const nav1 = document.querySelectorAll('a')[0];
nav1.textContent = (siteContent["nav"]["nav-item-1"])
const nav2 = document.querySelectorAll('a')[1];
nav2.textContent = (siteContent["nav"]["nav-item-2"])
const nav3 = document.querySelectorAll('a')[2];
nav3.textContent = (siteContent["nav"]["nav-item-3"])
const nav4 = document.querySelectorAll('a')[3];
nav4.textContent = (siteContent["nav"]["nav-item-4"])
const nav5 = document.querySelectorAll('a')[4];
nav5.textContent = (siteContent["nav"]["nav-item-5"])
const nav6 = document.querySelectorAll('a')[5];
nav6.textContent = (siteContent["nav"]["nav-item-6"])


const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = (siteContent["cta"]["h1"])

const btn = document.querySelector(".cta-text button");
btn.textContent = (siteContent["cta"]['button'])

const features  = document.querySelectorAll('.text-content h4')[0];
features.textContent = (siteContent["main-content"]["features-h4"])

const featuresContent  = document.querySelectorAll('.text-content p')[0];
featuresContent.textContent = (siteContent["main-content"]["features-content"])

const about  = document.querySelectorAll('.text-content h4')[1];
about.textContent = (siteContent["main-content"]["about-h4"])

const aboutContent  = document.querySelectorAll('.text-content p')[1];
aboutContent.textContent = (siteContent["main-content"]["about-content"])

const services  = document.querySelectorAll('.text-content h4')[2];
services.textContent = (siteContent["main-content"]["services-h4"])

const servicesContent  = document.querySelectorAll('.text-content p')[2];
servicesContent.textContent = (siteContent["main-content"]["services-content"])

const product  = document.querySelectorAll('.text-content h4')[3];
product.textContent = (siteContent["main-content"]["product-h4"])

const productContent  = document.querySelectorAll('.text-content p')[3];
productContent.textContent = (siteContent["main-content"]["product-content"])

const foot= document.querySelector('footer p');
foot.textContent = (siteContent["footer"]["copyright"])


const  nav1new= document.createElement('a');
nav1new.textContent = "Welcome";

const parentnav1new = document.querySelector('nav');

parentnav1new.appendChild(nav1new);















const clr = document.querySelectorAll("a");


clr.forEach( element => {
  element.style.color = "green";
});

const cta = document.querySelector('#cta-img')

cta.src = 'img/header-img.png'

const midImg = document.querySelector('#middle-img')

midImg.src = 'img/mid-page-accent.jpg'


