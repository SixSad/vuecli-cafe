<template>
  <div>
    <div>
      <h2>Заказы</h2>
      <router-link :to="{name:'createWorkers'}">
        <button>Добавить</button>
      </router-link>
    </div>

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

  </div>
</template>

<script>
export default {
  name: "ShowOrder",
  data() {
    return {
      currentWorkShift: '',
    }
  },
  async mounted() {
    this.currentWorkShift = await this.$store.dispatch("activeWorkShift");
    console.log(this.currentWorkShift);
  }
}
</script>

<style scoped>

</style>