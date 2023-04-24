import React from "react";
import './search-bar.styles.scss'
import { final_search_data } from "../../redux/shop/shop.data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectString } from "../../redux/search/search.selectors";
import { toggleSearch } from "../../redux/search/search.actions";


const MapDispatchToProps = dispatch =>({
    toggleSearch: item => dispatch(toggleSearch(item))
})
export  const Search =connect((
   createStructuredSelector({
    string: selectString
   }))
)(({placeholder,handleChange,show,string}) => (
        <input placeholder={placeholder} 
        onChange={handleChange}
        type="search"
        className={`${string ? 'no-show' : 'show'} search-bar`} />
    )
)

export const SearchCard =connect((
    createStructuredSelector({
     string: selectString
    })),MapDispatchToProps
 )(({string,toggleSearch}) =>{
    const filtered_search_data=final_search_data.filter(item => item.name.toLowerCase().includes(string.toLowerCase()))
   
    const show=false;
    const Navigate = useNavigate();
    const [ghost,setGhost] =  useState(false);
     // if(search) {setGhost('')}

    return (
        string ?
        <div className={`search-card ${ghost ? 'ghost' : ''}`}>
        
           
           {    
            filtered_search_data.map(a => 
            { return(  
               <div onClick={()=> {Navigate(`/shop/${a.title.toLowerCase()}/${a.id}`);  toggleSearch('')   }} 
               key={a.id} className="search-items" >
               <img src={a.imageUrl} alt="search-image" height="80px" className="search-image" />
                <span className="name">{a.name}</span>
                      </div>
            
           
            )
            }
            )
           
           

           }
          
              
            
        </div>
        :null
    )
}
 )



