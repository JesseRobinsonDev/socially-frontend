<template>
  <b-form @submit="onSubmit">
    <b-form-group
      id="username-input-group"
      label="Username:"
      label-for="username-input"
      ><b-form-input
        id="username-input"
        v-model="form.username"
        placeholder="Enter your username"
        type="text"
        required
    /></b-form-group>
    <b-form-group
      id="password-input-group"
      label="Password:"
      label-for="password-input"
      ><b-form-input
        id="password-input"
        v-model="form.password"
        placeholder="Enter your Password"
        type="password"
        required
    /></b-form-group>
    <b-form-group
      id="confirm-password-input-group"
      label="Confirm Password:"
      label-for="confirm-password-input"
      ><b-form-input
        id="confirm-password-input"
        v-model="form.confirmPassword"
        placeholder="Re-enter your Password"
        type="password"
        required
    /></b-form-group>
    <b-button type="submit" variant="primary" block>Register</b-button>
  </b-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      axios
        .post(`${process.env.API_URL}/user/register`, {
          username: this.form.username,
          password: this.form.password,
        })
        .then((response) => {
          if (response.data.status === 200) {
            this.$store.commit('user/setUserID', response.data.data.UserID)
          }
        })
    },
  },
}
</script>

<style></style>
