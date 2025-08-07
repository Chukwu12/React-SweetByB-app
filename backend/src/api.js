// src/api.js

export const fetchFoodData = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/food-data`); // Make sure this is correct
    if (!response.ok) {
      throw new Error('Failed to fetch food data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching food data:', error);
    return [];  // Return an empty array in case of error
  }
};
