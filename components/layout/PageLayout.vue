<template>
  <div class="page-layout">
    <PageHeader
      v-if="header"
      @toggleLoginModal="toggleLoginModal"
      @toggleRegisterModal="toggleRegisterModal"
    />
    <div class="page-children">
      <slot />
    </div>
    <LoginModal
      v-if="loginModal"
      @toggleLoginModal="toggleLoginModal"
      @switchModal="switchModal"
    />
    <RegisterModal
      v-if="registerModal"
      @toggleRegisterModal="toggleRegisterModal"
      @switchModal="switchModal"
    />
  </div>
</template>

<script>
import LoginModal from '../modals/LoginModal.vue'
import RegisterModal from '../modals/RegisterModal.vue'
import PageHeader from './PageHeader.vue'
export default {
  name: 'PageLayout',
  components: { PageHeader, LoginModal, RegisterModal },
  props: {
    header: Boolean,
  },
  data() {
    return {
      loginModal: false,
      registerModal: false,
    }
  },
  methods: {
    toggleLoginModal() {
      this.loginModal = !this.loginModal
    },
    toggleRegisterModal() {
      this.registerModal = !this.registerModal
    },
    switchModal() {
      this.loginModal = !this.loginModal
      this.registerModal = !this.registerModal
    },
  },
}
</script>

<style scoped>
.page-layout {
  min-height: 100vh;
  height: auto;
  color: white;
  display: flex;
  flex-direction: column;
}

.page-children {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: rgb(20, 20, 20);
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
}
</style>
