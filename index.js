// Your code here
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left - 1}px`;
  }
  else 
     (e.key === "ArrowRight") {
      let rightNumbers = dodger.style.right.replace("px", "");
      let right = parseInt(rightNumbers, 10);
      dodger.style.right = `${right + 1}px`;
  }
});
