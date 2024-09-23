<template>
  <li>
    <label>{{ name }}:
      <input
        type="number"
        class="item__count"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </label>
    개
  </li>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {

  },
}
</script>

<style scoped>
.item {
  &__count {
    width: 2rem;
  }
}
</style>
