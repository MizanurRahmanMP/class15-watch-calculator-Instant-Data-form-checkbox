
//Get elements

const sec = document.querySelector('.s')
const min = document.querySelector('.m')
const hour = document.querySelector('.h')


setInterval(() =>{

    let time = new Date();
    let cu_sec = time.getSeconds();
    let cu_min = time.getMinutes();
    let cu_hour = time.getHours();
    sec.style.transform = ` rotate( ${ clockstick(60, cu_sec) }deg) `;
    min.style.transform = ` rotate( ${ clockstick(60, cu_min) }deg) `;
    hour.style.transform = ` rotate( ${ clockstick(12, cu_hour) }deg) `;

}, 1000);

function clockstick(time, current){

    return (360 * current) / time;
};





// // Get element
const ss = document.querySelector('.ss');
const mm = document.querySelector('.mm');
const hh = document.querySelector('.hh');



setInterval(() =>{

    let time = new Date();
    let courrent_sec = time.getSeconds();
    let courrent_min = time.getMinutes();
    let courrent_hour = time.getHours();
    
    ss.style.transform = `rotate( ${round(60, courrent_sec)}deg )`;
    mm.style.transform = `rotate( ${round(60, courrent_min)}deg )  `;
    hh.style.transform = `rotate( ${round(12, courrent_hour)}deg ) `;

}, 1000);

function round( time, current ){

    return ( 360 * current )/ time;
};



// let time = new Date();
//   let secend = time.getSeconds();
//   let munits = time.getMinutes();
//   let hour = time.getHours();
//   let rotale_s = (360 * secend) / 60;
//   let rotale_m = (360 * munits) / 60 + rotale_s / 60;
//   let rotale_h = (360 * hour) / 12 + rotale_m / 12;


