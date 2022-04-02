var cloudinary = require('cloudinary')

const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

export default async function handler(req, res) {
  const folderName = req.query.id
  console.log(folderName)

  cloudinary.config({
    cloud_name: cloudName, // add your cloud_name
    api_key: apiKey, // add your api_key
    api_secret: apiSecret, // add your api_secret
    secure: true,
  })

  cloudinary.v2.api.resources(
    {
      type: 'upload',
      prefix: 'property/62482bf6634cc64906cbef7b', // add your folder
    },
    function (error, result) {
      //console.log(result, error)
      const imgArray = result.resources.map((item) => item.url)
      console.log(imgArray)
    }
  )
}

// var cloudinary = require('cloudinary');

// cloudinary.config({
//  cloud_name: "cloudName", // add your cloud_name
//  api_key: "apiKey", // add your api_key
//  api_secret: "apiSecret", // add your api_secret
//  secure: true
// });

// cloudinary.v2.search.expression(
//   'folder:property/62482bf6634cc64906cbef7b/*' // add your folder
//   ).sort_by('public_id','desc').max_results(30).execute().then(result=>console.log(result));
