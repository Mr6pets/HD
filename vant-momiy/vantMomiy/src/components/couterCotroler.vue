<template>
  <button @click="increment(1)">+</button>
  <button @click="increment(-1)">-</button>
</template>

<script>
export default {
  name: "couterCotroler",
  emits:["parentMax"],
  setup(prop,context){//父节点传递过来的节点
    const increment=(num)=>{
      context.emit("parentMax",num)
    }
    return {increment}
    // console.log(context,"alivis")

  }
}
</script>

<style scoped>

</style>