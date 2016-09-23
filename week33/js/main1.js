 var oDiv=document.getElementById('div1');
		var imgsrc= new Array();
        imgsrc[0]="http://sjc.yangtzeu.edu.cn/Files/images/IMG_3370.JPG";
        imgsrc[1]="http://sjc.yangtzeu.edu.cn/Files/images/IMG_3340.JPG";
        imgsrc[2]="http://sjc.yangtzeu.edu.cn/Files/images/IMG_3331.JPG";
	    var i=0;
		var timer=null;
		oDiv.onmouseout=function()
		{timer=setInterval(function (){startMove();},2000);}
		oDiv.onmouseover=function()
		{clearInterval(timer);}
        function startMove()
		{
			
			oDiv.src=imgsrc[i];
			if (i<2)
			{i++;}
			else i=0;
		}
		function haha()
		 {
			 oDiv.src=imgsrc[1];
		 
		 }
		  function haha1()
		 {
			 oDiv.src=imgsrc[0];
		 
		 }
		  function haha3()
		 {
			 oDiv.src=imgsrc[2];
		 
		 }
