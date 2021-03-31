<template>
  <div class="container">
    <div class="border-2 rounded border-gray-500 p-4 max-w-md mx-auto">
      <Header
        title="Task Tracker"
        @toggle-add-task="toggleAddTask"
        :showAddTask="showAddTask"
      /> 
      <div v-show="showAddTask">
        <AddTask @add-task="addTask"/>
      </div>
      <div v-show="!showAddTask">
        <Tasks
          :tasks="tasks"
          @delete-task="deleteTask"
          @toggle-reminder="toggleReminder"
        />
      </div>
      
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    deleteTask(id) {
      if( confirm('Are you sure?') ) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder} : task);
    },
    addTask(newTask) {
      this.tasks = [...this.tasks, newTask];
      this.showAddTask = !this.showAddTask;
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
      console.log(this.showAddTask);
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appoinment',
        day: 'March 1st at 2:30pm',
        reminder: true 
      },
      {
        id: 2,
        text: 'Task 2',
        day: 'March 5st at 1:30pm',
        reminder: false 
      },
      {
        id: 3,
        text: 'Task 3',
        day: 'March 3st at 8:30pm',
        reminder: true
      }
    ]
  } 
};
</script>
