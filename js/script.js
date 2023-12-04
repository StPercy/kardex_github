var element = document.getElementById("but01");
  element.addEventListener("click", displayRandomImages);

   function displayRandomImages()   
    {  
       //The array of images with image location, height, and width  for the upper side of the kardex box: <article id="box02" class="box02_bildoben"></article> : 
       
       /* The array looks like this: 
       var imageArray = [  
        {  
         //address URL of the image    
         src: "bilderoben/01.jpg",
         //size for the image to be display on webpage
         width: "828",  
         height: "363"  
        },*/

       var imageArray = [  
       {  
        //address URL of the image    
        src: "bilderoben/01.jpg",
        //size for the image to be display on webpage
        width: "828",  
        height: "363"  
       },   
         {  
        src: "bilderoben/02.jpg",  
        width: "828",  
        height: "363"  
       },
       {  
        src: "bilderoben/03.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/04.jpg",  
        width: "828",  
        height: "363"   
          
      },
      {  
        src: "bilderoben/05.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/06.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/07.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/08.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/09.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/10.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/11.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/12.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/13.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/14.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/15.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/16.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/17.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/18.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/19.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/20.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/21.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/22.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/23.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/24.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/25.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/26.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/27.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/28.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/29.jpg",  
        width: "828",  
        height: "363"  
      },
      {  
        src: "bilderoben/30.jpg",  
        width: "828",  
        height: "363"  
      },
    ];  

      //array of images with image location, height, and width  for the down side of the kardex box <article id="box03" class="box03_bildunten"></article>: 
       
       var imageArray2 = [  
       {   
         //address URL of the image  
         src: "bilderunten/001.jpg",  
         //size for the image to be display on webpage  
         width: "830",  
         height: "354"  
       },   
       {   
        src: "bilderunten/002.jpg",    
        width: "830",  
        height: "354" 
       },
       {   
        src: "bilderunten/003.jpg",    
        width: "830",  
        height: "354" 
       },
       {   
        src: "bilderunten/004.jpg",    
        width: "830",  
        height: "354" 
       },
       {   
        src: "bilderunten/005.jpg",    
        width: "830",  
        height: "354" 
       }, 
       {
         src: "bilderunten/006.jpg",
         width: "830",
         height: "354"
       },
       {
         src: "bilderunten/007.jpg",
         width:"830",
         height: "354"
        },
        {
          src: "bilderunten/008.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/009.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/010.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/011.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/012.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/013.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/014.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/015.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/016.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/017.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/018.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/019.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/020.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/021.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/022.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/023.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/024.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/025.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/026.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/027.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/028.jpg",
          width:"830",
          height:"354"
        },
        {
          src: "bilderunten/029.jpg",
          width:"830",
          height:"354"
        },
       ]; 
          
        //find the length of the array of images  of the upper side :
        var arrayLength = imageArray.length;  
        var newArray = [];  
        for (var i = 0; i < arrayLength; i++) {  
            newArray[i] = new Image();  
            newArray[i].src = imageArray[i].src;  
            newArray[i].width = imageArray[i].width;  
            newArray[i].height = imageArray[i].height;  
        }  

         //find the length of the array of images  of the down side :
         var arrayLength2 = imageArray2.length;  
        var newArray2 = [];  
        for (var i = 0; i < arrayLength2; i++) {  
            newArray2[i] = new Image();  
            newArray2[i].src = imageArray2[i].src;  
            newArray2[i].width = imageArray2[i].width;  
            newArray2[i].height = imageArray2[i].height;  
        }  
         
      // create random image number  for the upper side
      function getRandomNum(min, max)   
      {  
          // generate and return a random number for the image to be displayed  on the upper side:  
          imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
          return newArray[imgNo];  
      }    

         // create random image number2 for the downside  
      function getRandomNum2(min, max)   
      {  
          // generate and return a random number for the image to be displayed  on the down side:  
          imgNo2 = Math.floor(Math.random() * (max - min + 1)) + min;  
          return newArray2[imgNo2];  
      }  
      
      // 0 is first image and (preBuffer.length - 1) is last image of the array  
      var newImage = getRandomNum(0, newArray.length - 1);  
       
      // 0 is first image and (preBuffer.length - 1) is last image of the array2  
      var newImage2 = getRandomNum2(0, newArray2.length - 1); 

      // remove the previous images  , upside:
      var images = document.getElementsByTagName('img');  
      var l = images.length;  
      for (var p = 0; p < l; p++) {  
         images[0].parentNode.removeChild(images[0]);  
      }  
        // remove the previous images2 , downside:
      var images2 = document.getElementsByTagName('img');  
      var l = images2.length;  
      for (var p = 0; p < l; p++) {  
         images2[0].parentNode.removeChild(images2[0]);  
      } 
      // display the new random image on both sides, upside and downside   
      box02.appendChild(newImage); 
      box03.appendChild(newImage2); 
         
    }  

