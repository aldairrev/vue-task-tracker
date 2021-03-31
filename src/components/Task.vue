<template>
  <div
    :class="[task.reminder ? 'border-l-4 border-green-600 hover:border-l-8' : '' ]"
    class="duration-100 bg-gray-100 p-3 mt-4 rounded flex items-center"
  >
    <div
      class="cursor-pointer text-gray-600 flex-grow select-none"
      @dblclick="$emit('toggle-reminder', task.id)"
    >
      <h3>{{ task.text }}</h3>
      <p>{{ task.day }}</p>
    </div>
    <div class="">
      <button @click="$emit('delete-task', task.id)" class="focus:ring-2 focus:ring-red-500 bg-red-400 py-2 px-4 font-bold text-red-800 rounded">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'Task',
  props: {
    task: Object
  },
}
</script>
