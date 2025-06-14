// src/api.js

export const fetchFoodData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/food-data'); // This is the backend endpoint you created
    if (!response.ok) {
      throw new Error('Failed to fetch food data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching food data:', error);
    return [];
  }
};
