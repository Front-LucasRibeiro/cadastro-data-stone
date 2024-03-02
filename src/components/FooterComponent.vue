<template>
  <footer class="footer">
    <p class="footer__copy">
      &copy; {{ copy }}
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    copy: String
  }
}
</script>


<style lang="scss">
@import '../styles/variables';

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  height: 50px;
  background-color: $main-color;
  color: $sec-color;

  &__copy{
    font-size: $f14;
  }
}
</style>