// const z=5; //deklaracja zmiennej
//  let x=7; //deklaracja stałej
// x=2;


// // z nie moge zmienić bo to stała 

// console.log(x+z);

// let currentSlide=0;

// //STRING zawsze w cudzysłowie!!!
// const string="nazwa";

// //obiekty

// const project={
//     name:"Projekt 1",
//     date:"30.03.2022"
// }

// console.log(project.name);
// console.log(project.date)

// console.log("Projekt o nazwie " + project.name + "został stworzony "+ project.date)

// // TABLICE 

// const fibArray = [0, 1, 2, 3, 5, 8, 13]

// console.log(fibArray)

// _______________________________________



// PROJEKTY

// stała allCItems, przechowująca tablicę ("[el1,el2]") wszyskich klas .cItem w #projects
const allCItems = document.querySelectorAll("#projekty .cItem");
// wyciągamy każdy .cItem osobno
allCItems.forEach( cItem => {
  // każdemu po kliknięciu dodajemy funkcję strzałkową
  cItem.onclick = () => {
    // usuń klasę .active ze wszystkich elemenyów
    allCItems.forEach( cItem2 => {
      cItem2.classList.remove("active")
    })
    // do klikniętego elementu dopisz klasę ".active"
    cItem.classList.add("active")
  }
})



// cookies


document.querySelector(".cookies button").onclick = e =>{
    e.target.parentElement.remove();
}


