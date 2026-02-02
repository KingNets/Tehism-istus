// API Configuration
const API_BASE_URL = 'https://peaceful-youthfulness-production-5af4.up.railway.app/api';

// API Helper function
async function apiRequest(endpoint, options = {}) {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log('API Request:', url, options);
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });

    console.log('API Response status:', response.status, response.statusText);

    const data = await response.json();
    console.log('API Response data:', data);

    if (!response.ok) {
      throw new Error(data.message || `API request failed with status ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Review API
const reviewAPI = {
  // Get all reviews for a tool
  getByTool: async (toolId) => {
    return apiRequest(`/reviews/tool/${toolId}`);
  },

  // Create a new review
  create: async (toolId, reviewData) => {
    return apiRequest(`/reviews/tool/${toolId}`, {
      method: 'POST',
      body: JSON.stringify(reviewData)
    });
  },

  // Update a review
  update: async (reviewId, reviewData) => {
    return apiRequest(`/reviews/${reviewId}`, {
      method: 'PUT',
      body: JSON.stringify(reviewData)
    });
  },

  // Delete a review
  delete: async (reviewId) => {
    return apiRequest(`/reviews/${reviewId}`, {
      method: 'DELETE'
    });
  }
};

// Question API
const questionAPI = {
  // Get all questions for a tool
  getByTool: async (toolId) => {
    return apiRequest(`/questions/tool/${toolId}`);
  },

  // Create a new question
  create: async (toolId, questionData) => {
    return apiRequest(`/questions/tool/${toolId}`, {
      method: 'POST',
      body: JSON.stringify(questionData)
    });
  },

  // Update a question
  update: async (questionId, questionData) => {
    return apiRequest(`/questions/${questionId}`, {
      method: 'PUT',
      body: JSON.stringify(questionData)
    });
  },

  // Delete a question
  delete: async (questionId) => {
    return apiRequest(`/questions/${questionId}`, {
      method: 'DELETE'
    });
  },

  // Add a reply to a question
  addReply: async (questionId, replyData) => {
    return apiRequest(`/questions/${questionId}/replies`, {
      method: 'POST',
      body: JSON.stringify(replyData)
    });
  },

  // Update a reply
  updateReply: async (questionId, replyId, replyData) => {
    return apiRequest(`/questions/${questionId}/replies/${replyId}`, {
      method: 'PUT',
      body: JSON.stringify(replyData)
    });
  },

  // Delete a reply
  deleteReply: async (questionId, replyId) => {
    return apiRequest(`/questions/${questionId}/replies/${replyId}`, {
      method: 'DELETE'
    });
  }
};

// Export API objects
window.reviewAPI = reviewAPI;
window.questionAPI = questionAPI;
