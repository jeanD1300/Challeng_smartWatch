var backWatch =document.getElementById("sl-black")
var redWatcher =document.getElementById("sl-red")
var pinkWatcher =document.getElementById("sl-pink")
var purpleWatcher =document.getElementById("sl-purple")

var watch = document.getElementById("watch-img")

var addCart = document.getElementsByClassName("butt-add");

backWatch.addEventListener('click', function () {
    watch.src = "/images/black-watch.png";
    watch.alt = "smart-watch-black";
  });
  
  redWatcher.addEventListener('click', function () {
    watch.src = "/images/red-watch.png";
    watch.alt = "smart-watch-red";
  });
  
  purpleWatcher.addEventListener('click', function () {
    watch.src = "/images/purple-watch.png";
    watch.alt = "smart-watch-purple";
  });
  
  pinkWatcher.addEventListener('click', function () {
    watch.src = "/images/pink-watch.png";
    watch.alt = "smart-watch-pink";
  });

  for (var i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', function () {
      alert("เพิ่มสินค้าลงตะกร้าเรียบร้อยแล้ว");
    });
  }