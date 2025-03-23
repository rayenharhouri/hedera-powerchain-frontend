import axios from 'axios';

const baseURL = process.env.BACKEND_URL || 'http://localhost:3000';

const authService = {
  async login( email : string,  password : string) {
    try {
      console.log(password, email,"authService");
      const response = await axios.post(`${baseURL}/gateway/users/login`, { email , password });
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async signup({
    fullName,
    email,
    password,
    phoneNumber ,
    organizationId,
    role
   
  }: {
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    organizationId: string;
    role: string;
  }) {
    try {
      const response = await axios.post(`${baseURL}/gateway/users/signup`, {
        fullName,
        email,
        password,
        phoneNumber ,
        organizationId,
        role,
      });
      return response.data;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }
};

export default authService;