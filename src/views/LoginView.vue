<template>
  <div class = "login-view">
    <div class = "left-container">
      <BackToHome />
      <Logo />
    </div>
    <div class = "form">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import BackToHome from "@/components/BackToHome.vue"
import Logo from "@/components/Logo.vue";
import LoginForm from "@/components/LoginForm.vue"
export default {
  name: "LoginView",
  components: {
    BackToHome,
    Logo,
    LoginForm,
  },
}
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.left-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form {
  margin-left: 2rem;
}
</style>