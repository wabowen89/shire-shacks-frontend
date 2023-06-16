import React from 'react'

const SignUp = ({currentUser}) => {
  console.log("currentUser", currentUser)
  return (
    <>
      <div data-testid="signup">
        <form>
          Email: <input type="email" name="email" placeholder="email" />
          <br />
          Password:{" "}
          <input type="password" name="password" placeholder="password" />
          <br />
          Password:{" "}
          <input
            type="password"
            name="password_confirmation"
            placeholder="confirm password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <div>
          Already registered, <a href="/login">Login</a> here.
        </div>
      </div>

    </>
  )

}

export default SignUp