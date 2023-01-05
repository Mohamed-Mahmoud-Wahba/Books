<template lang="pug">
.footer
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
        p.text-white.fw-bold.fs.lg.pt-2.text-center &copy; {{ new Date().getFullYear() }} {{ t('Mohamed Wahba') }}
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});
</script>

<style lang="scss" scoped>

</style>