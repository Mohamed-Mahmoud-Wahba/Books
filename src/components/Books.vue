<template lang="pug">
div
    section
        .container
          h2 {{ t('Books') }}
            .row.pt-4 
                .col-lg-3.col-md-6.pt-3.justify-content-center.d-flex(v-for="(book , index) in booksRef.books" :key="index")
                    .card#card
                        .carg-img 
                            img.w-100.h-100(:src="booksImgs[index]?.img || 'https://img.freepik.com/premium-photo/opened-book-bible-background_112554-164.jpg'")
                        .cord-text
                            h6.pt-4 {{ book.name }}
                        router-link(:to="'/single/' + book.id ") {{ t('visit') }}
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import sal from "sal.js";
import { BOOKS_NAME } from '@/gql/index'
import { useQuery } from '@vue/apollo-composable'
import { onMounted, ref, watch } from "vue";





const booksImgs = [{img :'https://m.media-amazon.com/images/I/71W6DlT1KaL.jpg', id:'design-patterns'} , {img : 'https://m.media-amazon.com/images/I/51k+BvsOl2L._AC_SY780_.jpg' ,id:'refactoring'} , {img : 'https://m.media-amazon.com/images/I/51QgGZaWj-L._AC_SY780_.jpg',id:'patterns-of-enterprise-application-architecture'} ,{img :'https://m.media-amazon.com/images/I/61aFldsgAmL._AC_SY780_.jpg',id:'domain-driven-design'},{img:'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_SY780_.jpg',id:'clean-code'},{img : 'https://d3525k1ryd2155.cloudfront.net/f/445/974/9780135974445.BX.0.m.jpg',id:'agile-software-development'},{img : 'https://m.media-amazon.com/images/I/5123f8yMOgL.jpg',id:''}, {img : 'https://m.media-amazon.com/images/I/416H37MiUUS._SX279_BO1,204,203,200_.jpg',id:''} ]

const {result} =  useQuery(BOOKS_NAME)
const booksRef = ref([])
watch(result , (current , oldResult) => {
    booksRef.value = result.value
});
    const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});

const props = defineProps({
    searchKey : {
        type : String,
        required : false
    }
})

watch(props , (curr , prev) => {
    booksRef.value = result.value?.books?.filter(reff => {
        return reff.name.includes(props.searchKey)
    })
    return booksRef.value
},)

</script>

<style lang="scss">
section{
    padding-top: 100px;
    padding-bottom: 50px;


    a{
        background-color: hsl(51deg 69% 40%);
        color: #fff;
        padding: 10px 0 10px 0;
        border: none;
        border-radius: 50px;
        font-size: 17px;
        font-weight: bold;
        &:hover{
            color: #fff;
        }
    
    }
img{
    max-height: 386px;
}
.card{
    height: 490px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
}

</style>