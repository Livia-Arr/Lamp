const turnOnOff = document.getElementById ( 'turnOnOff' );

const lamp = document.getElementById ( 'lamp' );

function lampOn(){
    if (!isLampBroken()){
    Lamp.src = "./img/ligada.jpg";
    }
}

function lampOff(){
    if (!isLampBroken()){
    Lamp.src = "./img/desligada.jpg";
    }
}

function lampBroken(){
    Lamp.src = './img/quebrada.jpg';
}

function isLampBroken (){
    return Lamp.src.indexOf('quebrada') > -1
}

function lampOnOff(){
    if (turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}




turnOnOff.addEventListener( 'click', lampOnOff );

Lamp.addEventListener( 'mouseover', lampOn );
Lamp.addEventListener( 'mouseleave', lampOff );
Lamp.addEventListener('dblclick', lampBroken );