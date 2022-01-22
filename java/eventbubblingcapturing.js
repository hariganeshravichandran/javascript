//syntax for addventlistener
//addeventlistner(event,function,usecapture)
//usecapture-boolean value (true or false) and default value is false
//third argument default value is false - event bubbling
//false ----> event bubbling
//true ----->event capturing

// event bubbling event capturing

function clickEvt(){
    console.log('btn is clicked')
}

function doubleClickEvt(){
    console.log('double click is clicked')
}

function mouseOverEvt(){
    console.log('mouse over event')
}

function mouseOutEvt(){
    console.log('mouse out event')
}

//console.log(docu,ment.getelementById('btn'));  //print element

document.getElementById('btn').addEventListener('mouseover',()=>{
   console.log('mouse over in addEventListner');
})

document.getElementById('btn').addEventListener('mouseout',mouseOutEvt);
document.getElementById('btn').addEventListener('click',clickEvt);

function divClicked(e){
    console.log('event target in div',e.target)
    console.log('event current target in div',e.currentTarget)

    console.log('div is clicked')
}

function spanclicked(){
    console.log('span clicked')
}

function btnclicked(e){
    console.log(e)
    console.log('event target',e.target)
    //e.stoppropagation()
    console.log('btn is clicked');
}

document.getElementById('listenerBtn').addEventListener('click',(event)=>{
    //event.stoppropagation();
    console.log('capture btn is clicked')
})

//event bubbling
document.getElementById('divBubble').addEventListener('click',()=>{
  console.log('div is clicked');
},false);

document.getElementById('spanBubble').addEventListener('click',()=>{
    console.log('span is clicked');
  },false);
  

//event capturing
document.getElementById('divCapture').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('div is clicked')
},true);

document.getElementById('spanCapture').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('span is clicked')
})










