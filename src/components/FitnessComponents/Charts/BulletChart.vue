<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, BarElement, CategoryScale, LinearScale } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {ref} from "vue";
ChartJS.register(Title, BarElement, CategoryScale, LinearScale)

const props = defineProps(['measurements', 'parameters'])
const measurementsData = ref([
  {
    label: "Weight (Kg)",
    value: props.measurements.bodyWeight,
    min: props.parameters.lowerBodyWeight,
    max: props.parameters.higherBodyWeight
  },
  {
    label: "Water (L)",
    value: props.measurements.bodyWater,
    min: props.parameters.lowerBodyWater,
    max: props.parameters.higherBodyWater
  },
  {
    label: "Muscle Mass (Kg)",
    value: props.measurements.muscleMass,
    min: props.parameters.lowerMuscleMass,
    max: props.parameters.higherMuscleMass
  },
  {
    label: "Body Fat (Kg)",
    value: props.measurements.bodyFat,
    min: props.parameters.lowerBodyFat,
    max: props.parameters.higherBodyFat
  }
])
const allValues = measurementsData.value.flatMap(obj => [obj.value, obj.max]);
const maxValue = Math.max(...allValues);
const options = {
  responsive: true,
  indexAxis: 'x',
      scales: {
    x: {
    },
    x2: {
      display: false
    },
    y: {
      max: Math.ceil(maxValue/10)*10 + 10
    }
  },
  barThickness: 90,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Current Measurements"
    }
  },
  events: null,
};
const chartData = {
  datasets: [
      {
        data: measurementsData.value.map(value => value.value),
        backgroundColor: '#404040',
        xAxisID: 'x2',
        barThickness: 30,
        datalabels: {
          display: true,
          align: "bottom",
          anchor: "end",
          color: "white"
        }
      },
    {
      data: measurementsData.value.map(value => value.min),
      stack: '1',
      backgroundColor: '#8f4444',
      datalabels: {
        display: false
      }
    }, {
      data: measurementsData.value.map(value => value.max - value.min),
      stack: '1',
      backgroundColor: '#4b8f44',
      datalabels: {
        display: false
      }
    },
  ],
  labels: measurementsData.value.map(value => value.label)
}

</script>

<template>
  <Bar :options="options"
       :data="chartData"
       :plugins="[ChartDataLabels]"
  />
</template>

<style scoped>

</style>