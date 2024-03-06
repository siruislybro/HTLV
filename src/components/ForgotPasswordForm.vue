<template>
    <div class="forgot-password-form">
      <h2>Need to reset your password?</h2>
      <div class = "account-message">
        Enter your email address and we'll send you a link to reset your password!
      </div>
      <form @submit.prevent="reset">
        <input v-model="email" type="text" placeholder="Email" required />
        <button type="submit" class="reset-button">Send password reset link &rarr;</button>
      </form>
      <div class="additional-links">
        <a href="/help">Need help?</a>
        <a href="/usage">Usage</a>
      </div>
    </div>
</template>
  
<script>
import {getAuth, sendPasswordResetEmail} from "firebase/auth"
export default {
    name: 'ForgetPasswordForm',
    data() {
        return {
        email: '',
        resetError:'',
        };
    },
    methods: {
        async reset() {
            if (!this.email) {
                this.loginError = 'Please type in a valid email address';
                return;
            }

            const auth = getAuth();
            try {
                await sendPasswordResetEmail(auth, this.email);
                console.log("Email sent successfully");
            } catch (error) {
                this.loginError = error;
                console.error("Reset Error:", error );
            }
        },
    },
};
</script>
  
<style scoped>
    .login-form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
    }

    h2 {
    margin-bottom: 1.5rem;
    font-size: 24px;
    }

    .account-message {
        margin-bottom: 1.5rem;
        text-align: left;
        font-size: 16px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 100%;
        margin-bottom: 1rem;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }

    .forgot-password {
        margin-bottom: 0.5rem;
        color: #666;
        text-decoration: none;
    }

    .reset-button {
        width: 100%;
        padding: 0.5rem;
        background-color: #ff5b5b;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .additional-links {
        margin-top: 1rem;
    }

    .additional-links a {
        margin-right: 1rem;
        color: #666;
        text-decoration: none;
    }
</style>