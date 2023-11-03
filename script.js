const mainEl = document.querySelector('main')

// const colr = 'var(--main-bg)'
// mainEl.style.backgroundColor = colr
mainEl.style.backgroundColor = 'var(--main-bg)';

// Create content of mainE1
const title = document.createElement("h1");
title.textContent = "SEI Rocks!";
mainEl.appendChild(title)

//Add a class of flex-ctr to mainEl.
  mainEl.classList.add('flex-ctr')

//Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
  const topMenuEl = document.querySelector('#top-menu')

//Set the height topMenuElelement to be 100%.
  topMenuEl.style.height = '100%'

////Set the background color of subMenuEl to the value stored in the --sub-menu-bgCSS custom property.
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

//Add a class of flex-around to topMenuEl.
  topMenuEl.classList.add('flex-around')
//Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
  const subMenuEl = document.querySelector('#sub-menu')
//Add the class of flex-around to the subMenuElelement.
  subMenuEl.classList.add("flex-around");

//Update the menuLinksarray in script.js to this:
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  let sublinksArray = {};
//Create an <a>element.
//On the new element, add an href attribute with its value set to the hrefproperty of the "link" object.
//Append the new element to the topMenuEl element.
  menuLinks.forEach((menu) => {
    const anc = document.createElement("a");
    anc.setAttribute('href', menu.href)
    var linkText = document.createTextNode(menu.text.toUpperCase());
    sublinksArray[menu.text.toUpperCase()] = menu.subLinks; 
    anc.appendChild(linkText)
    anc.classList.add("active");
    topMenuEl.appendChild(anc)
  });

//Set the height subMenuElelement to be 100%.
  subMenuEl.style.height = '100%'

//Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Add the class of flex-aroundto the subMenuElelement.
  subMenuEl.classList.add('flex-around')

//Set the CSS positionproperty of subMenuElto the value of absolute.
  subMenuEl.style.position = "absolute";

//Set the CSS topproperty of subMenuElto the value of 0.
  subMenuEl.style.top = "0";

//Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks.
 //const topMenuLinks = topMenuEl.children;
  const topMenuLinks = topMenuEl.children;
//Declare a global showingSubMenuvariable and initialize it to false;
  let showingSubMenu = false

//Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call the event object's preventDefault()method.
//The second line of code function should immediately return if the element clicked was not an <a>element.
//console.logthe content of the <a>to verify the handler is working.

  topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.localName !== "a") {
      return;
    }
    else{
    console.log(e.target.text);
    }
//Remove the active class from the clicked <a> element.
//Set the showingSubMenuto false.
//Set the CSS topproperty of subMenuElto 0.
//return to exit the handler.
    if (e.target.className === "active") {
      e.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      //return;
    }  
//Next, the event listener should remove a class name of active from each 
//<a>element in topMenuLinks- whether the active class exists or not.
      for (let i of topMenuLinks) {
        i.classList.remove("active");
        console.log(i);
      }
    
  
//Next, the event listener should add a class name of active to the <a>element that was clicked.
    if (e.target.localName === "a") {
      e.target.classList.add("active");
    }
  
//Set showingSubMenu to true if the clicked <a>element's "link" object within menuLinks has a subLinksproperty 
//(all do, except for the "link" object for ABOUT), otherwise, set it to false.
  if (e.target.getAttribute("href") === "#") {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }
  if (showingSubMenu) {
    buildSubMenu(e.target.text, sublinksArray);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = 0;
    createHeaderElement(e.target.text)
  }
});

//Clears the contents of subMenuEl.
// Iterates over the subLinksarray passed as an argument; and for each "link" object:
// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the subMenuElelement.

function buildSubMenu(menu_name, submenuarray) {
//console.log(subMenuEl)
subMenuEl.innerHTML = "";
let submenu = submenuarray[menu_name];
//console.log(submenu)
submenu.forEach((menu) => {
  //console.log(menu);
  let submenus = document.createElement("a");
  submenus.setAttribute("href", menu.href);
  submenus.appendChild(document.createTextNode(menu.text.toUpperCase()));
  subMenuEl.appendChild(submenus);
});
}

// Attach a delegated 'click' event listener to subMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.logthe content of the <a>to verify the handler is working.
  subMenuEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.localName !== "a") {
    return;
  } else {
    console.log(e.target.text);
  }
  showingSubMenu = false;
  subMenuEl.style.top = 0;

  for (let i of topMenuLinks) {
    i.classList.remove("active");
    console.log(i);
  }

  createHeaderElement(e.target.text);
  })

  function createHeaderElement(content){
  let maintext = document.createElement("h1");
  maintext.textContent = content;
  mainEl.innerHTML = "";
  mainEl.appendChild(maintext);
  }
    


