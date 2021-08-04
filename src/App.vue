<template>
  <Category
    @removeAuthentication="removeAcessTokenCookie"
    v-if="isAuthenticated"
  />
  <Login @setAuthentication="setAccessTokenCookie" v-else />
</template>

<script>
import Category from "@/Category";
import Login from "@/Login";

export default {
  name: "App",
  data() {
    return {
      isAuthenticated: "",
    };
  },
  components: {
    Category,
    Login,
  },

  methods: {
    removeAcessTokenCookie() {
      document.cookie =
        "ACCESS_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      this.isAuthenticated = false;
    },

    setAccessTokenCookie(data) {
      document.cookie = `ACCESS_TOKEN=${data.token_type} ${data.access_token}; max-age=${data.expires_in}; path=/`;
      this.isAuthenticated = true;
    },
  },

  mounted: function() {
    this.isAuthenticated = document.cookie ? true : false;
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
