import { ref, computed } from "vue";

// 关注点分离, 根据名称搜索仓库
export default function useRepositoryNameSearch(repositories) {
  // 创建一个响应式变量
  const searchQuery = ref("");

  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter((repository) => {
      return repository.name.includes(searchQuery.value);
    });
  });

  return {
    searchQuery,
    repositoriesMatchingSearchQuery,
  };
}
