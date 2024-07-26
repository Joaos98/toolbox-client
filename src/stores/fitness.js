import { ref } from 'vue'
import { defineStore } from 'pinia'
import {useAuthStore} from "@/stores/authentication.js";
import FitnessService from "@/services/FitnessService.js";

export const useFitnessStore = defineStore('fitness', () => {

    const workouts = ref([])

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


    return {workouts, getWorkouts, createWorkout, deleteWorkout}
})
