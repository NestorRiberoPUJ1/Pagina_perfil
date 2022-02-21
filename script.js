function editProfile(element,name)
{
    var elementH1=document.querySelector(element);
    elementH1.innerText=name;
}
function connectionRequest(element,act)
{
    var elementPreview=document.querySelector(element);
    elementPreview.remove();
    var connectionNumber = document.querySelector(".connection-header #requests");
    var currentNumber = connectionNumber.innerText.match(/\d+/g).map(Number);
    connectionNumber.innerText= (currentNumber[0]-1);
    if(act==true)
    {
        connectionNumber = document.querySelector(".connection-header #your-connections");
        currentNumber = connectionNumber.innerText.match(/\d+/g).map(Number);
        connectionNumber.innerText= (currentNumber[0]+1);
    }
}