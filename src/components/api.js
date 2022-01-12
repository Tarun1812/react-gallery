import axios from "axios";



function timeout(ms) { //pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, ms));
}


// By checking this link https://dev.to/olenadrugalya/ways-of-getting-data-from-api-in-react-2kpf
// Read through these https://stackoverflow.com/questions/47757385/problems-trying-to-return-api-data-without-a-class
// Read through these https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/
// In your load Images you used useEffect inside.. But you could have just send the setState 
// as argument to the api hit function and it would have automatically worked.
async function loadImagesFromUnsplash(setListImages) {
    console.log("Entered the loadImagesFromUnsplash function using await")
    await timeout(3000);
    await axios.get("https://api.unsplash.com/photos/?per_page=20&client_id=BL514Z7KbdOH9-BfuQmIr8R9P8nRoTOMhynrkJ-K36A")
        .then((response) => {
            setListImages(response.data)
        })

}

// Read through https://www.codegrepper.com/code-examples/javascript/react+await+settimeout
async function searchImagesFromUnsplash(setListImages, query) {
    console.log("Entered the searchImagesFromUnsplash function using await")
    await axios.get("https://api.unsplash.com/search/photos/?per_page=20&query=" + query + "&client_id=BL514Z7KbdOH9-BfuQmIr8R9P8nRoTOMhynrkJ-K36A")
        .then((response) => {
            setListImages(response.data.results)
        })
}

async function getImageFromUnsplash(setImageData, imageId) {
    console.log("Entered the getImageFromUnsplash function using await")
    await axios.get("https://api.unsplash.com/photos/" + imageId + "?page=1&client_id=BL514Z7KbdOH9-BfuQmIr8R9P8nRoTOMhynrkJ-K36A")
        .then((response) => {
            console.log(response)
            setImageData(response.data)
        })
}

export { loadImagesFromUnsplash, searchImagesFromUnsplash, getImageFromUnsplash }