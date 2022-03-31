export const Add_Item = (ProductName,ProductId,Id,Username,ProductSize,ProductQtn,ProductPrice) =>{
    return{
        type:"ADD_TO_CART",
        payloadProductName: ProductName,
        payloadId:ProductId,
        payloadUserId:Id,
        payloadUserName:Username,
        PayloadSize:ProductSize,
        payloadQuantity:ProductQtn,
        PayloadPrice:ProductPrice,
        payloadDefaultPrice:ProductPrice
    }
}