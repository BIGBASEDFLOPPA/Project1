<template>
  <div class = 'v-catalog'>
  <h1>Catalog</h1>
<div class ="v-catalog__list">
  <v-catalog-item
  v-for="product in this.$store.state.products"
  :key="product.article"
  v-bind:product_data="product"
  @sendArticle="showChildArticleInConsole"
  />
</div>
  </div>
</template>

<script>

import VCatalogItem from "@/components/v-catalog-item";
import {mapActions} from 'vuex'


export default {
  name: "v-catalog",
  components:{
    VCatalogItem

  },
  props:{},
  data(){
    return{

    }
  },
  computed:{},
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API'
    ]),
      showChildArticleInConsole(data){
        console.log(data);
      },
    mounted(){
      this.GET_PRODUCTS_FROM_API()
    }
  }
}
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

  }
    }
</style>