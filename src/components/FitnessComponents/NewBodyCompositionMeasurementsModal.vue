<script setup>
import {computed, ref} from "vue";
import {BAlert} from "bootstrap-vue-next";
import {useFitnessStore} from "@/stores/fitness.js";

const bodyCompositionMeasurements = ref({bodyWeight: 0, bodyWater: 0, bodyFat: 0, muscleMass: 0, date: new Date()})
const error = ref(null)

const formatDate = (date) => {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleString('en-US', options)
}

const fitnessStore = useFitnessStore()
async function newBodyCompositionMeasurements() {
  if (bodyCompositionMeasurements.value.date == null) {
    error.value = "Please select a date!"
    return;
  }
  try {
    const newMeasurements = bodyCompositionMeasurements.value
    await fitnessStore.createBodyCompositionMeasurements(newMeasurements)
  } catch (err) {
    error.value = err.response.data.error
  }
}
</script>

<template>
  <form class="newBodyCompositionMeasurementsForm">
    <b-form-group label="Weight (Kg)" label-for="newWeight" label-cols="4">
      <b-form-input id="newWeight" :type="'number'" v-model="bodyCompositionMeasurements.bodyWeight" placeholder="Body Weight (Kg)"/>
    </b-form-group>
    <b-form-group label="Body Water (L)" label-for="newWater" label-cols="4">
      <b-form-input id="newWater" :type="'number'" v-model="bodyCompositionMeasurements.bodyWater" placeholder="Body Water (L)"/>
    </b-form-group>
    <b-form-group label="Body Fat (Kg)" label-for="newBodyFat" label-cols="4">
      <b-form-input id="newBodyFat" :type="'number'" v-model="bodyCompositionMeasurements.bodyFat" placeholder="Body Fat (Kg)"/>
    </b-form-group>
    <b-form-group label="Muscle Mass (Kg)" label-for="newMuscleMass" label-cols="4">
      <b-form-input id="newMuscleMass" :type="'number'" v-model="bodyCompositionMeasurements.muscleMass" placeholder="Muscle Mass (Kg)"/>
    </b-form-group>
    <b-form-group label="Date" label-for="bodyCompositionMeasurementsDatePicker" label-cols="4">
      <VueDatePicker id="bodyCompositionMeasurementsDatePicker"
                     v-model="bodyCompositionMeasurements.date"
                     auto-apply
                     placeholder="Select Date"
                     :max-date="new Date()"
                     :enable-time-picker="false"
                     :format="formatDate"
                     required/>
    </b-form-group>
    <button type="button" class="toolbox-button" @click="newBodyCompositionMeasurements()">Save</button>
    <BAlert class="errorAlert" v-model="error" variant="danger" dismissible fade>
      {{ error }}
    </BAlert>
  </form>
</template>

<style>
.newBodyCompositionMeasurementsForm {
  display: flex;
  flex-direction: column;

  .col, .col-auto {
    align-content: center;
    padding: 5px;
  }

  .errorAlert {
    margin-top: 10px;
  }
}
</style>