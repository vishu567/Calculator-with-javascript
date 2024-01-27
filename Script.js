let input = document.getElementById('InputBox');
let buttons = document.querySelectorAll('button');
let string = "";
for(let i = 0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click', function()
    {

        if(buttons[i].innerText=='=')
        {
            string=eval(string);
            input.value = string;
        }
        else if(buttons[i].innerText=='AC'){
            string= "";
            input.value = string;
        }
        else if(buttons[i].innerText=='DEL'){
            string=string.substring(0,string.length-1);
            input.value = string;
        }
        else
        {
            string+=buttons[i].innerHTML;
            input.value = string;
        }
    });
}
