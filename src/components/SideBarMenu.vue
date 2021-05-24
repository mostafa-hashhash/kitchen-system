<template>
  <div class="opened-menu bg-white min-h-screen absolute">
    <div>
      <img
        @click="toggleSideBarMenu()"
        src="@/assets/close.svg"
        class="menu close"
        alt="Close icon"
      />
      <img
        src="@/assets/menu-logo.svg"
        class="menu logo mt-10 ml-10 "
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
    toggleSideBarMenu() {
			this.isOpen ?
				console.log("opened") :
				console.log("closed")

      document.querySelector(".opened-menu").style.display = "none";
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
  border-right: 5px solid green;
  padding: 10px 45px;
  font-weight: bold;
	cursor: pointer !important;
}

h3 {
  padding: 10px 50px;
  font-size: 20px;
}

.menu {
  display: inline-block;
  padding: 10px 45px 20px 50px;
}

.logout {
  color: #d0021b;
}
</style>
