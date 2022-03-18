<template>
  <footer>
    <article>
      &copy; Tortotoro - все права защищены
    </article>
    <article>
      8(888)777-44-11
    </article>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

footer {
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 10px;
  font-size: 18pt;
  background: #005fb6;
}

footer > article {
  color: #fff;
}

footer > article:last-child {
  font-size: 36pt;
}

</style>