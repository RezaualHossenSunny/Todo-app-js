let input=document.querySelector('.input');
console.log(input);

let btn1=document.querySelector('.btn1');
console.log(btn1);
let ul=document.querySelector('.ul');
console.log(ul);



btn1.addEventListener('click', function(){
 
    if(input.value==''){
        alert('please input value')
    }else{
    

        let li =document.createElement('li');
        let span=document.createElement('span');
       li.innerHTML=input.value;
       span.innerHTML='  X'
       li.appendChild(span);
      ul.appendChild(li);
      span.style.color=('red')
    }
})

ul.addEventListener('click' ,function(e){
    if(e.target.tagName=="LI"){
        alert('please colse button click')

    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove()
       
    }
})