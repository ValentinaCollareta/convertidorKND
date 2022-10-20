window.addEventListener('load', function() {
    hideMissionName();
    hideOperation();
    hideMeaning();
    hideMeaning2();
});

function hideTitle(){
    let title = document.querySelector('form');
    title.style.display = 'none';
}

function showMissionName(){
    let mission = document.querySelector('#missionText').value;
    let title = document.querySelector('#mission');
    title.style.display = 'inline';
    let showMission = document.querySelector('#showMission');
    showMission.append(mission)
}

function hideMissionName(){
    let title = document.querySelector('#mission');
    title.style.display = 'none';
}

function showOperation(){
    let title = document.querySelector('#operation');
    title.style.display = 'inline';
    let operationTextComplete = document.querySelector('#keyText').value;
    let operationTextArray = operationTextComplete.split(' ');
    operationTextArray.forEach(function(element, i) {
        operationTextArray[i] = element.slice(0,1);
    });
    let showOperation = document.querySelector('#showOperation');
    showOperation.append(operationTextArray.join('.') + '.');
}

function hideOperation(){
    let title = document.querySelector('#operation');
    title.style.display = 'none';
}

function showMeaning(){
    let meaning = document.querySelector('#meaning');
    meaning.style.display = 'inline';
    let operationTextComplete = document.querySelector('#keyText').value;
    let operationTextArray = operationTextComplete.split(' ');
    operationTextArray.forEach(function(element, i) {
        operationTextArray[i] = element.slice(0,1);
    });
    let meaningWithBr = '';
    for (let index = 0; index < operationTextArray.length; index++) {
        meaningWithBr += operationTextArray[index] + '\n' + '\n';
    }
    console.log(meaningWithBr);
    let showMeaning = document.querySelector('#showMeaning');
    showMeaning.append(meaningWithBr);
    delayTimer();
}

let timeoutID;
function delayTimer() {
  timeoutID = setTimeout(showMeaning2, 500);
}

function showMeaning2(){
    let meaning = document.querySelector('#meaning2');
    meaning.style.display = 'inline';
    let operationTextComplete = document.querySelector('#keyText').value;
    let operationTextArray = operationTextComplete.split(' ');
    operationTextArray.forEach(function(element, i) {
        operationTextArray[i] = element.slice(1);
    });
    let meaningWithBr = '';
    for (let index = 0; index < operationTextArray.length; index++) {
        meaningWithBr += operationTextArray[index] + '\n' + '\n';
    }
    console.log(meaningWithBr);
    let showMeaning = document.querySelector('#showMeaning2');
    showMeaning.append(meaningWithBr);
}

function hideMeaning(){
    let meaning = document.querySelector('#meaning');
    meaning.style.display = 'none';
}

function hideMeaning2(){
    let meaning = document.querySelector('#meaning2');
    meaning.style.display = 'none';
}

document.getElementById('convert').addEventListener('click', function(e){
    e.preventDefault();
    hideTitle();
    showMissionName();
});

document.getElementById('continue1').addEventListener('click', function(e){
    e.preventDefault();
    hideMissionName();
    showOperation();
});

document.getElementById('continue2').addEventListener('click', function(e){
    e.preventDefault();
    hideMissionName();
    hideOperation();
    showMeaning();
});

document.getElementById('continue3').addEventListener('click', function(e){
    location.reload();
});