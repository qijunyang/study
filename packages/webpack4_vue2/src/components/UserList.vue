<template>
  <div>
    <div>User list management</div>
    <div>total: {{ numberOfUser }}</div>
    <div>
      <button @click="addUser">Add User</button>
      <button @click="reset">Reset</button>
    </div>
    <div v-for="(user, index) in userList" :key="index">
      <span>{{ user.firstName }}</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("UserManager", {
      userList: state => state.userList
    }),
    ...mapGetters("UserManager", ["numberOfUser"])
  },
  methods: {
    addUser() {
      this.appendUser({
        firstName: `random name ${new Date().getTime()}`
      });
    },
    reset() {
      this.loadUserList();
    },
    ...mapMutations("UserManager", ["appendUser"]),
    ...mapActions("UserManager", ["loadUserList"])
  }
};
</script>
