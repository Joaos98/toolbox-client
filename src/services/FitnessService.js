import Api from "@/services/api.js"
import {useAuthStore} from "@/stores/authentication.js";

export default {
    async getWorkouts() {
        const authStore = useAuthStore()
        const workouts = await Api().get("/fitness/workouts", {
            params: {
                userId: authStore.user.id
            }
        })
        return workouts.data
    },

    async createWorkout(workout) {
        return await Api().post("/fitness/workouts", workout)
    },

    async deleteWorkout(workoutId) {
        return await Api().delete("/fitness/workouts", {params: {id: workoutId}})
    },

    async createBodyCompositionMeasurements(measurements) {
        return await Api().post("/fitness/bodyCompositionMeasurements", measurements)
    },

    async getBodyCompositionMeasurements() {
        const authStore = useAuthStore()
        const measurements = await Api().get("/fitness/bodyCompositionMeasurements", {
            params: {
                userId: authStore.user.id
            }
        })
        return measurements.data
    },

    async deleteBodyCompositionMeasurements(measurement) {
        return await Api().delete("/fitness/bodyCompositionMeasurements", {params: {id: measurement}})
    },

    async getUserMeasurementParameters() {
        const authStore = useAuthStore()
        const measurements = await Api().get("/fitness/userMeasurementParameters", {
            params: {
                userId: authStore.user.id
            }
        })
        return measurements.data
    }
}