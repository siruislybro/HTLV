<template>
  <div class = "signup-view">
    <Header />
    <div class = "content">
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SignUpForm from "@/components/SignUpForm.vue"
export default {
  name: "SignUpView",
  components: {
    Header,
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

.content {
  margin-left: 2rem;
}
</style>