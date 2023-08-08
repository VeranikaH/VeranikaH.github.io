function changeImg2() {
  document.getElementById("project2Picture").src = "images/image2project2.jpg";
  // document.getElementById("project2Picture").src = "images/image2pr2.jpg";
}

document.getElementById("project1Picture").addEventListener("mouseover", changeImg);
document.getElementById("project1Picture").addEventListener("mouseout", returnImg);
document.getElementById("project2Picture").addEventListener("click", changeImg2);
document.getElementById("project2Picture").addEventListener("click", changeImg2);

function changeImg() {
  document.getElementById("project1Picture").src = "images/image2project.jpg";
  // document.getElementById("project2Picture").src = "images/image2project.jpg";
}
function returnImg() {
  document.getElementById("project1Picture").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&usqp=CAU";
}
