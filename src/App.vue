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
@import url("https://fonts.googleapis.com/css2?family=Cairo&display=swap");

html {
  height: 100%;
}

body {
  min-height: 100%;
}
* {
  direction: rtl;
  font-family: "Cairo";
}

.date::before {
  content: " ";
  float: right;
  background: url("assets/sprite/svg/time.svg") center no-repeat;
  padding: 16px 10px;
  margin-left: 5px;
}

.number::before {
  content: "#";
}
</style>
