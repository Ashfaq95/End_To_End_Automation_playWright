// Base URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Helper function to handle fetch requests
const fetchRequest = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};

// Get all posts
export const getAllPosts = async () => {
    return fetchRequest(`${BASE_URL}/posts`);
};

// Get a single post by ID
export const getPost = async (postId: number) => {
    return fetchRequest(`${BASE_URL}/posts/${postId}`);
};

// Get all comments of a specific post by post ID
export const getCommentsOfPost = async (postId: number) => {
    return fetchRequest(`${BASE_URL}/posts/${postId}/comments`);
};

// Get a single comment by comment ID
export const getComment = async (commentId: number) => {
    return fetchRequest(`${BASE_URL}/comments/${commentId}`);
};

// Update a post by post ID with new data
export const updatePost = async (postId: number, data: any) => {
    return fetchRequest(`${BASE_URL}/posts/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), //stringify-> converting 'data' into JSON string
    });
};

// Create a new post with provided data
export const createPost = async (data: any) => {
    return fetchRequest(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), //stringify-> converting 'data' into JSON string
    });
};
