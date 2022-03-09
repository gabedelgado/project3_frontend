import { useParams } from "react-router-dom"
import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api"
import MapSearchBar from "./MapSearchBar"
import { useRef, useCallback, useState } from "react"
import {apidata} from "../apiresponse"
import TabsView from "./TabsView"

const mapContainerStyle = {
    width: "50vw",
    height: "88vh"
  }

const MapSearch = props => {
    const {lat, lng} = useParams()

    const [searchResults, setSearchResults] = useState(apidata.listings)
    const mapRef = useRef()
    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng})
    }, [])


    return (
        <div className="flex justify-between m-0 mx-2">
            <MapSearchBar setSearchResults={setSearchResults} panTo={panTo}/>
            <div>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={{lat: Number(lat), lng: Number(lng)}} onLoad={onMapLoad}>
                    {searchResults.map(listing => {
                        return <Marker key={listing.listing_id} position={{lat: listing.lat, lng: listing.lon}} label={{ color: 'black', fontWeight: 'bold', fontSize: '14px', text: listing.price }}></Marker>
                    })}
                </GoogleMap>
            </div>
            <div className=" w-[47vw] mr-3 mt-0 mb-0">
                <TabsView loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} searchResults={searchResults} setSearchResults={setSearchResults}/>
            </div>
        </div>
    )
}
export default MapSearch






