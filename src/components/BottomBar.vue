<template>
  <div class="calc">
    <div class="total-cost">
      총 금액 : <span class="total-cost__value">{{ totalCost }}원</span>
    </div>
    <div class="received">
      <label class="received__label">
        손님이 준 돈 :
        <input
          v-model="received"
          type="number"
          class="received__input"
        >
      </label>
      원
    </div>
    <div class="change">
      {{ changeMessage }}
    </div>
    <button
      type="button"
      class="reset"
      popovertarget="notify-reset"
      @click="resetData"
    >
      모두 지우기
    </button>
    <div
      id="notify-reset"
      popover
      @toggle="closeNotify"
    >
      지우기 완료!
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  totalCost: {
    type: Number,
    required: true,
  },
});
const received: Ref<number | null> = ref(null);
const changeMessage = computed(() => {
  const result = received.value - props.totalCost;
  return result >= 0
    ? `거스름돈은 ${result}원`
    : `${Math.abs(result)}원 더 받기`;
});

const emit = defineEmits(["resetAmount"]);
const resetData = () => {
  received.value = null;
  emit("resetAmount");
};

const closeNotify = (event) => {
  if (event.newState === "close") return;
  setTimeout(() => event.target.hidePopover(), 700);
};
</script>

<style lang="scss" scoped>
.calc {
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template: auto auto 1fr / auto 1fr;
  grid-auto-flow: column;
  row-gap: var(--space-100);
  width: 100%;
  padding-block: var(--space-200);
  padding-inline-start: var(--space-300);
  background: var(--color-white);
  border-block-start: 1px solid var(--color-gray-500);
}

.total-cost {
  font-weight: 600;

  &__value {
    color: var(--color-secondary-500);
  }
}

.change {
  font-weight: 600;
  color: var(--color-secondary-500);
}

.reset {
  grid-row: span 3;
  margin: var(--space-500) var(--space-400);
  font-weight: 600;
  background-color: var(--color-secondary-300);
  filter: drop-shadow(0 1px 1px var(--color-secondary-500));
  border: none;
  border-radius: var(--radius-min);
}

.received {
  display: block;

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
  top: 50%;
  left: 50%;
  display: none;
  padding: var(--space-300) var(--space-400);
  background-color: var(--color-primary-100);
  filter: drop-shadow(0 1px 1px var(--color-primary-400));
  border: none;
  border-radius: var(--radius-min);
  opacity: 0;
  transition-duration: 1s;
  transition-property: opacity, display;
  translate: -50% -50%;
  transition-behavior: allow-discrete;

  &:popover-open {
    display: block;
    opacity: 1;
  }
}
</style>
