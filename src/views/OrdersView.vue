<template>
  <div>
    <WaiterOrders v-if="role==='waiter'" :workShift="1"></WaiterOrders>
    <CookOrders v-if="role==='cook'"></CookOrders>
  </div>
</template>

<script>
import WaiterOrders from "@/components/Waiter/WaiterOrders";
import CookOrders from "@/components/Cook/CookOrders";

export default {
  name: "Orders",
  components: {WaiterOrders, CookOrders},
  computed: {
    role() {
      return this.$store.getters.getRole;
    }
  },
}
</script>

<style scoped>

</style>