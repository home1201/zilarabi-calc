<template>
  <h1 class="title">안심다방 계산기</h1>
  <div class="menu-list">
    <MenuList v-for="submenu in menu" :key="submenu.listName" :title="submenu.listName" :items="submenu.items" />
  </div>
  <TheCost :total-cost="TotalCost" />
</template>

<script lang="ts">
import MenuList from '@/components/MenuList.vue';
import TheCost from '@/components/TheCost.vue';

export default {
  components: {
    MenuList,
    TheCost
  },
  data() {
    return {
      menu: [
        {
          listName: "커피",
          items: [
            {
              name: '아메리카노',
              amount: null,
              width: 174,
              height: 186,
              cost: 2000,
              imageurl: "images/americano.webp"
            },
            {
              name: '카페라떼',
              amount: null,
              cost: 2500,
              width: 254,
              height: 172,
              imageurl: "images/latte.webp"
            },
            {
              name: "바닐라라떼",
              amount: null,
              cost: 2500,
              width: 153,
              height: 237,
              imageurl: "images/vanila.webp"
            },
          ]
        },
        {
          listName: "음료",
          items: [
            {
              name: "초코라떼",
              amount: null,
              cost: 2500,
              width: 180,
              height: 206,
              imageurl: "images/choco.webp"
            },
            {
              name: "망고스무디",
              amount: null,
              cost: 3000,
              width: 144,
              height: 295,
              imageurl: "images/mango.webp"
            },
            {
              name: "요거트스무디",
              amount: null,
              cost: 2500,
              width: 181,
              height: 369,
              imageurl: "images/yogurt.webp"
            },
            {
              name: "복숭아티",
              amount: null,
              cost: 2000,
              width: 144,
              height: 300,
              imageurl: "images/icetea.webp"
            },
            {
              name: "복숭아티 커피",
              amount: null,
              cost: 2500,
              width: 144,
              height: 300,
              imageurl: "images/icetea_coffee.webp"
            }
          ]
        }
      ],
      received: null,
    }
  },
  computed: {
    TotalCost() {
      return this.menu.reduce((acc: Number, curMenu: Object) =>
        curMenu.items.reduce((accPerItem: Number, curItem: Object) =>
          accPerItem + curItem.amount * curItem.cost, acc)
        , 0)
    }
  }
}
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
