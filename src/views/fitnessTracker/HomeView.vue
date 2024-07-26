<script setup>
import Header from "@/components/Header.vue";
import {onMounted, ref} from "vue";
import NewWorkoutModal from "@/components/FitnessComponents/NewWorkoutModal.vue";
import {useFitnessStore} from "@/stores/fitness.js";

const newWorkoutModal = ref(false)
const editWorkoutsModal = ref(false)
function tooltip(value) {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let dateString = value.date.toLocaleString('en-US', options)
  switch (value.count) {
    case 1:
      return 'You had a different workout on ' + dateString
    case 2:
      return 'You went to the gym on ' + dateString
  }
}

const workouts = ref([])

let fitnessStore
onMounted(async () => {
  fitnessStore = useFitnessStore();
  await fitnessStore.getWorkouts()
  workouts.value = fitnessStore.workouts.map(workout => {
    const date = new Date(workout.date)
    return {date: new Date( date.getTime() - date.getTimezoneOffset() * -60000 ), count: workout.type}
  })
});
</script>

<template>
  <Header page-title="Fitness Tracker"/>
  <div class="wrapper">
    <div class="workout">
      <div class="new-workout">
        <h3>Workouts</h3>
        <button class="new-workout-button" @click="newWorkoutModal = !newWorkoutModal">+</button>
      </div>
      <CalendarHeatmap class="heatmap"
                       vertical
                       :values="workouts"
                       :end-date="new Date()"
                       :round="2"
                       :max="3"
                       :tooltip-formatter="tooltip"
                       :no-data-text="'You didn\'t workout on this day'"
                       :range-color="['#373737', '#373737', '#60a9559e', '#36b923']"
      />
      <button class="toolbox-button edit-workouts-button" @click="editWorkoutsModal = !editWorkoutsModal">Edit workouts</button>
    </div>
    <div class="nutrition">
      NUTRITION
    </div>
  </div>
  <BModal :hide-footer="true"
          v-model="newWorkoutModal"
          title="New Workout">
    <NewWorkoutModal/>
  </BModal>
  <BModal :hide-footer="true"
          v-model="editWorkoutsModal"
          title="Edit Workouts">
    <EditWorkoutsModal/>
  </BModal>
</template>

<style scoped>
.wrapper {
  display: flex;
  padding: 0 3%;
  flex-direction: row;
  color: white;
  margin-bottom: 30px;

  .workout {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-darker1);
    padding: 10px;
    border-radius: 10px;

    .new-workout-button {
      margin-left: 5px;
      color: white;
      width: 40px;
      height: 40px;
      text-align: center;
      padding: 7px;
      background-color: var(--bg-lighter1);
      border: 1px solid var(--bg-darker2);
      border-radius: 50%;
      transition: 0.3s;

      &:hover {
        background-color: var(--secondary-color);
        color: black;
      }
    }

    .edit-workouts-button {
      margin-top: 10px;
    }

    h3 {
      color: var(--secondary-color);
      text-align: center;
    }

    .heatmap {
      flex-grow: 3;
      width: 200px;
    }

    .new-workout {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }
  }

  .nutrition {
    display: flex;
  }
}
</style>