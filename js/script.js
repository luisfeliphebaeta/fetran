function confVel() {
    vMx = document.getElementById("velMax").value;
    vC = document.getElementById("velCar").value;

    vC = Number(vC);
    vMx = Number(vMx);

    if (vC <= vMx) {
        document.getElementById('res').innerHTML = "Abaixo do limite de velocidade";
        document.getElementById('val').innerHTML = "R$ 0";
    } 
    else if ( vC >= ++vMx && vC <= vMx+6) {
        document.getElementById('res').innerHTML = "ADVERTÊNCIA.";
        document.getElementById('val').innerHTML = "R$ 0";
    }
    else if (vC >= vMx+7 && vC <= (vMx*1.20)) {
        document.getElementById('res').innerHTML = "INFRAÇÃO MÉIA COMETIDA.";
        document.getElementById('val').innerHTML = "R$ 130,16";
    }
    else if (vC > (vMx*1.20) && vC <= (vMx*1.50)) {
        document.getElementById('res').innerHTML = "INFRAÇÃO GRAVE COMETIDA.";
        document.getElementById('val').innerHTML = "R$ 195,23";
    }
    else {
        document.getElementById('res').innerHTML = "INFRAÇÃO GRAVÍSSIMA 3X, Penalidade de suspensão do direito de dirigir.";
        document.getElementById('val').innerHTML = "R$ 293,47 x 3 = R$ 880,41";
    }
}