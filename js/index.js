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
    let box=document.querySelector(".yhzq-gundong");
    let innerObj=document.querySelector(".yhzq-gundong ul");
    let items=document.querySelectorAll(".yhzq-gundong ul li");
    let next=document.querySelector(".yhzq-right");
    let before=document.querySelector(".yhzq-left");
    let bir="right";
    console.log(box);
    console.log(innerObj);
    console.log(items);
    let n=3;
    function moveFn() {
        innerObj.style.transition="all 1s";
        if(bir==="right"){
            n++;
        }else if(bir==="left"){
            n--;
        }
        innerObj.style.marginLeft=-n*241+"px";
    }

    innerObj.addEventListener("transitionend",function(){
        flag=true;
        if(n===8){
            innerObj.style.transition="none";
            innerObj.style.marginLeft=-964+"px";
            n=4;
        }
        if(n===0){
            innerObj.style.transition="none";
            innerObj.style.marginLeft=-1928+"px";
            n=8;
        }
    })
    let st=setInterval(moveFn,3000);
    //鼠标移入or失去焦点
    box.onmouseover=function(){
        clearInterval(st);
    };
    box.onmouseout=function(){
        st=setInterval(moveFn,3000);
    };
    window.onblur=function(){
        clearInterval(st);
    };
    window.onfous=function(){
        setInterval(moveFn,3000);
    };
    //下一个
    let flag=true;
    next.onclick=function(){
        console.log("右点击测试");
        if(flag){
            bir="right";
            flag=false;
            moveFn();
        }
    };
    before.onclick=function (){
        console.log("左点击测试");
        if(flag){
            bir="left";
            flag=false;
            moveFn();
        }
    }


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

//客服鼠标移入
{
    let logo=document.querySelectorAll(".logo");
    let wz=document.querySelectorAll(".wz");
    let lg1=document.querySelector(".lg1");
    let lg2=document.querySelector(".lg2");
    let lg3=document.querySelector(".lg3");
    logo.forEach(function(ele,index){
        ele.onmouseover=function(){
            wz[index].style.display="block";
            wz[index].style.background="#3eb4fa";

        }
        ele.onmouseout=function(){

            wz[index].style.display="none";
        }
    })
}

//客户端
{
    let kehuduan=document.querySelector(".head-right ul .a");
    let erweima=document.querySelector(".erweima");
    kehuduan.onmouseover=function(){
        this.classList.add("wocao");
        erweima.style.display="block";
    }
    kehuduan.onmouseout=function(){
        this.classList.remove("wocao");
        erweima.style.display="none";
    }

}

//测导航
{
    let  ce=document.querySelectorAll(".center .aside ul li");
    let  nav=document.querySelectorAll(".nav2");
    let banner=document.querySelector(".center")
    console.log(ce)
    ce.forEach(function (ele,index) {
        ele.onmouseover=function(){
            nav.forEach(function(ele){
                ele.style.display="none";
            })
            nav[index].style.display="block";
            // ce[index].style.borderColor="#3eb4fa";
            ce[index].classList.add("cur");
            // ce[index].style.borderRight="#fff";
        }
        nav[index].onmouseout=function(){
            nav[index].style.display="none";
            ce[index].classList.remove("cur");
        }
        nav[index].onmouseover=function(){
            ce[index].classList.add("cur");
            nav[index].style.display="block";
        }
        ce[index].onmouseout=function(){
            ce[index].classList.remove("cur");
            nav[index].style.display="none";

            // ce[index].style.borderColor="#fff";
        }
    })
}