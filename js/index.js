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

