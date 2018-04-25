//网页
var list_statue = $('.online span');
var list_statue_box = $('.online_box');
//var list_statue = $('.forum span')
//var list_statue_box = $('.forum_box');
console.log(list_statue)
for( var i=0; i<list_statue.length; i++){
	list_statue[i].index = i;
	list_statue[i].addEventListener('mouseenter',function(){
		console.log('qq')
		for( var i=0; i<list_statue.length; i++){
			list_statue[i].style.backgroundColor='lavenderblush';
			list_statue[this.index].style.backgroundColor="red";
			list_statue_box[i].style.display='none';
			list_statue_box[this.index].style.display='block';
	}		
	})
}
//网站
var online_state = $('.online_state span')
var online_state_box = $('.online_state_box');
for( var i=0; i<online_state.length; i++){
	online_state[i].index = i;
	online_state[i].addEventListener('mouseenter',function(){
		console.log('qq')
		for( var i=0; i<online_state.length; i++){
			online_state[i].style.bgColor='lavenderblush';
			online_state[this.index].style.bgColor="red";
			online_state_box[i].style.display='none';
			online_state_box[this.index].style.display='block';
	}		
	})
}
//图片
var pic = $('.pic span')
var pic_box = $('.pic_box');
for( var i=0; i<pic.length; i++){
	pic[i].index = i;
	pic[i].addEventListener('mouseenter',function(){	
		console.log('dd')
		for( var i=0; i<pic.length; i++){
			pic[i].style.bgColor='lavenderblush';
			pic[this.index].style.bgColor="red";
			pic_box[i].style.display='none';
			pic_box[this.index].style.display='block';
	}		
	})
}
//贴吧
var post_bar = $('.post_bar span')
var post_bar_box = $('.post_bar_box');
for( var i=0; i<post_bar.length; i++){
	post_bar[i].index = i;
	post_bar[i].addEventListener('mouseenter',function(){	
		console.log('dd')
		for( var i=0; i<post_bar.length; i++){
			post_bar[i].style.bgColor='lavenderblush';
			post_bar[this.index].style.bgColor="red";
			post_bar_box[i].style.display='none';
			post_bar_box[this.index].style.display='block';
	}		
	})
}
//论坛
var forum = $('.forum span')
var forum_box = $('.forum_box');
for( var i=0; i<forum.length; i++){
	forum[i].index = i;
	forum[i].addEventListener('mouseenter',function(){
		console.log('qq')
		for( var i=0; i<forum.length; i++){
			forum[i].style.bgColor='lavenderblush';
			forum[this.index].style.bgColor="red";
			forum_box[i].style.display='none';
			forum_box[this.index].style.display='block';
	}		
	})
}
//评价
var appraise = $('.appraise span')
var appraise_box = $('.appraise_box');
for( var i=0; i<appraise.length; i++){
	appraise[i].index = i;
	appraise[i].addEventListener('mouseenter',function(){
		console.log('qq')
		for( var i=0; i<appraise.length; i++){
			appraise[i].style.bgColor='lavenderblush';
			appraise[this.index].style.bgColor="red";
			appraise_box[i].style.display='none';
			appraise_box[this.index].style.display='block';
	}		
	})
}
//问答
var question = $('.question span')
var question_box = $('.question_box');
for( var i=0; i<question.length; i++){
	question[i].index = i;
	question[i].addEventListener('mouseenter',function(){
		console.log('qq')
		for( var i=0; i<question.length; i++){
			question[i].style.bgColor='lavenderblush';
			question[this.index].style.bgColor="red";
			question_box[i].style.display='none';
			question_box[this.index].style.display='block';
	}		
	})
}
//大数据
var data = $('.data span')
var data_box = $('.data_box');
for( var i=0; i<data.length; i++){
	data[i].index = i;
	data[i].addEventListener('mouseenter',function(){
		console.log('qq')
		for( var i=0; i<data.length; i++){
			data[i].style.bgColor='lavenderblush';
			data[this.index].style.bgColor="red";
			data_box[i].style.display='none';
			data_box[this.index].style.display='block';
	}		
	})
}
//更多
var more = $('.more span')
var more_box = $('.more_box');
for( var i=0; i<more.length; i++){
	more[i].index = i;
	more[i].addEventListener('mouseenter',function(){
		console.log('qq')
		for( var i=0; i<more.length; i++){
			more[i].style.bgColor='lavenderblush';
			more[this.index].style.bgColor="red";
			more_box[i].style.display='none';
			more_box[this.index].style.display='block';
	}		
	})
}
//发布热门内选项卡
var list = $('.announce li');
var box = $('.box');
var hot = $('.hot li');
var hot_box = $('.hot_box');
for( var i=0; i<list.length; i++){
	list[i].index = i;
	list[i].onmouseenter = function(){		
		for( var i=0; i<list.length; i++){
			console.log('ee')
			list[i].style.textDecoration='none';
			box[i].style.display='none';
			list[this.index].style.textDecoration='underline';
			box[this.index].style.display='block';

		}
	}
}
for( var i=0; i<hot.length; i++){
	hot[i].index = i;
	hot[i].onmouseenter = function(){		
		for( var i=0; i<hot.length; i++){
			console.log('ee')
			hot[i].style.textDecoration='none';
			hot_box[i].style.display='none';
			hot[this.index].style.textDecoration='underline';
			hot_box[this.index].style.display='block';

		}
	}
}
