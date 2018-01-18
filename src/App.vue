<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col>
              <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer >
            <el-button @click="mock" type="success">send</el-button>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  let api=require('./API/url')
export default {
  name: 'App',
  methods:{
    handleOpen(){
      console.log('open')
    },
    handleClose(){
      console.log('close')
    },
    mock(){
      console.log(1)
      this.$http({
        url:api.get_user,
        method:'get'
      }).then(data=>{
        console.log(data)
      })
    }
  }
}
</script>

<style scoped>
  body{
    height:100%;
  }
  #app{
    height:100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height:100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
