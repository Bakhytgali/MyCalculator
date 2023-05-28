const screen = document.getElementById('screen'); 

const buttons = document.querySelectorAll('.number-button'); 
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.value;
    screen.value += value;
  });
});

const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.value;
    screen.value += value;
  })
})

const cleanAll = document.querySelector('#cleanAll'); 
cleanAll.addEventListener('click', () => {
  screen.value = '';  
});

const clean = document.querySelector('#clean'); 
clean.addEventListener('click', () => {
  const currentValue = screen.value;
  screen.value = currentValue.slice(0, -1);
});

const mod = document.querySelector('#mod');
mod.addEventListener('click', () => {
  screen.value += '%';
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
  screen.value = eval(screen.value);
});

