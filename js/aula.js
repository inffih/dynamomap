$(document).ready(function(){

  pannellum.viewer('panorama', {
    "panorama": "img/panoraama_aula.jpg",
    "autoLoad": true,
    "keyboardZoom": false,
    "showZoomCtrl": false,
    "showFullscreenCtrl": false,
    "yaw": 100,
    "hfov": 80,
    "minHfov": 80,
    "haov": 360,
    "vaov": 43,
    "minYaw": -120,
    "maxYaw": 120,
    "minPitch": 0,
    "maxPitch": 0,
    "hotSpots": [
      {
        "pitch": -3,
        "yaw": 125,
        "type": "info",
        "text": "Ruokala"
      },
      {
        "pitch": -3,
        "yaw": 90,
        "type": "info",
        "text": "Kirjasto"
      },
      {
        "pitch": -3,
        "yaw": 20,
        "type": "info",
        "text": "Hissit"
      },
      {
        "pitch": -3,
        "yaw": -140,
        "type": "info",
        "text": "Auditorio"
      }
    ]
  });

});
