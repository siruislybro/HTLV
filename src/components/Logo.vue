<template>
    <div class = "header">
        <a href = "/">
            <img src = "/src/assets/HTLVlogo.png" alt = "Logo" class = "logo"/>
        </a>
    </div>
</template>

<script>
export default {
    name: "Logo",
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
}

.logo{
    max-width:400px;
    height: auto;
    padding:20px;
}
</style>