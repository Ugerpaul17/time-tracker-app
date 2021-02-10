import styles from '../styles/Login.module.css'


function Login() {
  return (
    <div className={styles.container}>
      <div className="title">
        <h2>Sign In</h2>
      </div>
      <form className="form">
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
        <button type="submit" className="but">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login