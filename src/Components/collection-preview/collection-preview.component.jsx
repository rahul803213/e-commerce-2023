import React from "react";
import CollectionMenu from "../collection-menu/collection-menu.component";
import './collection-preview.styles.scss';

const CollectionPreview = ({...collection}) => {
 //console.log("collectionpreview",collection)
 const title=collection.title;
 //console.log("step 5")
//const navigate=useNavigate();
return(
    // <div className="collection-preview">
    <div>
    <h1 style={{justifyContent:"center"}}>{title}</h1>
   <div className="collection-preview-card-group">
  
  {    collection.items.filter((item,idx)=>idx<4).map((item)=>(
    
   <CollectionMenu key={item.id} item={item}  title={title} />
    
    ))
    
     
    
    }
    </div>
    </div>
    // </div>
)



}

export default CollectionPreview;