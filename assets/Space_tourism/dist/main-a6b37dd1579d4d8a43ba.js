!function(){"use strict";const e={bodyClass:document.querySelector(".body"),navBar:document.querySelector(".header__nav"),navItem:document.querySelector(".header__nav-list__item"),navItemLink:document.querySelector(".header__nav-list__item-link")};function n(){const n=e.bodyClass;if(!n)throw new Error("Cannot find body class");n.classList.remove("body-blur")}const r={headerNavbar:document.querySelector(".header__nav"),headerNavbarMobileIconCont:document.querySelector(".nav-mobile__btn-cont"),headerNavbarMobileIcon:document.querySelector(".nav-mobile__btn")};function t(r){try{const a=e.bodyClass;if(!a)throw new Error("Cannot find body class");const i=r.target;if(!i)return;if(i.closest(".header__nav-list__item-link"))return void a.removeEventListener("click",t);if(i.closest(".header__nav-cont"))return;n(),o(),a.removeEventListener("click",t)}catch(e){}}function o(){const e=r.headerNavbar;if(!e)throw new Error("No navbar found");const t=r.headerNavbarMobileIcon;if(!t)throw new Error("Can't find navbar icon htmlElement");e.dataset.visible="false",t.setAttribute("aria-expanded","false"),n()}function a(n){try{n.stopPropagation();const a=e.bodyClass;if(!a)throw new Error("Cannot find body class");const i=r.headerNavbar;if(!i)throw new Error("No navbar found");const c=i.dataset.visible;if(void 0===c)throw new Error("No dataset value found named visible on navbar");"true"===c?(o(),a.removeEventListener("click",t)):"false"===c&&(function(){const n=r.headerNavbar;if(!n)throw new Error("No navbar found");const t=r.headerNavbarMobileIcon;if(!t)throw new Error("Can't find navbar icon htmlElement");n.dataset.visible="true",t.setAttribute("aria-expanded","true"),function(){const n=e.bodyClass;if(!n)throw new Error("Cannot find body class");n.classList.add("body-blur")}()}(),a.addEventListener("click",t))}catch(e){}}!function(){try{const e=r.headerNavbarMobileIconCont;if(!e)throw new Error("No navbar icon cont found");e.addEventListener("click",a)}catch(e){}}()}();