export const RemoveCart = (number,NetAmount,qty) =>
{
    return{
        type:"REMOVE_FROM_CART",
        payloadRemove:number,
        payloadAmt: NetAmount,
        payloadQty: qty
    

    }
}