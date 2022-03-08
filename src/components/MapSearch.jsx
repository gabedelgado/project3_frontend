import { useParams } from "react-router-dom"
import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api"
import MapSearchBar from "./MapSearchBar"
import { useRef, useCallback } from "react"
import {apidata} from "../apiresponse"
import TabsView from "./TabsView"

const mapContainerStyle = {
    width: "60vw",
    height: "90vh"
  }

const MapSearch = props => {
    const {lat, lng} = useParams()
    console.log(lat)
    console.log(lng)
    const mapRef = useRef()
    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

    return (
        <div className="flex justify-between">
            <MapSearchBar />
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={{lat: Number(lat), lng: Number(lng)}} onLoad={onMapLoad}>
                {apidata.listings.map(listing => {
                    return <Marker key={listing.listing_id} position={{lat: listing.lat, lng: listing.lon}}></Marker>
                })}

            </GoogleMap>
            <div className=" w-[39vw]">
                <TabsView loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/>
            </div>
        </div>
    )
}
export default MapSearch






