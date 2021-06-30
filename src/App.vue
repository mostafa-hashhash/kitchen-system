<template>
  <Nav />
</template>

<script>
import Nav from "@/Category";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');

html{
  height: 100%;
}

body {
  min-height: 100%;
}
* {
  direction: rtl;
  font-family: 'Cairo';
}
</style>
