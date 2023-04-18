import React, {useState} from 'react'

const searchBar = () => {
  
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setSearchInput(event.target.name);


    // const handleSubmit = (event) => {
    //   //prevent page from refreshing on form submission
    //   event.preventDefault();

    // };
  };
  return (
  <div className='searchbar'>
      {/* <form onSubmit={handleSubmit}> */}

      <input
        type="search"
        placeholder="Search..."
        onChange={handleChange}
        value={searchInput} />


      {/* </form>  */}

      </div>
  )

}

export default searchBar;