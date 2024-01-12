import axios from 'axios';

export async function apiCall(body){
const {method, url, data,} = body;

// Request interceptor
axios.interceptors.request.use(config => {
    // Modify request config before sending
    console.log('Request interceptor:', config);
    return config;
  }, error => {
    // Handle request error
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  });
  
  // Response interceptor
  axios.interceptors.response.use(response => {
    // Modify response data before resolving
    console.log('Response interceptor:', response);
    return response;
  }, error => {
    // Handle response error
    console.error('Response interceptor error:', error);
    return Promise.reject(error);
  });

// request
const response = await axios({
    method,
    url,
    data
  });
return response;
}