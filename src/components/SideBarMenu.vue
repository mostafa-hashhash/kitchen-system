<template>
  <div class="z-40 opened-menu bg-white min-h-screen absolute">
    <div>
      <img
        @click="emitCloseMenuEvent()"
        src="@/assets/close.svg"
        class="menu cursor-pointer"
        alt="Close icon"
      />
      <img
        src="@/assets/menu-logo.svg"
        class="menu logo mt-5 ml-5 "
        alt="Logo"
      />
    </div>

    <div>
      <h3 class="mt-5">الأقسام</h3>
      <ul>
        <li @click="notifyCategortySelection(0)" ><a> قسم الجبن</a></li>
        <li @click="notifyCategortySelection(1)"><a> قسم اللحوم</a></li>
        <li @click="notifyCategortySelection(2)"><a> قسم الأسماك</a></li>
      </ul>
    </div>

    <div>
      <h3 class="mt-10">الإعدادات</h3>
      <ul>
        <li><a>ضبط الطابعة</a></li>
        <li><a>تغيير كلمة السر</a></li>
        <li><a class="logout">تسجيل الخروج</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
	data: ()=>{
		return{
			isOpen: false
		}
	},

  methods: {
    emitCloseMenuEvent() {
			this.$emit("closeMenuClick")
    },

		notifyCategortySelection(num){
			this.$emit('categorySelection',{ categoryIndex: num})
		}
  },
};
</script>

<style scoped>
ul {
  margin: 15px 0px;
}

ul li {
  padding: 10px 50px;
  font-size: 22px;
}

ul li:hover {
  border-right: 7px solid green;
  padding: 10px 43px;
  font-weight: bold;
	cursor: pointer !important;
}

h3 {
  padding: 10px 50px;
  font-size: 20px;
}

.menu {
  display: inline-block;
  padding: 10px 40px 20px 30px;
}

.logout {
  color: #d0021b;
}
</style>
