<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :href="siteUrl" class="nav-title"
        >Socially</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="navbar-items ml-auto">
          <b-nav-item :href="siteUrl + '/user/' + $store.state.user.userID"
            ><img src="/icons/UserIcon.svg" class="nav-icon"
          /></b-nav-item>
          <b-nav-item :href="siteUrl + '/me/post'"
            ><img src="/icons/PostIcon.svg" class="nav-icon"
          /></b-nav-item>
          <b-nav-item :href="siteUrl + '/me/connect'"
            ><img src="/icons/LinkIcon.svg" class="nav-icon"
          /></b-nav-item>
          <b-button
            v-if="
              $store.state.user.userID == null ||
              $store.state.user.userID == undefined
            "
            variant="success"
            @click="$emit('toggleLoginModal')"
            >Login</b-button
          >
          <b-button
            v-if="
              $store.state.user.userID == null ||
              $store.state.user.userID == undefined
            "
            variant="primary"
            @click="$emit('toggleRegisterModal')"
            >Register</b-button
          >
          <b-button
            v-if="
              $store.state.user.userID != null &&
              $store.state.user.userID != undefined
            "
            variant="danger"
            @click="logout"
            >Logout</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  computed: {
    siteUrl() {
      return process.env.SITE_URL
    },
  },
  methods: {
    logout() {
      this.$store.commit('user/setUserID', null)
      localStorage.removeItem('user')
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Alex+Brush&display=swap');

.nav-title {
  font-size: 2rem;
  font-family: 'Alex Brush';
}

.navbar-items {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-icon {
  width: 2rem;
  height: 2rem;
}
</style>
