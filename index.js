"use strict"
//编译前的es6源代码
//父类PraiseButton
class PraiseButton{
	constructor(){
		this.a = 1;
	};
}
//子类Thumb
class Thumb extends PraiseButton{
	constructor(){
		super();
	};
	Praise(){
		let praise = $("#praise");
		var cnum = this.a++;
		praise.css({"opacity":"1","position" : "relative","top":"10px"}).text("+"+cnum);
		setTimeout(function(){
			praise.css({"opacity":"0","position" : "relative","top":"40px"});
		},500)
	};
}

// console.log("load index.js");
// window.add = function(i){
// 	return i+1;
// };