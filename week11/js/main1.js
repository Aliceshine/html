var d=new Date();
		var weekday=new Array(7);
			weekday[0]="星期日";
			weekday[1]="星期一";
			weekday[2]="星期二";
			weekday[3]="星期三";
			weekday[4]="星期四";
			weekday[5]="星期五";
			weekday[6]="星期六";
		var day=d.getDate()
		var month=d.getMonth() + 1
		var year=d.getFullYear()
		document.write("今天是" + year+"年"+month+"月"+day+"日");
		document.write(weekday[d.getDay()]);