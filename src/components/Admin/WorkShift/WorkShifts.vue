<template>
  <div>
    <router-link :to="{name:'createWorkShifts'}">
      <button>Добавить</button>
    </router-link>
    <section class="employees">
      <article class="card">
        <div>
          <span>Номер смены</span>
          <span>Начало смены</span>
          <span>Конец смены</span>
          <span>Состояние</span>
          <span>Изменить</span>
        </div>
        <div v-for="workShift in workShifts" :key="workShift.id" :id="workShift.id">
          <span>{{ workShift.id }}</span>
          <span>{{ workShift.start }}</span>
          <span>{{ workShift.end }}</span>
          <span>{{ workShift.active ? 'открыта' : 'закрыта' }}</span>
          <router-link to="/" class="link">Подробнее</router-link>
        </div>
      </article>
    </section>
  </div>

</template>

<script>
export default {
  name: "WorkShifts",
  data() {
    return {
      workShifts: [],
    };
  },
  async mounted() {
    this.workShifts = await this.$store.dispatch("GetWorkShifts");
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


.link {
  color: black;
  font-size: 20px;
}
</style>