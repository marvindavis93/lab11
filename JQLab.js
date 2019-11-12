/*
 * As long as we demonstrate required jquery functions, HTML is not important
 * So I used Lab10 HTML as reference for this lab assignment
 */
$(function(){
   var chess = 1;
   var position = 0;
   $("#btn1").on("click",function(){
      $("#wrapper").hide();   
   });
   
   $("#btn2").on("click",function(){
      $("#wrapper").show();   
   });
   
   $("#btn3").on("click",function(){
        chess = 1 - chess;
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
       
      }); 
   });
   
    // demonstrate next(), we can see green border is current
    //red background is next
   $("#btnNext").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      $("#"+position).css("border-style","solid");  
      $("#"+position).css("border-color","green");  
     
      $("#"+position).next().css("background-color","red");  
      position++;
      if(position==4) position = 0;
      
   });
   
    // demonstrate prev(), we can see green border is current
    //red background is prev
   $("#btnPrev").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      $("#"+position).css("border-style","solid");  
      $("#"+position).css("border-color","green");  
     
      $("#"+position).prev().css("background-color","red"); 
      position--;
      if(position==0) position = 3;
      
   });
   
    // demonstrate closest(), we can see green border is current
    //red background is closest
   $("#btnClosest").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      $("#"+position).css("border-style","solid");  
      $("#"+position).css("border-color","green");  
     
      $("#"+position).closest(".wrapperDiv").css("background-color","red"); 
     
      
   });
   
   
   
   // demonstrate first(), we can see green border 
    //and red background is first of class wrapperDiv
   $("#btnFirst").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      $(".wrapperDiv").first().css("border-style","solid");  
      $(".wrapperDiv").first().css("border-color","green");  
     
      $(".wrapperDiv").first().css("background-color","red"); 
      position = $(".wrapperDiv").first().attr('id');
      
   });
   
   
   // demonstrate last(), we can see green border 
    //and red background is last of class wrapperDiv
   $("#btnLast").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      $(".wrapperDiv").last().css("border-style","solid");  
      $(".wrapperDiv").last().css("border-color","green");  
     
      $(".wrapperDiv").last().css("background-color","red"); 
      position = $(".wrapperDiv").last().attr('id');
      
   });
   
   
      // demonstrate filter(), we can see green border 
    //and red background is even positios  of class wrapperDiv
    
    $("#btnFilterEven").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      //because collections are zero index based, it chooses first, third element    
      $(".wrapperDiv").filter( ":even" ).css("background-color","red"); 
     
      
   });
   
   
         // demonstrate filter(), we can see green border 
    //and red background is odd positios  of class wrapperDiv    
    $("#btnFilterOdd").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      //because collections are zero index based, it chooses 2nd, 4th element    
      $(".wrapperDiv").filter( ":odd" ).css("background-color","red"); 
     
      
   });
   
  
   // demonstrate filter(), with function.
   // first it choses all wrapperDiv classes, and then it filters it
   //using random number
    $("#btnFilter").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      //filter using function, function is random function    
      $(".wrapperDiv").filter( function( index ) {
    return index  === Math.floor(Math.random() * 4); ;
  }).css("background-color","red");     
      
   });
   
  
      // demonstrate not()
    $("#btnNot").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      
      $(".wrapperDiv").not( ":even" ).css("background-color","red");     
      
   }); 
    
      // demonstrate not() with dom element passed
    $("#btnNot2").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      
      $(".wrapperDiv").not( $("#2") ).css("background-color","red");     
      
   });
   
   
      // demonstrate slice() with dom element passed
    $("#btnSlice").on("click",function(){
       
     $('.wrapperDiv').each(function(i) {       
         if(i%2===chess)  $(this).css("background-color","white"); 
         else $(this).css("background-color","black"); 
         $(this).css("border-style","none"); 
       
      }); 
      
      
      $(".wrapperDiv").slice(1,3).css("background-color","red");     
      
   });
   
});

