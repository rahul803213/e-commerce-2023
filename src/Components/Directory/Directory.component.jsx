import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import './Directory.styles.scss';
const Directory  = ({sections}) => 
    

  {
      
//const {id,title,imageUrl,linkUrl,size}=this.state.sections;
      return  <div className="directory">{/*home page contains directory*/}
       {sections.map(({id,...otherSectionProps})=>(
        <MenuItem key={id} {...otherSectionProps} />
       ))}
       
    </div>
    }


const mapStateToProps = createStructuredSelector({
  sections: selectSections
})
export default connect(mapStateToProps)(Directory);