import axios from 'axios';

const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY_HERE';
const TINEYE_API_KEY = 'YOUR_TINEYE_API_KEY_HERE';

function reverseImageSearch(imageUrl) {

  const googleParams = {
    key: GOOGLE_API_KEY,
    cx: 'YOUR_CX_CODE_HERE',
    imgSize: 'large',
    num: 10,
    searchType: 'image',
    q: `image_url:${imageUrl}`
  };

  // Google Reverse Image Search API
  axios.get('https://www.googleapis.com/customsearch/v1', { params: googleParams })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  // TinEye API
  const tineyeParams = {
    api_key: TINEYE_API_KEY,
    image_url: imageUrl
  };

  axios.post('https://api.tineye.com/rest/search', tineyeParams)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}