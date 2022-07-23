const list = [
    "../images/img1.png",
    "../images/img2.png",
    "../images/img3.jpeg",
];

let imgN = 0;

const img = document.getElementById('main');
const [leftArrow,rightArrow] = document.getElementsByTagName('span');

const p = document.createElement('p');
p.classList.add('addClass');

const div = document.getElementById('photo');
div.insertBefore(p,img.nextElementSibling);

function setImage(){
    img.src = list[imgN];

    p.textContent = `${imgN + 1} / ${list.length}`;

}

document.addEventListener('DOMContentLoaded',function(){
    
    setImage();
     
});

rightArrow.addEventListener('click',function(){
    imgN ++;
    if(imgN >= list.length){
        imgN = 0;
    }
    
    setImage();
});
leftArrow.addEventListener('click',function(){
    imgN --;
    if(imgN < 0){
        imgN = list.length - 1;
    }
    
    setImage();

});

const button = document.createElement('button');
button.textContent = '自動再生する';
button.classList.add('addClass2');
div.appendChild(button);

let autoplay = false;

button.addEventListener('click',function(){
    if(autoplay == false){
        button.textContent = '停止する';
        autoplay = setInterval(function(){
            imgN ++;
        
            if(imgN >= list.length){
                imgN = 0;
            }
        
            setImage();  
        
        },1000);
    }else{
        clearInterval(autoplay);
        autoplay = false;
        button.textContent = '自動再生する';
    }
    
});