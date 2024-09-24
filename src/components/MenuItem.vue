<template>
  <li class="item">
    <label class="item__label">{{ name }}
      <input
        type="number"
        class="item__input"
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
  &__label {
    display: inline-flex;
    align-items: center;
  }

  &__input {
    margin-inline-start: var(--space-200);
    width: 5ch;
  }
}
</style>
