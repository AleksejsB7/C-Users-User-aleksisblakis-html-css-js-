console.log("aleks");
 function printNumbers() {
            for (let i = 1; i <= 10; i++) {
                console.log(i);
            }
        }
  window.onload = printNumbers;
  document.getElementById("printButton").onclick = printNumbers;