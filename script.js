document.getElementById('new').onclick=function(event){

    const newContainer=document.getElementById('newContainer');
    if(newContainer.style.right==='-670px'){        
        newContainer.style.right='0';
    }
    else{
        newContainer.style.right='-670px'
    }
    event.stopPropagation();
}