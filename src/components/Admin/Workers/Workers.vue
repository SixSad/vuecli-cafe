<template>
  <div>
    <router-link :to="{name:'createWorkers'}">
      <button>Добавить</button>
    </router-link>
    <section class="employees">
      <article class="card">
        <div>
          <span>Имя</span>
          <span>Статус</span>
          <span>Должность</span>
          <span>Редактирование</span>
        </div>
        <div v-for="user in users" :key="user.id" :id="user.id">
          <span>{{ user.name }}</span>
          <span>{{ user.status }}</span>
          <span>{{ user.group }}</span>
          <router-link :to="{ name: 'worker',params: { id: user.id }}" class="link" v-if="user.status!=='fired'">Подробнее</router-link>
          <router-link :to="{ name: 'worker',params: { id: user.id }}" class="link" v-if="user.status==='fired'"> </router-link>
        </div>
      </article>
    </section>
  </div>

</template>

<script>
export default {
  name: "Workers",
  data() {
    return {
      users: [],
      openModal: false,
      error: false,
    };
  },
  async mounted() {
    this.users = await this.$store.dispatch("GetUsers");
  },
};
</script>


<style scoped>
button {
  width: 15%;
  margin-bottom: 20px;
}

.employees > :first-child {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.employees > :first-child > div {
  display: flex;
  justify-content: space-between;
  padding: 15px 75px;
  border-bottom: 1px solid #005fb6;
  min-width: 200px;
}

.employees > :first-child > div:nth-child(2n) {
  background-color: rgba(75, 152, 224, 0.8);
}


.employees > :first-child > div > span {
  font-size: 18pt;
}

.employees > :first-child > div > span:nth-child(4) {
  display: flex;
  justify-content: center;
  align-self: center;
}

.employees > :first-child > div > span:nth-child(2n) {
  font-weight: bold;
}

.link {
  color: black;
  font-size: 20px;
}
</style>