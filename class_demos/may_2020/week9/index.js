function validateInput(form){
  let result = '';
  console.log(form);

  var valid = document.getElementById('nameInput').value !== 'Ben' && document.getElementById('reasonsList').value !== 6;
  
  if(valid){
    result = 'Success';
  }
  else{
    result = 'Failure: Ben is not allowed and not cool';
  }
 
  form.reset();
  return result;
}

function activateNameInput(){
  document.getElementById('nameInput').disabled = false;
}