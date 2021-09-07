//portfolio item Filter
const FilterContainer = document.querySelector(".portfolio-filter"),
  filterBtns = FilterContainer.children,
  totalFilterBtn = filterBtns.length,
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortflioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    FilterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalPortflioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue == "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

// open link
function openInNewTab(url) {
  window.open(url, "_blank").focus();
}

// Aside Navbar
const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalNavlist = navlist.length,
  allsection = document.querySelectorAll(".section");

for (let i = 0; i < totalNavlist; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    //remove back section class
    for (let i = 0; i < allsection.length; i++) {
      allsection[i].classList.remove("back-section");
    }

    for (let j = 0; j < totalNavlist; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        //add back section class
        allsection[j].classList.add("back-section");
      }
      navlist[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showsection(this);
  });
}

function showsection(element) {
  for (let i = 0; i < allsection.length; i++) {
    allsection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideTogglBtn);

// another way to write  ("click",()=>
// {
//     asideTogglBtn();
// })

function asideTogglBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < allsection.length; i++) {
    allsection[i].classList.toggle("open");
  }
}

//Hire Me Button
document.querySelector(".hire-me").addEventListener("click", function () {
  showsection(this);
});
