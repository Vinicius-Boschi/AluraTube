import styled from 'styled-components'

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }

  button:hover {
    opacity: 1;
  }

  svg {
    color: ${({ theme }) => theme.textColorBase};
  }
`

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