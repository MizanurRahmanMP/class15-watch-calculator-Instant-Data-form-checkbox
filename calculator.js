


let cal_data = [];
let velGet = (vel) =>{
    
    cal_data.push(vel);

    document.querySelector('.top_monitor').innerHTML = cal_data.join('');
    document.querySelector('.main_monitor').innerHTML = 0;

};


let allclear = () =>{

    cal_data = [];
    document.querySelector('.top_monitor').innerHTML = 0;
    document.querySelector('.main_monitor').innerHTML = '';
};

let back = () =>{

    cal_data.pop();
    document.querySelector('.top_monitor').innerHTML = cal_data.join('');
}

let finalres = () =>{

    let call_sting = cal_data.join('');

    document.querySelector('.main_monitor').innerHTML = eval(call_sting);
};


