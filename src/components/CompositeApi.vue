<template>
  <div class="about">
    <input v-model="searchQuery" />
    <p v-for="item in repositories" :key="item.name">{{ item.name }}</p>
  </div>
</template>

<script>
import { toRefs } from "vue";
import useRepositoryNameSearch from "@/composables/useRepositoryNameSearch";
import useUserRepositories from "@/composables/useUserRepositories";

export default {
  components: {},
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { user } = toRefs(props);
    const { repositories, getUserRepositories } = useUserRepositories(user);
    const { searchQuery, repositoriesMatchingSearchQuery } =
      useRepositoryNameSearch(repositories);

    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery,
    };
  },
  data() {
    return {};
  },
};
</script>
