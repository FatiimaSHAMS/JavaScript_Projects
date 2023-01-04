////////////PARTONE//////////////////
let partone = document.getElementById("part1")
partone.innerHTML += `<h2>Part One: List of images</h2>`
partone.innerHTML += `<h3>A function that creates an HTML list of images based on an array of image paths</h3>`

partone.innerHTML += `<h2>Invoke Not Using Required Array Argument</h2>`
partone.innerHTML += imageGallery(notAnArrayOfImages)
partone.innerHTML += imageGallery(alsoNotAnArrayOfImages)

partone.innerHTML += `<h2>Invoke with an array of booleans or numbers not string image names<br/>(See concole for function error messages.)</h2>`
partone.innerHTML += imageGallery(anArrayOfNumbers)
partone.innerHTML += imageGallery(anArrayOfBooleans)

partone.innerHTML += `<h2>Invoking with a valid array of image names</h2>`
partone.innerHTML += imageGallery(arrayOfImages)

partone.innerHTML += `<h2>Invoking with an array Of some images and some junks <br/>(See concole for function error messages.)</h2>`
partone.innerHTML += imageGallery(arrayOfSomeImages)


function imageGallery(arrayOfImage){
let html = ``;

    if (!Array.isArray(arrayOfImage)){
        html +=`<h2 class="error">ERROR: It Should be an Array.'${arrayOfImage}' is not an array.</h2>`
        return html
    }

    else {
        arrayOfImage.forEach(itemFromArray =>{
            if( typeof itemFromArray !=="string"){
                console.log(`ERROR: It should be a string, '${typeof itemFromArray}' is note a string!`)
                    return
    
            }
            else{
                html +=`<ul>`
                html += `<li><img src="${pathToImages.concat(itemFromArray)}" alt="${itemFromArray}"</li>`;
                html += `</ul>`
            }


        });
             
        }
        return html
    };
    
    
/////////////PARTTWO//////////////
let parttwo = document.getElementById("part2")
parttwo.innerHTML += `<h2>Part Two: List of Links</h2>`
parttwo.innerHTML += `<h3>A function that creates an HTML list of links based on an array of web URLs</h3>`
parttwo.innerHTML += `<h3>Trying with an array that contanis booleans, and not string urls...</h3>`
parttwo.innerHTML += hyperlinks(notAnArrayOfLinks)

parttwo.innerHTML += `<h3>Trying with a number, not an array...</h3>`;
parttwo.innerHTML += hyperlinks(alsoNotAnArrayOfLinks)

parttwo.innerHTML += `<h3>Trying with a valid array of link URLs...</h3>`;
parttwo.innerHTML += hyperlinks(arrayOfLinks)

parttwo.innerHTML += `<h3>Trying with a array of link URLs and also junk...</h3>`;
parttwo.innerHTML += hyperlinks(anotherArrayOfLinks)


function hyperlinks ( arrayOfURL ) {
    let html = ``;
    if (!Array.isArray(arrayOfURL)) {
        html += `<h2 class="error">ERROR: It should be an array.'${arrayOfURL}' is not an array.</h2>`
        return html
    }
    else {
        arrayOfURL.forEach(function( itemFromArray ) {
            if (typeof itemFromArray !== "string") {
                console.log(`ERROR: It should be a string, '${itemFromArray}' is not a string!`)
                
            }
            else {
                html +=`<ul>`
                html += `<li><a href="${itemFromArray}">${itemFromArray}</a></li>`;
                html += `</ul>`

            }
            
        });
    }
    return  html
};


///////////////PARTTHREE//////////////
let partthree = document.getElementById("part3")
partthree.innerHTML += `<h2>Part Three: List of Names</h2>`
partthree.innerHTML += `<h3>A function that create an HTML list of names based on an array of image paths</h3>`


partthree.innerHTML += `<h3>Providing invalid parameter(not an array)</h3>`
partthree.innerHTML += namelist(notAnArrayOfNames)

partthree.innerHTML += `<h3>Providing invalid parameter (array is too small)<h3>`
partthree.innerHTML += namelist(arrayOfNamesTooSmall)

partthree.innerHTML += `<h3>Providing valid parameter array, using default second parameter for list type 'ul'</h3>`
partthree.innerHTML += namelist(arrayOfNames);

partthree.innerHTML += `<h3>Providing valid parameter array, using default second parameter for list type 'ol'</h3>`
partthree.innerHTML += namelist(arrayOfNames, 'ol')

   
function namelist ( arrayOfName, secondpar = "ul" ){
    let html = ``;
    if (Array.isArray(arrayOfName) && arrayOfName.length >= 2 && (secondpar === 'ul' || secondpar === 'ol')) {
        html += `<${secondpar}>`
        arrayOfName.forEach(function( itemFromArray ) {
            html += `<li>${itemFromArray}</li>`

        });
        html += `</${secondpar}>`
    }
    else {
        if (!Array.isArray(arrayOfName)) {
            html += `<h2 class="error"> ERROR: This function requires an array.</h2>`
            return html
            
        }
        else if (arrayOfName.length < 2) {
            html += `<h2 class="error"> ERROR: Array must contain at least two items or more.</h2>`
            return html
            
        }
        else if (secondpar !== 'ul' || secondpar !=='ol') {
            html += `<h2 class="error">ERROR: In HTML only UL or OL lists can be made. There is no '${secondpar}' list element.</h2>`
            return html
        }
    }
    return  html
}   


















