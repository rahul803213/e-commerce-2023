import styled from "styled-components";


export const PaymentLoginContainer = styled.div`

height:100%;
width:60%;
border:1px solid black;
padding-bottom:15px;
.bottom-line{
    padding:0 30px;
}
`

export const PaymentHeaderContainer = styled.div`
height:60px;
background-color:teal;
display:flex;
flex-direction:row;
padding-left:40px;
alignItems:center;



.slno{
   height:40%;
    margin:10px;
    margin-top:15px;
    padding:2px 6px;
    background-color:white;
    font-weigth:bold;
    
    color:black;
}

.title{
    margin:10px;
font-weight:bold;
color:white;
font-size:20px;

}
`

export const PaymentLoginBodyContainer = styled.div`
height:200px;
display: flex;
flex-direction:row;
justify-content:center;
align-item:center;
margin:0px 30px;
align-content:space-between;



`
export const PaymentLoginBodyDetailContainer = styled.div`
width:50%;
padding:20px 0px;
line-height: 1.9;
`

export const PaymentLoginExtraDetailContainer = styled.div`
width:50%;
padding:20px 20px;
line-height: 1.9;
display:flex;
flex-direction:column;
`
