import MedicationHome from "@/views/tools/meds/MedicationHome.vue";
import AppointmentHome from "@/views/tools/AppointmentHome.vue";
import ResultHome from "@/views/tools/ResultHome.vue";
import GoalHome from "@/views/tools/GoalHome.vue";
import SupportHome from "@/views/tools/SupportHome.vue";
import MoodHome from "@/views/tools/MoodHome.vue";

const ToolService = {
    toolList: [
        {
            id: "medicationService",
            name: "Manage Medications",
            desc: "Keep track of when you need to take your medications.",
            prompt: "Add Medication",
            iconPath: "/assets/icon/fancyMeds.svg",
            component: MedicationHome,
            // service:MedicationService,
        }, {
            id: "appointments",
            name: "Track Appointments",
            desc: "Get reminders when it's time for check-ups or refills.",
            prompt: "Add Appointment",
            iconPath: "/assets/icon/fancySteth.svg",
            component: AppointmentHome,
            // service:AppointmentService
        }, {
            id: "results",
            name: "Monitor Test Results",
            desc: "Upload test results over time to monitor your health.",
            iconPath: "/assets/icon/fancyChart.svg",
            prompt: "Add Test Results",
            component: ResultHome,
            // service:TestResultService
        }, {
            id: "goals",
            name: "Set Personal Goals",
            desc: "Get more exercise? Eat Healthier? Set goals and track your progress.",
            iconPath: "/assets/icon/fancyGoal.svg",
            prompt: "Add a Personal Goal",
            component: GoalHome,
            // service:GoalService
        }, {
            id: "support",
            name: "Get Support",
            desc: "Sign up for free support group sessions.",
            iconPath: "/assets/icon/fancyComputer.svg",
            prompt: "Sign up for Virtual support",
            component: SupportHome,
            // service:SupportService,

        }, {
            id: "moods",
            name: "Mood Tracker",
            desc: "Track your mood",
            iconPath: "/assets/img/moods/4.svg",
            prompt: "Record how you're feeling today.",
            component: MoodHome,
            // service:MoodService,
        }
    ]
}
export default ToolService