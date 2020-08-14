import React, { FormEvent } from 'react'

import '../styles.css'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  function handleJoinChat(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="join-container">
      <header className="join-header">
        <h1>
          <i className="fas fa-smile"></i> ChatCord
        </h1>
      </header>
      <main className="join-main">
        <form action="GET" onSubmit={(e) => handleJoinChat(e)}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="room">Room</label>
            <select name="room" id="room">
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="Java">Java</option>
            </select>
          </div>
          <Link to="/chat">
            <button type="submit" className="btn">
              Join Chat
            </button>
          </Link>
        </form>
      </main>
    </div>
  )
}

export default Home
