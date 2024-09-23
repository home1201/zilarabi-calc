<template>
  <div>
    <h1>안심다방 계산기</h1>
    <MenuList v-for="submenu in menu" :key="submenu.listName" :title="submenu.listName" :items="submenu.items" />
    <div class="total-cost">
      총 금액: <span class="total-cost__value">{{ TotalCost }}원</span>
    </div>
    <label class="received">
      손님이 준 금액: <input v-model="received" type="number">원
    </label>
    <div class="change">
      거스름돈:
      <span class="change__value">{{ Change }}</span>
    </div>
    <!-- 거스름돈 계산 (손님이 준 돈 입력 포함) -->
  </div>
</template>

<script lang="ts">
import MenuList from './components/MenuList.vue';

export default {
  components: {
    MenuList,
  },
  data() {
    return {
      menu: [
        {
          listName: "커피",
          items: [
            {
              name: '아메리카노',
              amount: 0,
              cost: 2000,
              imageurl: ""
            },
            {
              name: '카페라떼',
              amount: 0,
              cost: 2500,
              imageurl: ""
            },
            {
              name: "바닐라라떼",
              amount: 0,
              cost: 2500,
              imageurl: ""
            },
          ]
        },
        {
          listName: "음료",
          items: [
            {
              name: "초코라떼",
              amount: 0,
              cost: 2500,
              imageurl: ""
            },
            {
              name: "망고스무디",
              amount: 0,
              cost: 3000,
              imageurl: ""
            },
            {
              name: "요거트스무디",
              amount: 0,
              cost: 2500,
              imageurl: ""
            },
            {
              name: "복숭아아이스티",
              amount: 0,
              cost: 2000,
              imageurl: ""
            },
            {
              name: "복숭아아이스티 커피 추가",
              amount: 0,
              cost: 2500,
              imageurl: ""
            }
          ]
        }
      ],
      received: 0,
    }
  },
  computed: {
    TotalCost() {
      return this.menu.reduce((acc: Number, curMenu: Object) =>
        curMenu.items.reduce((accPerItem: Number, curItem: Object) =>
          accPerItem + curItem.amount * curItem.cost, acc)
        , 0)
    },
    Change() {
      const result = this.received - this.TotalCost;
      return result >= 0 ? `${result}원` : `${Math.abs(result)}원을 더 받아야 합니다`
    }
  }
}
</script>

<style scoped></style>
