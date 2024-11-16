// BOX - 01
let sq1 = document.getElementById("sq1");

sq1.addEventListener("mouseenter", () => {
   let random = Math.floor(Math.random() * 100);
   sq1.innerHTML = `<h1>${random}</h1>`;
});

sq1.addEventListener("mouseleave", () => {
   sq1.innerHTML = `<h1>1</h1>`;
});


// BOX - 02

let sq2 = document.getElementById("sq2");

let clr = "red";
sq2.addEventListener("mouseenter", () => {
   if (clr == "red") {
      sq2.style.backgroundColor = "red";
      clr = "green";
   }
   else if (clr == "green") {
      sq2.style.backgroundColor = "green";
      clr = "blue";
   }
   else {
      sq2.style.backgroundColor = "blue";
      clr = "red";
   }
});

sq2.addEventListener("mouseleave", () => {
   sq2.style.backgroundColor = "white";
});


// BOX - 03
let sq3 = document.getElementById("sq3");

sq3.addEventListener("mouseenter", () => {
   let a = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   let c = Math.floor(Math.random() * 256);
   sq3.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
});

sq3.addEventListener("mouseleave", () => {
   sq3.style.backgroundColor = "white";
});


// BOX - 04
let sq4 = document.getElementById("sq4");

sq4.addEventListener("click", () => {
   let a = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   let c = Math.floor(Math.random() * 256);
   sq1.style.backgroundColor = `rgb(255, ${b}, ${c})`;
   sq2.style.backgroundColor = `rgb(${a}, 255, ${c})`;
   sq3.style.backgroundColor = `rgb(${a}, ${b}, 255)`;
});

sq4.addEventListener("mouseleave", () => {
   sq1.style.backgroundColor = "white";
   sq2.style.backgroundColor = "white";
   sq3.style.backgroundColor = "white";
});

let main = document.getElementById("main");
let cursor = document.getElementById("cursor");
main.addEventListener("mousemove", (dets) => {
   cursor.style.left = dets.x + "px";
   cursor.style.top = dets.y + "px";
});