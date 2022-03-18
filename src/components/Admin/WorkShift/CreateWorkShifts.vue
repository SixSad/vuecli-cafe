<template>
  <div class="wrap">
    <h2>Добавление смены</h2>
    <form @submit.prevent>
      <ul v-for="error in errors">
        <li v-for="name in error">{{ name[0] }}</li>
      </ul>
      <div>
        <label for="start">Начало</label>
        <input
            type="datetime-local"
            v-model="body.start"
            id="start"
        />
      </div>
      <div>
        <label for="end">Конец</label>
        <input
            type="datetime-local"
            v-model="body.end"
            id="end"
        />
      </div>
      <div>
        <button @click.prevent="createWorkShift" class="approve_button">
          Отправить
        </button>
        <router-link :to="{name:'workShifts'}">
          <button class="cancel_button">Отмена</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateWorkShifts",
  data: () => ({
    body: {
      start: "",
      end: "",
    },
    errors: false,
  }),
  methods: {
    async createWorkShift() {
      const result = await this.$store.dispatch("CreateWorkShift", {
        start: this.body.start.replace("T", " "),
        end: this.body.end.replace("T", " "),
      });
      if (result.error) {
        this.errors = [];
        this.errors.push(result.error.errors);
      } else {
        this.errors = [];
        this.body = {
          start: "",
          end: "",
        };
      }
    },
  },
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  border: 2px lightgrey solid;
  margin: 40px 0px;
  border-radius: 15px;
  padding: 25px;
  align-self: center;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

form > div {
  display: flex;
  min-width: 400px;
  justify-content: space-around;
  margin: 20px 0px;
}

li {
  color: red;
}

</style>