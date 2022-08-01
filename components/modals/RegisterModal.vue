<template>
  <div class="modal-container">
    <div class="modal-bodyy">
      <div class="modal-title">
        <span class="modal-title-text">Register</span>
        <b-button variant="danger" @click="$emit('toggleRegisterModal')"
          >X</b-button
        >
      </div>
      <RegisterForm />
      <b-button block @click="$emit('switchModal')"
        >Already have an account? Login Now!</b-button
      >
    </div>
  </div>
</template>

<script>
import RegisterForm from '../forms/RegisterForm.vue'
export default {
  name: 'RegisterModal',
  components: { RegisterForm },
}
</script>

<style>
.modal-container {
  position: fixed;
  z-index: 99;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-bodyy {
  width: 32rem;
  height: auto;
  padding: 1rem;
  background-color: rgb(38, 38, 38);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.modal-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.modal-title-text {
  font-size: 1.5rem;
  font-weight: 300;
}
</style>
