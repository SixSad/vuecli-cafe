<template>
  <div class="wrap">
    <div class="worker">
      <h2>Работник:</h2>
      <p>Имя: {{ user.name }}</p>
      <p>Статус: {{ user.status }}</p>
      <p>{{ user.group }}</p>
      <button @click="dismiss">Уволить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Worker",
  data() {
    return {
      user: [],
      openModal: false,
      error: false,
    };
  },
  async mounted() {
    const users = await this.$store.dispatch("GetUsers");
    this.user = users.find(item => item.id === this.$route.params.id)
  },
  methods: {
    async dismiss(id) {
      await this.$store.dispatch("dismiss", id = this.$route.params.id);
      await this.$router.push({name: 'workers'});
    }
  }
};
</script>

<style scoped>

.wrap {
  display: flex;
  justify-content: center;
}

.worker {
  padding: 30px;
  border: 2px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 300px;
  min-width: 300px;
  max-height: 600px;
}

button {
  margin-top: 30px;
  background-color: #ad0d0d;
}
</style>