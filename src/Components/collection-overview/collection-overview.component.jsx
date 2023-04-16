import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";
import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => {
    // console.log('collection-overview',collections)
    return <div className="collection-overview">
        { collections.map(({id,...collection})=>(
        <CollectionPreview key={id} {...collection}  />
    ))}
    </div>
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
 })
 export default connect(mapStateToProps)(CollectionOverview);