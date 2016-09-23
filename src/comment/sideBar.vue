<template>
<div class="doc-aside-warper">
	<aside class="doc-aside">
		<ul class="link">
			<li>
				<a href="../../chart/classify/compare.html">
					<i class="fa fa-home fa-fw"></i>
					比较类
				</a>
			</li>
			<li>
				<a href="../../chart/classify/relation.html">
					<i class="fa fa-cog fa-fw"></i>
					关系类
				</a>
			</li>
			<li>
				<a href="../../chart/classify/trend.html">
					<i class="fa fa-cart-arrow-down fa-fw"></i>
					趋势类
				</a>
			</li>
			<li>
				<a href="../../chart/classify/distribute.html">
					<i class="fa fa-calculator fa-fw"></i>
					分布类
				</a>
			</li>
			<li class="acitve">
				<a href="../../chart/classify/path.html">
					<i class="fa fa-diamond fa-fw"></i>
					路径类
				</a>
			</li>
			<li>
				<a href="../../chart/classify/location.html">
					<i class="fa fa-ambulance fa-fw"></i>
					地图类
				</a>
			</li>
			<li>
				<a href="../../chart/classify/range.html">
					<i class="fa fa-pie-chart fa-fw"></i>
					区间类
				</a>
			</li>
			<li>
				<a href="../../chart/classify/time.html">
					<i class="fa fa-bar-chart-o fa-fw"></i>
					时间类
				</a>
			</li>
			<li>
				<a href="../../chart/classify/combine.html">
					<i class="fa fa-align-justify fa-fw"></i>
					聚合类
				</a>
			</li>
			<li>
				<a href="../../chart/classify/flow.html">
					<i class="fa fa-cog fa-fw"></i>
					流程类
				</a>
			</li>
		</ul>
		<ul class="link">
		</ul>
		<ul class="link">
		</ul>
	</aside>
</div>
</template>

<style lang="less">
.doc-aside-warper {
  width: 220px;
  float: left;
  font-size: 14px;
  padding-top: 16px;
}
.doc-aside div {
  width: 100%;
}
.doc-aside div span {
  padding-top: 14px;
  padding-bottom: 6px;
  display: block;
  height: 20px;
  cursor: pointer;
  color: #666;
}
.doc-aside div span a {
  color: #999;
}
｀ .doc-aside i {
  font-size: 16px;
  z-index: -1;
  display: inline-block;
}
.doc-aside div span i:nth-of-type(1) {
  font-size: 16px;
  padding: 0 10px;
  margin-left: 10px;
}
.doc-aside div span i:nth-of-type(2) {
  font-size: 8px;
  float: right;
  margin-right: 20px;
}
.doc-aside div {
  overflow: hidden;
}
.doc-aside ul {
  background: #FAFAFA;
}
.doc-aside li {
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 52px;
  height: 24px;
  cursor: pointer;
  line-height: 24px;
}
.doc-aside li a {
  width: 100%;
  height: 100%;
  display: inline-block;
  color: #666;
}
.doc-aside li.subTitle {
  color: #ccc;
  padding-left: 39px;
}
.doc-aside li.acitve a {
  color: #3aa772;
}
.doc-aside li:hover a {
  color: #61b98e;
}
.doc-aside li.acitve {
  border-right: 2px solid #61b98e;
}
.doc-aside .link {
  background: white;
}
.doc-aside .link li {
  width: 199px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  line-height: 23px;
}
.doc-aside .link a i {
  margin-right: 12px;
}
</style>