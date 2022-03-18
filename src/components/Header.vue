<template>
  <header>
    <article>
      <router-link to="/"><img src="@/assets/logo.png" alt="logo"></router-link>
    </article>
    <nav v-if="this.$store.getters.getToken">
      <router-link v-if="role==='admin'" :to="{name:'workers'}">Сотрудники</router-link>
      <router-link v-if="role==='admin'" :to="{name:'workShifts'}">Смены</router-link>
      <router-link :to="{name:'cookOrder'}" v-if="role==='cook'">Заказы</router-link>
      <router-link :to="{name:'waiterOrder'}" v-if="role==='waiter'">Заказы</router-link>
      <a @click="fetchLogout" class="cancel_button">Выход</a>
    </nav>
    <nav v-else>
      <router-link to="login" class="approve_button">Вход</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['role_id'],
  computed: {
    token() {
      return this.$store.getters.getToken;
    },
    role() {
      return this.$store.getters.getRole;
    }
  },

  methods: {

    async fetchLogout(token) {
      await this.$store.dispatch("fetchLogout", token = this.token);
      if (this.$route.name !== 'index') {
        await this.$router.push({name: 'index'});
      }
    }
  }
}

</script>

<style scoped>

header {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 25px;
  border-bottom: 1px solid #005fb6;
}

header > nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: 50px;
}

header > nav > a, router-link {
  border: 1px solid #005fb6;
  border-radius: 15px;
  padding: 15px 20px;
  font-size: 18pt;
  font-weight: bold;
  background: rgba(75, 152, 224, 0.8);
  filter: drop-shadow(0 0 2px #005fb6);
  min-width: 150px;
  display: flex;
  justify-content: center;
  margin-left: 100px;
}

header img {
  width: 250px;
  filter: drop-shadow(0 0 3px #005fb6);
}

.approve_button {
  background: rgba(108, 201, 15, 0.8);
}

.cancel_button {
  background: #ad0d0d;
}

</style>