<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <MenuItem
        v-for="item in items"
        :key="item.name"
        v-model="item.amount"
        :name="item.name"
        :image-url="item.imageurl"
      />
    </ul>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  components: { MenuItem },
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true }
  }
}
</script>
