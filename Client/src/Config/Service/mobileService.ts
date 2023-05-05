import { getRequest } from "./axios/axios";

export const getAllMobileList = async () => {
    try {
        const response = await getRequest("product");
     if (response) {    
      return response;
     } else {
      throw new Error('get req error');
     }
   } catch (error) {
     return   console.error(error);
   }
 }