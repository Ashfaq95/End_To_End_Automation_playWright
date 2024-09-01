//imported getAllPosts, getPost, getCommentsOfPost, updatePost, createPost as *
import * as api from './json-placeholder-api';

const clientAPI = async () => {
  try {
    // Fetch all posts and log the total number of posts
    const posts = await api.getAllPosts();
    console.log(`There are ${posts.length} number of posts`);

    // Fetch a single post by ID and log the data
    const postId = 1; //Assume that post ID = 1
    const post = await api.getPost(postId);
    console.log('Single post:', post);

    // Fetch all comments of the post and log the data
    const comments = await api.getCommentsOfPost(postId);
    console.log('Comments:', comments);

    // Update a post by ID and log the updated data
    const updatedPostData = { title: 'test updated title', body: 'test updated body', userId: 1 };
    const updatedPost = await api.updatePost(postId, updatedPostData);
    console.log('Updated post:', updatedPost);

    // Create a new post and log the created data
    const newPostData = { title: 'Post Title', body: 'Contents', userId: 1 };
    const newPost = await api.createPost(newPostData);
    console.log('Created post:', newPost);

  } catch (error) {
    // Log any errors that occur during the API calls
    console.error('Error:', error);
  }
};
// Execute the main function to perform the API operations
clientAPI();


