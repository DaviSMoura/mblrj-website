<template>
  <div class="flex justify-center pt-4">
    <div class="tabs tabs-boxed">
      <a class="tab" @click.stop="tabsModel = i" :class="{ 'tab-active': tabsModel === i }" v-for="(tab, i) in tabs" :key="i">{{ tab }}</a>
    </div>
  </div>
  <div v-show="tabsModel === i" v-for="(tab, i) in tabs" :key="tab">
    <slot :name="i"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  data() {
    return {
      tabsModel: 0,
    }
  },
  props: {
    tabs: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
})
</script>