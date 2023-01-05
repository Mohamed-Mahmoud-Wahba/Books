<template lang="pug">
div(:class="[lang === 'en' ? 'ltr' : 'rtl']")
  nav
    theHeaderVue 
  router-view
  theFooter
</template>
<script setup lang="ts">
import theHeaderVue from './components/theHeader.vue';
import theFooter from './components/theFooter.vue';
import sal from 'sal.js'
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import { provideApolloClient } from "@vue/apollo-composable";
import { client } from './apollo.provider';
provideApolloClient(client)
const lang = localStorage.getItem('lang') || 'eng'
components:{
  theHeaderVue,
  theFooter
}
const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
onMounted(() => {
  sal();
});
// console.clear();
</script>
<style lang="scss">
.rtl{
  direction: rtl;
}
.ltr{
  direction: ltr;
}
</style>
