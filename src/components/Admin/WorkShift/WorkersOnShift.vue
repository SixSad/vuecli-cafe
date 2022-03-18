<template>
  <div class=wrap>
    <div>
      <h2>Сотрудники на смене</h2>
      <button @click="openModal">Добавить</button>
    </div>
    <AddWorkerOnShift v-if="modalOpen" @close="openModal"></AddWorkerOnShift>
    <section class="employees">
      <article class="card">
        <div>
          <span>Имя</span>
          <span>Должность</span>
          <span>Редактирование</span>
        </div>
        <div v-for="user in workers" :key="user.id" :id="user.id">
          <span>{{ user.name }}</span>
          <span>{{ user.group }}</span>
          <router-link :to="{ name: 'worker',params: { id: user.id }}" class="link" v-if="user.status!=='fired'">
            Удалить
          </router-link>

        </div>
      </article>
    </section>
  </div>
</template>

<script>

import AddWorkerOnShift from "@/components/Admin/WorkShift/AddWorkerOnShift";

export default {
  name: "WorkersOnShift",
  components: {AddWorkerOnShift},
  data() {
    return {
      modalOpen: false,
      workShift: [],
      workers: [],
    }
  },
  async mounted() {
    this.workShift = await this.$store.dispatch('GetWorkersOnShift', this.$route.params.id);
    this.workers = this.workShift.users

  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    }
  }
}
</script>

<style>

AddWorkerOnShift{
  background: rgba(0,0,0,.5);
}


.wrap {
  display: flex;
  flex-direction: column;
}

.wrap > div {
  display: flex;
  justify-content: space-between;
  padding: 15px 75px;
}

button {
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

.employees > :first-child > div > span, .link {
  text-align: center;
  width: 33%;
  font-size: 18pt;
}

.employees > :first-child > div > span:nth-child(2n) {
  font-weight: bold;
}

.link {
  color: black;
  font-size: 20px;
}
</style>