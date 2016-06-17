
  function toDou(n){
    if(n<10){
      return '0'+n;
    }
    else{
      return ''+n;
    }
  }
  	window.onload=function(){
  		var aImg=document.getElementsByTagName('img');
      //var str="132321";
      function tick(){
        var oDate=new Date();
        var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
        //alert(str);
        for (var i = 0; i < aImg.length; i++) {
          aImg[i].src='img/'+str.charAt(i)+'.png';
        }
      }
      setInterval(tick,1000);
      tick();
  	};
