//https://www.free-css.com/free-css-templates/page282/leadmark
let navigationLocation = document.querySelector("#nb-navigation");
let navigationDefault = `<div class="container">
<a class="navbar-brand">
    <h1 class="title nb-title navbar-fixed-top.scrolled">Book<span class="nb-span">Case</span></h1>  
</a>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">`;
let navigationList = ["index.html", "about.html"];
let navigationText = ["Archive", "About Us"]

for(let i in navigationList){
    navigationDefault += `<li class="nav-item">
    <a class="nav-link" href="${navigationList[i]}">${navigationText[i]}</a>
</li>`
}
navigationDefault += `<li class="nav-item">
<a href="Dokumentacija.pdf" class="ml-4 nav-link btn btn-primary btn-sm rounded">Documentation</a>
</li>
</ul>
</div>
</div>`
navigationLocation.innerHTML = navigationDefault
if(window.location.href == "https://nikolabkic27.github.io/" || window.location.href == "https://nikolabkic27.github.io/index.html"){
    
window.onload= function(){
    ajaxCallback('authors.json', function(rez){
        IntoLS(rez, 'authors');
    })
    ajaxCallback('books.json', function(rez){
        IntoLS(rez, 'books')
    })
    ajaxCallback('genre.json', function(rez){
        IntoLS(rez, 'genres')
    })
    ajaxCallback('types.json', function(rez){
        IntoLS(rez, 'types')
    })
    ajaxCallback('books.json', function(rez){
        showBooks(rez);
    })
    if(window.location.href != undefined){
        console.log(window.location.href);
    }
}
// showBooks(retrieveFromLS('books'))


//DDL CREATION
let ddlGenres = document.querySelector("#ddlGenres");
let option0Genres = "Choose Genre";
ajaxCallback("genre.json", function(genresArray){
    createDDlOptions(ddlGenres, option0Genres, genresArray);
})
let ddlAuthors = document.querySelector("#ddlAuthors");
let option0Authors = "Choose Author";
ajaxCallback("authors.json", function(authorsArray){
    createDDlOptions(ddlAuthors, option0Authors, authorsArray);
})
let ddlTypes = document.querySelector("#ddlTypes");
let option0Types = "Choose Type";
ajaxCallback("types.json", function(typesArray){
    createDDlOptions(ddlTypes, option0Types, typesArray);
})
//END OF DDL CREATION

//Start of filtering content

let btnFilter = document.querySelector("#filterBtn");
let btnRandomBook = document.querySelector("#btnRandomBook");
//START OF RANDOM
btnRandomBook.addEventListener("click", function(){
    let booksArray = retrieveFromLS("books");
    let randomIndex = parseInt(Math.floor(Math.random()*(booksArray.length)+1))
    console.log(randomIndex);

    for (let book of booksArray){
        if (book.productID == randomIndex){
            booksArray = [book];
            console.log(booksArray);
        }
    }
    showBooks(booksArray);
})


//END OF RANDOM
function filterBooks(){
    let selectedGenre = ddlGenres.options[ddlGenres.selectedIndex].value;
    let selectedAuthor = ddlAuthors.options[ddlAuthors.selectedIndex].value;
    let booksArray = retrieveFromLS("books");
    // console.log(selectedGenre);
    if(selectedGenre == "0" && selectedAuthor == "0"){
        showBooks(booksArray);
    }
    else{
        let filteredBooksArray = [];
        if(selectedAuthor != "0"){
            for(let book of booksArray){
                if(book.authorID == parseInt(selectedAuthor)){
                    filteredBooksArray.push(book);
                }
            }
            booksArray = filteredBooksArray;
        }
        if(selectedGenre != "0"){
            filteredBooksArray = [];
            for(let book of booksArray){
                if(book.genreID == parseInt(selectedGenre)){
                    filteredBooksArray.push(book);
                }
            }
            booksArray = filteredBooksArray;
        }
        showBooks(booksArray)
    }
}
//DEFAULT
filterBtn.addEventListener("click", function(){
    let selectedGenre = ddlGenres.options[ddlGenres.selectedIndex].value;
    let selectedAuthor = ddlAuthors.options[ddlAuthors.selectedIndex].value;
    let selectedType = ddlTypes.options[ddlTypes.selectedIndex].value;
    let selectedSort = ddlSort.options[ddlSort.selectedIndex].value;
    let booksArray = retrieveFromLS("books");
    // console.log(selectedGenre);
    if(selectedGenre == "0" && selectedAuthor == "0" && selectedType == "0"){
        if(selectedSort == "0"){
            showBooks(booksArray);
        }
        else{
            showBooks(sortBooks(booksArray, selectedSort))
        }
    }
    else{
        let filteredBooksArray = [];
        if(selectedAuthor != "0"){
            for(let book of booksArray){
                if(book.authorID == parseInt(selectedAuthor)){
                    filteredBooksArray.push(book);
                }
            }
            booksArray = filteredBooksArray;
        }
        if(selectedGenre != "0"){
            filteredBooksArray = [];
            for(let book of booksArray){
                if(book.genreID == parseInt(selectedGenre)){
                    filteredBooksArray.push(book);
                }
            }
            booksArray = filteredBooksArray;
        }
        if(selectedType != "0"){
            filteredBooksArray = [];
            for(let book of booksArray){
                for(let format of book.formats){
                    if(format.type == parseInt(selectedType)){
                        book.formats = [format];
                        filteredBooksArray.push(book);
                        break;
                    }
                }
            }
            booksArray = filteredBooksArray;
        }
        if(selectedSort == "0"){
            showBooks(booksArray)
        }
        else{
        showBooks(sortBooks(booksArray, selectedSort))
        }
    }
})
//END OF DEFAULT
//End of filtering content
}


//Start of Timer
let targetDate= new Date ("Mar 20, 2023 16:30:00").getTime();
setInterval(function() {
    let currentTime = new Date().getTime()
    let remainingTime = targetDate - currentTime;

   
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)
   
    
    if(remainingTime > 0){
        document.getElementById("event-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
    }
    else {
        document.getElementById("event-timer").innerHTML = "Looks like we missed you, don't worry a new meet-up time will be posted shortly"
      }
    
  
    // If the count down is finished, write some text
    
  }, 1000);
//End of Timer

//Start of Form Generation
let divFormRow = document.querySelector("#form-row");
let namesAndIds = ["first-name", "last-name", "phone", "email", "address"]
let placeholders = ["First Name", "Last name", "Phone: +381 6X XXXXXXX", "Email(optional)", "Address(optional)"]
let listOfClasses = ["form-control", "text-white", "rounded-0", "bg-transparent"]
let pTagClasses = ["alert", "alert-danger", "nb-visibility-hidden"]

//Input Tags
for (let i in namesAndIds){
    let firstDiv = document.createElement("div");
    firstDiv.classList.add("form-group")
    firstDiv.classList.add("col-sm-4")
    let inputText = document.createElement("input")
    inputText.setAttribute("type","text")
    inputText.setAttribute("id",`${namesAndIds[i]}`)
    inputText.setAttribute("name",`${namesAndIds[i]}`)
    inputText.setAttribute("placeholder",`${placeholders[i]}`)
    for (let i in listOfClasses){
        inputText.classList.add(`${listOfClasses[i]}`)
    }
    firstDiv.appendChild(inputText);
    let secondDiv = document.createElement("div")
    secondDiv.classList.add("form-group");
    let secondDivP = document.createElement("p");
    for(let i in pTagClasses){
        secondDivP.classList.add(`${pTagClasses[i]}`)
    }
    let secondDivPNode = document.createTextNode("");
    secondDivP.appendChild(secondDivPNode);
    secondDiv.appendChild(secondDivP);
    firstDiv.appendChild(secondDiv);
    divFormRow.appendChild(firstDiv)
}
//Radio Btns
let divAlt = document.createElement("div")
divAlt.classList.add("form-group")
divAlt.classList.add("col-12")
let genders = ["Male", "Female"]
for(let i in genders){
    let labelRbtn = document.createElement("label");
    labelRbtn.setAttribute("for",`gender`)
    labelRbtn.appendChild(document.createTextNode(`${genders[i]}:`))
    labelRbtn.classList.add("nb-rabio-label");
    divAlt.appendChild(labelRbtn)
    let rbtn = document.createElement("input");
    rbtn.setAttribute("type", "radio")
    rbtn.classList.add("nb-radio")
    rbtn.setAttribute("id", `radio${genders[i]}`)
    rbtn.setAttribute("value", `${genders[i].substring(0,1).toLowerCase()}`)
    rbtn.setAttribute("name","gender");
    rbtn.classList.add("mr-1")
    rbtn.classList.add("ml-1")
    divAlt.appendChild(rbtn);
}
let RbtnP = document.createElement("p")
RbtnP.classList.add("alert")
RbtnP.classList.add("alert-danger")
RbtnP.classList.add("nb-visibility");
RbtnP.appendChild(document.createTextNode(""));
divAlt.appendChild(RbtnP)
divFormRow.appendChild(divAlt)
//Button
let finalDiv = document.createElement("div");
finalDiv.classList.add("form-group")
finalDiv.classList.add("col-12")
finalDiv.classList.add("mb-0") 
let btnP = document.createElement("p");
btnP.classList.add("nb-dispay-none");
btnP.setAttribute("id", "form-sucs")
btnP.appendChild(document.createTextNode(""));
finalDiv.appendChild(btnP);
let btn = document.createElement("button");
btn.classList.add("btn")
btn.classList.add("btn-primary")
btn.classList.add("rounded")
btn.classList.add("w-md")
btn.classList.add("mt-3")
btn.setAttribute("id", "info-btn")
btn.setAttribute("type", "button")
btn.appendChild(document.createTextNode("Send"))
finalDiv.appendChild(btn)
divFormRow.appendChild(finalDiv)
//End of Form Generation

//Start of Form Validation
let nameRegex = /^([A-Z][a-z]{2,19})(\s[A-Z][a-z)]{2,19})?$/;
let phoneRegex = /^\+381\s6[0-9]\s[0-9]{3}\s?[0-9]{4}$/;
let emailRegex = /^([a-z]|[0-9])[a-z0-9\_\-\.]{3,29}[a-z0-9](@gmail.com|@yahoo.com|@outlook.com)$/
let addressRegex = /^(([1-9][0-9]{0,4}\/?\-?\.?)|([A-Z][a-z]{1,19}\.?\-?\/?))(\s[A-Z0-9][a-z\/\-\.0-9]{0,19})(([a-z])|(\s[1-9][0-9]{0,2}\.?)|\s[A-Z]){1,6}$/

let genderArray = document.getElementsByName("gender");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let address = document.querySelector("#address");
// let phone = document.querySelector("#phone");
// phone.setAttribute("value","Lose Uneseno!")
// phone.value= "22"
// phone.classList.remove("text-white")
// phone.classList.add("text-warning")

let infoBtn = document.querySelector("#info-btn");
infoBtn.addEventListener("click",function(){
    let mistakeCount = 0;
    mistakeCount += regexValidation(firstName, nameRegex, "Input Mistake, Example: James Thomas, Middle Names Allowed")
    mistakeCount += regexValidation(lastName, nameRegex, "Input Mistake, Example: Jefferson Blackwater, Double-barrelled names allowed")
    mistakeCount += regexValidation(phone, phoneRegex, "Input Mistake, Example: +381 61 231 6549")
    mistakeCount += addressAndEmail();
    mistakeCount += radioCheck();

    if (mistakeCount == 5){
        document.querySelector("#form-sucs").classList.add("nb-input-success")
        document.querySelector("#form-sucs").innerHTML = "Thank you! Your data has been saved and succesfully."
        document.querySelector("#form-sucs").classList.remove("nb-dispay-none")
        document.querySelector("#news-form").reset();
    }
    else{
        document.querySelector("#form-sucs").classList.remove("nb-input-success")
        document.querySelector("#form-sucs").innerHTML = "";
        document.querySelector("#form-sucs").classList.add("nb-dispay-none")
    }
});
//END OF FORM VALIDATION

//START OF JQUERY SECTION
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 40) {
            $('.nb-title').css('color', '#000');
        } else {
            $('.nb-title').css('color', '#fff');
        }
});
document.querySelector("#close-modal").addEventListener("click", function(e){
    e.preventDefault()
    $("#modal").css("display", "none");
})
document.querySelector("#close-modal-x").addEventListener("click", function(e){
e.preventDefault()
$("#modal").css("display", "none");
})
});
//END OF JQUERY SECTION


function showBooks(books){
    console.log(books);
    let sectionLocation = document.querySelector("#service");
    let authors = retrieveFromLS('authors');
    let genres = retrieveFromLS('genres');
    let types = retrieveFromLS('types');
    let bookList = `<div class="container-fluid m-0 mx-auto">
    <div class="row nb-row-width mx-auto mt-3 mb-3">`;
    for(let book of books){
        bookList += `<div class="col-xl-2 col-lg-3 col-md-4 col-12">
                        <div class="card">
                            <img src="assets/imgs/${book.img}" class="card-img-top" alt="${book.title}"/>
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <ul>`;
        for(let type of types){
            if(book.formats[0].type == type.id){
                bookList += `<li>${type.name}</li>`;
                break;
            }
        }                        
        for(let author of authors){
            if(author.id == book.authorID){
                bookList += `<li>${author.name}</li>`;
                break;
            }
        }
        for(let genre of genres){
            if(genre.id == book.genreID){
                bookList += `<li>${genre.name}</li>`;
                break;
            }
        }
        bookList += `</ul>
                    <p class="card-text">$${book.formats[0].price}</p>
                    </div>
                    <button type="button" id="${book.productID}"class="btn btn-primary nb-get-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More</button>
                    </div>
                    </div>`;
    }
    bookList += `</div></div>`;
    sectionLocation.innerHTML = bookList;
    modalContent();
    // console.log(bookList);
}


function createDDlOptions(ddlID, textForOptionZero, optionsArray){
    let opt0 = document.createElement("option");
    opt0.setAttribute("value", "0");
    let opt0Text = document.createTextNode(textForOptionZero);
    opt0.appendChild(opt0Text);
    ddlID.appendChild(opt0);
    
    for(let member of optionsArray){
        let option = document.createElement("option");
        option.setAttribute("value", `${member.id}`);
        let optionText = document.createTextNode(`${member.name}`);
        option.appendChild(optionText);
        ddlID.appendChild(option);
    }
}


function radioCheck (){
    let checkedValue = "";
    for(let i in genderArray){
        if(genderArray[i].checked){
            checkedValue = genderArray[i].value;
            break;//Iako ima samo dve moguce vrednosti ostavio sam break radi ispravnosti s obzirom da je radioBtn
        }
    }
    if(checkedValue == ""){
        genderArray[0].parentElement.lastElementChild.innerHTML = "Please Select An Option";
        genderArray[0].parentElement.lastElementChild.classList.remove("nb-visibility-hidden")
        return 0;
    }
    else{
        genderArray[0].parentElement.lastElementChild.classList.add("nb-visibility-hidden")
        return 1;
    }
}


function addressAndEmail (){
    if (email.value == "" && address.value == ""){
        email.classList.add("nb-input-mistake")
        email.nextElementSibling.firstElementChild.innerHTML = "Plese enter an address and/or email";
        email.nextElementSibling.firstElementChild.classList.remove("nb-visibility-hidden")
        address.classList.add("nb-input-mistake")
        address.nextElementSibling.firstElementChild.innerHTML = "Plese enter an address and/or email";
        address.nextElementSibling.firstElementChild.classList.remove("nb-visibility-hidden")
        return 0;
    }
    else if(email.value && address.value){
        if (regexValidation(email, emailRegex, "Input Mistake, <br/>Example: stuff2716@gmail.com. Other accepted domains: @yahoo.com and @outlook.com") == 1 &&
        regexValidation(address,addressRegex, "Input Mistake, Example: St. Andrels Church 21. Vallaki Road") == 1){
            return 1;
        }
    }
    else if (email.value){
       if (regexValidation(email, emailRegex, "Input Mistake, <br/>Example: stuff2716@gmail.com. Other accepted domains: @yahoo.com and @outlook.com") == 1){
            address.classList.remove("nb-input-mistake")
            address.nextElementSibling.firstElementChild.classList.add("nb-visibility-hidden")
            return 1;
       }
    }
    else{
        if (regexValidation(address,addressRegex, "Input Mistake, Example: St. Andrels Church 21. Vallaki Road")){
        email.classList.remove("nb-input-mistake")
        email.nextElementSibling.firstElementChild.classList.add("nb-visibility-hidden")
        return 1;
        }
    }
}


function regexValidation(tag, regex, error){
    if(regex.test(tag.value)){
        tag.classList.remove("nb-input-mistake")
        tag.nextElementSibling.firstElementChild.classList.add("nb-visibility-hidden")
        return 1;
    }
    else{
        tag.classList.add("nb-input-mistake")
        tag.nextElementSibling.firstElementChild.innerHTML = error;
        tag.nextElementSibling.firstElementChild.classList.remove("nb-visibility-hidden")
        return 0;
    }
}
{/*
    <div class="modal-dialog modal-dialog-scrollabl" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" id = "close-modal-x"class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
              <button id="close-modal"type="button" class="btn btn-primary" data-dismiss="modal">Add to Cart</button>
            </div>
        </div>
    </div>
 */}
 function modalContent(){
    $(`.nb-get-modal`).click(function(e){
       let productID = $(this).attr('id');
       ajaxCallback("books.json", function(booksArray){
        ajaxCallback("types.json", function(typesArray){
            modalDisplay(productID, typesArray, booksArray)
        })
       })
       e.preventDefault()
       $("#modal").slideDown("slow")
    })
    // $(`.nb-get-modal`).click(function(e){
    //     let movieText = $(this).prev().text();
    //     let movieTitle = $(this).prev().prev().text();
    //     console.log(movieText);
    //     $(".modal-title").text(movieTitle)
    //     $(".modal-body p").text(movieText);
    //     e.preventDefault()
    //     $("#modal").slideDown("slow")
    // })
}
   // let baseModal = document.querySelector("#modal");
    // let modalHTML = `<div class="modal-dialog modal-dialog-scrollabl" role="document">
    //                     <div class="modal-content">
    //                         <div class="modal-header">`;
function modalDisplay(productID, typesArray , booksArray, desiredFormat = 0){
       let desiredArrayIndex;
       let baseModal = document.querySelector("#modal");
       let modalHTML = `<div class="modal-dialog modal-dialog-scrollabl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">`;
    for(let index in booksArray){
        if(booksArray[index].productID == productID){
            desiredArrayIndex = index;
            break;
        }
    }
    modalHTML += `<h5 class="modal-title">${booksArray[desiredArrayIndex].title}</h5>
                    <button type="button" id = "close-modal-x"class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div> 
                <div class="modal-body"><p>${booksArray[desiredArrayIndex].description}</p>`;
   for(let type of typesArray){
        if(booksArray[desiredArrayIndex].formats[desiredFormat].type == type.id){
            modalHTML += `<h6>${type.name}</h6>`;
            break;
        }
    } 
    if(booksArray[desiredArrayIndex].formats.length != 0){
        modalHTML += `<div class="modal-body"><ul id="modal-ul">`;
        for(let detail of booksArray[desiredArrayIndex].formats[desiredFormat].details){
            modalHTML += `<li>${detail.name}: ${detail.value}</li>`
        }
        modalHTML += `</ul></div>`
    }
    for(let formatIndex in booksArray[desiredArrayIndex].formats){
        for(let type of typesArray){
            if(booksArray[desiredArrayIndex].formats[formatIndex].type == type.id){
                modalHTML += `<a href="javascript:void(0)" class="btn btn-info nb-type" id="${formatIndex}">${type.name}</a> `
            }
        }
    }
    modalHTML += `</div>
    <div class="modal-footer">
              <button id="close-modal"type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>`;
    baseModal.innerHTML = modalHTML;
    
    //ADD BUTTON FUCTIONS
    document.querySelector("#close-modal").addEventListener("click", function(e){
        e.preventDefault()
        $("#modal").css("display", "none");
    })
    document.querySelector("#close-modal-x").addEventListener("click", function(e){
    e.preventDefault()
    $("#modal").css("display", "none");
    });
    $('.nb-type').click(function(){
        let indexOfDesiredFormat = $(this).attr("id");
        modalDisplay(productID, typesArray , booksArray, indexOfDesiredFormat)
    })
    // let btnInfo = document.querySelectorAll(".nb-type");
    // btnInfo.forEach(function(btn){
    //     btn.addEventListener("click", function(){
            
    //         modalDisplay(productID, typesArray , booksArray)
    //     })
    // })
    // console.log(productID);
}

function IntoLS(data, storageName){
    localStorage.setItem(storageName, JSON.stringify(data));
}
function retrieveFromLS(name){
    return JSON.parse(localStorage.getItem(name));
}
function ajaxCallback(file, doThis){
    $.ajax({
        url: "assets/data/" + file,
        method: "get",
        dataType: "json",
        success: function(rezult){
            doThis(rezult);
        },
        error: function(jqXHR, exception){
            var err_msg = '';
            if (jqXHR.status === 0) {
            err_msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
            err_msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
            err_msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
            err_msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
            err_msg = 'Time out error.';
            } else if (exception === 'abort') {
            err_msg = 'Ajax request aborted.';
            } else {
            err_msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            let writeError = document.querySelector("#ajax-error").innerHTML = err_msg;
            writeError.classList.remove("nb-visibility-hidden")
        }
    })
}
function sortBooks(books, desiredSort){
    let sortedArray = [];
    sortedArray = books.sort(function(a, b){
        if (desiredSort == "Title A-Z"){
            if(a.title > b.title){
                return 1;
            }
            else if(a.title < b.title){
                return -1;
            }
            else{
                return 0;
            }
        }
        if(desiredSort == "Title Z-A"){
            if(a.title > b.title){
                return -1;
            }
            else if(a.title < b.title){
                return 1;
            }
            else{
                return 0;
            }
        }
        if(desiredSort == "Price ASC"){
            return parseFloat(a.formats[0].price) - parseFloat(b.formats[0].price);
        }
        if (desiredSort == "Price DESC"){
            return parseFloat(b.formats[0].price) - parseFloat(a.formats[0].price);
        }
        if(desiredSort == "Author"){
            return b.authorID - a.authorID;
        }
    }
)
return sortedArray;
}