document.addEventListener('keyup', keyUpEvents);

function keyUpEvents(evt) {

  switch(evt.code){
    case 'Escape':
      winMenu.close();
      break;
    default:
      break;
  }

}
