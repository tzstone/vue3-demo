<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <p>异步组件: <AsyncComponent></AsyncComponent></p>
</template>

<script>
import { defineAsyncComponent, ref, reactive } from "vue";
export default {
  components: {
    AsyncComponent: defineAsyncComponent(() =>
      import("@/components/AsyncComponent.vue")
    ),
  },
  data() {
    return {
      list: [1, 2, 3],
    };
  },
};
</script>
