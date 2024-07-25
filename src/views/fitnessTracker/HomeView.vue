<script setup>
import Header from "@/components/Header.vue";

function tooltip(value) {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let dateString = value.date.toLocaleString('en-US', options)
  switch (value.count) {
    case 1:
      return 'You did a different exercise on ' + dateString
    case 2:
      return 'You went to the gym on ' + dateString
  }
}
</script>

<template>
  <Header page-title="Fitness Tracker"/>
  <div class="wrapper">
    <div class="workout">
      <div class="new-workout">
        <h3>Workouts</h3>
        <button>+</button>
      </div>
      <CalendarHeatmap class="heatmap"
                       vertical
                       :values="[{ date: '2024-7-25', count: 1 }, { date: '2024-7-24', count: 2 }]"
                       :end-date="new Date()"
                       :round="2"
                       :max="3"
                       :tooltip-formatter="tooltip"
                       :no-data-text="'You didn\'t exercise on this day'"
                       :range-color="['#373737', '#373737', '#60a9559e', '#36b923']"
      />
    </div>
    <div class="nutrition">
      NUTRITION
    </div>
  </div>
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

    button {
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