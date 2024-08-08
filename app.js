class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
    //this.auteur = "auteur";
    //this.synop = "synop";
  }
}
new_list = [];
class Library {
  _list = [];

  addBook(book) {
    this._list.push(book);
    console.log(this._list);
  }
  get nb_books() {
    return this._list.length;
  }
  get contenu() {
    return this._list;
  }
}
let liste_image = [
  "les voitures.jpg",
  "le soleil.jpg",
  " les plantes.jpg",
  "litle prince.png",
  "VanGog.png",
];
const l = new Library();

/* ****************LES Variables ************************************ */
let title_enter;
let boite = document.querySelector(".arch i");
let span = document.querySelector("span");
let pages_enter;
/* ***************************************** FONCTIOn******************************** */
function test() {
  console.log("yess");
}
function archiver() {
  l.addBook(new Book(title_enter, pages_enter));
  span.innerText = l.nb_books;
  console.log(l.nb_books);

  let n = 0;
  span.style.color = "red";
  span.style.backgroundColor = "black";
  /* effet sur la boite */

  boite.classList.add("archive");
  const r = setInterval(function () {
    n += 1;
    if (n == 1) {
      boite.classList.remove("archive");
      span.style.color = "black";
      span.style.backgroundColor = "white";
      clearInterval(r);
    }
  }, 1500);
  n = 0;
}
function popup(contain) {
  let aff = document.querySelector(".affichage");
  if (!aff.classList.contains("trans")) {
    aff.classList.add("trans");
    document.getElementById("liste").innerHTML = contain;
    // selection_book();
  } else {
    aff.classList.remove("trans");
    document.getElementById("liste").innerHTML = "";
  }
}

function liste_lirairie_total(tab) {
  let txt = "<ul>";
  for (let val of tab) {
    txt +=
      "<li>" +
      "TITRE:" +
      val.title +
      "<br>" +
      " Nb de pages: " +
      val.pages +
      "</li>";
  }
  txt = txt + "</ul>";
  return txt;

  // document.getElementById('liste').innerHTML = txt;
}

function search(critere) {
  let aff = document.querySelector(".affichage");
  aff.classList.add("trans");

  let txt = "<ul>";
  for (let book of l.contenu) {
    txt += " <li> " + critere.toUpperCase() + " : " + book[critere] + "</li>";
  }
  txt = txt + "</ul>";
  let liste = document.getElementById("liste");
  liste.innerHTML = txt;
  // selection_book();
  document.querySelector(".loupe i").addEventListener("click", () => {
    aff.classList.remove("trans");
    liste.innerHTML = "";
  });
}

// function selection_book() {

//   // let liste = document.querySelectorAll('#liste li');
//   // liste.forEach(elem => {
//   //   elem.addEventListener('mouseover', () => {

//   //   })
//   // });
// }

/*******************LISTENER ************** */
let title = document.getElementById("nom");
title.addEventListener("input", () => {
  title_enter = title.value;
  // return title_enter;
});
let page = document.getElementById("page");
page.addEventListener("input", () => {
  pages_enter = page.value;
  // return pages_enter;
});
let btn = document.getElementById("btn").addEventListener("click", () => {
  title.value = "";
  page.value = "";
  archiver();
});

boite.addEventListener("click", () => {
  console.log("cliked");
  popup(liste_lirairie_total(l.contenu));
});
/*          *****search criteres ******** */
document.getElementById("search").addEventListener("input", (e) => {
  let critere = e.target.value;
  document.querySelector(".loupe i").addEventListener("click", () => {
    search(critere);
  });
});
/*          *****************       /*            

// function clicked(element) {
//   element.addEventListener("click", () => {
//     let res_jpg = element.innerText + ".jpg";
//     let res_png = element.innerText + ".png";
//     for (let elem of liste_livre)
//       if (elem === res_jpg || elem === res_png) {
//         document.querySelector(".screen img").src = "/image/" + elem;
//       }
//   });
// }

// function create_disp_recherche(params) {
//   // params=list_search;
//   let text = "<ul>";
//   document.querySelector(".loupe>i").addEventListener("click", () => {
//     params.forEach((el) => {
//       l.contenu.forEach((key) => {
//         if (key[el]) {
//           text += "<li>" + el + ":" + key[el] + "</li>";
//         }
//       });
//     });
//     text += "</ul>";
//     //   if (params.length > 0) {
//     //       for (let val of params) {
//     //           for (let book of l.contenu) {
//     //               if (book[val] in l.contenu) {
//     //             text+= "<li>" + val + ":" + book[val]+ "</li>"
//     //         }
//     //     }

//     // text += "</ul>";
//     popup(text);
//   });
// }
//   }, 1500);
//   n = 0;
//   // let display = create_lirairie_total(l.contenu);
//   // return display;
// }

/* *********************************  ********************************************* */

// const promess_archiver = new Promise((resolve) => {
//   if (title_enter && pages_enter !== "undefined") {
//     resolve(title_enter, pages_enter);
//   }
// });
// promess_archiver.then((ti, pa) => {
//   l.addBook(new Book(ti, pa));
// });
