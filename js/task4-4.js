let art = document.getElementsByTagName('p');
let article = document.querySelector("article");

for(element of art)
{   
    let newelem = document.createElement('hr');
    article.insertBefore(newelem, element)
}