var feet = document.getElementById("feet");

var inch = document.getElementById("inch");

var cm = document.getElementById("cm");

var convertBtn = document.getElementById("convertBtn");

//this code for conversion of feet to inch
// feet.addEventListener("input", function () {
//   let f = this.value;
//   let i = f * 12;
//   inch.value = i;
// });

// inch.addEventListener("input", function () {
//   let i = this.value;
//   let f = i / 12;
//   if (!Number.isInteger(f)) {
//     f = f.toFixed(2);
//   }
//   feet.value = f;
// });

// this code for conversion of feet & inch to cm...
convertBtn.addEventListener("click", function () {
  let f = Number(feet.value); // Feet to number 
  let i = Number(inch.value); // Inch to number 

  // Convert feet and inches to centimeters
  let totalInches = f * 12 + i;          //1 feet = 12inch
  let cmValue = totalInches * 2.54;      // 1 inch = 2.54 cm
  cm.value = cmValue.toFixed(2);         // toFixed(2) mean after decimal their is only 2 digits
});
 