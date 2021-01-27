
const AuthService = {
    isAuthenticatedEmployee: false,
    authenticate(cb) {
        // the user is allowed to enter
        this.isAuthenticatedEmployee = true
        setTimeout(cb, 100)
      },
      logout(cb) {
        // the user is leaving
        this.isAuthenticatedEmployee = false
        setTimeout(cb, 100)
      }
    }

  export default AuthService;
