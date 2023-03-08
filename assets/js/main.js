//https://www.free-css.com/free-css-templates/page282/leadmark
console.log(window.location.href);
let navigationLocation = document.querySelector("#nb-navigation");
let navigationDefault = `<div class="container">
<a class="navbar-brand" href="#">
    <h1 class="title nb-title navbar-fixed-top.scrolled">Movie<span class="nb-span">Buffs</span></h1>  
</a>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">`;
let navigationList = ["recomended", "about", "events", "contact"];
let navigationText = ["Redomendations", "About Us", "Upcoming Events", "Contact"]

for(let i in navigationList){
    navigationDefault += `<li class="nav-item">
    <a class="nav-link" href="#${navigationList[i]}">${navigationText[i]}</a>
</li>`
}
navigationDefault += `<li class="nav-item">
<a href="Dokumentacija.pdf" class="ml-4 nav-link btn btn-primary btn-sm rounded">Documentation</a>
</li>
</ul>
</div>
</div>`
navigationLocation.innerHTML = navigationDefault

let sectionLocation = document.querySelector("#service");//lokacija filmova
    //Start of Pre-filter content
let movieText = [`Legendary marshal Wyatt Earp, now a weary gunfighter, joins his brothers Morgan and Virgil to pursue their collective fortune in the thriving mining town of Tombstone. But Earp is forced to don a badge again and get help from 				
his notorious pal Doc Holliday when a gang of renegade brigands and rustlers begins terrorizing the town.`, `During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet.
When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when 
the alien parasite planted inside its unfortunate host is birthed.`, `Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.`, 
`Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When 
organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps 
in to take care of the would-be killers, launching a campaign of bloody revenge.`, `While the Civil War rages between the Union and the Confederacy, three men a quiet loner, a 
ruthless hit man and a Mexican bandit comb the American Southwest in search of a strongbox containing $200,000 in 
stolen gold.`, `Eight-year-old Kevin McCallister makes the most of the situation after his family unwittingly leaves him 
behind when they go on Christmas vacation. But when a pair of bungling burglars set their sights on Kevin's house, the 
plucky kid stands ready to defend his territory. By planting booby traps galore, adorably mischievous Kevin stands his 
ground as his frantic mother attempts to race home before Christmas Day`, `Truman Burbank is the star of "The Truman Show", a 24-hour-a-day "reality" TV show that broadcasts every 
aspect of his life -- live and in color -- without his knowledge. His entire life has been an unending soap opera for 
consumption by the rest of the world. And everyone he knows -- including his wife and his best friend -- is really an 
actor, paid to be part of his life.`, ` A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature 
don't apply.`, `The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood 
gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.
`, `King Arthur, accompanied by his squire, recruits his Knights of the Round Table, including Sir Bedevere the 
Wise, Sir Lancelot the Brave, Sir Robin the Not-Quite-So-Brave-As-Sir-Lancelot and Sir Galahad the Pure. On the way, 
Arthur battles the Black Knight who, despite having had all his limbs chopped off, insists he can still fight. They 
reach Camelot, but Arthur decides not to enter, as "it is a silly place".`, `Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried 
secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find 
Rick Deckard, a former LAPD blade runner who has been missing for 30 years.` , `A rare mutation has occurred within the vampire community - The Reaper. A vampire so consumed with an insatiable 
bloodlust that they prey on vampires as well as humans, transforming victims who are unlucky enough to survive into 
Reapers themselves. Blade is asked by the Vampire Nation for his help in preventing a nightmare plague that would wipe 
out both humans and vampires.`, `NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes 
after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the 
LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.`, `Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the 
people it kills.`, `A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow 
recruits from their brutal boot camp training to the bloody street fighting in Hue.`, `When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in 
the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug who's supposed to be 
tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to 
the church on time.`, `Jeffrey "The Dude" Lebowski, a Los Angeles slacker who only wants to bowl and drink White Russians, 
is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange 
series of events involving nihilists, film producers, ferrets, errant toes, and large sums of money.` , `When an evil doctor finds out Uncle Fester has been missing for 25 years, he introduces a fake Fester 
in an attempt to get the Addams family's money. Wednesday has some doubts about the new uncle Fester, but the fake uncle 
adapts very well to the strange family.`]

let movieGenres = ["story", "horror", "story", "story", "action", "comedy", "comedy", "horror", "story", "comedy", 
"action", "action", "action", "horror", "action", "comedy", "comedy", "comedy"]

//console.log(movieGenres.length);

let movieTitles = ["Tombstone", "Alien (1979)", "Hateful Eight", "The God Father", "The Good, Bad and the Ugly", "Home Alone", "Truman Show", "Annihilation", "Goodfellas", 
"Monthy Python: The Holy Grail", "Bladerunner 2049", "Blade (1998)", "Die Hard", "The Thing", "Full Metal Jacket", "The Hangover", "The Big Lebowski", "The Addams Family"];

//console.log(movieTitles.length);

let moviePosters = ["tombstone-poster", "alien-poster", "hateful-eight-poster", "godfather-poster", "good-bad-ugly-poster", "home-alone-poster", "truman-show-poster", 
"annihilation-poster", "goodfellas-poster", "holy-grail-poster", "bladerunner-poster", "blade-poster", "die-hard-poster", "the-thing-poster", "full-metal-jacket-poster", 
"hangover-poster", "big-lebowski-poster", "addams-family-poster"];

let movieList = `<div class="container-fluid m-0 mx-auto">
                    <div class="row nb-row-width mx-auto mt-3 mb-3">`;

for(let i in movieTitles){
        movieList += `<div class="col-xl-2 col-lg-3 col-md-4 col-12">
                        <div class="card">
                            <img src="assets/imgs/${moviePosters[i]}.jpg" class="card-img-top" alt="${moviePosters[i]}"/>
                            <div class="card-body">
                                <h5 class="card-title">${movieTitles[i]}</h5>
                                <p class="nb-visibility-hidden">${movieText[i]}</p>
                                <button type="button" id="${i}"class="btn btn-primary nb-get-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More</button>
                            </div>
                        </div>
                    </div>`
}
movieList +=`</div></div>`;
sectionLocation.innerHTML = movieList;
modalContent()
//End of Pre-filter content

//Osnovni ddlGenres
let ddlGenres = document.querySelector("#ddlGenres");
let opt0 = document.createElement("option");
opt0.setAttribute("value", "0");
let opt0Text = document.createTextNode("Choose Genre");
opt0.appendChild(opt0Text);
ddlGenres.appendChild(opt0);

//Dinamicki ispis ddl-a
let uniqueGenres = ["horror", "story", "comedy", "action"];
for(let i in uniqueGenres){
    let option = document.createElement("option");
    option.setAttribute("value", uniqueGenres[i]);
    let optionText = document.createTextNode(`${uniqueGenres[i].substring(0,1).toUpperCase()}${uniqueGenres[i].substring(1,(uniqueGenres[i].length)+1)}`)
    option.appendChild(optionText);
    ddlGenres.appendChild(option);
}
//Dodatak Random("Pick for me") opcije
let optRand = document.createElement("option");
optRand.setAttribute("value", "random");
let optRandText = document.createTextNode("Pick for me");
optRand.appendChild(optRandText);
ddlGenres.appendChild(optRand);



//Start of filtering content

let btnFilter = document.querySelector("#filterBtn");
filterBtn.addEventListener("click", function(){
    // let newMovieList = []
    // let newMoviePosters = []
    let selectedGenre = ddlGenres.options[ddlGenres.selectedIndex].value;
    console.log(selectedGenre);
    movieList = `<div class="container-fluid m-0 mx-auto">
                    <div class="row nb-row-width mx-auto mt-3 mb-3">`;
    //START OF DEFAULT
    if(selectedGenre == "0"){
        for(let i in movieTitles){
            movieList += `<div class="col-xl-2 col-lg-3 col-md-4 col-12">
                            <div class="card">
                                <img src="assets/imgs/${moviePosters[i]}.jpg" class="card-img-top" alt="${moviePosters[i]}"/>
                                <div class="card-body">
                                    <h5 class="card-title">${movieTitles[i]}</h5>
                                    <p class = "nb-visibility-hidden">${movieText[i]}</p>
                                    <button type="button" class="btn btn-primary nb-get-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More</button>
                                </div>
                            </div>
                        </div>`
    }
    movieList +=`</div></div>`;
    sectionLocation.innerHTML = movieList;
    }
//END OF DEFAULT
//START OF RANDOM
    else if(selectedGenre == "random"){
        let randomIndex = parseInt(Math.floor(Math.random()*(movieTitles.length)))//+1 je nepotrebno zbog toga sto indeksiranje pocinje od 0.
        console.log(randomIndex);
        movieList += `<div class="col-xl-2 col-lg-3 col-md-4 col-12">
        <div class="card">
            <img src="assets/imgs/${moviePosters[randomIndex]}.jpg" class="card-img-top" alt="${moviePosters[randomIndex]}"/>
            <div class="card-body">
                <h5 class="card-title">${movieTitles[randomIndex]}</h5>
                <p class = "nb-visibility-hidden">${movieText[randomIndex]}</p>
                <button type="button" class="btn btn-primary nb-get-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More</button>
            </div>
        </div>
    </div`
    movieList +=`</div></div>`;
    sectionLocation.innerHTML = movieList;
    }
//END OF RANDOM
//START OF FILTERING
    else{
        for(let i in movieTitles){
            if(movieGenres[i] == selectedGenre){//Filterovanje po izabranoj zanri
                console.log(5);
                movieList += `<div class="col-xl-2 col-lg-3 col-md-4 col-12">
                <div class="card">
                    <img src="assets/imgs/${moviePosters[i]}.jpg" class="card-img-top" alt="${moviePosters[i]}"/>
                    <div class="card-body">
                        <h5 class="card-title">${movieTitles[i]}</h5>
                        <p class = "nb-visibility-hidden">${movieText[i]}</p>
                        <button type="button" class="btn btn-primary nb-get-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More</button>
                    </div>
                </div>
            </div>`
            }
        }
        movieList +=`</div></div>`;
    sectionLocation.innerHTML = movieList;
    }
//END OF FILTERING
modalContent()
})
//End of filtering content

//Start of Timer
let targetDate= new Date ("Dec 29, 2022 16:30:00").getTime();
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
function modalContent(){
    $(`.nb-get-modal`).click(function(e){
        let movieText = $(this).prev().text();
        let movieTitle = $(this).prev().prev().text();
        console.log(movieText);
        $(".modal-title").text(movieTitle)
        $(".modal-body p").text(movieText);
        e.preventDefault()
        $("#modal").slideDown("slow")
    })
}




