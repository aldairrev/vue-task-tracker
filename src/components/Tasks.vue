<template>
  <div :key="task.id" v-for="task in tasks">
      <Task 
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
        @toggle-reminder="$emit('toggle-reminder', task.id)"
      />
  </div>
  <div class="text-gray-500 text-center mt-4">Double Click in the task to toggle reminder</div>
</template>

<script>
import Task from './Task';

export default {
   name: 'Tasks',
   props: {
     tasks: Array
   },
   components: {
     Task
   },
   emits: ['delete-task', 'toggle-reminder']
}
</script>
