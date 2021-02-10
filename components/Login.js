


function Login() {
  return (
    <div>
      <div>
        <h2>Sign In</h2>
      </div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </form>
    </div>
  );
}

export default Login