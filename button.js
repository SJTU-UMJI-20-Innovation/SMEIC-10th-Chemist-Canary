"use strict"

const socket = new WebSocket('ws://192.168.1.3:2051');

const baseSpeed       = (10.0 / 20.0),
      liftSpeed       = (18.0 / 30.0),
      rotationSpeed   = (180.0 / 6.0),
      timeDelta       = 5.0;

function reset() {

};

function leftHandGetTube(state){
    socket.send("cgMs 0 0");
    socket.send("dtSvThree 0 0");
    socket.send("cgSg 1");
    socket.send("rtSvTwo 0 94 1 1");
    state.time += 1;
    socket.send("mvMvBs 13.5 1 2");
    state.time += Math.abs(state.base - (13.5)) * baseSpeed;
    state.base = (13.5);
    socket.send("rtRtBs 0 0.0 2 3");
    state.time += Math.abs(state.leftRotate - (0)) * rotationSpeed;
    state.leftRotate = (0);
    socket.send("lfLfBs 0 -1.4 3 4");
    state.time += Math.abs(state.leftLift - (-1.4)) * liftSpeed;
    state.leftLift = (-1.4);
    socket.send("rtSvOne 0 103 4 5");
    state.time += 1;
    socket.send("mvAm 0 77.5 5 6");
    state.time += 1;
    socket.send("dlAm 0 3 6 7");
    state.time += 3;
    socket.send("rtSvOne 0 88 7 8");
    state.time += 1;
    socket.send("cgMs 0 1 8 9");
    socket.send("dtSvThree 0 1 9 10");
    socket.send("lfLfBs 0 -7.0 10 11");
    state.time += Math.abs(state.leftLift - (-7)) * liftSpeed;
    state.leftLift = (-7);
    socket.send("mvAm 0 90 11 12");
    state.time += 1;
    socket.send("dtSvThree 0 0 12 13");
    state.time += timeDelta;
    return state;
}

function leftHandReachOutGetNaOH(state){
    socket.send("cgSg 1");
    socket.send("mvMvBs 11.0 1 2");
    state.time += Math.abs(state.base - (11)) * baseSpeed;
    state.base = (11);
    socket.send("lfLfBs 0 -6 2 3");
    state.time += Math.abs(state.leftLift - (-6)) * liftSpeed;
    state.leftLift = (-6);
    socket.send("mvAm 0 82.0 3 4");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function dropNaOH(state){
    socket.send("gtLq 3 3");//gtLq 3 (3) -> change
    state.time += 3;//(3) -> change
    state.time += timeDelta;
    return state;
}

function leftHandFinishGetNaOH(state){
    socket.send("mvAm 0 90.0 4 5");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function rightHandGetTube(state){
    socket.send("cgMs 1 0");
    socket.send("cgSg 1");
    socket.send("mvMvBs -26.5 1 2");
    state.time += Math.abs(state.base - (-26.5)) * baseSpeed;
    state.base = (-26.5);
    socket.send("rtRtBs 1 -0.0 2 3");
    state.time += Math.abs(state.rightRotate - (-0)) * rotationSpeed;
    state.rightRotate = (-0);
    socket.send("lfLfBs 1 -4.4 3 4");
    state.time += Math.abs(state.rightLift - (-4.4)) * liftSpeed;
    state.rightLift = (-4.4);
    socket.send("rtSvOne 1 103 4 5");
    state.time += 1;
    socket.send("mvAm 1 77.3 5 6");
    state.time += 1;
    socket.send("dlAm 1 3 6 7");
    state.time += 3;
    socket.send("rtSvOne 1 88 7 8");
    state.time += 1;
    socket.send("cgMs 1 1.0 8 9");
    socket.send("dtSvThree 1 -4 9 10");
    socket.send("dlAm 1 1 10 11");
    state.time += 1;
    socket.send("lfLfBs 1 -9.5 11 12");
    state.time += Math.abs(state.rightLift - (-9.5)) * liftSpeed;
    state.rightLift = (-9.5);
    socket.send("mvAm 1 90.0 12 13");
    state.time += 1;
    socket.send("dtSvThree 1 0 13 14");
    state.time += timeDelta;
    return state;
}

function rightHandReachOutGetCuSO4(state){
    socket.send("cgSg 1");
    socket.send("lfLfBs 1 -7.5 1 2");
    state.time += Math.abs(state.rightLift - (-7.5)) * liftSpeed;
    state.rightLift = (-7.5);
    socket.send("mvMvBs -23.0 2 3");
    state.time += Math.abs(state.base - (-23)) * baseSpeed;
    state.base = (-23);
    socket.send("mvAm 1 81.5 3 4");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function dropCuSO4(state){
    socket.send("gtLq 2 3");//gtLq 2 (3) -> toChange
    state.time += 3;//(3) -> toChange
    state.time += timeDelta;
    return state;
}

function rightHandFinishGetCuSO4(state){
    socket.send("mvAm 1 90 4 5");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function turnToExperimentArea(state){
    socket.send("cgSg 1");
    socket.send("mvMvBs 26 1 1");
    state.time += Math.abs(state.base - (26)) * baseSpeed;
    state.base = (26);
    socket.send("lfLfBs 0 -6 1 2");
    state.time += Math.abs(state.leftLift - (-6)) * liftSpeed;
    state.leftLift = (-6);
    socket.send("lfLfBs 1 -6 2 3");
    state.time += Math.abs(state.rightLift - (-6)) * liftSpeed;
    state.rightLift = (-6);
    socket.send("rtRtBs 0 -180 3 4");
    state.time += Math.abs(state.leftRotate - (-180)) * rotationSpeed;
    state.leftRotate = (-180);
    socket.send("rtRtBs 1 180 4 5");
    state.time += Math.abs(state.rightRotate - (180)) * rotationSpeed;
    state.rightRotate = (180);
    state.time += timeDelta;
    return state;
}

function dropLiquid(state){
    socket.send("cgSg 1");
    socket.send("rtRtBs 1 184 1 2");
    state.time += Math.abs(state.rightRotate - (184)) * rotationSpeed;
    state.rightRotate = (184);
    socket.send("lfLfBs 1 -21.5 2 3");
    state.time += Math.abs(state.rightLift - (-21.5)) * liftSpeed;
    state.rightLift = (-21.5);
    socket.send("mvAm 1 87 3 4");
    state.time += 1;
    socket.send("rtSvTwo 1 20 4 5");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function HDCameraBeginWatchTube(state){
    socket.send("cgSg 1");
    socket.send("rtSvTwo 1 90 1 2");
    state.time += 1;
    socket.send("cgMs 1 10");
    socket.send("mvAm 1 70 2 3");
    state.time += 1;
    socket.send("rtRtBs 1 193 3 4");
    state.time += Math.abs(state.rightRotate - (193)) * rotationSpeed;
    state.rightRotate = (193);
    socket.send("lfLfBs 1 -8 4 5");
    state.time += Math.abs(state.rightLift - (-8)) * liftSpeed;
    state.rightLift = (-8);
    state.time += timeDelta;
    return state;
}

function HDCameraEndWatchTube(state){
    socket.send("lfLfBs 1 -20 5 6");
    state.time += Math.abs(state.rightLift - (-20)) * liftSpeed;
    state.rightLift = (-20);
    socket.send("rtRtBs 1 180 6 7");
    state.time += Math.abs(state.rightRotate - (180)) * rotationSpeed;
    state.rightRotate = (180);
    socket.send("cgMs 1 1 7 8");
    socket.send("mvAm 1 90 8 9");
    state.time += 1;
    socket.send("lfLfBs 1 -6 9 10");
    state.time += Math.abs(state.rightLift - (-6)) * liftSpeed;
    state.rightLift = (-6);
    state.time += timeDelta;
    return state;
}

function turnToStorageArea(state){
    socket.send("cgSg 1");
    socket.send("rtSvTwo 1 90 1 2");
    state.time += 1;
    socket.send("mvAm 1 90 2 3");
    state.time += 1;
    socket.send("lfLfBs 0 -6 3 4");
    state.time += Math.abs(state.leftLift - (-6)) * liftSpeed;
    state.leftLift = (-6);
    socket.send("lfLfBs 1 -6 4 5");
    state.time += Math.abs(state.rightLift - (-6)) * liftSpeed;
    state.rightLift = (-6);
    socket.send("rtRtBs 0 0 5 6");
    state.time += Math.abs(state.leftRotate - (0)) * rotationSpeed;
    state.leftRotate = (0);
    socket.send("rtRtBs 1 0 6 7");
    state.time += Math.abs(state.rightRotate - (0)) * rotationSpeed;
    state.rightRotate = (0);
    state.time += timeDelta;
    return state;
}

function leftHandHandBackTube(state){
    socket.send("cgSg 1");
    socket.send("rtSvTwo 0 94 1 1");
    state.time += 1;
    socket.send("mvMvBs 12.0 1 2");
    state.time += Math.abs(state.base - (12)) * baseSpeed;
    state.base = (12);
    socket.send("rtRtBs 0 1.0 2 3");
    state.time += Math.abs(state.leftRotate - (1)) * rotationSpeed;
    state.leftRotate = (1);
    socket.send("lfLfBs 0 -7.0 3 4");
    state.time += Math.abs(state.leftLift - (-7)) * liftSpeed;
    state.leftLift = (-7);
    socket.send("mvAm 0 77.5 4 5");
    state.time += 1;
    socket.send("lfLfBs 0 1.0 5 6");
    state.time += Math.abs(state.leftLift - (1)) * liftSpeed;
    state.leftLift = (1);
    socket.send("rtSvOne 0 103 6 7");
    state.time += 1;
    socket.send("cgMs 0 0 7 8");
    socket.send("mvAm 0 90 8 9");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function rightHandHandBackTube(state){
    socket.send("cgSg 1");
    socket.send("mvMvBs -26.5 1 2");
    state.time += Math.abs(state.base - (-26.5)) * baseSpeed;
    state.base = (-26.5);
    socket.send("lfLfBs 1 -8.0 2 3");
    state.time += Math.abs(state.rightLift - (-8)) * liftSpeed;
    state.rightLift = (-8);
    socket.send("mvAm 1 77 3 4");
    state.time += 1;
    socket.send("lfLfBs 1 -2.5 4 5");
    state.time += Math.abs(state.rightLift - (-2.5)) * liftSpeed;
    state.rightLift = (-2.5);
    socket.send("rtSvOne 1 105 5 6");
    state.time += 1;
    socket.send("cgMs 1 0 6 7");
    socket.send("mvAm 1 90 7 8");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function rightHandGetBeaker(state){
    socket.send("cgMs 1 0");
    socket.send("dtSvThree 1 0");
    socket.send("cgSg 1");
    socket.send("rtSvTwo 1 88 1 1");
    state.time += 1;
    socket.send("mvMvBs -2.5 1 2");
    state.time += Math.abs(state.base - (-2.5)) * baseSpeed;
    state.base = (-2.5);
    socket.send("lfLfBs 1 -0.5 2 3");
    state.time += Math.abs(state.rightLift - (-0.5)) * liftSpeed;
    state.rightLift = (-0.5);
    socket.send("rtSvOne 1 105 3 4");
    state.time += 1;
    socket.send("mvAm 1 80 4 5");
    state.time += 1;
    socket.send("dlAm 1 3 5 6");
    state.time += 3;
    socket.send("rtSvOne 1 85 6 7");
    state.time += 1;
    socket.send("cgMs 1 3 7 8");
    socket.send("mvAm 1 81 8 9");
    state.time += 1;
    socket.send("lfLfBs 1 -3 9 10");
    state.time += Math.abs(state.rightLift - (-3)) * liftSpeed;
    state.rightLift = (-3);
    socket.send("dlAm 1 3 10 11");
    state.time += 3;
    socket.send("mvAm 1 90 11 12");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function rightHandReachOutGetHCl(state){
    socket.send("cgSg 1");
    socket.send("rtSvTwo 1 88 1 1");
    state.time += 1;
    socket.send("mvMvBs -3 1 2");
    state.time += Math.abs(state.base - (-3)) * baseSpeed;
    state.base = (-3);
    socket.send("mvAm 1 85.6 2 3");
    state.time += 1;
    socket.send("lfLfBs 1 -14 3 4");
    state.time += Math.abs(state.rightLift - (-14)) * liftSpeed;
    state.rightLift = (-14);
    state.time += timeDelta;
    return state;
}

function dropHCl(state){
    socket.send("gtLq 1 5");
    state.time += 5;
    state.time += timeDelta;
    return state;
}

function rightHandFinishGetHCl(state){
    socket.send("mvAm 1 90 4 5");
    state.time += 1;
    socket.send("lfLfBs 1 -6 5 6");
    state.time += Math.abs(state.rightLift - (-6)) * liftSpeed;
    state.rightLift = (-6);
    state.time += timeDelta;
    return state;
}

function rightHandReachOutGetCaCO3(state){
    socket.send("cgSg 1");
    socket.send("rtSvTwo 1 88 1 1");
    state.time += 1;
    socket.send("mvMvBs -15 1 2");
    state.time += Math.abs(state.base - (-15)) * baseSpeed;
    state.base = (-15);
    socket.send("cgMs 1 14 2 3");
    socket.send("dtSvThree 1 10 3 4");
    socket.send("lfLfBs 1 -15 4 5");
    state.time += Math.abs(state.rightLift - (-15)) * liftSpeed;
    state.rightLift = (-15);
    socket.send("mvAm 1 88 5 6");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function dropCaCO3(state){
    socket.send("gtSl 4");
    state.time += 4;
    state.time += timeDelta;
    return state;
}

function rightHandFinishGetCaCO3SeeHDCamera(state){
    socket.send("mvAm 1 90 6 7");
    state.time += 1;
    socket.send("lfLfBs 1 -4 7 8");
    state.time += Math.abs(state.rightLift - (-4)) * liftSpeed;
    state.rightLift = (-4);
    socket.send("dtSvThree 1 0 8 9");
    socket.send("cgMs 1 4 9 10");
    socket.send("rtRtBs 1 160 10 11");
    state.time += Math.abs(state.rightRotate - (160)) * rotationSpeed;
    state.rightRotate = (160);
    socket.send("dtSvThree 1 10 11 12");
    socket.send("mvAm 1 90 12 13");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function rightHandFinishHDCameraThermal(state){
    socket.send("mvAm 1 82");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function rightHandHandBackBeaker(state){
    socket.send("cgSg 1");
    socket.send("dtSvThree 1 0 1 2");
    socket.send("mvAm 1 90 2 3");
    state.time += 1;
    socket.send("rtRtBs 1 0 3 4");
    state.time += Math.abs(state.rightRotate - (0)) * rotationSpeed;
    state.rightRotate = (0);
    socket.send("rtSvTwo 1 88 4 5");
    state.time += 1;
    socket.send("mvMvBs -2.5 5 6");
    state.time += Math.abs(state.base - (-2.5)) * baseSpeed;
    state.base = (-2.5);
    socket.send("lfLfBs 1 -3 6 7");
    state.time += Math.abs(state.rightLift - (-3)) * liftSpeed;
    state.rightLift = (-3);
    socket.send("mvAm 1 81 7 8");
    state.time += 1;
    socket.send("lfLfBs 1 0 8 9");
    state.time += Math.abs(state.rightLift - (0)) * liftSpeed;
    state.rightLift = (0);
    socket.send("cgMs 1 2 9 10");
    socket.send("mvAm 1 80.5 10 11");
    state.time += 1;
    socket.send("dlAm 1 3 11 12");
    state.time += 3;
    socket.send("cgMs 1 0 12 13");
    socket.send("mvAm 1 80 13 14");
    state.time += 1;
    socket.send("dlAm 1 3 14 15");
    state.time += 3;
    socket.send("rtSvOne 1 103 15 16");
    state.time += 1;
    socket.send("mvAm 1 90 16 17");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

function leftHandGetErlenmeyerFlask(state){
    socket.send("cgMs 0 0");
    socket.send("dtSvThree 0 0");
    socket.send("cgSg 1");
    socket.send("rtSvTwo 0 94 1 1");
    state.time += 1;
    socket.send("mvMvBs 7.3 1 2");
    state.time += Math.abs(state.base - (7.3)) * baseSpeed;
    state.base = (7.3);
    socket.send("rtRtBs 0 -179.5 2 3");
    state.time += Math.abs(state.leftRotate - (-179.5)) * rotationSpeed;
    state.leftRotate = (-179.5);
    socket.send("lfLfBs 0 2.0 3 4");
    state.time += Math.abs(state.leftLift - (2)) * liftSpeed;
    state.leftLift = (2);
    socket.send("rtSvOne 0 103 4 5");
    state.time += 1;
    socket.send("mvAm 0 86.92 4 5");
    state.time += 1;
    socket.send("dlAm 0 3 5 6");
    state.time += 3;
    socket.send("rtSvOne 0 86 6 8");
    state.time += 1;
    socket.send("cgMs 0 6 8 9");
    socket.send("mvAm 0 85 9 10");
    state.time += 1;
    socket.send("lfLfBs 0 -7.0 10 11");
    state.time += Math.abs(state.leftLift - (-7)) * liftSpeed;
    state.leftLift = (-7);
    socket.send("rtRtBs 0 -177.5 11 12");
    state.time += Math.abs(state.leftRotate - (-177.5)) * rotationSpeed;
    state.leftRotate = (-177.5);
    state.time += timeDelta;
    return state;
}

function rightHandStartObservePipe(state){
    socket.send("cgSg 1");
    socket.send("rtRtBs 1 160 1 2");
    state.time += Math.abs(state.rightRotate - (160)) * rotationSpeed;
    state.rightRotate = (160);
    socket.send("mvAm 1 62 2 3");
    state.time += 1;
    socket.send("cgMs 1 15 3 4");
    socket.send("dlAm 1 1 4 5");
    state.time += 1;
    socket.send("cgMs 1 30 5 6");
    socket.send("dlAm 1 1 6 7");
    state.time += 1;
    socket.send("dtSvThree 1 -15 7 8");
    socket.send("dlAm 1 1 8 9");
    state.time += 1;
    socket.send("dtSvThree 1 -30 9 10");
    socket.send("lfLfBs 1 -50 10 11");
    state.time += Math.abs(state.rightLift - (-50)) * liftSpeed;
    state.rightLift = (-50);
    socket.send("rtRtBs 1 190 11 12");
    state.time += Math.abs(state.rightRotate - (190)) * rotationSpeed;
    state.rightRotate = (190);
    state.time += timeDelta;
    return state;
}

function rightHandObservePipe(state){
    socket.send("lfLfBs 1 -45");//lfLfBs 1 -(45) -> toChange -6 ~ -50
    state.time += Math.abs(state.rightLift - (-45)) * liftSpeed;//(-45) -> toChange
    state.rightLift = (-45);//(-45) -> change
    state.time += timeDelta;
    return state;
}

function rightHandStopObservePipe(state){
    socket.send("cgSg 1");
    socket.send("rtRtBs 1 170 1 2");
    state.time += Math.abs(state.rightRotate - (170)) * rotationSpeed;
    state.rightRotate = (170);
    socket.send("cgMs 1 15 2 3");
    socket.send("dlAm 1 1 3 4");
    state.time += 1;
    socket.send("cgMs 1 0 4 5");
    socket.send("dlAm 1 1 5 6");
    state.time += 1;
    socket.send("dtSvThree 1 -15 6 7");
    socket.send("dlAm 1 1 7 8");
    state.time += 1;
    socket.send("dtSvThree 1 0 8 9");
    socket.send("dlAm 1 1 9 10");
    state.time += 1;
    socket.send("mvAm 1 90 10 11");
    state.time += 1;
    socket.send("lfLfBs 1 -6 11 12");
    state.time += Math.abs(state.rightLift - (-6)) * liftSpeed;
    state.rightLift = (-6);
    state.time += timeDelta;
    return state;
}

function shake(state){
    socket.send("rtSvTwo 0 99");
    // state.time += 1;
    socket.send("rtSvTwo 0 89");
    // state.time += 1;
    socket.send("rtSvTwo 0 99");
    // state.time += 1;
    socket.send("rtSvTwo 0 89");
    // state.time += 1;
    socket.send("rtSvTwo 0 94");
    // state.time += 1;
    // state.time += timeDelta;
    return state;
}

function rotatePipeValve(state){
    socket.send("cgBr 0");//cgBr (0) -> change
/*
    0 -> 30
    40 -> 35
    45 -> 40
    51 -> 45
    59 -> 50
    65 -> 55
    75 -> 60
    45->临界值
*/
    // state.time += timeDelta;
    return state;
}

function leftHandHandErlenmeyerFlask(state){
    socket.send("cgSg 1");
    socket.send("rtSvTwo 0 94 1 1");
    state.time += 1;
    socket.send("lfLfBs 0 1.0 1 2");
    state.time += Math.abs(state.leftLift - (1)) * liftSpeed;
    state.leftLift = (1);
    socket.send("rtRtBs 0 -179.5 2 3");
    state.time += Math.abs(state.leftRotate - (-179.5)) * rotationSpeed;
    state.leftRotate = (-179.5);
    socket.send("cgMs 0 0 3 4");
    socket.send("dtSvThree 0 0 4 5");
    socket.send("mvAm 0 88 5 6");
    state.time += 1;
    socket.send("dlAm 0 3 6 7");
    state.time += 3;
    socket.send("rtSvOne 0 103 7 8");
    state.time += 1;
    socket.send("mvAm 0 90 8 9");
    state.time += 1;
    state.time += timeDelta;
    return state;
}

