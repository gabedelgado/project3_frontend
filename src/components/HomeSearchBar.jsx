import usePlacesAutocomplete, {getGeocode, getLatLng, getZipCode} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css";
import { useNavigate } from "react-router-dom";

const HomeSearchBar = () => { 
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete()
    const navigate = useNavigate()
    const addressSelected = async (address) => {
        const results = await getGeocode({address});
        const zip = await getZipCode(results[0])
        console.log(zip)
        const {lat,lng} = await getLatLng(results[0])
        
        navigate(`/homes/${lat}/${lng}`)
    }

    return (ready) ? (
        <Combobox onSelect={(address) => addressSelected(address)} >
            <ComboboxInput className=" max-w-[90%] p-4 w-full border rounded h-16 text-xl" value={value} onChange={e => setValue(e.target.value)} disabled={!ready} placeholder="Enter an address, city, neighborhood, or ZIP code"/>
            <ComboboxPopover>
                {status === "OK" && data.map(({description, place_id}) => <ComboboxOption value={description} key={place_id}/>)}  
            </ComboboxPopover>
        </Combobox>
    ) :
    (
        <div>Loading map search...</div>
    )
}


export default HomeSearchBar