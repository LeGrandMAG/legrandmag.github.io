function handlePointerDown(e, setDrag)
{
    setDrag(prev =>!prev)
    onpointerdown(e)
}

function handlePointerMove(e,isDragging)
{
    if(isDragging){
        return 0;
    }
}
function onPointerUp(e)
{

}

function onpointerdown(e)
{

}



