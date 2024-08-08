<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, BarElement, CategoryScale, LinearScale } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(Title, BarElement, CategoryScale, LinearScale)
const measurements = {
  min: 30,
  max: 45,
  value: 35,
  label: "Muscle Mass"
}
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
      max: Math.ceil(Math.max(measurements.max, measurements.value)/10)*10 + 10
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
const data = {
  datasets: [
      {
        data: [measurements.value],
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
      data: [measurements.min],
      stack: '1',
      backgroundColor: '#8f4444',
      datalabels: {
        display: false
      }
    }, {
      data: [measurements.max - measurements.min],
      stack: '1',
      backgroundColor: '#4b8f44',
      datalabels: {
        display: false
      }
    },
  ],
  labels: [measurements.label]
}

</script>

<template>
  <Bar :options="options"
       :data="data"
       :plugins="[ChartDataLabels]"
  />
</template>

<style scoped>

</style>