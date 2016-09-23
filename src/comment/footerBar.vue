<template>
<footer>
	<div class="footer-wrapper">
		<ul>
			<li>关于我们</li>
			<li><a href="../../about/index.html">我们的链接</a></li>
		</ul>
		<ul>
			<li>联系我们</li>
			<li><a href="https://github.com/antvis/feedback/issues/new" target="_blank">问题与建议－Issues</a></li>
		</ul>
		<ul>
			<li>©2016 蚂蚁金服体验技术部出品 &nbsp; 文档版本 1.0 </li>
			<li>支付宝版权所有 2004-2016 ICP证: 沪B2-20150087</li>
		</ul>
	</div>
</footer>
</template>

<style lang="less">
footer{
	padding-top: 22px;
    background: #f4f4f4;
    height: 60px;
    width: 100%;
    border-top: 1px solid #d9d9d9;
}
.footer-wrapper {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.footer-detail .footer-wrapper {
  max-width: 1000px;
}
footer ul {
  float: left;
}
footer ul:nth-of-type(1) {
  width: 218px;
}
footer ul:nth-of-type(2) {
  width: 218px;
}
footer ul:nth-of-type(3) {
  float: right;
  width: 400px;
}
footer ul li {
  text-align: left;
  font-size: 12px;
  margin-left: 24px;
  margin-right: 24px;
  color: #999;
}
footer ul li:nth-of-type(1) {
  margin-bottom: 10px;
  font-size: 14px;
}
footer ul:nth-of-type(3) li:nth-of-type(1) {
  font-size: 12px;
}
footer ul:nth-of-type(3) li {
  text-align: right;
}
</style>