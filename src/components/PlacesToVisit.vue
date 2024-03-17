<template>
  <div class="places-container">
    <div class="header-container">
      <h1>Places to Visit</h1>
      <div class="share-button-container">
        <font-awesome-icon
          icon="share-from-square"
          class="fa-regular share-icon"
          :size="iconSize"
        />
        <button class="new-day-button">Add New Day</button>
      </div>
    </div>

    <div class="days-container">
      <font-awesome-icon
        icon="calendar"
        class="fa-regular calendar-icon"
        :size="iconSize"
      />
      <h2>Day 1</h2>
    </div>

    <div class="location-container">
      <button class="plus-button" @click="showAddLocationForm = true">+</button>
      <span class="add-location">Add Location</span>
    </div>

    <div class="add-location-form" :class="{ open: showAddLocationForm }">
      <AddLocationForm
        @closeForm="showAddLocationForm = false"
        v-if="showAddLocationForm"
      />
    </div>
  </div>
</template>

<script>
import AddLocationForm from "./AddLocationForm.vue";

export default {
  mounted() {
    document.body.style.backgroundColor = "#e7dcdc";
  },
  beforeDestroy() {
    // Reset the background color when the component is destroyed
    document.body.style.backgroundColor = "";
  },
  data() {
    return {
      showAddLocationForm: false,
      iconSize: "2x",
    };
  },
  components: {
    AddLocationForm,
  },
};
</script>

<style scoped>
.places-container {
  padding-left: 3rem;
  padding-right: 3rem;
}

.header-container {
  display: flex;
  align-items: center;
}

h1 {
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.share-button-container {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.share-icon {
  margin-right: 1rem;
}

.new-day-button {
  width: 120px;
  padding: 0.5rem;
  background-color: #ff5b5b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.days-container {
  padding-left: 1rem;
  display: flex;
  align-items: center;
}

h2 {
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.calendar-icon {
  margin-right: 1rem;
}

.location-container {
  padding-left: 2rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.plus-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ff5b5b;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
}

.add-location {
  color: #808080;
}

.add-location-form {
  position: fixed;
  top: 0;
  right: -50%; /* Sidebar starts off-screen */
  width: 50%;
  height: 100%;
  background-color: #fff;
  transition: right 0.3s ease; /* Transition effect */
  z-index: 1000; /* Ensure sidebar is above other content */
}

.add-location-form.open {
  right: 0; /* Slide sidebar into view */
}
</style>
