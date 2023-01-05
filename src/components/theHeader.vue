<template lang="pug">
div
  header
    .container
      div.d-flex.justify-content-between.pt-4.pb-3
        div.d-flex.align-items-center
          router-link.logo(to="/").d-flex.align-items-center
            img(src="../assets/img/logo.png", alt="Books")
            h1.ms-2  {{ t('Books') }}
        ul.d-none.d-lg-flex
          li
            router-link(to="/" :title="t('Home')") {{ t('Home') }}
          li
            router-link(to="/about" :title="t('About')") {{ t('About') }}
          li
            router-link(to="/" :title="t('SignUp')") {{ t('login') }}
          li    
        ul.d-flex
            .switch
              router-link.on(v-if="lang === 'ar'" to="/en", @click="laaca") EN
              router-link.off(v-if="lang === 'en'" to="/ar", @click="laacal") AR
            .backDrop#id(@click="Nav()")
            #mySidenav.sidenav
                a.closebtn(href="javascript:void(0)", @click="closeNav()")
                  svg.icon(xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink", aria-hidden="true", role="img", width="1em", height="1em", viewBox="0 0 24 24", data-v-ca945699, data-v-2698c1af)
                    path(fill="currentColor", d="m12 10.586l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-4.95-4.95l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95L7.05 5.636z")
                .the-body
                  li
                    router-link(to="/" :title="t('Home')") {{ t('Home') }}
                  li
                    router-link(to="/" :title="t('About')") {{ t('About') }}
                  li
                    router-link(to="/" :title="t('SignUp')") {{ t('login') }}
                  li  
            span.d-lg-none.d-flex.open(@click="openNav()")
              svg.svg(xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink", aria-hidden="true", role="img", data-v-caeed4b1, width="1em", height="1em", viewBox="0 0 24 24", data-v-ca945699)
                path(fill="currentColor", d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z")
</template>
<script setup lang="ts">
import { classBody } from "@babel/types";
import { useI18n } from "vue-i18n";
const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});
const lang = localStorage.getItem('lang') || 'en'
function openNav() {
  document.getElementById("mySidenav")!.style.width = "250px";
  document.getElementById("id")!.style.display = "block";
}
function Nav() {
  document.getElementById("mySidenav")!.style.width = "0px";
  document.getElementById("id")!.style.display = "none";
}
function closeNav() {
  document.getElementById("mySidenav")!.style.width = "0px";
  document.getElementById("id")!.style.display = "none";
}

function laacal() {
  localStorage.setItem("lang", "ar");
  window.location.reload();
}
function laaca() {
  localStorage.setItem("lang", "en");
  window.location.reload();
}
</script>
<style lang="scss" scoped>
.backDrop {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000;
  opacity: 30%;
  display: none;
}
.active {
  background: hsl(0deg 100% 50%);
  padding: 5px 8px 5px 8px;
  border-radius: 50px;
}
</style>
