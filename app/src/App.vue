<template>
  <div id="app">
    <CustomEditor />
  </div>
</template>

<script>
import CustomEditor from "@/components/CustomEditor";
export default {
  name: "App",
  components: { CustomEditor }
};
</script>

<style>
#app {
  margin-top: 20px;
}
</style>
