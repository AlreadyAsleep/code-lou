var currentSelection = 0
displayGallery(currentSelection);

function incrementGallery(){
  currentSelection = (currentSelection + 1) % document.querySelectorAll('img').length;
  displayGallery(currentSelection);
}

function decrementGallery(){
  currentSelection = (currentSelection <= 0 ? document.querySelectorAll('img').length : currentSelection) - 1;
  displayGallery(currentSelection);
}

function displayGallery(index){
  let images = document.querySelectorAll('img');
  let imageInfos = document.querySelectorAll('#image-info > p');
  for(let i = 0; i < images.length; i++){
    images[i].style.display = 'none';
    imageInfos[i].style.display = 'none';
  }
  images[index].style.display = 'grid';
  imageInfos[index].style.display = 'grid';

}