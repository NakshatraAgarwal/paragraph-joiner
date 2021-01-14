function get_paragraph_1(){
    var inputs=[];
    for(var i=1; i <=6; i++){
        inputs.push(document.getElementById("paral_input_box_"+i).value);
    }
    document.getElementById("show_paragraph_1").innerHTML=inputs.join(" ")
}
function get_paragraph_2(){
    var inputs=[];
    for(var i=1; i <=6; i++){
        inputs.push(document.getElementById("paral2_input_box_"+i).value);
    }
    document.getElementById("show_paragraph_2").innerHTML=inputs.join(" ")
}