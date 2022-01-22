let xhttp= new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readystate==4 && this.status==200){
        //typical action to be performed when the document is raedy;
        console.log('res', JSON.parse(xhttp.response));
    }
};
xhttp.open("GET", 'https://api.spacexdata.com/v4/launches',true);
xhttp.send();

//-------------

fetch('https://api.spacexdata.com/v4/launches').then(res=> res.json()).then(resp=>{
    console.log('fetch resp',resp);
    // for (let rocket of resp){
        // console.log('rocket',rocket);
    //}
}).catch(err=>console.log('err',err)); // exception handelling

console.log('API call made');