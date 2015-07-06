var Chapter1 = {
	drawImage:function(canvas){
		var context = canvas.getContext('2d');
		var img = $('#pic')[0];
		
		
		context.drawImage(img,100,100);
		context.translate(100,100); // 移动坐标体系
		context.rotate(Math.PI/2); // 旋转坐标体系
		context.drawImage(img,0,0);
	},
	
	
	imageLoader : function(){
		
	}
	
}


$(document).ready(function(){
	Chapter1.drawImage($('#mycanvas')[0]);
});
