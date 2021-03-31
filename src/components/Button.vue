 <template>
  <button
    :class="[bg_color, text_color, border_color]" 
    class="p-4 border-2 rounded duration-100"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String
    },
    color: {
      type: String
    }
  },
  data() {
    return {
      bg_color: "bg-" + this.color + "-100",
      text_color: "text-" + this.color + "-600",
      border_color: "border-" + this.color + "-400"
    }
  },
  methods: {
    onClick() {
      this.$emit('toggle-add-task');
    } 
  }
}
</script>
