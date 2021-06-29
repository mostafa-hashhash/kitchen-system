<template>
  <Nav />
</template>

<script>
import Nav from "@/login";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
html{
  height: 100%;
}

body {
  min-height: 100%;
}
* {
  direction: rtl;
}
</style>
