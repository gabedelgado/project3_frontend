// THIS COMPONENT IS FROM FREE & OPEN SOURCE TAILWIND EXTENSION https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/ 


const SearchBar = () => {
  return (
    <div class="relative flex w-1/2 flex-wrap items-stretch m-auto mb-3">
      <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"/>
      <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
        <i class="fas fa-search"></i>
      </span>
    </div>
    )
}

export default SearchBar