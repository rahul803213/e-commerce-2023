import React from "react";
import CollectionMenu from "../collection-menu/collection-menu.component";
import { useNavigate } from "react-router";
import './collection-preview.styles.scss';

const CollectionPreview = ({title,items}) => {

const navigate=useNavigate();
return(
    <div className="collection-preview">
   <h2 className="collection-preview-title" onClick={()=>navigate(`/shop/${title.toLowerCase()}`)}>{title}</h2>
   <div className="collection-preview-card-group">
  {items.filter((item,idx)=>idx<4).map((item)=>(
    
   <CollectionMenu key={item.id} item={item} title={title} />
    
    ))}
    </div>
    </div>
)



}

export default CollectionPreview;