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
        <div>
          <span>Столик №</span>
          <span>Статус</span>
          <span>Итого</span>
          <span>Принял</span>
          <span>Время</span>
          <span>Изменить</span>
        </div>
        <div v-for="(order,index) in orders" :key="order.id">
          <span>{{ order.table }}</span>
          <span>{{ order.status }}</span>
          <span>{{ order.price }}</span>
          <span>{{ order.shift_workers }}</span>
          <span>{{ order.create_at }}</span>
          <button>Change</button>
        </div>
      </article>
    </section>

  </div>
</template>

<script>
export default {
  name: "ShowOrder",
  props: ['workShift'],
  data() {
    return {
      orders: [],
    }
  },
  async mounted() {
    const res = await this.$store.dispatch("WaiterGetOrders", this.workShift);
    this.orders = res.data.orders
    console.log(this.orders);
  }
}
</script>

<style scoped>

</style>