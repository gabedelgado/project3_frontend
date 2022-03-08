import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css";

const MapSearchBar = () => { 
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({requestOptions: {componentRestrictions: {country: "us"}}})
   
    const addressSelected = async (address) => {
        const results = await getGeocode({address});
        console.log(results)
        const {lat,lng} = await getLatLng(results[0])
        console.log(lat)
        console.log(lng)
    }
    return (ready) ? (
        <Combobox onSelect={address => addressSelected(address)} >
            <ComboboxInput className=" z-10 max-w-[30%] p-4 w-full border rounded h-16 text-xl absolute left-[15%] top-[10%]" value={value} onChange={e => setValue(e.target.value)} disabled={!ready} placeholder="Enter an address, city, neighborhood, or ZIP code"/>
            <ComboboxPopover>
                {status === "OK" && data.map(({description, place_id}) => <ComboboxOption value={description} key={place_id}/>)}  
            </ComboboxPopover>
        </Combobox>
    ) :
    (
        <div>Loading map search...</div>
    )
}


export default MapSearchBar