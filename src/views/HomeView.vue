<template>
  <h1 class="title">
    안심다방 계산기
  </h1>
  <div
    v-if="isMenuFetched"
    class="menu-list"
  >
    <MenuList
      title="커피"
      :items="coffeeItems"
    />
    <MenuList
      title="음료"
      :items="nonCoffeeItems"
    />
  </div>
  <TheCost :total-cost="totalCost" />
</template>

<script setup lang="ts">
import MenuList from '@/components/MenuList.vue';
import TheCost from '@/components/TheCost.vue';

import { ref, computed, onMounted } from 'vue';
import type { Ref } from 'vue';

type MenuType = {
  name: string;
  amount: number | null;
  cost: number;
  isCoffee: boolean;
  imageurl: string;
};
const menuItems: Ref<MenuType[] | null> = ref(null);
const coffeeItems = computed(() => !menuItems.value ? null : menuItems.value.filter((item: MenuType) => item.isCoffee === true))
const nonCoffeeItems = computed(() => !menuItems.value ? null : menuItems.value.filter((item: MenuType) => item.isCoffee === false))

const totalCost = computed(() =>
  !menuItems.value ? 0 : menuItems.value.reduce((acc: number, item: MenuType) =>
    acc + item.amount * item.cost, 0)
)

const isMenuFetched: Ref<boolean> = ref(false);
onMounted(() => {
  fetch('/api/collections/menu_item/records').then(res => res.json())
    .then(res => {
      menuItems.value = res.items.map(item => ({
        name: item.name, isCoffee: item.isCoffee, imageUrl: `https://zilarabi-pocket-frosty-frost-5055.fly.dev/api/files/menu_item/${item.id}/${item.image}`, cost: item.cost, amount: null,
      }))
      isMenuFetched.value = true;
    })
})

// https://zilarabi-pocket-frosty-frost-5055.fly.dev/api/collections/menu_item/records
// https://zilarabi-pocket-frosty-frost-5055.fly.dev/api/files/menu_item/mcixnk5ktpqxc9e/americano_0HcyJcIAV1.webp
</script>

<style scoped lang="scss">
.title {
  margin-block-start: var(--space-400);
}

.menu-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-block: var(--space-400) var(--space-300);
}
</style>
