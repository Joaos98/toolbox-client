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
<BTableSimple hover responsive sticky-header>
  <BThead>
    <BTr>
      <BTh>
        Date
      </BTh>
      <BTh>
        Type
      </BTh>
      <BTh class="actionTh">
        Action
      </BTh>
    </BTr>
  </BThead>
  <BTbody>
    <BTr v-for="workout in fitnessStore.workouts.reverse()" :key="workout.id">
      <BTd>{{workout.date}}</BTd>
      <BTd>{{ getWorkoutType(workout.type) }}</BTd>
      <BTd class="actionTd">
        <button class="deleteButton" @click="fitnessStore.deleteWorkout(workout)">
          <IIcBaselineDelete class="deleteIcon"/>
        </button>
      </BTd>
    </BTr>
  </BTbody>
</BTableSimple >
</template>

<style scoped>
table {
  display: block;
  height: 10px;
}
.actionTd {
  display: flex;
  justify-content: flex-end;
}
.actionTh {
  text-align: end;
}
.deleteButton {
  border-radius: 10px;
  border: 1px solid #9f9f9f;
  background-color: #ececec;
  transition: 0.3s;

  .deleteIcon {
    color: #b20a0a;
  }

  &:hover {
    background-color: #c0c0c0;
  }
}

</style>