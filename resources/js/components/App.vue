<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <sidebar />
      <preview />
    </div>
  </div>
</template>

<script>
import Preview from "./Preview.vue";
import Sidebar from "./Sidebar";
export default {
  components: {
    Sidebar,
    Preview,
  },
};
</script>