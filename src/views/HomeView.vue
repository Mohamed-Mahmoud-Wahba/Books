<template lang="pug">
.home.pt-5
  .container.pb-5
    .row.align-items-center
      .col-lg-6.col-md-6(data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-out-back")
        h2(data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-back") {{ t('Learn Online!') }}
        h3.h3(data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-back") {{ t('block') }}
        p(data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-back") {{ t('text') }} 
        div.search
          input(type="text",  :placeholder="t('search')" v-model="term" @keypress.enter="search(term)")
          <!-- button(type="submit" class="button") {{ t('serch') }}        -->
          button.button(type="button", data-bs-toggle="modal", data-bs-target="#exampleModal", data-bs-whatever="@mdo") {{ t('serch') }} 
          .modal.fade#exampleModal(tabindex="-1", aria-labelledby="exampleModalLabel", aria-hidden="true")
            .modal-dialog
              .modal-content
                .modal-body
                  form
                    .mb-3
                      label.col-form-label(for="recipient-name") {{ t('serch') }}:
                      input.form-control#ageToCheck(type="search" @keyup="search($event)")
                      Books(:searchKey="searchKey" )
                .modal-footer
                  button.btn.button1(type="button", data-bs-dismiss="modal") {{ t('Close') }}
      .col-lg-6.col-md-6.pt-3.justify-content-center.d-flex(data-sal="slide-left" data-sal-delay="200" data-sal-easing="ease-out-back")
        img#img(src="../assets/img/books.jpg")
  .section 
    .container
      .row
        .col-lg-3.col-md-6
          .div
            .card(data-sal="slide-right" data-sal-delay="200" data-sal-easing="ease-out-back")
              .card-img
                div.img   
                  img(src="../assets/icon/1.svg")
              .card-title.pt-4
                h4 {{ t('title') }}
              .card-text 
                p {{ t('title.title') }}
        .col-lg-3.col-md-6
          .div
            .card(data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-out-back")
              .card-img
                div.img   
                  img(src="../assets/icon/2.svg")
              .card-title.pt-4
                h4 {{ t('Bonus books') }}
              .card-text 
                p {{ t('Bonus books.title') }}

        .col-lg-3.col-md-6
          .div
            .card(data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-out-back")
              .card-img
                div.img   
                  img(src="../assets/icon/3.svg")
              .card-title.pt-4
                h4 {{ t('Company') }}
              .card-text 
                p {{ t('Company.title') }}

        .col-lg-3.col-md-6
          .div
            .card(data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease-out-back")
              .card-img
                div.img   
                  img(src="../assets/icon/4.svg")
              .card-title.pt-4
                h4 {{ t('information') }}
              .card-text 
                p {{ t('information.title') }}
  Books
</template>

<script lang="ts" setup>
import sal from 'sal.js'
import Books from "@/components/Books.vue";
// import useValidate from "@vuelidate/core";
// import { required, email, minLength} from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from 'vue';
const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});
onMounted(() => {
  sal();
});

const searchKey = ref('')

function search(e:any){
  searchKey.value = e.target.value
}


components: {
  Books
}
</script>
<style lang="scss" scoped>
.button1{
  color: #fff;
  background-color: hsl(51deg 69% 40%);
}
</style>
