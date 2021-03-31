<template>
  <form @submit="onSubmit" class="mt-4">
    <div class="mb-4">
      <label class="text-gray-600 mb-2 block" for="text">Name:</label>
      <input 
        class="w-full p-2 border-gray-500 border-2 rounded text-gray-600 outline-none text-sm"
        type="text"
        name="text"
        v-model="text"
        required
      >
    </div>
    <div class="mb-4">
      <label class="text-gray-600 mb-2 block" for="day">Date:</label>
      <input
        class="w-full p-2 border-gray-500 border-2 rounded text-gray-600 outline-none text-sm"
        type="text"
        name="day"
        v-model="day"
        required
      >
    </div>
    <div>
      <label for="reminder">Reminder</label>
      <input
        class="checked:bg-blue-600 border-2 border-gray-200 checked:bg-blue-600 checked:border-transparent ml-4"
        type="checkbox"
        name="reminder"
        v-model="reminder"
      >
    </div>
    <div class="mt-5">
      <button type="submit" class="bg-green-500 text-white p-4 rounded t-4 block w-full">Add Task</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const newTask = {
        id: Math.floor(Math.random() * 10000),
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }
      this.$emit('add-task', newTask);
    },
  }
}
</script>
