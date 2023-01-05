<template lang="pug">
div.section1
    .container
        .row.align-items-center.pb-4
            .col-lg-8.col-md-8
                h3 {{ t('name') }}:  
                    h4 {{ result?.book.name }}
                h3.mt-3 {{ t('publisher') }}: 
                    h4 {{ result?.book.publisher.name }}
                h3.mt-3 {{ t('authors') }}: 
                    h4 {{ result?.book.authors[0].name }}
            .col-lg-4.col-md-4.justify-content-center.d-flex.pt-4
              img.limg(:src="bookImg")
</template>

<script lang="ts" setup>
import { SINGLE_BOOK } from '@/gql/index'
import { useI18n } from "vue-i18n";
import router from '@/router';
import { from } from '@apollo/client';
import { useQuery } from '@vue/apollo-composable'
import { onMounted, watch } from "vue";
import { useRoute } from 'vue-router';
const route = useRoute()
const bookId = route.params.id
const {result} = useQuery(SINGLE_BOOK, {bookId})
watch(result , (current , oldResult) => {
    console.log(result.value)
});

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});
const booksImgs = [{img :'https://m.media-amazon.com/images/I/71W6DlT1KaL.jpg', id:'design-patterns'} , {img : 'https://m.media-amazon.com/images/I/51k+BvsOl2L._AC_SY780_.jpg' ,id:'refactoring'} , {img : 'https://m.media-amazon.com/images/I/51QgGZaWj-L._AC_SY780_.jpg',id:'patterns-of-enterprise-application-architecture'} ,{img :'https://m.media-amazon.com/images/I/61aFldsgAmL._AC_SY780_.jpg',id:'domain-driven-design'},{img:'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_SY780_.jpg',id:'clean-code'},{img : 'https://d3525k1ryd2155.cloudfront.net/f/445/974/9780135974445.BX.0.m.jpg',id:'agile-software-development'},{img : 'https://m.media-amazon.com/images/I/5123f8yMOgL.jpg',id:''}, {img : 'https://m.media-amazon.com/images/I/416H37MiUUS._SX279_BO1,204,203,200_.jpg',id:''} ]
const bookImg = booksImgs.filter(img => img.id === bookId)[0].img
</script>

<style lang="scss" scoped>
.section1{
    padding-top: 100px;
    h3{
  color: hsl(51deg 69% 40%);    
  display: flex;
    }
    h4{
        color: #000;
        margin-left: 15px;
    }
}
</style>