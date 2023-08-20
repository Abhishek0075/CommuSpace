import React, { useState } from 'react';
import "./community.css";
import axios from 'axios';

function Createcommunityminipage() {
  const [communityName, setCommunityName] = useState('');
  const [idea, setIdea] = useState('');

  const user = {
    _id: '64e194eec30685019844d8a3', // Replace with the actual user ID
    userName: 'mariyab', // Replace with the actual username
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTE5NGVlYzMwNjg1MDE5ODQ0ZDhhMyIsImlhdCI6MTY5MjUyMTA0NSwiZXhwIjoxNjk1MTEzMDQ1fQ.W0SpOaU3x3sz2HvqXrjdZJ7TojJX-PxM9vuUTfCIDGc', // Use the actual token value
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestData = {
      communityName: communityName,
      idea: idea,
    };

    try {
      const response = await axios.post('/community/create', requestData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });

      console.log('Community created:', response.data);
      // Redirect or update UI as needed
    } catch (error) {
      console.error('Error creating community:', error);
      // Handle error as needed
    }
  }

  return (
    <div className="create-community-container">
      <div className="create-community-mini-page">
        <h2>Create Community</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="communityName">Community Name</label>
            <input
              type="text"
              className="form-control"
              id="communityName"
              value={communityName}
              onChange={(event) => setCommunityName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idea">Description</label>
            <textarea
              className="form-control"
              id="idea"
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Community</button>
        </form>
      </div>
    </div>
  );
}

function CreateCommunityPageWrapper() {
  return (
    <div className="create-community-page-wrapper">
      <Createcommunityminipage />
    </div>
  );
}

export default CreateCommunityPageWrapper;