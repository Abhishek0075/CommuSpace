import { useState } from 'react';
import "./community.css";

function Createcommunityminipage() {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to server
  }

  return (
    <div className="create-community-container">
        <div className="create-community-mini-page">
          <h2>Create Community</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
          <label htmlFor="communityName">Community Name</label>
          <input type="text" className="form-control" id="communityName" value={communityName} onChange={(event) => setCommunityName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <input type="file" className="form-control-file" id="avatar" />
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