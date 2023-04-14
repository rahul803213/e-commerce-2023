import React from "react";

import { useParams } from "react-router";
import { useSelector } from "react-redux";

import CollectionMenu from "../../Components/collection-menu/collection-menu.component";
import './collection-page.styles.scss'

//var p;

const CollectionPage = () =>{
    const p = useParams();
   
    console.log("p",p.param)

//use selctor is used here
const items = useSelector((state)=>state.shop.collections.find(collection=>collection.title.toLowerCase()===p.param));
console.log("shop state",items);
const title =items.title;
 console.log({'title':title})

//use selector end here


    
   // console.log({"title":title});
   // p=param.param;
   // console.log(param);
   // console.log(collection)
    return (
<>
    <div className="collection-page-parent">
        <h2 style={{padding: '0 20px'}}> {items.title}</h2>      
        <div className="collection-page">
            {
                items.items.map(collection => 
                <CollectionMenu key={collection.id} item={collection} title={title}/>)
            }
        </div>
    </div>
</> 
    )
}



export default (CollectionPage);