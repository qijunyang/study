<template>
  <div>
    <user-list />
    <div id="shell"></div>
  </div>
</template>
<script>
import UserList from "./UserList.vue";

export default {
  components: {
    UserList
  }
};
</script>
