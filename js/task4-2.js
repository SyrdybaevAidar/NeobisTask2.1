let elements = document.getElementsByClassName("element");
for(elem in elements)
{
    elements[elem].style.color='red';
    if(elem > elements.length / 2 - 1)
    {
        elements[elem].style.color='green';
    }
}