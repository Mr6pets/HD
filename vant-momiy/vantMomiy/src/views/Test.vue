
<template>
<!--  <couterView></couterView>-->
<!--  <couter-view></couter-view>-->
<alvis-couter-view :count="count"></alvis-couter-view>
  <couterCotroler @parentMax="increment($event)"/>

</template>

<script >
import {ref} from 'vue';
import couterView from "@/components/couterView.vue";
import couterCotroler from "../components/couterCotroler.vue";
  export default{
    components:{
      // couterView
      "alvis-couter-view":couterView,
      couterCotroler
    },
    setup(){
      const count=ref(1000);

      const increment=(num)=>{
        count.value+=num;
      }
      return {count,increment}
    }
  }
</script>


