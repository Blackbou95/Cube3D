window.onload = function () {
  var cube = document.querySelector('#cube');
  var x = 0,y = 0,degX = 0,degY = 0;

  document.body.addEventListener('mouseenter', function (event) {
    x = event.offsetX;
    y = event.offsetY;
  });

  document.body.addEventListener('mousemove', function (event) {
    var diffX = x - event.offsetX;
    var diffY = y - event.offsetY;
    var pxInDegX = window.innerWidth / 360;
    var pxInDegY = window.innerHeight / 360;
    var diffDegX = parseFloat((diffX / pxInDegX).toFixed(2));
    var diffDegY = parseFloat((diffY / pxInDegY).toFixed(2));
    var newDegX = degX + diffDegX;
    var newDegY = degY + diffDegY;
    cube.style.transform = 'rotateX(' + newDegY + 'deg) rotateY(' + newDegX + 'deg)';
    degX = newDegX;
    degY = newDegY;
    x = event.offsetX;
    y = event.offsetY;
  });
};