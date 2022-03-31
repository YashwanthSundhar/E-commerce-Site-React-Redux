import { GET_USER_SHIPMENT } from './SiteAction'

const InitialState = {
    UserShipment:[],
}

const ShipmentDetails = (state = InitialState,action) =>{
    const ShipmentPayload ={
        Userid:action.payloadUserId,
        UserName:action.payloadUserName,
        Address:action.payloadAddress,
        State:action.payloadState,
        City:action.payloadCity,
        Pincode:action.payloadPincode,
        SecondaryContact:action.payloadSecondaryContact
    }

    switch(action.type){
        
        case GET_USER_SHIPMENT:
            return{
                UserShipment : [...state.UserShipment,ShipmentPayload]
            }
        default:
            return state
    }
}

export default ShipmentDetails