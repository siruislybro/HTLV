<template>
    <div class="plan-trip">
      <h1>Plan a new trip</h1>
      <form @submit.prevent="submitForm" class="trip-form">
        <div class="input-group">
          <span class = "label">Where?</span>
          <input type="text" id="destination" v-model="trip.destination" placeholder="Search destinations" class="input-destination" />
        </div> |
        <div class="date-group">
          <Datepicker 
            v-model="trip.dateRange" 
            format="dd/MM/yyyy" 
            placeholder="Pick a Date"
            range/>
        </div> |
        <button type="submit" class="submit-btn">
          <img src="/src/assets/HTLVlogo.png" alt="Plan" class="submit-icon" />
        </button>
      </form>
    </div>
  </template>
  
<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';

  export default {
    name: 'PlanTrip',
    components: {
    Datepicker
    },
    data() {
      return {
        trip: {
          destination: '',
          dateRange: [new Date(), new Date()]
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Trip details:', this.trip);
            //TODO: Backend logic to handle location search
      }
    }
  }
  </script>
  

<style scoped>
.plan-trip {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
}

.trip-form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 30px;
  padding: 8px;
  max-width: 800px;
  box-sizing: border-box;
}

.input-group, .date-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
}

.input-destination {
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  margin-top: 5px;
}

.submit-btn {
  background-color: #FF647C;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 10px; /* Add some margin to the left of the button */
}

.submit-icon {
  height: 24px; /* Adjust the height as needed */
}
</style>
