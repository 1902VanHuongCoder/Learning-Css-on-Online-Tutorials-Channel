let input = document.getElementById('result');
let button = document.querySelectorAll('button');
let string = "";
const arr = Array.from(button);

    arr.forEach(button => {
        button.addEventListener('click', (e)=>{
            if(e.target.innerHTML == "=")
            {
                try{
                    string = eval(string);
                    input.value = string;
                } catch(err)
                {
                    string = err.message;
                    input.value = string;
                }
            }
            else if(e.target.innerHTML == "AC")
            {
                string = "";
                input.value = string;
            }
            else if(e.target.innerHTML == "DEL")
            {
                string = string.substring(0,string.length-1);
                input.value = string;
            }
            else
            {
                string += e.target.innerHTML;
                input.value = string;
            }
        })
    })    
