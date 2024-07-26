<script setup>

import {useFitnessStore} from "@/stores/fitness.js";

const fitnessStore = useFitnessStore()

function getWorkoutType(type) {
  switch(type) {
    case 1:
      return "Other"
    case 2:
      return "Gym"
  }
}
</script>

<template>
<table>
  <tr>
    <th>
      Date
    </th>
    <td>
      Type
    </td>
    <td>
      Action
    </td>
  </tr>
  <tr v-for="workout in fitnessStore.workouts" :key="workout.id">
    <td>{{workout.date}}</td>
    <td>{{ getWorkoutType(workout.type) }}</td>
    <td>
      <button @click="fitnessStore.deleteWorkout(workout)">
        <IIcBaselineDelete />
      </button>
    </td>
  </tr>
</table>
</template>

<style scoped>

</style>