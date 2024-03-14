function UserLogin()
{
    return(
        <div className="login-form">
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email Address</label>
    <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" value={password} onChange={handleChange} required />
    <p>
      <input type="checkbox" id="remember" name="remember" value={remember} onChange={handleChange} />
      <label htmlFor="remember">Remember me</label>
    </p>
    <button type="submit">Login</button>
  </form>
  <p>
    Don't have an account? <a href="/signup">Sign Up</a>
  </p>
  <p>
    <a href="/forgot-password">Forgot Password?</a>
  </p>
  <p>
    Or login with:
    <button onClick={handleGoogleLogin}>G Google</button>
    <button onClick={handleFacebookLogin}>f Facebook</button>
  </p>
</div>
    );
}

export default UserLogin;