<template>
  <section class="employees">
    <article class="card">
      <div v-for="(cook,index) in undoneOrders" :key="cook.id">
        <span>{{ cook.table }}</span>
        <span>{{ cook.status }}</span>
        <span>{{ cook.price }}</span>
        <span>{{ cook.shift_workers }}</span>
        <span>{{ cook.create_at }}</span>
        <button @click="changeStatus(cook.id, index)">Change</button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {
      cooks: [],
      convertStatusData: {
        preparing: "Готовится",
        ready: "Готово"
      },
    }
  },

  async mounted() {
    this.cooks = await this.$store.dispatch(
        "getCooks",
        this.$store.getters.getToken
    );
  },

  computed: {
    undoneOrders() {
      if (this.cooks !== []) {
        return this.cooks.filter(cook => cook.status !== 'Готово');
      }
      return this.cooks
    },
  },

  methods: {
    async changeStatus(id, index) {
      const cook = this.cooks[index];
      const result =
          cook.status === "Принят" ? await this.$store.dispatch("changeStatus", {
                id,
                status: "preparing",
                token: this.$store.getters.getToken,
              }) :
              await this.$store.dispatch("changeStatus", {
                id,
                status: "ready",
                token: this.$store.getters.getToken,
              });
      return this.cooks[index].status = this.convertStatusData[result.status]
    },
  }
}

</script>

<style scoped>
.employees > :first-child {
  display: flex;
  flex-direction: column;
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
</style>