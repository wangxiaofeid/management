<template>
<header>
  <div class="nav-wrapper">
    <a class="logo" href="../.."></a>
    <ul class="nav">
      <li class="float-left search-icon"></li>
      <li>
          <a href="../../about/index.html">工作小组</a>
      </li>
      <li>
          <a href="../../design/index.html">设计规范</a>
      </li>
      <li class="active">
          <a href="../index.html">数据图表</a>
      </li>
    </ul>
  </div>
</header>
</template>



<style lang="less">
header {
  width: 100%;
  height: 60px;
  min-width: 1200px;
  position: absolute;
  z-index: 999;
  background: #262D3A;
  padding-top: 4px;
  position: fixed;
  a {
	  color: white;
	}
}
 
.nav-wrapper {
  width: 1200px;
  margin: 0 auto;
}
.logo {
  width: 282px;
  height: 26px;
  margin-top: 14px;
  margin-left: 20px;
  float: left;
  position: absolute;
  background-size: 279px;
  background-image: url('https://os.alipayobjects.com/rmsportal/TtYfnEJBOjnJLAw.svg');
}
.logo:hover {
  cursor: pointer;
}
header .nav {
  padding-top: 12px;
  width: 820px;
  height: 30px;
  float: right;
}
header .nav li {
  float: right;
  text-align: center;
  position: relative;
  height: 21px;
  font-size: 14px;
  margin-left: 30px;
  padding-top: 1px;
}
header .nav li a {
  display: block;
  margin-top: 8px;
}
header .nav li a:hover {
  color: #61b98e;
}
header input[type=text] {
  border: transparent;
  outline: none;
  width: 110px;
  height: 22px;
  font-size: 14px;
  background: transparent;
  padding-left: 28px;
}
header li.active a {
  color: #61b98e;
}
</style>