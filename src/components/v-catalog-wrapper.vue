<template>
<div class = 'v-catalog-wrapper'>
  <p>{{title}}</p>
  <v-catalog/>
  <v-cart/>
</div>
</template>

<script>
import VCatalog from "@/components/v-catalog";
import VCart from "@/components/v-cart";


export default {
  name: "v-catalog-wrapper",
  components:{VCart, VCatalog},
  props:{},                                           //Не персональные данные компонента(объекты из родителя)
  data(){
  return{title:"Catalog Wrapper"}
  },
  computed:{},                                        //то что вычисляется
  methods:{},
  watch:{},
  mounted(){                                          // Когда компонент загрузиться
    console.log("hello im loaded")
  }
}
</script>

<style >
 .v-catalog-wrapper {
   max-width: 900px;
   margin: 0 auto;
 }
</style>