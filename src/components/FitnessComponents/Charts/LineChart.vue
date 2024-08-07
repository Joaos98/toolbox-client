<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, TimeScale } from 'chart.js'
import 'chartjs-adapter-date-fns';
import {ref, defineProps} from "vue";
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, TimeScale)

const props = defineProps(["measurements"])
const options = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: "Date"
      },
      type: 'time',
      time: {
        unit: "day",
        displayFormats: {
          day: 'MMM dd, yyyy'
        },
        tooltipFormat: "MMM dd, yyyy"
      },
      ticks: {
        source: "data"
      }
    },
    y: {
      title: {
        display: true,
        text: "Kg"
      }
    }
  }
}
const data = ref({
  labels: props.measurements.map(measurement => measurement.date),
  datasets: [
    {
      label: "Weight",
      data: props.measurements.map(measurement => parseFloat(measurement.bodyWeight)),
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF'
    },
    {
      label: "Muscle Mass",
      data: props.measurements.map(measurement => parseFloat(measurement.muscleMass)),
      backgroundColor: '#0a7e00',
      borderColor: '#0a7e00'
    },
    {
      label: "Body Fat",
      data: props.measurements.map(measurement => parseFloat(measurement.bodyFat)),
      backgroundColor: '#9d0000',
      borderColor: '#9d0000'
    }
  ]
})
</script>

<template>
  <Line
      :options="options"
      :data="data"
  />
</template>

<style scoped>

</style>