<template>
  <div>
    <h1>안심다방 계산기</h1>
    <MenuList title="커피류">
      <MenuItem name="아메리카노" />
    </MenuList>

    <MenuList title="음료류" />
    <!-- 커피메뉴 -->
    <!-- 음료메뉴 -->
    <!-- 총 금액 -->
    <!-- 거스름돈 계산 (손님이 준 돈 입력 포함) -->
  </div>
</template>

<script>
import MenuItem from './components/MenuItem.vue';
import MenuList from './components/MenuList.vue';

export default {
  components: {
    MenuList,
    MenuItem
  },
  data() {
    return {
      menu: {
        americano: {
          name: '아메리카노',
          amount: 0,
          cost: 2000,
          imageurl: ""
        },
        latte: {
          name: '카페라떼',
          amount: 0,
          cost: 2500,
          imageurl: ""
        },
        vanilaLatte: {
          name: "바닐라라떼",
          amount: 0,
          cost: 2500,
          imageurl: ""
        },
        chocoLatte: {
          name: "초코라떼",
          amount: 0,
          cost: 2500,
          imageurl: ""
        },
        mangoSmoothie: {
          name: "망고스무디",
          amount: 0,
          cost: 3000,
          imageurl: ""
        },
        yogurtSmoothie: {
          name: "요거트스무디",
          amount: 0,
          cost: 2500,
          imageurl: ""
        },
        peachIceTea: {
          name: "복숭아아이스티",
          amount: 0,
          cost: 2000,
          imageurl: ""
        },
        peachIceTeaWithCoffee: {
          name: "복숭아아이스티 커피 추가",
          amount: 0,
          cost: 2500,
          imageurl: ""
        }
      },
      total: 0,
      received: 0,
      change: 0
    }
  },
}
</script>

<style scoped></style>
