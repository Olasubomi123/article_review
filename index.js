let share_s = document.getElementById("share_s");
let share_b = document.getElementById("share_b");
let footers = document.getElementById("card");
let sharing = document.getElementById("sharing");
let hover = document.getElementById("hover");

share_b.addEventListener("click", () => {
  footers.style.display = "none";
  sharing.style.display = "flex";
});

share_s.addEventListener("mouseover",()=>{
    hover.style.display = "flex";
})


share_s.addEventListener("mouseleave",()=>{
 setTimeout(() => {
    hover.style.display = "none";
  }, 1000);
})


// let share_s = document.getElementById("share_s");
// let share_b = document.getElementById("share_b");
// let footers = document.getElementById("card");
// let sharing = document.getElementById("sharing");
// let hover = document.getElementById("hover");

// if (share_b) {
//   share_b.addEventListener("click", () => {
//     footers.style.display = "none";
//     sharing.style.display = "flex";
//   });
// }

// if (share_s) {
//   share_s.addEventListener("mouseover", () => {
//     hover.style.display = "flex";
//   });

//   share_s.addEventListener("mouseleave", () => {
//     setTimeout(() => {
//       hover.style.display = "none";
//     }, 1000);
//   });
// }
