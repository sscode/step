import axios from "axios";

export default async function uploadCloudinary(imageFile){

    const data = new FormData();
    data.append('file', imageFile);
    data.append('upload_preset', 'erg_photos_preset');
    data.append('cloud_name', 'dfvcq2b');

    const response = await axios.post(`https://api.cloudinary.com/v1_1/dfvcq2b/image/upload`, 
    data);

    console.log(response.data.url)

    return response.data.url

}