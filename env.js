import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// - React Forms: https://reactjs.org/docs/forms.html

function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  const [type, setType] = useState('Free')
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(username)  
    console.log(checked)  
    console.log(type)  
    console.log(avatar)  
    console.log(password)  
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>

      <label htmlFor="password">Password</label>
      <input type="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>

      <label htmlFor="avatar">Avatar Image</label>
      <input type="text" id="avatar"  value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
      <img src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" alt="Avatar preview" />
      

      <label htmlFor="type">Account Type</label>
      <select id="type"  value={type} onChange={(e) => setType(e.target.value)}>
        <option value="free">Free</option>
        <option value="normal">Normal</option>
        <option value="pro">Pro</option>
      </select>

      <label>
        Get Our Newsletter! <input type="checkbox" id="newsletter"  value={checked} onChange={(e) => setChecked(e.target.checked)}/>
      </label>

      <input type="submit" value="Sign Up" />
    </form>
  );
}

ReactDOM.render(<SignUp />, document.getElementById('root'));