import {asyncHandler} from "../utils/asyncHandler.js";
const registerUser=asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"ok"
    })

    // get user details from frontend
    // validation - not empty
    // check iif user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary , avatar
    // create user object - create entry in db
    // remove password and refresh token from response
    // check for user creation
    // return response
    // else through error

    const{fullName, email, username, password}=req.body

})


export{registerUser}