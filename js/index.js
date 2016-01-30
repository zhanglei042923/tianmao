window.onload=function(){
/*1.顶部下拉*****************************************/
        var yiji=$(".headrli");
        var erji=$(".xiala");
        for(var i=0;i<yiji.length;i++){
	        yiji[i].index=i;
	        hover(yiji[i],function(){
  				yiji[this.index].style.background="#fff";
              	erji[this.index].style.display="block";
              	// erji[this.index].style.cssText="border:1px solid #ddd";
            },function(){
              	erji[this.index].style.display="none";
              	yiji[this.index].style.background="";
              	// erji[this.index].style.cssText="border:0";
              	})
        }   

/*2.天猫左边轮播图片*****************************/
    function getCshu(num){
        var ccdiv1=$(".ccdiv1")[num];
        var leftbtn=$(".leftbtn")[num];
        var rightbtn=$(".rightbtn")[num];
        var t=setInterval(moveleft,1000)
            function moveleft(){
                animate(ccdiv1,{left:-90},500,Tween.Linear,function(){
                var first=getFirst(ccdiv1);
                ccdiv1.appendChild(first);
                ccdiv1.style.left=0;
                }) 
            }
                  
            function moveright(){
                animate(ccdiv1,{left:0},500,Tween.Linear,function(){
                ccdiv1.style.left="-90px";
                var last=getLast(ccdiv1);
                var first=getFirst(ccdiv1);
                ccdiv1.insertBefore(last,first);
                   
                })
            }
            leftbtn.onmouseover=rightbtn.onmouseover=function(){
                clearInterval(t);
            }
            leftbtn.onmouseout=rightbtn.onmouseout=function(){
                t=setInterval(moveleft,1000);
            }
            leftbtn.onclick=function(){
                moveleft()
            }
            rightbtn.onclick=function(){
                moveright()
            }

    } 
    getCshu(0);
    getCshu(1);
    getCshu(2);
    getCshu(3);   
    getCshu(4);
    getCshu(5);

/*3.天猫效果换一批***************************************/
	function huanY(){
		var onearr=[];
		var twoarr=[];
		var threearr=[];
		var fourarr=[];
		var abottom=$(".a-bottom-center");
		var atop=$(".aa-top-leftli");
		var huan=$(".aa-top-right1")[0];
		for(var i=0;i<24;i++){
		    onearr.push("img/a-"+i+".jpg");//24
		    twoarr.push("img/a-"+i+".jpg");//24
		    threearr.push("img/a-"+i+".jpg");//24
		    fourarr.push("img/a-"+i+".jpg");//24
		}
        //3-1.随机取24张图片
		function random(arr){
		    var newarr=[];
		    for(var j=0;j<24;j++){
		        newarr.push(arr[parseInt(Math.random()*24)]);
		    }
		    return newarr;
		}
		//3-2.让图片随机出现
		var tuarr=[onearr,twoarr,threearr,fourarr];
		function show(num){//arr指数组，num指下标
		    var imgarr=random(tuarr[num]);
		    for(var i=0;i<imgarr.length;i++){
		        var div=document.createElement("div");
		        div.style.cssText="width:131px;height:62px;border:1px solid #F2F2F2;float:left;text-align:center;line-height:78px;padding-top:18px;background:#fff;position:relative";
		        div.className="divs";
		        var img=document.createElement("img");
		        img.style.cssText="width:88px;height:45px";
		        img.src=imgarr[i];
		        div.appendChild(img);
		        var img1=document.createElement("img");
		        img1.style.cssText="width:15px;height:20px;position:absolute;top:5px;right:5px;display:none";
		        img1.className="img1";
		        img1.src="img/taoxin.png";
		        div.appendChild(img1);
		        abottom[num].appendChild(div);
		    }
			var divs=$(".divs");
		    var img1=$(".img1");
		    for(var i=0;i<divs.length;i++){
		        divs[i].index=i;
		        hover(divs[i],function(){
		          ss=this.index;
		          img1[ss].style.display="block";
		        },function(){
		          img1[ss].style.display="none";
		          })
		    }

		}
		show(0);
		var index=0;
		for(var i=0;i<atop.length;i++){
		    atop[i].index=i;
		    atop[i].flag=true;
		    atop[0].flag=false;
		    atop[i].onclick=function(){
		        index=this.index;//单击谁保存谁
		        for(var j=0;j<abottom.length;j++){
		            abottom[j].style.zIndex=1;
		            atop[j].style.fontWeight="normal";
		            atop[j].style.textDecoration="none";
		        }
		        atop[this.index].style.textDecoration="underline";
		        atop[this.index].style.fontWeight="bold";
		        abottom[this.index].style.zIndex=3;
		        if(this.flag){
		            show(this.index);
		            this.flag=false;
		        }
		    }
		}
		huan.onclick=function(){
		    abottom[index].innerHTML="";
		    show(index);
		}
	}
	huanY();
/*4.banner轮播效果*********************************************/
	function lunBo(){
		var banner1=$(".banner1");
        var yuanli=$(".yuanli");
        var daoh22=$(".daoh22")[0];
        var right=$(".daoh2-center-right");
        var bgarr=["#b80cf8","#7cf9d1","#f5f3f4","#e0e0e0","#dcdcdc","#dbdbdb"];
        for(var i=0;i<yuanli.length;i++){
            yuanli[i].index=i;
            yuanli[i].onmouseover=function(){
                clearInterval(t);
                for(var j=0;j<banner1.length;j++){
                    banner1[j].style.zIndex=2;
                    yuanli[j].style.background="#333";
                    daoh22.style.background=bgarr[j];
                }
                    banner1[this.index].style.zIndex=3;
                    yuanli[this.index].style.background="#c40000";
                    daoh22.style.background=bgarr[this.index];
            }
            yuanli[i].onmouseout=function(){
                t=setInterval(move,2000);
                num=this.index+1;
            }
        }  

        var t=setInterval(move,2000);
        num=1;
        function move(){
            if(num==6){//代表让它一次一次循环，当为4的话，再从1开始循环，如果不要这句，就执行一次就停止了
            num=0;
            }   
           for(j=0;j<banner1.length;j++){
                banner1[j].style.zIndex=2;
                yuanli[j].style.background="#333";
            }
            banner1[num].style.zIndex=3;
            yuanli[num].style.background="#c40000";
            daoh22.style.background=bgarr[num];
            num++;
        }
		var daoh=$(".daoh2-center-left1")[0];
		var li=$("li",daoh);
		var jia1=$(".jia1");//banner部分的图片
		var daoh22=$(".daoh22")[0];
		var dhlist=$(".dhlist");
		var right=$(".daoh2-center-right");
		var bgarr2=["#d40c54","#ee3f44","#e2e2e2","#e91e49","#740f9d","#6fdbdb","#e0f0d6","#324cf7",
		"#ffba00","#fc4d78","#f63a3b","#e90540","#2e8add","#ff489b","#db3e45"];
		for(var i=0;i<li.length;i++){
		    li[i].index=i;
		    li[i].onmouseover=function(){
		        if(this.index==0){
		            clearInterval(t);
		            for(j=0;j<jia1.length;j++){
		                jia1[j].style.zIndex=2;
		                dhlist[0].style.display="none";
		            } 
		            jia1[0].style.zIndex=4;
		            daoh22.style.background=bgarr[num-1];
		            t=setInterval(move,2000);
		            dhlist[0].style.display="block";

		        }else{
		            clearInterval(t);
		            for(j=0;j<jia1.length;j++){
			            jia1[j].style.zIndex=2;
			            dhlist[j].style.display="none";
		        	} 
		            jia1[this.index].style.zIndex=4;
		            daoh22.style.background=bgarr2[this.index-1];
		            dhlist[this.index].style.display="block";
		        }
		        for(var k=0;k<right.length;k++){
		            right[k].style.display="none";
		        }
		        right[this.index].style.display="block";
		    }

		    li[i].onmouseout=function(){
		        dhlist[this.index].style.display="none";
		    }
		}
	}
	lunBo();

/*5.天猫右侧下拉************************/
	function rightLa(){
		var st3=$(".st3");
		var you1=$(".you1");
		for(var i=0;i<st3.length;i++){
		    st3[i].index=i;
		    hover(st3[i],function(){
		        you1[this.index].style.display="block";
		        animate(you1[this.index],{left:-80},100,Tween.Linear);
		     },function(){
		        you1[this.index].style.display="none";
		        animate(you1[this.index],{left:-120},100,Tween.Linear);
		     })
		    
		}
	}
	rightLa();
  
/*6.天猫顶部搜索框****************************************************/  

	var heng=$(".heng")[0];
	var cc=$(".cc");
	var stright=$(".stright")[0];
	var stright1=$(".stright1");
	var imgs=$('img',stright);
	var span=$(".stright1-span");
	var cc=$(".cc");
	var flag=true;//滚动条往下拉时的开关，第一次开，这个开关要保证每一次往下拉时，开关都是开着
	var flag2=true;
	window.onscroll=function(){
	    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	        //var scrollT=obj.scrollTop;
	    if(obj.scrollTop>=200){
	        if(flag){
	            animate(heng,{top:0},200,Tween.Linear);
	            flag=false;
	            flag2=true;
	        }
	    }else{
	        if(flag2){
	            animate(heng,{top:-50},200,Tween.Linear);
	            flag=true;
	            flag2=false;
	        }
	    }
	    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	    if(obj.scrollTop>1000){
	        stright.style.display="block";
	    }else{
	        stright.style.display="none";
	    }
		// 6-1.通过楼层来控制小按钮
	    for(var i=0;i<cc.length;i++){
	        cc[i].aa=cc[i].offsetTop;
	            // obj=document.documentElement.scrollTop?document.documentElement:document.body;
	        if(obj.scrollTop>=cc[i].aa-130){//滚动条的高度如果超出当前楼层的高度的offsetTop，就让对应的小按钮发生变化
	            for(var j=0;j<stright1.length;j++){
	                stright1[j].style.background="";
	                span[j].style.display="none";
	            }
	            // stright1[i].style.background="pink";
	            span[i].style.display="block";
	        }
	    }
    	//6-2通过小按钮控制楼层 
	    for(var i=0;i<stright1.length;i++){
	        stright1[i].index=i;
	        stright1[i].onclick=function(){
	            var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	            animate(obj,{scrollTop:cc[this.index].aa-130},300,Tween.Linear);
	            imgs[this.index].style.zIndex=2;
	            span[this.index].style.zIndex=3;
	        }
	    }

	  
/*7.图片的按需加载*********************/
	    var ch=document.documentElement.clientHeight;
	       //window.onscroll=function(){和上面通用window.onscroll
	    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	    for(var i=0;i<cc.length;i++){
	        if(cc[i].offsetTop<ch+obj.scrollTop){
	            var imgs=$("img",cc[i]);
	            for(var j=0;j<imgs.length;j++){
	                imgs[j].src=imgs[j].getAttribute("anxu");
	            }
	        }
	    }
	}

/************************************/ 
	var lefts=$(".stright")[0];
	var cW=document.documentElement.clientWidth;
	window.onresize=function(){
		cW=document.documentElement.clientWidth;
		lefts.style.left=(cW-1349)/2+"px";
	}
/*返回顶部*******************************************/
		var st4=$('.st4')[0];
	    var sta4=$(".st4-a",st4)[2];
	    sta4.onclick=function(){
	    	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	    	animate(obj,{scrollTop:0},300,Tween.Linear)
	    }
}      
    
    




        
  
      

   



        
 

	    


  
