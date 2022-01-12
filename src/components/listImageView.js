import { loadImagesFromUnsplash, searchImagesFromUnsplash } from './api'
import Image from './image'
import { useState, useEffect } from 'react'



const ListImagesComponent = (props) => {
  const [query, setQuery] = useState()
  // When we use useState hook [x1, x2] = useState()
  // x1 is a variable, and x2 is the function that can set or change the variable
  const [listImages, setListImages] = useState([])
  const loadingMessage = "Trying to load the images... Please wait"

  const searchImagedByQuery = () => {
    // If query is not empty only we do the search
    if (query) {
      console.log("searchImagedByQuery called")
      // Empyting the Images list so that search will be happening
      setListImages([])
      searchImagesFromUnsplash(setListImages, query)
    } else {
      alert("Enter some query to search for !!")
    }
  }
  
  // If dependencies empty the when app is loading it will load
  useEffect(() => {
    console.log("UseEffect called")
    loadImagesFromUnsplash(setListImages)
  }, [])

  return (
    <div className="App">
    {/* Search bar */}
      <div className='header'>
        <input position="center" type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={searchImagedByQuery}>search</button>
      </div>

      {/* Images Container */}
      
      <div className='container'>
        { (listImages.length !== 0) ?
          listImages.map((img, key) => (<Image src={img.urls.thumb} alt="tags" key={key} imageId={img.id} imageName={img.user.name.bio}/>)) :
          (<h3 position="center"> { loadingMessage }</h3>)
        }
        
      </div>
      
      
    </div>
  )
}

export default ListImagesComponent;
