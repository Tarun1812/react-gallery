import { useState, useEffect } from 'react'
import { getImageFromUnsplash } from './api'
import { get } from 'lodash'
import './styles/singleImageView.css'

const SingleImageView = (props) => {
    const [imageId] = useState(get(props.match, 'params.imageId', ''))
    const [imageName] = useState(get(props.match, 'params.imageName', ''))
    const [imageData, setImageData] = useState()
    const loadingMessage = "Trying to load the image... Please wait"

    useEffect(() => {
        // Get the Details about the image
        getImageFromUnsplash(setImageData, imageId, imageName)
    }, [imageId, imageName])

    return (
        <div>
            <h2 >The Details of the Image</h2>
            {imageData ?
                (<div className='row'>
                    <div className='column1'>
                        <img src={imageData.urls.small} alt="" />
                    </div>
                    <div className='column2'>
                        <h2> Photo Name = {imageData.user.name}</h2>
                        <h3> Photo Id = {imageData.id}</h3>
                        <h3>bio = {imageData.user.bio}</h3>
                    </div>
                    {/* <pre className='json-content'> {imageData} </pre> */}
                </div>) :
                (<h3 position="center"> {loadingMessage}</h3>)
            }
        </div>
    )
}
export default SingleImageView;