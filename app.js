const myNav = document.querySelector('#nav_bar');

const home = document.querySelector('#homeblock');
const about = document.querySelector('#aboutblock');
const dean = document.querySelector('#deanblock');
const council = document.querySelector('#councilblock');
const achieve = document.querySelector('#achieveblock');
const news = document.querySelector('#newsblock');
const contact = document.querySelector('#contactblock');

var navlinks = document.querySelectorAll('.links')
// console.log(Array.from(navlinks));

Array.from(navlinks).forEach(link=>{
    link.addEventListener('click',()=>{
        // console.log(link);
        for(var i=0;i<navlinks.length;i++){
            // navlinks[i].addEventListener('click',function(){
                navlinks[i].classList.remove("active");
        }
        link.classList.add('active');
    })
});



const getinfo = (height,arr)=>{
    // console.log(arr[0]<=height,height<arr[0]+arr[1])

    if(0 <= height && height <arr[0]){
        return 1;

    }
    else if(arr[0] <= height  && height <arr[0]+arr[1]){
        return 2;
        
    }
    else if(arr[0]+arr[1] <= height && height<arr[0]+arr[1]+arr[2]){
        return 3;
        
    }
    else if(arr[0]+arr[1]+arr[2] <= height && height<arr[0]+arr[1]+arr[2]+arr[3]){
        return 4;
        
    }
    else if(arr[0]+arr[1]+arr[2]+arr[3] <= height && height<arr[0]+arr[1]+arr[2]+arr[3]+arr[4]){
        return 5;
        
    }
    else if(arr[0]+arr[1]+arr[2]+arr[3]+arr[4] <= height && height<arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]){
        return 6;
        
    }
    else{
        return 7;
    }

}

window.onscroll = function(){
    var arr = [home.scrollHeight,about.scrollHeight,dean.scrollHeight,council.scrollHeight,achieve.scrollHeight,news.scrollHeight,contact.scrollHeight]
    // console.log(document.documentElement.scrollTop,arr);
  //  console.log(document.documentElement.scrollTop);
  for(var i=0;i<navlinks.length;i++){
    // navlinks[i].addEventListener('click',function(){
        navlinks[i].classList.remove("active");
        console.log('hi');
}
        if (document.body.scrollTop >= 500 || document.documentElement.scrollTop>=500) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
            
        } 
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
        }
    
        var getnum = getinfo(document.documentElement.scrollTop,arr);
        // console.log(getnum);
        if(getnum === 1){
            for(var i=0;i<navlinks.length;i++){
                // navlinks[i].addEventListener('click',function(){
                    navlinks[i].classList.remove("active");
            }
            navlinks[0].classList.add('active');
        }
        if(getnum === 2){
            for(var i=0;i<navlinks.length;i++){
                // navlinks[i].addEventListener('click',function(){
                    navlinks[i].classList.remove("active");
            }
            navlinks[1].classList.add('active');
        }
        if(getnum === 3){
            for(var i=0;i<navlinks.length;i++){
                // navlinks[i].addEventListener('click',function(){
                    navlinks[i].classList.remove("active");
            }
            navlinks[2].classList.add('active');
        }
        if(getnum === 4){
            for(var i=0;i<navlinks.length;i++){
                // navlinks[i].addEventListener('click',function(){
                    navlinks[i].classList.remove("active");
            }
            navlinks[3].classList.add('active');
        }
        if(getnum === 5){
            for(var i=0;i<navlinks.length;i++){
                // navlinks[i].addEventListener('click',function(){
                    navlinks[i].classList.remove("active");
            }
            navlinks[4].classList.add('active');
        }
        if(getnum === 6){
            for(var i=0;i<navlinks.length;i++){
                // navlinks[i].addEventListener('click',function(){
                    navlinks[i].classList.remove("active");
            }
            navlinks[5].classList.add('active');
        }
        if(getnum === 7){
            for(var i=0;i<navlinks.length;i++){
                // navlinks[i].addEventListener('click',function(){
                    navlinks[i].classList.remove("active");
            }
            navlinks[6].classList.add('active');
        }

        
};




// var arr = Array.from(navlinks);


var pageheight = home.scrollHeight+about.scrollHeight+dean.scrollHeight+council.scrollHeight+achieve.scrollHeight+news.scrollHeight+contact.scrollHeight;


// var getno


// window.onscroll = function(){
//     //   console.log(arr);
//     var arrno = getno(document.documentElement.scrollTop);
//     for(var i=0;i<navlinks.length;i++){
            
//         navlinks[i].classList.remove("active");
// }
    
    
    
//   };

//    console.log(document.documentElement.scrollTop);
//       if (0 <= document.documentElement.scrollTop < home.scrollHeight) {
       
//         navlinks[0].classList.add('active');
          
//       } 
//       else if(home.scrollHeight <= document.documentElement.scrollTop < home.scrollHeight+about.scrollHeight ){
        
//         navlinks[1].classList.add('active');
//       }