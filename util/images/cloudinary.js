export default function uploadCloudinary(imageFile, setFetching){


    const data = new FormData();
    data.append('file', imageFile);
    data.append('upload_preset', 'erg_photos_preset');
    data.append('cloud_name', 'dfvcq2b');
    
    fetch('https://api.cloudinary.com/v1_1/dfvcq2b/image/upload', {
        method: 'post',
        body: data
    }).then(
        res => res.json()
    ).then(
        data => {
            console.log(data.url)
            setFetching(false)
            return data.url
        }
    )
}