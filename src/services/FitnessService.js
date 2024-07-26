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
    }
}