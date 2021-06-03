var canvas;
var context;
//页面装载
function window_onload()
{
canvas=document.getElementById("canvas");//获取canvas元素
context=canvas.getContext('2d');//获取canvas元素的图形上下文对象
setInterval("draw()",1000);//每隔一秒重绘时钟，重新显示时间
}
//绘制时钟
function draw()
{
var radius=Math.min(canvas.width / 2, canvas.height / 2) -25;//时钟罗盘半径
var centerx=canvas.width/2;//时钟中心横坐标
var centery=canvas.height/2;//时钟中心纵坐标
context.clearRect(0,0,canvas.width,canvas.height);//擦除之前所绘时钟
context.save();//保存当前绘制状态
//绘制时钟圆盘
/*context.fillStyle = '#666';//时钟背景色*/
var my_gradient=context.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
context.fillStyle=my_gradient;
/*context.fillRect(20,20,150,100);*/
context.strokeStyle = '#c0c0c0';//时钟边框颜色
context.beginPath();//开始创建路径
context.arc(centerx,centery,radius, 0,Math.PI*2, 0);//创建圆形罗盘路径
context.fill();//用背景色填充罗盘
context.stroke();//用边框颜色绘制罗盘边框
context.closePath();//关闭路径
context.restore();//恢复之前保存的绘制状态
//绘制时钟上表示小时的文字
var r = radius - 10;//缩小半径，因为要将文字绘制在时钟内部
context.font= 'bold 20px 宋体';//指定文字字体
Drawtext('1', centerx + (0.5 * r), centery - (0.88 * r));
Drawtext('2', centerx + (0.866 * r), centery - (0.5 * r));
Drawtext('3', centerx + radius - 10,centery);
Drawtext('4', centerx + (0.866 * r), centery + (0.5 * r));
Drawtext('5', centerx + (0.5 * r), centery + (0.866 * r));
Drawtext('6', centerx, centery + r);
Drawtext('7', centerx - (0.5 * r), centery + (0.866 * r));
Drawtext('8', centerx - (0.866 * r), centery + (0.49 * r));
Drawtext('9', centerx - radius + 10, centery);
Drawtext('10',centerx - (0.866 * r),centery - (0.50 * r));
Drawtext('11', centerx - (0.51 * r), centery - (0.88 * r));
Drawtext('12', centerx, 35);
//绘制时钟指针
var date=new Date();//获取需要表示的时间
var h = date.getHours();//获取当前小时
var m = date.getMinutes();//获取当前分钟
var s=date.getSeconds();//获取当前秒
var a = ((h/12) *Math.PI*2) - 1.57 + ((m / 60) * 0.524);//根据当前时间计算指针角度
context.save();//保存当前绘制状态
context.fillStyle='black'; //指定指针中心点的颜色
context.beginPath();//开始创建路径
context.arc(centerx,centery,3,0,Math.PI * 2, 0);//创建指针中心点的路径
context.closePath();//关闭路径
context.fill();//填充指针中心点
context.lineWidth=3;//指定指针宽度
context.fillStyle='black';//指定指针填充颜色
context.strokeStyle='black';//指定指针边框颜色
context.beginPath();//开始创建路径
//绘制小时指针
context.arc(centerx,centery,radius - 55, a + 0.01, a, 1);
context.lineTo(centerx,centery);
//绘制分钟指针
context.arc(centerx,centery,radius - 40, ((m/60) * 6.27) - 1.57, ((m/60) * 6.28) - 1.57, 0);
context.lineTo(canvas.width / 2, canvas.height / 2);
//绘制秒钟指针
context.arc(centerx,centery,radius - 30, ((s/60) * 6.27) - 1.57, ((s/60) * 6.28) - 1.57, 0);
context.lineTo(centerx,centery);
context.closePath();//关闭路径
context.fill();//填充指针
context.stroke();//绘制指针边框
context.restore();//恢复之前保存的绘制状态
//指定时钟下部当前时间所用的字符串，文字格式为hh:mm:dd
var hours = String(h);
var minutes = String(m);
var seconds = String(s);
if (hours.length == 1) h = '0' + h;
if (minutes.length == 1) m = '0' + m;
if (seconds.length == 1) s = '0' + s;
var str =h + ':' + m + ':' +s;
context.fillStyle='#CC0033';
//绘制时钟下部的当前时间
Drawtext(str, centerx, centery + radius + 12);
}
function Drawtext(text, x, y)
{
//因为需要使用到坐标平移，所以在平移前线保存当前绘制状态
context.save();
x -= (context.measureText(text).width / 2);//文字起点横坐标
y +=9;//文字起点纵坐标
context.beginPath();//开始创建路径
context.translate(x, y);//平移坐标
context.fillText(text,0,0);//填充文字
context.restore();
}// JavaScript Document