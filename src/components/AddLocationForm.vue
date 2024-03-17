<template>
  <button class="close-button" @click="closeForm()">X</button>
  <form @submit.prevent="addLocation">
    <label for="location">Location</label>
    <input
      class="location"
      v-model="location"
      type="text"
      placeholder="Enter Location Title"
      required
    />
    <label for="description">Description</label>
    <textarea
      class="description"
      v-model="description"
      placeholder="Enter Description"
      required
    ></textarea>
    <label for="category">Category</label>
    <select name="category" class="category" required>
      <option value="" disabled selected>Select Category</option>
      <option value="food">Food</option>
      <option value="bar">Bar</option>
      <option value="adventure">Adventure</option>
      <option value="nature">Nature</option>
      <option value="sightseeing">Sightseeing</option>
      <option value="shopping">Shopping</option>
      <option value="religious">Religious Site</option>
      <option value="others">Others</option>
    </select>
    <button type="submit" class="save-button">Save</button>
  </form>
</template>

<script>
export default {
  name: "AddLocationForm",
  methods: {
    closeForm() {
      this.$emit("closeForm");
    },
  },
};
</script>

<style scoped>
.form-container {
  padding: 4rem;
}

form {
  padding: 4rem;
}

.close-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #808080;
  color: #fff;
  border: none;
  cursor: pointer;
  display: block;
  margin-left: 2rem;
  margin-top: 2rem;
}

label {
  display: block;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 1rem;
}

input {
  width: -webkit-fill-available;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
}

textarea {
  width: -webkit-fill-available;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  height: 5rem;
}

select {
  width: -webkit-fill-available;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
}

select:required:invalid {
  color: gray;
}

option[value=""][disabled] {
  display: none;
}

option {
  color: black;
}

.save-button {
  width: 120px;
  padding: 0.5rem;
  background-color: #ff5b5b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
}
</style>
