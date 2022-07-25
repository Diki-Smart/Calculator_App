let input= "";



const reset =(btn) =>{

    document.getElementById("output").value = ''; 

    input = ""
}

back =(btn)=>{

}

ShowValue=(button)=> 
{
    input = input + button.value;
    // console.log(input);
    document.getElementById("output").value = input;

    
}
// reset(button);

function QuickMatch (btn)
{
    document.getElementById("output").value = eval(input);
    ;    
}
