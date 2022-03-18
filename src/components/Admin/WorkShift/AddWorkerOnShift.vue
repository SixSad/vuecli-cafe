<template>
  <div class="adder">

    <section class="employees">
      <article class="card">
        <div>
          <button class="cancel_button" @click="$emit('close')">Отмена</button>
          <ul v-for="error in errors" style="color: red">
            {{ error }}
          </ul>
        </div>
        <div>
          <span>Имя</span>
          <span>Должность</span>
          <span>добавить</span>
        </div>
        <div v-for="user in users" :key="user.id" :id="user.id">
          <span>{{ user.name }}</span>
          <span>{{ user.group }}</span>
          <a @click="addWorkerToShift(user.id)" class="link">+</a>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "AddWorkerOnShift",
  data() {
    return {
      users: [],
      openModal: false,
      errors: [],
    };
  },
  async mounted() {
    this.users = await this.$store.dispatch("GetUsers");
  },
  methods: {
    async addWorkerToShift(workerId) {
      const result = await this.$store.dispatch('addWorkerToShift', {
        shiftId: this.$route.params.id,
        workerId: workerId
      })
      if (result.error) {
        this.errors = [];
        return this.errors.push(result.error.message);
      }
      this.errors = [];
    }
  },
}
</script>

<style scoped>
article > div:first-child {
  display: flex;
  justify-content: space-between;
}

.adder {
  position: absolute;
  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
}

section {
  margin-top: 15vh;
  width: 50%;
}

</style>