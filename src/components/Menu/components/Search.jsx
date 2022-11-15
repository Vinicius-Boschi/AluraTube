import { StyledSearch } from "../../../assets/styles/Search"

export default function Search({filterValue, setFilterValue}) {
  const searchValue = filterValue
  const setSearchValue = setFilterValue

  return (
    <StyledSearch>
      <input type="text" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </StyledSearch>
  )
}