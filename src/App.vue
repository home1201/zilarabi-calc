<template>
  <h1 class="title">안심다방 계산기</h1>
  <div class="menu-list">
    <MenuList v-for="submenu in menu" :key="submenu.listName" :title="submenu.listName" :items="submenu.items" />
  </div>
  <div class="total-cost">
    총 금액 : <span class="total-cost__value">{{ TotalCost }}원</span>
  </div>
  <div class="received">
    <label class="received__label">
      손님이 준 금액<input v-model="received" type="number" class="received__input">
    </label>
    원
  </div>
  <div class="change">
    거스름돈 :
    <span class="change__value">{{ Change }}</span>
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
              amount: null,
              cost: 2000,
              imageurl: "images/americano.png"
            },
            {
              name: '카페라떼',
              amount: null,
              cost: 2500,
              imageurl: "images/latte.png"
            },
            {
              name: "바닐라라떼",
              amount: null,
              cost: 2500,
              imageurl: "images/vanila.png"
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
              imageurl: "images/choco.png"
            },
            {
              name: "망고스무디",
              amount: null,
              cost: 3000,
              imageurl: "images/mango.png"
            },
            {
              name: "요거트스무디",
              amount: null,
              cost: 2500,
              imageurl: "images/yogurt.png"
            },
            {
              name: "복숭아티",
              amount: null,
              cost: 2000,
              imageurl: "images/icetea.png"
            },
            {
              name: "복숭아티 커피",
              amount: null,
              cost: 2500,
              imageurl: "images/icetea_coffee.png"
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
    },
    Change() {
      const result = this.received - this.TotalCost;
      return result >= 0 ? `${result}원` : `${Math.abs(result)}원을 더 받아야 합니다`
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: var(--space-400);
}

.menu-list {
  margin-top: var(--space-400);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}

.received {
  display: block;
  margin-top: var(--space-200);

  &__label {
    display: inline-flex;
    align-items: center;
  }

  &__input {
    width: 4rem;
    margin-inline-start: var(--space-200);
  }
}

.total-cost {
  margin-top: var(--space-400);
}

.total-cost,
.change {
  padding-top: var(--space-200);
  font-weight: 600;

  &__value {
    color: var(--color-secondary-500);
  }
}
</style>
