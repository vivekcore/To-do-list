
const addBtn = document.querySelector('.send')
const delBtn = document.querySelector('.del');
const delList = document.querySelectorAll('li');
const imgbtn = document.querySelector('.imgbtn');
const tasksContainer = document.querySelector('.tasksContainer');


let taskContent;

function addTask(){
   const message = textArea.value.trim();
    if (!message) return;

    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const image = document.createElement('img');
    const div2 = document.createElement('div');

    div.appendChild(paragraph);
    div.appendChild(div2);
    div.appendChild(button);
    button.appendChild(image);

    div.className = "taskbox";

    div2.className = 'complete';
   
    button.className = "imgbtn";
    image.src = "./img/bin.png"
    paragraph.className = 'p';
    
    paragraph.textContent = message;

    tasksContainer.appendChild(div);
    textArea.value = '';
}
addBtn.addEventListener('click',addTask);

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();

    addTask();
  }
});

delBtn.addEventListener('click',()=>{
   const taskbox = tasks.querySelectorAll('.taskbox');
   taskbox.forEach(div => div.remove());
})

tasksContainer.addEventListener('click', function (event) {

  if (event.target.closest('.imgbtn')) {
    const taskBox = event.target.closest('.taskbox');
    if (taskBox) {
      taskBox.remove();
    }
  }
  if(event.target.closest('.complete')){
    const comp = event.target.closest('.complete');
    
    if(comp){
      comp.classList.toggle('cmp1');
       
    }
    }
});

filtr.addEventListener('change', function(event) {
    const filterValue = event.target.value;
    const taskBoxes = tasksContainer.querySelectorAll('.taskbox');

    taskBoxes.forEach(taskBox => {
        const complete = taskBox.querySelector('.complete');
        const isDone = complete.classList.contains('cmp1');

        if (filterValue === 'all') {
            taskBox.style.display = 'flex';
        } else if (filterValue === 'done' && isDone) {
            taskBox.style.display = 'flex';
        } else if (filterValue === 'notDone' && !isDone) {
            taskBox.style.display = 'flex';
        } else {
            taskBox.style.display = 'none';
        }
    });
});
