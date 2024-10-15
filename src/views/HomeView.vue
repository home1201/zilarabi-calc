<template>
  <h1 class="title">안심다방 계산기</h1>
  <div class="menu-list">
    <MenuList title="커피" :items="coffeeItems" />
    <MenuList title="음료" :items="nonCoffeeItems" />
  </div>
  <TheCost :total-cost="totalCost" />
</template>

<script setup lang="ts">
import MenuList from '@/components/MenuList.vue';
import TheCost from '@/components/TheCost.vue';

import { ref, computed } from 'vue';
import type { Ref } from 'vue';

type MenuType = {
  name: string;
  amount: number | null;
  width: number;
  height: number;
  cost: number;
  isCoffee: boolean;
  imageurl: string;
};
const menuItems: Ref<MenuType[]> = ref([
  {
    name: '아메리카노',
    amount: null,
    width: 174,
    height: 186,
    cost: 2000,
    isCoffee: true,
    imageurl: "images/americano.webp"
  },
  {
    name: '카페라떼',
    amount: null,
    cost: 2500,
    width: 254,
    height: 172,
    isCoffee: true,
    imageurl: "images/latte.webp"
  },
  {
    name: "바닐라라떼",
    amount: null,
    cost: 2500,
    width: 153,
    height: 237,
    isCoffee: true,
    imageurl: "images/vanila.webp"
  },
  {
    name: "초코라떼",
    amount: null,
    cost: 2500,
    width: 180,
    height: 206,
    isCoffee: false,
    imageurl: "images/choco.webp"
  },
  {
    name: "망고스무디",
    amount: null,
    cost: 3000,
    width: 144,
    height: 295,
    isCoffee: false,
    imageurl: "images/mango.webp"
  },
  {
    name: "요거트스무디",
    amount: null,
    cost: 2500,
    width: 181,
    height: 369,
    isCoffee: false,
    imageurl: "images/yogurt.webp"
  },
  {
    name: "복숭아티",
    amount: null,
    cost: 2000,
    width: 144,
    height: 300,
    isCoffee: false,
    imageurl: "images/icetea.webp"
  },
  {
    name: "복숭아티 커피",
    amount: null,
    cost: 2500,
    width: 144,
    height: 300,
    isCoffee: false,
    imageurl: "images/icetea_coffee.webp"
  }
])
const coffeeItems = computed(() => menuItems.value.filter((item: MenuType) => item.isCoffee === true))
const nonCoffeeItems = computed(() => menuItems.value.filter((item: MenuType) => item.isCoffee === false))

const totalCost = computed(() =>
  menuItems.value.reduce((acc: number, item: MenuType) =>
    acc + item.amount * item.cost, 0)
)

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
