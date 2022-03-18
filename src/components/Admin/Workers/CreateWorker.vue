<template>
  <div class="wrap">
    <h2>Добавление нового сотрудника</h2>
    <div class="form">
      <form @submit.prevent>
        <ul v-for="error in errors">
          <li v-for="name in error">{{ name[0] }}</li>
        </ul>
        <div>
          <label for="name">Имя</label>
          <input type="text" v-model="body.name" name="name" id="name"/>
        </div>
        <div>
          <label required for="login">Логин</label>
          <input type="text" v-model="body.login" name="login" id="login"/>
        </div>
        <div>
          <label required for="password">Пароль</label>
          <input
              type="password"
              v-model="body.password"
              name="password"
              id="password"
          />
        </div>
        <div>
          <input type="file" name="photo" id="photo_file"/>
        </div>
        <div>
          <label for="role">Роль</label>
          <select required v-model="body.role_id" name="role" id="role">
            <option value="nothing" selected disabled>Выберите роль:</option>
            <option value="1">Администратор</option>
            <option value="2">Официант</option>
            <option value="3">Повар</option>
          </select>
        </div>
        <div>
          <button @click.prevent="createWorker" class="approve_button">
            Отправить
          </button>
          <router-link :to="{name:'workers'}">
            <button class="cancel_button">Отмена</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    body: {login: "", name: "", password: "", role_id: "nothing"},
    roles: ["Администратор", "Официант", "Повар"],
    errors: [],
  }),

  methods: {
    async createWorker() {
      const message = await this.$store.dispatch("CreateUser", this.body);
      if (message.error) {
        this.errors = [];
        this.errors.push(message.error.errors);
      } else {
        this.errors = [];
        this.body = {login: "", name: "", password: "", role_id: ""};
      }
    },
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  border: 2px lightgrey solid;
  margin:20px 0px ;
  border-radius: 15px;
  padding: 25px;
  align-self: center;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

form > div {
  display: flex;
  justify-content: space-around;
  margin: 20px 0px;
}

li {
  color: red;
}

</style>