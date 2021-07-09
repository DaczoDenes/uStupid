const country_options = document.getElementsByClassName("country_option");
const submit_btn = document.getElementById("submit");

let country_options_arr = Array.prototype.slice.call(country_options);

function main_loop(){
    console.log("in");
    country_options_arr.forEach(function(element){
        if(element.selected == true){
            console.log(element.value);
        }
    });
}

submit_btn.onclick = main_loop;

