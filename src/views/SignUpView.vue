<template>
  <div class = "signup-view">
    <div class = "left-container">
      <BackToHome />
      <Logo />
    </div>
    <div class = "content">
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import BackToHome from "@/components/BackToHome.vue";
import Logo from "@/components/Logo.vue";
import SignUpForm from "@/components/SignUpForm.vue";
export default {
  name: "SignUpView",
  components: {
    BackToHome,
    Logo,
    SignUpForm,
  },
}
</script>

<style scoped>
.signup-view {
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
.content {
  margin-left: 2rem;
}
</style>