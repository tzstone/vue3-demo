<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>mouse: {{x}} x {{y}}</p>
    <p>
      interval filed: {{ counter }}
      <button @click="pause">pause</button>
      <button @click="resume">resume</button>
    </p>
  </div>
</template>

<script>
import { useMouse, useInterval } from '@vueuse/core'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { x, y } = useMouse()
    const { counter, pause, resume } = useInterval(200, {controls: true })
    return {
      x,
      y,
      counter,
      pause,
      resume
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
