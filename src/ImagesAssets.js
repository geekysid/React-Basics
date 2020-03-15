/*
    We need to look at this in 2 wats 
        a) When asset is stored in src folder: This will be processed by Webpack. This let us import the files just like any other file in src folder.When we import these files, we get a final path to the file which we can use to reference the file in our code for example, src attribute of image or href attribute of pdf file
        Eg: <image src={path} />

        b) When asset is stored in public folder: This file will not be processed by Webpack and will be copied as it is into the build folder. We use preficx %PUBLIC_URL% to access assets in public folders. We basically have images here when we have 1000s of images.
        Eg: <image src="%PUBLIC_URL%/image.jpg" />
        To write this in JAVASCRIPT we will use 'process.env.PUBLIC_URL + "mypic.jpg"'
        Eg: <image src={process.env.PUBLIC_URL + "mypic.jpg"} />        
*/

import React from "react";
import pic from "./image/sid.png"


function ImagesAssets() {
    console.log("Path of src file: ", pic)
    console.log("Path of Public file: ", process.env.PUBLIC_URL + "/image/sid.png")
    return (
        <div>
            <h3>Using Image in src Folder</h3>
            <img src={pic} width="100px" alt="My SRC Image" />

            <h3>Using Image in Public Folder</h3>
            <img src={process.env.PUBLIC_URL+"/image/sid.png"} width="100px" alt="My PUBLIC Image" />
        </div>
    )
}

export default ImagesAssets
