
export default async function textract(imageFile) {
    // if (!filePath.uri) {
    //   Alert.alert('Please select image first');
    //   return;
    // }
    // send a file in form data with key name file 
    // const imgURL = 'https://ergphotos.s3.amazonaws.com/ergphotos%2FIMG_7127.HEIC'

    const formData = new FormData();
    formData.append('file', imageFile);
    // {
    //   uri: filePath.uri,
    //   type: filePath.type,
    //   name: filePath.fileName,
    // });

    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    console.log(formData)
    const req = fetch('https://erg.stusim.repl.co/get-text', {
      method: 'POST',
      body: formData,
      headers: headers,
    })
      .then(res => {
        console.log("successfully get")
        // console.log("text", res.text())
        // console.log("json", res.json())
        return res.json()
      })
      // .then(data => {
      //   console.log("data", data)
      //   return data
      // })
      .catch(error => {
        // handle error
        console.log("error", error);
      });


  };