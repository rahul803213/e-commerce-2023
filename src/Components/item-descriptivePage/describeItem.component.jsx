import React from 'react'
import './describeItem.style.scss'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import {BsFillStarFill,BsInfoCircle} from 'react-icons/bs'
import CustomButton from '../custom-button/custom-button.component'
import { addItems } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import RelatedProduct from '../related-product/related-product.component'
import { createStructuredSelector } from 'reselect'
import { add_item_in_wishlist } from '../../redux/wishlist/wishlist.action'

import { selectWishlistItems } from '../../redux/wishlist/wishlist.selector'
import { isInWishList } from '../../redux/wishlist/wishlist.utils'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { firestore } from '../../firebase/firebase.utils'
import firebase from '../../firebase/firebase.utils'
import { PushCartItemsInDB } from '../../firebase/firebase.user'

// import { Scrollbars } from 'react-custom-scrollbars-2'; scrollbar use krna hai toh isko use kro

const DescribePage = (props) => {
  const navigate = useNavigate();
//console.log(props.user.id);
const param=useParams();
  //console.log({hi:param});
  const items = useSelector((state)=>
  state.shop.collections.find(collection=>collection.title.toLowerCase()==param.param1)
  .items.filter(a=>a.id==param.param2));
console.log("ITEM",props.wishlistItems);

const {imageUrl,name,price,description} =items[0];

  function handleOnClick() {
    document.querySelector('.more-description').style.height = 'min-content'
  }
  function handleOnLike() {
    props.add_item_in_wishlist(items[0]);
   // let likeColor = document.querySelector('.like')
  //  var presentItemInWishlist = props.wishlistItems.find(a=>a.id==items[0].id);
  //  console.log("hello",props.wishlistItems);
  //  alert(presentItemInWishlist);
  //  if(isInWishList(props.wishlistItems,items[0]))
   //   likeColor.setAttribute('fill','red')
   // else
   //   likeColor.setAttribute('fill','#fff')

   // console.log(props)
 
 //   alert('added to wishlist')
  }
  
  // props :- title,rate, count, price,
  return (
  <>
    <div className='detail-card'>
      <div className="image-section">
        <div className='likeBox' onClick={()=> props.add_item_in_wishlist(items[0])}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 16">
          <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" 
          className="like" fill={`${isInWishList(props.wishlistItems,items[0]) ? 'red' : '#fff' } `} stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg>
        </div>
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`,
            width: '100%', height: '400px'
        }}
        />
        {/* <img src={imageUrl} alt="imageUrl" /> */}
       
      </div>
    

      <div className="description-section">
        <h5 style={{color:'grey', margin: '5px 10px'}}>{name}</h5>
        <h3>{name} {description}</h3>
        <div style={{display: 'flex',margin:'10px 0'}}>
          <button style={{width:'50px', color:'white', background: 'green', outline: 'none', border: 'none', borderRadius: '5px',fontWeight: 'bolder', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>4.2<BsFillStarFill/> </button>
          <span style={{margin:'0 10px'}}>44 {props.rate} &amp; {props.count} reviews</span>
        </div>
        <div><b style={{color:'green'}}>Special price</b></div>
        <div style={{display:'flex', width:'fit-content', alignItems: 'center', justifyContent:'space-between',margin:'10px 0'}}>
            <h3>${price} </h3>
            <del style={{color: 'grey',margin:'0 10px'}}>${price*3}</del>
            <span style={{fontWeight:'bolder', color:'green',margin: '0 10px 0 0'}}>86% Off</span>
          <div style={{position:'relative'}}>
            <BsInfoCircle style={{cursor:'pointer'}} className='infoIcons'/>
              <div className='tooltip-box'>
                <h6 style={{marginBottom:'6px'}}>Price details</h6>
                <hr color='grey' style={{margin:'0'}}/>
                <div style={{display:'flex',margin:'4px 0', justifyContent: 'space-between', color:'grey'}}>
                  <span>Maximum Retail Price</span>
                  <del style={{color: 'grey',margin:'0 10px'}}>&#8377;{price*3}</del>
                </div>
                <div style={{display:'flex',margin:'4px 0', justifyContent: 'space-between', color:'grey'}}>
                  <span>Selling Price</span>
                  <del style={{color: 'grey',margin:'0 10px'}}>&#8377;{price*1.2}</del>
                </div>
                <hr color='grey' style={{margin:'0'}}/>
                <div style={{display:'flex', justifyContent: 'space-between',marginTop:'6px'}}>
                  <h6>Special Price</h6>
                  <span style={{color: 'grey',margin:'0 10px'}}>&#8377;{price}</span>
                </div>
              </div>
          </div>
        </div>
        <div style={{display:"flex",marginBottom:"50px"}}>
        <CustomButton yellow onClick={async ()=>{props.addItems(items[0]);
       // await firestore.doc('/users/')
       // PushCartItemsInDB(props.user.id,items[0]);
                
        
        }} style={{marginRight:"40px"}}>Add To Cart</CustomButton>
        <CustomButton yellow onClick={()=>{navigate('/checkout');props.addItems(items[0])}}  style={{}}>Buy Now</CustomButton>
        </div>
        
        <div className='more-description'>
          <h3 style={{padding:'20px', borderBottom:'1px solid rgb(236, 231, 231)'}}>Product Details</h3> 
          <div style={{display:'flex', flexDirection:'column', borderBottom:'1px solid rgb(236, 231, 231)'}}>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Type</span>
              <span className='child-l-70'>Henley Neck</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Sleeve</span>
              <span className='child-l-70'>Full Sleeve</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Fit</span>
              <span className='child-l-70'>Regular</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Fabric</span>
              <span className='child-l-70'>Cotton Blend</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Pack of</span>
              <span className='child-l-70'>1</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Style Code</span>
              <span className='child-l-70'>BMRHENFUL-Z14</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Neck Type</span>
              <span className='child-l-70'>Henley Neck</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Ideal For</span>
              <span className='child-l-70'>Men</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Size</span>
              <span className='child-l-70'>XXL</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Pattern</span>
              <span className='child-l-70'>Solid</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Suitable For</span>
              <span className='child-l-70'>Western wear</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Reversible</span>
              <span className='child-l-70'>No</span>
            </div>
            <div style={{display:'flex'}}>
              <span className='child-l-30'>Fabric Care</span>
              <span className='child-l-70'>Regular Machine Wash</span>
            </div>
          </div>
        </div>
        <button onClick={handleOnClick} style={{border:'none', width:'fit-content',color:'blue',background:'transparent' }}>see more</button>
      </div>
    </div>
    <RelatedProduct title={param.param1} />
  </>
  )
}
const MapDispatchToProps = dispatch =>({
  addItems: item => dispatch(addItems(item)),
  add_item_in_wishlist: item => dispatch(add_item_in_wishlist(item)),
 // isInWishList: item => dispatch(isInWishList(item))
})
const mapStateToProps =  createStructuredSelector({
  wishlistItems: selectWishlistItems,
  user: selectCurrentUser
}
)
export default connect(mapStateToProps,MapDispatchToProps)(DescribePage)