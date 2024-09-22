<template>
  <li>
    <span>{{ name }}</span>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  }
}
</script>
