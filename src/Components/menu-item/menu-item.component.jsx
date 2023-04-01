import React from "react";
import { useNavigate} from "react-router-dom";
import './menu-item.styles.scss';
const MenuItem = (props) =>{
    console.log(props);
    //console.log(useMatch())
    const navigate=useNavigate();
  
   return(
    
    <div 

    onClick={()=>{navigate(`${props.linkUrl}`)}} 

    
    className={`${props.size} menu-item`}>

    <div className="background-image" 
        style={{
        backgroundImage:`url(${props.imageUrl})`,
        
    }}
    />
    
    
    
    {/*directory contains menu-item*/}
    <div className="content">{/* //menu item has some content */}
        <h1 className="title">{props.title.toUpperCase()} </h1>{/* //title content */}
        <span className="sub-title">Shop Now</span>{/* //sub title content */}
       
    </div>
</div>

   )
}

export default MenuItem;