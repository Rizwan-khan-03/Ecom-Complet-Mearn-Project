import { AppConfig } from "../apiConfig/apiConfig";
import apiEndPoints from "../apiConfig/apiEndPoints";

const AUTH_KEY = "jwtToken";
export const setToken = (Name: any) => {
    localStorage.setItem(AUTH_KEY, Name);
  };
  export const getToken  = () => localStorage.getItem(AUTH_KEY);
  
  export const clearStorage = (key = "") => {
    if (key == "") {
      localStorage.clear();
    }
  };

  /// Login API ////
  export const loginAdmin = async ({ username, password }:any) => {
    try {
     const response = await fetch(AppConfig?.baseURL + apiEndPoints?.Login, {
       method: apiEndPoints?.methodType?.POST,
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ username, password })
     });
     if (response) {
      return response.json();
     } else {
      throw new Error('Login failed');
     }
   } catch (error) {
     return   console.error(error);
   }
 }

 // Get User List GetUserList  /////
 export const GetUserList = async (payload:any) => {
  try {
   const response = await fetch(AppConfig?.baseURL + apiEndPoints?.GetUserList, {
     method: apiEndPoints?.methodType?.POST,
     headers: {
       'Content-Type': 'application/json'
     },
      body: JSON.stringify(payload)
   });
   if (response) {
    return response.json();
   } else {
    throw new Error('GetUserList failed');
   }
 } catch (error) {
   return   console.error(error);
 }
}

// User details  /////
export const GetUserDetails = async (payload:any) => {
  try {
   const response = await fetch(AppConfig?.baseURL + apiEndPoints?.UserDetails, {
     method: apiEndPoints?.methodType?.POST,
     headers: {
       'Content-Type': 'application/json'
     },
      body: JSON.stringify(payload)
   });
   if (response) {
    return response.json();
   } else {
    throw new Error('GetUserDetails failed');
   }
 } catch (error) {
   return   console.error(error);
 }
}

////Company List //////

export const GeCompanyList = async (payload:any) => {
  try {
   const response = await fetch(AppConfig?.baseURL + apiEndPoints?.CompanyList, {
     method: apiEndPoints?.methodType?.POST,
     headers: {
       'Content-Type': 'application/json'
     },
      body: JSON.stringify(payload)
   });
   if (response) {
    return response.json();
   } else {
    throw new Error('GeCompanyList failed');
   }
 } catch (error) {
   return   console.error(error);
 }
}
