<template>
  <div class = "login-view">
    <Header />
    <div class = "content">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LoginForm from "@/components/LoginForm.vue"
export default {
  name: "LoginView",
  components: {
    Header,
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
}

.content {
  margin-left: 2rem;
}
</style>