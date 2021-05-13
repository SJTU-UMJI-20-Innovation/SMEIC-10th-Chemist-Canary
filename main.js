State = {
  "time": 0,
}

Experiments = [
  [
    "leftHandGetTube",
    "rightHandGetTube",
    "leftHandReachOutGetNaOH",
    "dropNaOH", // With parameter, 0-3@0.5
    "leftHandFinishGetNaOH",
    "rightHandReachOutGetNaOH",
    "dropNaOH", // With parameter, 0-3@0.5
    "rightHandFinishGetNaOH",
    "turnToExperimentArea",
    "mixNaOHCuSO4",
    // "HDCameraBeginWatchTube",
    // "HDCameraEndWatchTube",
    "turnToExperimentArea",
    "leftHandHandBackTube",
    "rightHandHandBackTube"
  ],
  [
    "rightHandGetBeaker",
    "rightHandReachOutGetHCl",
    "dropHCl", // With parameter, 0-3@0.5
    "rightHandFinishGetHCl",
    "rightHandReachOutGetCaCO3",
    "rightHandFinishGetCaCO3SeeHDCamera",
    "rightHandFinishHDCameraThermal",
    "rightHandHandBackBeaker",
  ],
  [
    "leftHandGetErlenmeyerFlask",
    "leftHandHandErlenmeyerFlask",
    "shake", // Custom
    "rotatePipeValve",
    "rightHandStartObservePipe",
    "rightHandObservePipe", // Currently unavailable
    "rightHandStopObservePipe"
  ]
]

/*
0  -> 30
40 -> 35
45 -> 40 
51 -> 45
59 -> 50
65 -> 55
75 -> 60
45 -> 临界值
*/

function socketInit() {
  console.log("CALLED:\tsocketInit");
  var socket = new WebSocket("ws://192.168.1.3:2501");
  return socket;
}

function socketSend(_message) {
  console.log("CALLED:\tsocketSend");
  socket.send(_message);
}

function socketBatchSend(message_list) {
  console.log("CALLED:\tsocketBatchSend");
  for (var i = 0; i < length(message_list); i++) {
    console.log("DEBUG:\tSending " + message_list[i]);
    socketSend(message_list[i]);
  }
}

function loadLocalization(lang) {
  console.log("CALLED:\tloadLocalization")
  if (lang == "zh-CN" || lang == "Chinese Simplified") {
    window.strings = JSON.parse("Localization/zh-CN.json");
  } else if (lang == "en-US" || lang == "English (United States)") {
    window.strings = JSON.parse("Localization/en-US.json");
  }
}
