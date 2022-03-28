<template>
  <div class = 'v-catalog-item'>
    <img class="v-catalog-item__image" :src="imgLink" :alt="product_data.name" />
  <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{product_data.price}} RUB</p>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="sendDataToParent">add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props:{
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{}
  },
  computed: {
    imgLink: function () {
      const fileName = this.product_data.image;
      return require(`../assets/images/${fileName}`);
    }
  },
    methods:{
      sendDataToParent(){
          this.$emit('sendArticle',this.product_data.article)
      }
    }

}
</script>

<style lang="scss">
.v-catalog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2 ;
  &__image{
    width: 200px;

  }
}

</style>