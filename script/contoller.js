import details from ".script./logic";
window.addEventListener('load', bindevents);

function bindevents(){
    document.getElementById('calculate_emi').addEventListener('click', compute);
}

function createPTag(key, result){
    const pTag = document.createElement('p');
    pTag.innerText = `${key} is ${result}`;
    return pTag;
}

function compute(){
    const loanamount=parseFloat(document.getElementById('loanamount').value);
    details.loanamount=loanamount;

    const interestrate=parseFloat(document.getElementById('interestrate').value);
    details.interestrate=interestrate;

    const loantenureyears=parseFloat(document.getElementById('loantenureyears').value);
    details.loantenureyears=loantenureyears;

    const div=document.getElementById('output');
    for(let key in details){
         if(typeof(details[key])==='function'){
             let result = details[key]();
             div.appendChild(createPTag(key, result));
         }
    
     }
}

