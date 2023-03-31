import React from "react";
import './menu-item.styles.scss';
const MenuItem = ({title,imageUrl,size}) =>{
   return(
    <div 
    
    className={`${size} menu-item`}>

    <div className="background-image" 
        style={{
        backgroundImage:`url(${imageUrl})`,
        
    }}
    />
    
    
    
    {/*directory contains menu-item*/}
    <div className="content">{/* //menu item has some content */}
        <h1 className="title">{title.toUpperCase()} </h1>{/* //title content */}
        <span className="sub-title">Shop Now</span>{/* //sub title content */}
       
    </div>
</div>
   )
}

export default MenuItem;