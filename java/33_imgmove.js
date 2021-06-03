window.onload = function(){
  var box11=this.document.getElementsByClassName("re1")[0];
  var lik11=box11.getElementsByTagName("li1");
  function fun(i,j){//转换图片函数，就是把透明度改了一下
    lik1[i].style.opacity=1;
    lik1[j].style.opacity=0;
    lik1[i+8].style.backgroundColor="#000";//改一下小图标
    lik1[j+8].style.backgroundColor="#00000000"
  }
  fun(0,1);//初始化下
  var i =0;
  function auto(){//轮播循环函数
    if(++i>=8){
      i=0;
      fun(0,7);
    }
    else fun(i,i-1);
  }
  timer=this.setInterval(auto,2000);
  box1.onmouseover = function () { //鼠标划上去，停止轮播
    console.log('good');
    clearInterval(timer);
  }
  box1.onmouseout = function () { //鼠标划出，继续轮播
    timer = setInterval(auto, 4000); //调用定时器
  }
  var j =0;
  for(;j<8;j++){//点击小图标也可以转换图片
    lik1[j+8].ind=j;
    lik1[j+8].onclick=function(){
      fun(this.ind,i)
      i=this.ind;
    }
  }

}