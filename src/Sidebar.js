import React, {useState} from 'react';
const Sidebar = ({data}) => {
    return(
        <>
            {data.map((item,idx)=> (
                <SideField item={item}/>
            ))}
        </>
    )

}
const SideField = ({item}) => {
    const [open,setOpen] = useState(false);
    if(item.type === 'folder') {
        return (
            <>
                <div onClick={()=> setOpen(!open)} style={{cursor: 'pointer'}}>
                    {open ? '📂' : '📁'} {item.name} 
                </div>
                {open && item.subMenu && <Sidebar data = {item.subMenu} /> }
            </>
        )
    } else {
        return (
            <div style = {{margin: '0 0 0 10px'}}>
                📄{item.name}
            </div>
        )
    }
}
export default Sidebar;