<template>
  <li class="item">
    <img class="item__image" alt="" :width="width" :height="height" :src="ConvertedImageUrl">
    <div class="item__text">
      <label class="item__label">{{ name }}
        <input type="number" class="item__input" :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)">
      </label>
      개
    </div>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: [Number, null],
      required: true
    }
  },
  emits: ['update:modelValue'],
  computed: {
    ConvertedImageUrl() {
      return `${import.meta.env.BASE_URL}${this.imageUrl}`;
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: var(--space-300);


  &__label {
    display: inline-flex;
    align-items: center;
    margin-inline-end: -0.2ch;
  }

  &__image {
    grid-column: span 2;
    width: auto;
    height: 7rem;
  }

  &__input {
    width: 5ch;
    margin-inline-start: var(--space-200);
  }
}
</style>
