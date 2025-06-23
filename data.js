var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen-p6",
      "name": "kitchen p6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0666302539942265,
          "pitch": 0.06446280710831331,
          "rotation": 0,
          "target": "1-kitchen-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-p1",
      "name": "kitchen p1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.4390174349247289,
        "pitch": -0.041353721237676666,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.9937369440358008,
          "pitch": 0.05326381562323945,
          "rotation": 0,
          "target": "0-kitchen-p6"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
