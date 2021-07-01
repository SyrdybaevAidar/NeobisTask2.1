let ToDo = document.getElementById('todo-list');
var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

for(task of tasks)
{
    var elem = document.createElement("li");
    var elemText = document.createTextNode(task);
    elem.appendChild(elemText);
    elem.id = 'task';
    ToDo.appendChild(elem);
}
