(function(){
  var date = new Date(),
  sec = date.getSeconds(),
  min = date.getMinutes(),
  hr = date.getHours();

  var secDeg = sec / 60*360,
  minDeg = min / 60*360 + sec / 60 * 6,
  hrDeg = hr / 12*360 + min / 60*30;

  var secArm = document.getElementById("secArm"),
  minArm = document.getElementById("minArm"),
  hrArm = document.getElementById("hrArm");
  secArm.style.cssText = "transform: translate(-50%, -50%) rotate("+secDeg+"deg); -webkit-transform: translate(-50%, -50%) rotate("+secDeg+"deg); -moz-transform: translate(-50%, -50%) rotate("+secDeg+"deg); -ms-transform: translate(-50%, -50%) rotate("+secDeg+"deg); -o-transform: translate(-50%, -50%) rotate("+secDeg+"deg);";

  minArm.style.cssText = "transform: translate(-50%, -50%) rotate("+minDeg+"deg); -webkit-transform: translate(-50%, -50%) rotate("+minDeg+"deg); -moz-transform: translate(-50%, -50%) rotate("+minDeg+"deg); -ms-transform: translate(-50%, -50%) rotate("+minDeg+"deg); -o-transform: translate(-50%, -50%) rotate("+minDeg+"deg);";

  hrArm.style.cssText = "transform: translate(-50%, -50%) rotate("+hrDeg+"deg); -webkit-transform: translate(-50%, -50%) rotate("+hrDeg+"deg); -moz-transform: translate(-50%, -50%) rotate("+hrDeg+"deg); -ms-transform: translate(-50%, -50%) rotate("+hrDeg+"deg); -o-transform: translate(-50%, -50%) rotate("+hrDeg+"deg);";
})();
