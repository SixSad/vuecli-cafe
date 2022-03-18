<template>
  <div>
    <button @click="showAdd">Add new</button>
<!--    <AddOrder/>-->
    <Orders/>
  </div>
</template>

<script>
import Orders from "@/components/Cook/Orders";

export default {
  name: "CookView",
  components: {
    Orders
  },
  data() {
    return {
      addShow: false,
    }
  },
  methods: {
    showAdd() {
      this.addShow = !this.addShow;
    }
  }
}
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>