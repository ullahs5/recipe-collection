class AuthService {

    logout() {
      // Remove the JWT token from local storage
      localStorage.removeItem('token');
      window.location.href= "/";
    }
  
    getToken() {
      // Retrieve the JWT token from local storage
      return localStorage.getItem('token');
    }
  
    isAuthenticated() {
      // Check if the user is authenticated by verifying the JWT token
      const token = this.getToken();
      return token !== null;
    }

     getEmail(){
      const token = this.getToken();
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(window.atob(base64));
      return payload.sub; // Retrieve the email from the token payload
    }

    
  }
  
  export default new AuthService();