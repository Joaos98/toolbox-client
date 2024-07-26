<script setup>
import {computed, ref} from "vue";
import {BAlert} from "bootstrap-vue-next";
import {useFitnessStore} from "@/stores/fitness.js";

const date = ref(new Date());
const type = ref(null)
const error = ref(null)
const workoutTypes = ref([{text: "Gym", value: 2}, {text: "Other", value: 1}])
const state = computed(() => {
  return Boolean(type.value)
})

const formatDate = (date) => {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleString('en-US', options)
}

const fitnessStore = useFitnessStore()
async function newWorkout() {
  if (state.value !== true) {
    error.value = "Please choose a workout type!"
    return;
  }
  try {
    const workoutData = {
      type: type.value,
      date: date.value
    }
    await fitnessStore.createWorkout(workoutData)
  } catch (err) {
    error.value = err.response.data.error
  }
}
</script>

<template>
  <form class="newWorkoutForm">
    <b-form-group label="Type" label-for="workoutTypeRadio" label-cols="auto">
      <b-form-radio-group id="workoutTypeRadio"
                          v-model="type"
                          :options="workoutTypes"
                          :state="state"
                          name="radio-validation"
                          required>
      </b-form-radio-group>
    </b-form-group>
    <b-form-group label="Date" label-for="workoutDatePicker" label-cols="auto">
      <VueDatePicker id="workoutDatePicker"
                     v-model="date"
                     auto-apply
                     placeholder="Select Date"
                     :max-date="new Date()"
                     :enable-time-picker="false"
                     :format="formatDate"
                     required/>
    </b-form-group>
    <button type="button" class="newWorkoutButton" @click="newWorkout()">Create</button>
    <BAlert class="errorAlert" v-model="error" variant="danger" dismissible fade>
      {{ error }}
    </BAlert>
  </form>
</template>

<style>
.newWorkoutForm {
  display: flex;
  flex-direction: column;

  .col, .col-auto {
    align-content: center;
    padding: 5px;
  }

  .newWorkoutButton {
    color: white;
    text-align: center;
    padding: 7px;
    background-color: var(--bg-lighter1);
    border: 1px solid var(--bg-darker2);
    border-radius: 10px;
    transition: 0.3s;

    &:hover {
      background-color: var(--secondary-color);
      color: black;
    }
  }

  .errorAlert {
    margin-top: 10px;
  }
}
</style>