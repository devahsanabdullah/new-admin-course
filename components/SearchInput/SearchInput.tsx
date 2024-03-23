import React from 'react'
import Icon from "@/components/Icon"
import useDebounce from '@/components/hook/useDebounce'
const SearchInput = ({ setSearchText, setCurrentPage }: any) => {
  const [searchValue, setSearchValue] = React.useState<string>('')
  const debouncedSearchText = useDebounce({ value: searchValue })
  React.useEffect(() => {
    setSearchText(debouncedSearchText)
    setCurrentPage(1)
  }, [setSearchText, debouncedSearchText])
  return (
    <form className="flex items-center pl-5 mb-4 w-full  m">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon
                    className="transition-colors group-hover:fill-primary dark:fill-white"
                    name="search"
                />
        </div>
        <input
          type="text"
          id="simple-search"
          className="h-12 inner-search w-full text-lg bg-[#edf1f6] border-none rounded-full outline-none   focus:outline-none placeholder:text-2xl placeholder:font-headingBook pl-12 bg-grey-light/20 px-14 pr-4  text-menu text-black transition-colors placeholder:text-grey dark:bg-grey-light/[.03] dark:text-white"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchInput
