<template>
  <CompositeApi :user="user"></CompositeApi>
</template>

<script>
import CompositeApi from "@/components/CompositeApi.vue";

export default {
  components: {
    CompositeApi,
  },
  data() {
    return {
      user: this.$route.params.user,
    };
  },
};
</script>
