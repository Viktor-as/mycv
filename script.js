

function page0() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="home" id="home">
    <img src="img/web-dev.jpg" alt="" class="home-img">
    <h1>Viktoras Šimkevičius</h1>
    <p style="width: 40vw; text-align: center;">Sveiki, šiuo metu ieškau Full-Stack Developer arba Front-End Developer darbo pozicijos, nes noriu savo ilgametį hobį paversti pagrindine veikla.</p>
    <a href="#portfolio"><i class="arrow down"></i></a> 
</section>
<section class="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <div class="portfolio-items-container">
            <div onclick="page1()" class="portfolio-item">
                <img class="portfolio-img" src="img/portfolio/portfolio6.jpg" alt="">
                <p class="coming-soon">coming soon</p>
                <div class="tags">
                    <p class="tag">React</p>
                    <p class="tag">JS</p>
                    <p class="tag">HTML / CSS</p>
                </div>
                <h3>React projektas</h3>
                <p class="portfolio-short-description">Šiuo metu mokausi „React“ biblioteką. Baigęs kursus pradėsiu kurtu „React“ projektus, kuriuos čia ir įkelsiu. Pirmas mano planuojamas projektas...</p>
                <div class="portfolio-more">
                    <p >Plačiau...</p>
                </div> 
            </div>
            <div onclick="page2()" class="portfolio-item">
                <img class="portfolio-img" src="img/portfolio/portfolio5.jpg" alt="">
                <div class="tags">
                    <p class="tag">JS</p>
                    <p class="tag">HTML / CSS</p>
                </div>
                <h3>CV svetainė</h3>
                <p class="portfolio-short-description">Kuriant šią svetainę svarbiausia buvo paprastumas ir informacijos pateikimo aiškumas...</p>
                <div class="portfolio-more">
                    <p >Plačiau...</p>
                </div>
            </div>
            <!-- <div onclick="page3()" class="portfolio-item">
                <img class="portfolio-img" src="img/portfolio/portfolio1.jpg" alt="">
                <div class="tags">
                    <p class="tag">Angular</p>
                    <p class="tag">JS</p>
                    <p class="tag">HTML / CSS</p>
                </div>
                <h3>Darbų registravimo sistema</h3>
                <p class="portfolio-short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe corrupti nesciunt tempora ipsam praesentium neque odio consequatur velit in.</p>
                <div class="portfolio-more">
                    <p >Plačiau...</p>
                </div>
            </div> -->
            <div onclick="page4()" class="portfolio-item">
                <img class="portfolio-img" src="img/portfolio/portfolio2.jpg" alt="">
                <div class="tags">
                    <p class="tag">JS</p>
                    <p class="tag">HTML / CSS</p>
                </div>
                <h3>Bandomoji svetainė</h3>
                <p class="portfolio-short-description">Tai pirmoji bandomoji svetainė panaudojant HTML, CSS ir JS žinias. Didžiausias dėmesys buvo skirtas išbandyti CSS animacijas „transform“ su „transition“.</p>
                <div class="portfolio-more">
                    <p >Plačiau...</p>
                </div>
            </div>
            <div onclick="page5()" class="portfolio-item">
                <img class="portfolio-img" src="img/portfolio/portfolio3.jpg" alt="">
                <div class="tags">
                    <p class="tag">PHP</p>
                    <p class="tag">Wordpress</p>
                </div>
                <h3>Svetainė su papildomu PHP funkcionalumu</h3>
                <p class="portfolio-short-description">Klientei kurta Wordpress svetainė su papildomu PHP funkcionalumu. Užduotis buvo...</p>
                <div class="portfolio-more">
                    <p >Plačiau...</p>
                </div>
            </div>
            <div onclick="page6()" class="portfolio-item">
                <img class="portfolio-img" src="img/portfolio/portfolio4.jpg" alt="">
                <div class="tags">
                    <p class="tag">Wordpress</p>
                    <p class="tag">CSS</p>
                </div>
                <h3>Wordpress svetainių pavyzdžiai</h3>
                <p class="portfolio-short-description">Svetainė kurta su Wordpress, joje pateikiami klientams kurtų internetinių svetainių pavyzdžiai...</p>
                <div class="portfolio-more">
                    <p >Plačiau...</p>
                </div>
            </div>
    </div>
</section>
<section class="experience" id="experience">
    <h1>Patirtis</h1>
    <ul class="timeline">
        <!--timeline item-->
        <li class="event">
            <h4>“JavaScript from Scratch” kursai</h4>
            <h5>
                <span class="date">2020.11 – 2021.08</span>
                <span class="company">„UAB Akademia SDA“</span>
            </h5>
            <p>
                <ul class="listas">
                    <li>Basics of HTML and CSS, Preprocessors in CSS, Frameworks CSS and RWD, advanced features of HTML and CSS;</li>
                    <li>Basics of programming, Basics of working with designs, Structural programming in JavaScript, Object oriented programming in JavaScript, Advanced elements of JavaScript, JavaScript Frameworks;</li>
                    <li>Design patterns & Good practices, Differences between frontend and backend, CMS, Development tools, Testing</li>
                    <li>Final project with Angular framework – a website where you can register failures and then update the status from “open” to “the fault is being handled” or “solved”. Website also has login feature with token based
                        authentication, content is shown based on user role and administrators can add new users.</li>
                    <p><a class="link" href="https://app.diplomasafe.com/en-US/diploma/dc55a6311257e1d1052cd9eece1980086a19b6343">Sertifikato nuoroda</a></p>
                </ul>
            </p>
        </li>
        <!--timeline item-->
        <li class="event">
            <h4>38 valandų PHP kursai „PHP for Beginners - CMS Project“</h4>
            <h5>
                <span class="date">2020.10</span>
                <span class="company">Udemy.com</span>
            </h5>
            <p>Panaudojęs šių kursų metu išmoktus dalykus suprogramavau:</p>
            <ul class="listas">
                <li>„Wishlist“ funkcionalumą renginių svetainėje.</li>
                <li>Automatinį email siuntimą apie artėjančius renginius, kurie pridėti į „Wishlist“.</li>
                <li>Padelio žaidėjų reitingų lentelę su galimybe atnaujinti reitingus įkeliant CSV failą į svetainę.</li>
            </ul>
        </li>

        <!--timeline item-->
        <li class="event">
            <h4>Individuali veikla: Internetinių svetainių kūrimas su Wordpress TVS</h4>
            <h5>
                <span class="date">2017.12 – Dabar</span>
                <span class="company">Individuali veikla</span>
            </h5>
            <p>Laisvalaikiu mažoms įmonėms kuriu internetines svetaines pagal individualią veiklą. Mano svetainė <a class="link" href="https://internetiniusvetainiukurimas.lt/">https://internetiniusvetainiukurimas.lt/</a></p>
        </li>

        <!--timeline item-->
        <li class="event">
            <h4>Rinkodaros specialistas</h4>
            <h5>
                <span class="date">2017.04 – 2022.05</span>
                <span class="company">„Atostogų parkas“, Kretingos r., Lietuva.</span>
            </h5>
            <ul class="listas">
                <li>Komandos formavimas, darbuotojų atrinkimas darbo pokalbių metu, vadovavimas komandai, darbų paskirstymas;</li>
                <li>Adwords kampanijų rengimas ir optimizavimas;</li>
                <li>Atostoguparkas.lt ir naturatermospa.com svetainių priežiūra. Naujos internetinės svetainės palangospadelis.lt kūrimas, Google Analytics ataskaitų rengimas. Naujų IT sistemų analizė ir derinimas;</li>
                <li>Atsakomybė už visą įmonės skleidžiamą reklamą, jos teisingumą, terminus, platinimą, darbuotojų informavimą ir atsakomybės bei darbų paskirstymą;</li>
                <li>Rinkodarinių planų ruošimas ir įgyvendinimas: nuo rinkos analizės iki plano įvykdymo, stebėjimo ir ataskaitų ruošimo;</li>
                <li>Darbas su maketavimo ir vaizdo kūrimo programomis: Adobe Photoshop, Illustrator, After Effect ir Premiere PRO;</li>
                <li>Įmonės socialinių tinklų valdymas: priežiūra, reklama, konkursai ir sekėjų didinimas; </li>
                <li>Dalyvavimas parodose: registracija ir dokumentų tvarkymas, vietos išrinkimas, stendo parengimas, visų reklaminių ir informacinių lankstinukų paruošimas, įmonės reprezentavimas parodos metu, ataskaitos ruošimas;</li>
            </ul>
        </li>

        <!--timeline item-->
        <li class="event">
            <h4>Rinkodaros specialistas</h4>
            <h5>
                <span class="date">2016.01 – 2017.02</span>
                <span class="company">„VIA UNICA“, Panevėžys, Lietuva</span>
            </h5>
            <ul class="listas">
                <li>Atsakomybė už visą įmonės skleidžiamą reklamą, jos teisingumą, terminus, platinimą, darbuotojų informavimą.</li>
                <li>Rinkodarinių idėjų generavimas ir įgyvendinimas: nuo informacijos rengimo ir apipavidalinimo iki pateikimo visuomenei ir rezultatų stebėjimo;</li>
                <li>Darbas maketavimo ir video kūrimo programomis: Adobe Photoshop, Illustrator, After Effect ir Coreldraw;</li>
                <li>Įmonės socialinių tinklų valdymas: priežiūra, reklama, konkursai ir sekėjų didinimas; </li>
                <li>Dalyvavimas parodose: registracija ir dokumentų tvarkymas, vietos išrinkimas, stendo parengimas, visų reklaminių ir informacinių lankstinukų paruošimas, įmonės reprezentavimas parodos metu, ataskaitos ruošimas;</li>
                <li>Naujų reklamavimosi galimybių paieška, geriausių variantų analizė, derinimas ir įgyvendinimas; </li>
                <li>Žaidimų, konkursų, renginių organizavimas ir įgyvendinimas, ataskaitų rengimas;</li>
                <li>Naujos internetinės svetainės kūrimas, SEO galimybių analizė, Google Analytics ataskaitų rengimas.</li>
            </ul>
        </li>
    </ul>    
</section>
<section class="about" id="about">
    <h1>Apie mane</h1>
    <div class="about-info">
        <h3>Sveiki, trumpai papasakosiu apie save...</h3>
        <p class="justify">Pastaruosius metus lankiau 9 mėnesių “JavaScript from Scratch” kursus SDA akademijoje ir toliau mokausi programavimo savarankiškai. Šiuo metu gilinuosi į "React" biblioteką. Taip pat jau daug metų laisvalaikiu kuriu internetines svetaines įvairioms įmonėms. Tikiu, kad jau turiu reikiamus pagrindus reikalingus šiai specialybei. Greitai mokausi ir įsisavinu naują informaciją, tad jei dar ir trūksta kokių žinių - tai ne problema.</p>
        <h3 class="spacer">Programavimo įgūdžiai</h3>
        <div class="tags">
            <p class="tag">React</p>
            <p class="tag">JS</p>
            <p class="tag">GIT</p>
            <p class="tag">PHP</p>
            <p class="tag">MYSQL</p>
            <p class="tag">HTML</p>
            <p class="tag">CSS</p>
        </div>
        <h3 class="spacer">Dizaino įgūdžiai</h3>
        <div class="tags">
            <p class="tag">PHOTOSHOP</p>
            <p class="tag">ILLUSTRATOR</p>
            <p class="tag">PREMIERE PRO</p>
        </div>
        <h3 class="spacer">Išsilavinimas</h3>
        <ul class="timeline mt20">
            <!--timeline item-->
            <li class="event">
                <h4>Ekonomikos bakalauras</h4>
                <h5>
                    <span class="date">2010.09 – 2014.06</span>
                    <span class="company">Vilniaus Universitetas, Kauno Humanitarinis Fakultetas</span>
                </h5>
            </li>

            <!--timeline item-->
            <li class="event">
                <h4>Vidurinis išsilavinimas</h4>
                <h5>
                    <span class="date">2006.09 – 2010.06</span>
                    <span class="company">Telšių Žemaitės gimnazija</span>
                </h5>
            </li>
        </ul>
        <h3>Kalbos</h3>   
        <div class="tags">
            <p class="tag">Lietuvių</p>
            <p class="tag">Anglų</p>
            <p class="tag">Vokiečių</p>
        </div> 
        <h3 class="spacer">Papildoma informacija</h3>
        <p>Vairuotojo pažymėjimas, B kategorija nuo 2010 m. Nuosavas automobilis.</p>
        <h3 class="spacer">Pomėgiai</h3>
        <p>Mėgstu sportą, žaidžiu tinklinį, padelį ir krepšinį. Domiuosi informacinėmis technologijomis, sveika gyvensena, skrydžių į kosmosą naujovėmis. Groju gitara.</p>
    </div>
</section>
<section class="contacts" id="contact">
    <h1>Kontaktai</h1>
    <div>
        <h3>Jei turite papildomų klausimų ar pasiūlymų – susisiekite su manimi.</h3>
        <div class="contact-line mt20">
            <a href="tel:+37062469512">
                <p>+370 624 69512</p>
            </a>
        </div>
        <div class="contact-line mt10">
            <a href="mailto:simkevicius.viktoras@gmail.com">
                <p>simkevicius.viktoras@gmail.com</p>
            </a>
        </div>
        <div class="contact-line mt20">
            <a href="https://www.linkedin.com/in/viktoras-%C5%A1imkevi%C4%8Dius-7693a944/">
                <img src="img/svg/linkedin.svg" alt="" class="contact-svg">
            </a>
            <a href="https://github.com/Vikizz">
                <img src="img/svg/github.svg" alt="" class="contact-svg">
            </a>
        </div>
        
    </div>
</section>
    `
}
function page1() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="project-container">
        <div class="project-info">
            <a href="#portfolio" onClick="page0()">
                <div class="back-button" >
                    <i class="arrow left"></i>
                    <p><b>Atgal</b></b></p>
                </div>
            </a>
            <div class="project-description">
                <h1 class="spacer">React projektas</h1>
                <p>Šiuo metu mokausi „React“ biblioteką. Baigęs kursus pradėsiu kurtu „React“ projektus, kuriuos čia ir įkelsiu. Pirmas mano planuojamas projektas – tai problemos sprendimas su kuria dažnai susiduriu. Susirinkus žaisti tinklinį sunku pasiskirstyti komandomis atsitiktiniu būdu. Tad mano pirmas projektas įvedus žaidėjų vardus turėtų suskirstyti žaidėjus į komandas atsitiktiniu būdu pirmam žaidimui. Antram žaidimui turėtų parinkti naujas komandas, kad komandose nariai nesikartotų iš pirmo žaidimo. </p>
                <h3 class="spacer">Naudotos programavimo kalbos</h3>
                <div class="tags">
                    <p class="tag">React</p>
                    <p class="tag">JS</p>
                    <p class="tag">HTML / CSS</p>
                </div>
                <!-- <a href="#" target="_blank">
                    <div class="github-link spacer">
                        <img src="../img/svg/github.svg" alt="" class="contact-svg">
                        <p class="link">Projekto failai</p>
                    </div>
                </a>
                <a href="#" target="_blank">
                    <div class="github-link mt20">
                        <img src="../img/svg/live.svg" alt="" class="contact-svg">
                        <p class="link">Projekto peržiūra</p>
                    </div>
                </a> -->
            </div>
        </div>
        <div class="project-photo">
            <img class="project-img" src="../img/portfolio/react.jpg" alt="">
        </div>
    </section>
    `
}
function page2() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="project-container">
    <div class="project-info">
        <a href="#portfolio" onClick="page0()">
            <div class="back-button" >
                <i class="arrow left"></i>
                <p><b>Atgal</b></b></p>
            </div>
        </a>
        <div class="project-description">
            <h1 class="spacer">CV svetainė</h1>
            <p>Kuriant šią svetainę svarbiausia buvo paprastumas ir informacijos pateikimo aiškumas. Daugiausia naudota HTML ir CSS, o navigacija tarp darbų pavyzdžių („Portfolio“) atlikta naudojant JavaScript programavimo kalbą.</p>
            <h3 class="spacer">Naudotos programavimo kalbos</h3>
            <div class="tags">
                <p class="tag">JS</p>
                <p class="tag">HTML / CSS</p>
            </div>
            <a href="https://github.com/Viktor-as/mycv" target="_blank">
                <div class="github-link spacer">
                    <img src="../img/svg/github.svg" alt="" class="contact-svg">
                    <p class="link">Projekto failai</p>
                </div>
            </a>
            <a href="https://viktoras.info/" target="_blank">
                <div class="github-link mt20">
                    <img src="../img/svg/live.svg" alt="" class="contact-svg">
                    <p class="link">Projekto peržiūra</p>
                </div>
            </a>
        </div>
    </div>
    <div class="project-photo">
        <img class="project-img" src="../img/portfolio/portfolio5.jpg" alt="">
    </div>
</section>
    `
}

// Page3 angular projektas
function page3() {
    const content = document.getElementById("content");
    content.innerHTML = `

    `
}

function page4() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="project-container">
    <div class="project-info">
        <a href="#portfolio" onClick="page0()">
            <div class="back-button" >
                <i class="arrow left"></i>
                <p><b>Atgal</b></b></p>
            </div>
        </a>
        <div class="project-description">
            <h1 class="spacer">Bandomoji svetainė</h1>
            <p>Tai pirmoji bandomoji svetainė panaudojant HTML, CSS ir JS žinias. Didžiausias dėmesys buvo skirtas išbandyti CSS animacijas „transform“ su „transition“. JavaSript naudotas klasėms pridėti tam tikrais laiko intervalais arba paspaudimo metu.</p>
            <h3 class="spacer">Naudotos programavimo kalbos</h3>
            <div class="tags">
                <p class="tag">JS</p>
                <p class="tag">HTML / CSS</p>
            </div>
            <a href="https://github.com/Viktor-as/food-website" target="_blank">
                <div class="github-link spacer">
                    <img src="../img/svg/github.svg" alt="" class="contact-svg">
                    <p class="link">Projekto failai</p>
                </div>
            </a>
            <a href="http://food.internetiniusvetainiukurimas.lt/" target="_blank">
                <div class="github-link mt20">
                    <img src="../img/svg/live.svg" alt="" class="contact-svg">
                    <p class="link">Projekto peržiūra</p>
                </div>
            </a>
        </div>
    </div>
    <div class="project-photo">
        <img class="project-img" src="../img/portfolio/portfolio_full_2.jpg" alt="">
    </div>
</section>
    `
}

function page5() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="project-container">
    <div class="project-info">
        <a href="#portfolio" onClick="page0()">
            <div class="back-button" >
                <i class="arrow left"></i>
                <p><b>Atgal</b></b></p>
            </div>
        </a>
        <div class="project-description">
            <h1 class="spacer">Svetainė su papildomu PHP funkcionalumu</h1>
            <p class="mt10">Klientei kurta Wordpress svetainė su papildomu PHP funkcionalumu. </p>
            <p class="mt10">Užduotis: sukurti renginių svetainę, kur renginius vartotojas galėtų pridėti į „Wishlist“. Pridėtiems renginiams į „Wishlist“ taip pat galėtų aktyvuoti priminimą – dieną prieš renginio pradžią gautų el. laišką apie renginį. </p>
            <p class="mt10">Kadangi tuo metu mokiausi PHP, o JavaScript dar nebuvau net pradėjęs – funkcionalumą sukūriau su PHP ir MySQL duomenų bazės pagalba.  Duomenų bazėje fiksavau koks vartotojas kokius renginius yra pamėgęs, ar aktyvavęs renginių priminimą. Serveryje aktyvavau CRON darbą, kuris paleisdavo mano kodą kiekvieną dieną ryte. Kodas tikrindavo ar ryt vyks kokie renginiai, ar yra žmonių kurie aktyvavo priminimą tam renginiu, jei taip – informaciją apie tą renginį išsiųsdavo tam asmeniui jo nurodytu el. paštu.</p>
            <h3 class="spacer">Naudotos programavimo kalbos</h3>
            <div class="tags">
                <p class="tag">PHP</p>
                <p class="tag">HTML / CSS</p>
            </div>
            <a href="https://github.com/Viktor-as/lecture" target="_blank">
                <div class="github-link spacer">
                    <img src="../img/svg/github.svg" alt="" class="contact-svg">
                    <p class="link">Projekto failai</p>
                </div>
            </a>
            <a href="https://lecture.internetiniusvetainiukurimas.lt/" target="_blank">
                <div class="github-link mt20">
                    <img src="../img/svg/live.svg" alt="" class="contact-svg">
                    <p class="link">Projekto peržiūra</p>
                </div>
            </a>
        </div>
    </div>
    <div class="project-photo">
        <img class="project-img" src="../img/portfolio/portfolio_full_3.jpg" alt="">
    </div>
</section>
    `
}

function page6() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="project-container">
    <div class="project-info">
        <a href="#portfolio" onClick="page0()">
            <div class="back-button" >
                <i class="arrow left"></i>
                <p><b>Atgal</b></b></p>
            </div>
        </a>
        <div class="project-description">
            <h1 class="spacer">Wordpress svetainių pavyzdžiai</h1>
            <p class="mt10">Svetainė kurta su Wordpress, joje pateikiami klientams kurtų internetinių svetainių pavyzdžiai. Dirbant su Wordpress teko naudoti daug CSS darant dizainų adaptacijas. </p>
            <h3 class="spacer">Naudotos programavimo kalbos</h3>
            <div class="tags">
                <p class="tag">Wordpress</p>
                <p class="tag">CSS</p>
            </div>
            <!-- <a href="#" target="_blank">
                <div class="github-link spacer">
                    <img src="../img/svg/github.svg" alt="" class="contact-svg">
                    <p class="link">Projekto failai</p>
                </div>
            </a> -->
            <a href="https://internetiniusvetainiukurimas.lt/" target="_blank">
                <div class="github-link mt20 spacer">
                    <img src="../img/svg/live.svg" alt="" class="contact-svg">
                    <p class="link">Projekto peržiūra</p>
                </div>
            </a>
        </div>
    </div>
    <div class="project-photo">
        <img class="project-img" src="../img/portfolio/portfolio_full_4.jpg" alt="">
    </div>
</section>
    `
}


document.addEventListener("DOMContentLoaded", function(){
    page0()
});


