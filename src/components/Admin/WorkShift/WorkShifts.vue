<template>
  <div class="wrap">

    <div>
      <h2>Смены</h2>
      <router-link :to="{name:'createWorkShifts'}">
        <button>Добавить</button>
      </router-link>
    </div>

    <ul v-for="error in errors" style="color:red">
      {{ error }}
    </ul>

    <section class="employees">
      <article class="card">
        <div>
          <span>Номер смены</span>
          <span>Начало смены</span>
          <span>Конец смены</span>
          <span>Состояние</span>
          <span>Персонал</span>
        </div>
        <div v-for="(workShift,index) in workShifts" :key="workShift.id" :id="workShift.id">
          <span>{{ workShift.id }}</span>
          <span>{{ workShift.start }}</span>
          <span>{{ workShift.end }}</span>
          <span @click="closeWorkShift(workShift.id,index)"
                style="cursor: pointer">{{ workShift.active ? 'открыта' : 'закрыта' }}</span>
          <span><router-link :to="{name:'workersOnShift',params: { id: workShift.id }}" class="link"
                             v-if="workShift.active">Подробнее</router-link></span>
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
      errors: [],
    };
  },

  async mounted() {
    this.workShifts = await this.$store.dispatch("GetWorkShifts");
  },

  methods: {
    async closeWorkShift(id, index) {
      const workShift = await this.$store.dispatch("CloseWorkShift", id);
      if (workShift.error) {
        this.errors = [];
        this.errors.push(workShift.error.message);
      } else {
        this.workShifts[index].active = 0;
      }
    }

  }
};
</script>


<style scoped>

.wrap{
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

.employees > :first-child > div > span {
  width: 20%;
  font-size: 18pt;
  margin-right: 20px;
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