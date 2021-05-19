<template>
  <Nav />
</template>

<script>
import Nav from "./Category";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
html,
body {
  padding: 0px;
  margin: 0px;
  widows: 100%;
  height: 100%;
}
* {
  direction: rtl;
}
</style>
