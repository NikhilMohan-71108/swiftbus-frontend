import axiosInstance from "./axiosInstance";

//Register user API
export const registerUser=async(formData)=>{
    try{
        const response=await axiosInstance.post("/auth/register",formData,{
            headers:{"Content-Type":"multipart/form-data"}
        });
        return response.data;
    }catch(error){
        console.error("Registration error:", error);
    throw error;
    }
}