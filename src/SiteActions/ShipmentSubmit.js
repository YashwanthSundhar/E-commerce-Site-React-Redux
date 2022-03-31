export const Shipment = (id,user,Address,state,city,pincode,secPhone)=>{
    return{
        type: "GET_USER_SHIPMENT",
        payloadUserId:id,
        payloadUserName:user,
        payloadAddress: Address,
        payloadState : state,
        payloadCity : city,
        payloadPincode : pincode,
        payloadSecondaryContact : secPhone,


    }
}