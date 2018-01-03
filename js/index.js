/*
* @Author: 李亲亲ლ(°◕‵ƹ′◕ლ)
* @Date:   2017-12-28 22:05:07
* @Last Modified by:   李亲亲ლ(°◕‵ƹ′◕ლ)
* @Last Modified time: 2017-12-29 06:03:53
*/
{
	//声明
	var banners=document.querySelectorAll(".img-box li");
    var pagers=document.querySelectorAll(".ul li");
    var box=document.querySelector(".center");
    var banLeft=document.querySelector(".zuo");
    var banRight=document.querySelector(".you");
    //选项卡事件
    pagers.forEach(function(ele,index){
    	ele.onmouseover=function(){
    		for(var i=0;i<banners.length;i++){
    		pagers[i].classList.remove("active");
    		banners[i].classList.remove("active");
    	    };
    	    pagers[index].classList.add("active");
    	    banners[index].classList.add("active");
    	    n=index;
    	};
    });
    //自动轮播
    n=0;
    function bannersFn(bir="r"){
    	if(bir==="r"){
    		n++;
    	}else if(bir="l"){
    		n--;
    	}
    	if(n==banners.length){
    		n=0;
    	}
        if(n===-1){
        	n=banners.length-1;
        }
    	for(var i=0;i<banners.length;i++){
    		pagers[i].classList.remove("active");
    		banners[i].classList.remove("active");
    	    };
    	    pagers[n].classList.add("active");
    	    banners[n].classList.add("active");
    }
    var st=setInterval(bannersFn,5000);
    box.onmouseover=function(){
	clearInterval(st);
     };
    box.onmouseout=function(){
	st=setInterval(bannersFn,5000);
    };

    //解决点击事件的bug
    var flag=true;

    //左右点击事件
    banRight.onclick=function(){
    	if(flag){
    		flag=false;
    		bannersFn();

    	}
    		
    	
    	
    }
    banLeft.onclick=function(){
    	if(flag){
    		flag=false;
    		bannersFn("l");
    	}
    	

    }
    banners.forEach(function(ele,index){
    	ele.addEventListener("transitionend",function(){
    		flag=true;
    	})

    })
    
}


{

        let topBar=document.querySelector(".topbar");
        let leftBar=document.querySelector(".cdaohang");
        console.log(topBar)
        console.log(leftBar)
        let flag=true;
        onscroll=function(){
            var st=document.documentElement.scrollTop;
            if(st>500){
                //topBar.style.top="0";
                topBar.style.display="block";
            }else{
                // topBar.style.top="-40px";
                topBar.style.display="none";
            }
            if(st>600){
                leftBar.style.display="block";
            }else{
                leftBar.style.display="none";
            }
            floors.forEach(function(ele,index){
                if(st>=ele.offsetTop){
                    for(var i=0;i<btns.length;i++){
                        btns[i].classList.remove("active");
                    }
                    btns[index].classList.add("active");
                }
            });
        }


//返回顶部

        var toTop=document.querySelector(".totop");
        toTop.onclick=function(){
            var st=document.documentElement.scrollTop;
            var speed=st*30/100;
            var t=setInterval(function(){
                st-=speed;
                if(st<=0){
                    st=0;
                    clearInterval(t);
                };
                document.documentElement.scrollTop=st;
                flag=false;

            },30);
        }


//楼层跳转

        var btns=document.querySelectorAll(".cdaohang ul li");
        var floors=document.querySelectorAll(".xyhbox");
        btns.forEach(function(ele,index){
            ele.onclick=function(){
                var ot=floors[index].offsetTop;
                var now=document.documentElement.scrollTop;
                var speed=(ot-now)*30/300;
                var time=0;
                var t=setInterval(function(){
                    now+=speed;
                    time+=30;
                    if(time==300){
                        clearInterval(t);
                        now=ot;

                    }
                    document.documentElement.scrollTop=now;
                },30)
            }

        })


}

