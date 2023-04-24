import styled from 'styled-components';

export const DeliveryAddressContainer = styled.div`
display:flex;
flex-direction:row;
height:auto;
padding:20px;
width:100%;
line-hieght:3;
justify-content:space-between;
`

export const DeliveryAddressBodyContainer = styled.div`
display:flex;
flex-direction:column;
align-item:center;

.first_row{
    display:flex;
    flex-direction:row;
    line-height:1.6;
    .name{
        font-weight:bold;
        margin-right: 20px;
    }
    .address_type{
        margin-right:20px;
        background-color:black;
        color:white;
    }
}
.actual_address{
    margin-left:28px;
    margin-bottom:40px

}

`