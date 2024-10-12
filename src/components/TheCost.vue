<template>
  <div class="calc">
    <div class="total-cost">
      총 금액 : <span class="total-cost__value">{{ totalCost }}원</span>
    </div>
    <div class="received">
      <label class="received__label">
        손님이 준 돈 : <input v-model="received" type="number" class="received__input">
      </label>
      원
    </div>
    <div class="change">
      거스름돈 :
      <span class="change__value">{{ ChangeMessage }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    totalCost: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      received: null,
    }
  },
  computed: {
    ChangeMessage() {
      const result = this.received - this.totalCost;
      return result >= 0 ? `${result}원` : `${Math.abs(result)}원을 더 받아야 합니다`
    }
  },
}
</script>

<style lang="scss" scoped>
.calc {
  position: sticky;
  bottom: 0;
  width: 100%;
  padding-block-end: var(--space-300);
  padding-inline-start: var(--space-300);
  background: var(--color-white);
  border-block-start: 1px solid var(--color-gray-500);
}

.total-cost,
.change {
  padding-block-start: var(--space-200);
  font-weight: 600;

  &__value {
    color: var(--color-secondary-500);
  }
}

.received {
  display: block;
  margin-block-start: var(--space-200);

  &__label {
    display: inline-flex;
    align-items: center;
  }

  &__input {
    width: 4rem;
    margin-inline-start: var(--space-200);
  }
}
</style>
