document.getElementById('new').onclick=function(event){
    const newContainer=document.getElementById('newContainer');
    if(newContainer.style.right==='-670px'){        
        newContainer.style.right='0';
        overlay.style.display = 'block'; 
    }
    else{
        newContainer.style.right='-670px'
        overlay.style.display = 'none'; 
    }
    event.stopPropagation();
}
document.getElementById('body').onclick=function()
{
    const newContainer=document.getElementById('newContainer');
    if(newContainer.style.right==='0px'){        
        newContainer.style.right='-670px';
        overlay.style.display = 'none';
    }
}
document.getElementById('newContainer').onclick = function(event) {
    event.stopPropagation();
};