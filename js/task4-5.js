let main = document.getElementById('cart-items');
let div = document.querySelectorAll('div.item');
let elem = document.createElement('div');
elem.setAttribute('class', 'item');
let elemText = document.createTextNode('Canned Fish');
elem.appendChild(elemText);
let Elem2 = document.createElement('span');
Elem2.setAttribute('class', 'qty');
let Elem2Text = document.createTextNode('x 4');
Elem2.appendChild(Elem2Text);
elem.appendChild(Elem2);

for (let iterator of div) {
    if(iterator.textContent === 'Cola 1.5 l. x 1')  
    {
        main.removeChild(iterator);
    }
    
    if(iterator.textContent === 'Chocolate barx 3')
    {
        main.replaceChild(elem, iterator);
    }
}