
let newList = new NoteList(document.getElementById('app'), 'my');

document.getElementById('action').addEventListener('click', function () {
    newList.add(prompt('Enter tour tasks'));

});