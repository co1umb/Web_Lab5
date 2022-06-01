//task 1
const h2 = document.getElementById('h2');
const p = document.querySelector('.p-text');

//для h2 
const changeColor = (el) => {
    if(el.style.backgroundColor == 'red'){ 
        el.style.color = 'white';
        el.style.backgroundColor='blue';
    }else{
        el.style.backgroundColor='red';
        el.style.color = 'black';    
    }
};
h2.addEventListener('click', () => changeColor(h2));

//для p
const changeColor2 = (el) => {
    if(el.style.backgroundColor == 'green'){ 
        el.style.color = 'white';
        el.style.backgroundColor='purple';
    }else{
        el.style.backgroundColor='green';
        el.style.color = 'black';    
    }
};

p.addEventListener('click', () => changeColor2(p));


//task 2
const img = document.getElementById('img');

function makeBig() {
    img.style.width="35%";
  }
  function makeSmall() {
    img.style.width="15%";
  }
  function deleteImage() {
    image.innerHTML = "";
  }
  function addImage(){
    document.getElementById("image").innerHTML="<a id='image'><img id='img' src='Gdansk.jpg'></a>";
  }