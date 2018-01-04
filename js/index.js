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
        let leftBar=document.querySelector("#menu");

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

        var toTop=document.querySelector(".back");
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

        var btns=document.querySelectorAll("#menu .btn");
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

//无缝轮播
{
    let zuoyi=document.querySelector(".yhzq-gundong ul");
    let items=document.querySelectorAll(".yhzq-gundong ul li");
    let num=0;
    var st=setInterval(function(){
       num++;
       if (num===1){
           zuoyi.style.transition="all 1s";
       }
       zuoyi.style.marginLeft=-[num]*241+"px";
     },3000);
    zuoyi.addEventListener("transitionend",function(){
        if(num===items.length-4){
            zuoyi.style.transition="none";
            num=0;
            zuoyi.style.marginLeft=0;
        }
    })

}

//咪咕视频轮播
{
    let mgbanner=document.querySelectorAll(".nihao li");
    let mgBtn=document.querySelectorAll(".mgbox3-circle ul li");
    let mgBigbox=document.querySelector(".mgbox3-top");
    mgBtn.forEach(function(ele,index){
        ele.onmouseover=function(){
            for(let i=0;i<mgBtn.length;i++){
                mgBtn[i].classList.remove("active");
                mgbanner[i].classList.remove("active");
            }
            this.classList.add("active");
            mgbanner[index].classList.add("active");
            n=index;
        }
    });
    let n=0;
    let st=setInterval(function(ele,index){
        n++;
        if(n==mgBtn.length){
            n=0;
        }
        for(let i=0;i<mgBtn.length;i++){
            mgBtn[i].classList.remove("active");
            mgbanner[i].classList.remove("active");
        }
        mgBtn[n].classList.add("active");
        mgbanner[n].classList.add("active");
    },5000)
    mgBigbox.onmouseover=function () {
        clearInterval(st);
    }
    mgBigbox.onmouseout=function () {
        setInterval(function(ele,index){
            n++;
            if(n==mgBtn.length){
                n=0;
            }
            for(let i=0;i<mgBtn.length;i++){
                mgBtn[i].classList.remove("active");
                mgbanner[i].classList.remove("active");
            }
            mgBtn[n].classList.add("active");
            mgbanner[n].classList.add("active");
        },5000)
    }
}

