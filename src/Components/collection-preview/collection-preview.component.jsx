import React from "react";
import CollectionMenu from "../collection-menu/collection-menu.component";
import './collection-preview.styles.scss';

const CollectionPreview = ({title,items}) => {


return(
    <div className="collection-preview">
   <h2 className="collection-preview-title">{title}</h2>
   <div className="collection-preview-card-group">
  {items.filter((item,idx)=>idx<4).map((item)=>(
    
   <CollectionMenu key={item.id} item={item} />
    
    ))}
    </div>
    </div>
)



}

export default CollectionPreview;