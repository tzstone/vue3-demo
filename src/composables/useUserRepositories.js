import { ref, onMounted, watch } from "vue";

const fetchUserRepositories = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = [];
      switch (user) {
        case "1":
          result = [{ name: "abc" }, { name: "def" }];
          break;
        case "2":
          result = [{ name: "bcd" }, { name: "efg" }];
          break;
        default:
          result = [{ name: "default" }];
          break;
      }
      resolve(result);
    }, 300);
  });
};

// 关注点分离, 根据用户获取仓库列表
export default function useUserRepositories(user) {
  // 创建一个响应式变量
  const repositories = ref([]);

  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value);
  };

  // mounted生命周期调用
  onMounted(getUserRepositories);

  // 监听并响应user变化
  watch(user, getUserRepositories);

  return {
    repositories,
    getUserRepositories,
  };
}
