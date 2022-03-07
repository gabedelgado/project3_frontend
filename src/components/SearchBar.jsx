import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css";

const SearchBar = () => { 
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete()
   
    return (ready) ? (
        <Combobox onSelect={address => console.log(address)} >
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


export default SearchBar