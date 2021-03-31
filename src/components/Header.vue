<template>
  <header class="flex justify-between items-center">
    <h1 class="text-2xl text-gray-500">{{ title }}</h1>
    <Button
      @toggle-add-task="$emit('toggle-add-task')"
      :text="this.showAddTask ? 'Close' : 'Add Task'"
      color="green"
    />
  </header> 
</template>

<script>
import Button from './Button';

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Hello World',
    },
    showAddTask: Boolean
  },
  components: {
    Button
  }
}
</script>
