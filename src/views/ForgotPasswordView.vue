<template>
    <div class = "signup-view">
      <div class = "left-container">
        <BackToHome />
        <Logo />
      </div>
      <div class = "content">
        <ForgetPasswordForm />
      </div>
    </div>
</template>
  
<script>
  import BackToHome from "@/components/BackToHome.vue";
  import Logo from "@/components/Logo.vue";
  import ForgetPasswordForm from "@/components/ForgotPasswordForm.vue";
  export default {
    name: "ForgotPasswordView",
    components: {
      BackToHome,
      Logo,
      ForgetPasswordForm,
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