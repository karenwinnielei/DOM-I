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

document.querySelector('nav a:nth-child(1)').textContent = siteContent["nav"]["nav-item-1"];

document.querySelector('nav a:nth-child(2)').textContent = siteContent["nav"]["nav-item-2"];

document.querySelector('nav a:nth-child(3)').textContent = siteContent["nav"]["nav-item-3"];

document.querySelector('nav a:nth-child(4)').textContent = siteContent["nav"]["nav-item-4"];

document.querySelector('nav a:nth-child(5)').textContent = siteContent["nav"]["nav-item-5"];

document.querySelector('nav a:nth-child(6)').textContent = siteContent["nav"]["nav-item-6"];

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"])

let title = document.querySelector('h1');
title.textContent = siteContent["cta"]["h1"]

let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];



let featH4 = document.querySelector('.top-content').firstElementChild.firstElementChild;
featH4.textContent = siteContent["main-content"]["features-h4"];

let featP = document.querySelector('.top-content').firstElementChild.lastElementChild;
featP.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector('.top-content').lastElementChild.firstElementChild;
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelector('.top-content').lastElementChild.lastElementChild;
aboutP.textContent = siteContent["main-content"]["about-content"];

let bottom = document.querySelector('.bottom-content').children;
bottom[0].firstElementChild.textContent = siteContent["main-content"]["services-h4"];
bottom[0].lastElementChild.textContent = siteContent["main-content"]["services-content"];

bottom[1].firstElementChild.textContent = siteContent["main-content"]["product-h4"];

bottom[1].lastElementChild.textContent = siteContent["main-content"]["product-content"];

bottom[2].firstElementChild.textContent = siteContent["main-content"]["vision-h4"];

bottom[2].lastElementChild.textContent = siteContent["main-content"]["vision-content"];

document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent["contact"]["address"];

contactP[1].textContent = siteContent["contact"]["phone"];

contactP[2].textContent = siteContent["contact"]["email"];

document.querySelector("footer").textContent = siteContent["footer"]["copyright"];

let links = document.querySelectorAll('nav a')
links.forEach(link => link.style.color = 'green')


const newLink = document.createElement('a')
newLink.textContent = "Bye"

let topLinks = document.querySelector('nav');
topLinks.appendChild(newLink)

const newLink2 = document.createElement ('a')
newLink2.textContent = "Hi"

topLinks.prepend(newLink2)

let allH4 = document.querySelectorAll('.text-content h4');
allH4.forEach(heading => heading.style.fontSize = "2rem")

