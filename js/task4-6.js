let ul = document.getElementById('ul');

while(true)
{   
    let input = prompt('Please, enter task', '');
    if(input === '' || input === null)
    {
        break;
    }
    let elem = document.createElement('li');
    let text = document.createTextNode(input);
    elem.appendChild(text);
    ul.appendChild(elem);
}

