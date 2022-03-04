
import SearchBar from "./SearchBar"

const HomePage = () => {
  return (
    <div className=" mt-10 w-full flex flex-col h-96 items-center justify-around bg-home bg-cover">
    
      <div>
        <h1 className=" text-4xl text-white font-bold">Welcome to Zillow Clone!</h1>
      </div>
      <div>
        <p className=" text-xl text-white font-semibold">Find your home now!</p>
      </div>
      <div className=" w-full">
        <SearchBar />
      </div>
    
    </div>
  )
}

export default HomePage