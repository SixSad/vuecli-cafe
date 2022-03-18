<template>
  <article>
    <form @submit.prevent="fetchLogin">
      <h2>Авторизация</h2>
      <div>
        <input type="text" name="login" id="login_enter" v-model="login" placeholder="Login">
      </div>
      <div>
        <input type="password" name="password" id="password_enter" v-model="password"  placeholder="Password">
      </div>
      <div class="buttons">
        <button class="approve_button" type="submit">LogIn</button>
      </div>
    </form>
  </article>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      login: "",
      password: "",
      errors: [],
      res: "",
    };
  },
  methods: {
    async fetchLogin() {
      const body = {
        login: this.login,
        password: this.password,
      };
      await this.$store.dispatch("fetchLogin", body);
      await this.$store.dispatch("getRole");
      this.login = '';
      this.password = '';
      await this.$router.push({name: 'index'});
    },
  },
};
</script>

<style scoped>

article{
  display: flex;
  justify-content: center;
}
form{
  max-width: 600px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.buttons{
  min-height: 100px;
  display: flex;
  flex-direction: column;
}
</style>