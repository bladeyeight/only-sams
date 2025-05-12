/**
 * API utility functions for making requests to the backend
 */

/**
 * Get the base API URL based on the current environment
 * This handles both development and production environments
 */
export const getApiBaseUrl = (): string => {
  const currentDomain = window.location.hostname;
  
  if (currentDomain === 'localhost') {
    // In development, use the backend server URL
    return 'http://localhost:5000';
  } else {
    // In production, use relative URLs which will be handled by nginx proxy
    return '';
  }
};

/**
 * Make a GET request to the API
 * @param endpoint - The API endpoint (without leading slash)
 * @returns Promise with the response data
 */
export const apiGet = async <T>(endpoint: string): Promise<T> => {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/${endpoint}`;
  
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include', // Include cookies for authenticated requests
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    mode: 'cors', // Explicitly set CORS mode
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json() as Promise<T>;
};

/**
 * Make a POST request to the API
 * @param endpoint - The API endpoint (without leading slash)
 * @param data - The data to send
 * @returns Promise with the response data
 */
export const apiPost = async <T>(endpoint: string, data: any): Promise<T> => {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/${endpoint}`;
  
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include', // Include cookies for authenticated requests
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    mode: 'cors', // Explicitly set CORS mode
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json() as Promise<T>;
};
