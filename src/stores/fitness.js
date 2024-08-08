import { ref } from 'vue'
import { defineStore } from 'pinia'
import {useAuthStore} from "@/stores/authentication.js";
import FitnessService from "@/services/FitnessService.js";

export const useFitnessStore = defineStore('fitness', () => {

    const workouts = ref([])
    const bodyCompositionMeasurements = ref([])
    const userMeasurementParameters = ref({})

    async function getWorkouts() {
        workouts.value = await FitnessService.getWorkouts()
    }
    async function createWorkout(workoutData) {
        const authStore = useAuthStore()
        workoutData.userId = authStore.user.id
        const response = await FitnessService.createWorkout(workoutData)
        if (response.status === 200) {
            location.reload()
        }
    }

    async function deleteWorkout(workout) {
        const response = await FitnessService.deleteWorkout(workout.id)
        if (response.status === 200) {
            location.reload()
        }
    }

    async function getBodyCompositionMeasurements() {
        bodyCompositionMeasurements.value = await FitnessService.getBodyCompositionMeasurements()
    }

    async function createBodyCompositionMeasurements(measurements) {
        const authStore = useAuthStore()
        measurements.userId = authStore.user.id
        const response = await FitnessService.createBodyCompositionMeasurements(measurements)
        if (response.status === 200) {
            location.reload()
        }
    }

    async function deleteBodyCompositionMeasurements(measurement) {
        const response = await FitnessService.deleteBodyCompositionMeasurements(measurement.id)
        if (response.status === 200) {
            location.reload()
        }
    }

    async function getUserMeasurementParameters() {
        userMeasurementParameters.value = await FitnessService.getUserMeasurementParameters()
        userMeasurementParameters.value = userMeasurementParameters.value[0]
    }

    return {
        workouts, getWorkouts, createWorkout, deleteWorkout,
        bodyCompositionMeasurements, createBodyCompositionMeasurements, getBodyCompositionMeasurements, deleteBodyCompositionMeasurements,
        userMeasurementParameters, getUserMeasurementParameters
    }
})
