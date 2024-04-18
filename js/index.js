document.getElementById("but01").addEventListener("click", displayRandomImages);

function displayRandomImages() {
    // Array of image objects for the upper side
    const imageArray = [{
            src: "bilderoben/01.jpg",
            width: 828,
            height: 363
        },
        {
            src: "bilderoben/02.jpg",
            width: 828,
            height: 363
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

    // Array of image objects for the down side
    const imageArray2 = [  
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

    // Function to preload images
    function preloadImages(imageArray) {
        return imageArray.map(item => {
            const img = new Image();
            img.src = item.src;
            img.width = item.width;
            img.height = item.height;
            return img;
        });
    }

    // Preload images for both sides
    const preloadedImages = {
        upper: preloadImages(imageArray),
        down: preloadImages(imageArray2)
    };

    // Function to get a random image from the preloaded array
    function getRandomImage(images) {
        return images[Math.floor(Math.random() * images.length)];
    }

    // Remove previous images
    document.querySelectorAll('#box02 img, #box03 img').forEach(img => img.remove());

    // Get random images for both sides
    const newImage = getRandomImage(preloadedImages.upper);
    const newImage2 = getRandomImage(preloadedImages.down);

    // Display new images
    document.getElementById('box02').appendChild(newImage);
    document.getElementById('box03').appendChild(newImage2);
}
