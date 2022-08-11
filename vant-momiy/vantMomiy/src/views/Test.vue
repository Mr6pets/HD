<script >
import {ref} from 'vue';
  export default{
    setup(){
      const count=ref(1000);

      const min=()=>{
        count.value-=1
      };
      const max=()=>{
        count.value+=1
      }
      return {count,min,max}
    }
  }
</script>

<template>
  <div>{{count}}</div>
  <button @click="max">+</button>
  <button @click="min">-</button>
</template>

