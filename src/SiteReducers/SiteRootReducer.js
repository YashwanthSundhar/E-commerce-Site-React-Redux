import SiteOverview from "./SiteOverview";
import { combineReducers } from "redux";
import CartOverview from "./SiteCart";
import ShipmentDetails from './Shipment'

const SiteRootReducer =  combineReducers({
    SiteOverview,
    CartOverview,
    ShipmentDetails
})
export default SiteRootReducer