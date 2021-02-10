import styles from '../styles/Login.module.css'


function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Sign In</h2>
      </div>
      <div>
        <form className={styles.form}>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="email"
            required
            className={styles.inputBoxEmail}
          />
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            required
            className={styles.inputBoxEmail}
          />
          <div>
            <button type="submit" className={styles.but}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login