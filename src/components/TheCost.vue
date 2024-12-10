<template>
  <div class="calc">
    <div class="total-cost">
      총 금액 : <span class="total-cost__value">{{ totalCost }}원</span>
    </div>
    <div class="received">
      <label class="received__label">
        손님이 준 돈 : <input
          v-model="received"
          type="number"
          class="received__input"
        >
      </label>
      원
    </div>
    <div class="change">
      거스름돈 :
      <span class="change__value">{{ changeMessage }}</span>
    </div>
    <button
      type="button"
      class="change__reset"
      popovertarget="notify-reset"
    >
      모두 지우기
    </button>
    <div
      id="notify-reset"
      class="dummy"
      popover
    >
      지우기 완료!
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Ref } from 'vue';

const props = defineProps({
  totalCost: {
    type: Number,
    required: true,
  }
})
const received: Ref<number | null> = ref(null)
const changeMessage = computed(() => {
  const result = received.value - props.totalCost;
  return result >= 0 ? `${result}원` : `${Math.abs(result)}원을 더 받아야 합니다`
})
</script>

<style lang="scss" scoped>
.calc {
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr;
  grid-auto-flow: column;
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

  &__reset {
    grid-row: span 3;
    margin: var(--space-500) var(--space-600);
    font-weight: 600;
    background-color: var(--color-secondary-300);
    filter: drop-shadow(0 1px 1px var(--color-secondary-500));
    border: none;
    border-radius: var(--radius-min);
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

#notify-reset {
  &:popover-open {
    top:50%;
    left: 50%;
    display: block;
    padding: var(--space-300) var(--space-400);
    background-color: var(--color-primary-100);
    filter: drop-shadow(0 1px 1px var(--color-primary-400));
    border: none;
    border-radius: var(--radius-min);
    transition-duration: 1s;
    transition-property: opacity, display;
    translate: -50% -50%;
    transition-behavior: allow-discrete;
  }

  &.close {
    display: none;
    opacity: 0;
  }
}
</style>
