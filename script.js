$(function () {
    $(document).scroll(function () {
        var $nav = $(".bar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
        var $logo = $(".logo");
        $logo.toggleClass('scrolled', $(this).scrollTop() > 0);
        var $selected = $(".selected");
        $selected.toggleClass('scrolled', $(this).scrollTop() > 0);

        var tabs = document.getElementsByClassName("tab");
        for (i = 0; i < tabs.length; i++) {
            var tab = tabs[i];
            var link = tab.getElementsByTagName('a')[0];
            if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                if (link.style.backgroundColor != "#44d5b9") {
                    link.style.color = "white";
                }
            } else {
                link.style.color = "black";
            }
        }
    });
});


const projects = [
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/Art.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortArt.png",
        "topImage": "/Users/brynnemittleider/Orientation_Website/Top_Images/topArt.png",
        "title": "Digital Art Rules",
        "language": "Javascript",
        "difficulty": "Beginner",
        "platform": "p5.js Online Editor",
        "description": "Are you an artist or designer who is interested in exploring code? Or maybe you have some experience with code and want to explore creative processes. Or perhaps you want to explore both! Either way, this project is for you! Over two activities, we will learn the basics of p5.js by creating a piece of digital art. Along the way, you will practice using the design process and get to know a range of Black and African American women and female-identifying designers and artists.",
        "category": "top",
        "lesson": `<iframe src="/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Digital-Art-Rules.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Digital-Art-Rules.pdf",
        "exampleLink": "/Users/brynnemittleider/Orientation_Website/Long_Images/Art.png",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/Chatbox.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortChatbox.png",
        "topImage": "/Users/brynnemittleider/Orientation_Website/Top_Images/topChatbox.png",
        "title": "Can I Help You? Chatbox",
        "language": "Python",
        "difficulty": "Beginner",
        "platform": "Trinket",
        "description": "In this activity you will be exploring basic computer science concepts in Python while learning how to help your community by creating a chatbot, or an automated help system! You have probably interacted with a chatbot before, maybe without even realizing it. Some common chatbots include: Apple’s Siri, Amazon’s Alexa, Google Assistant, Lyft, and most recently the World Health Organization has built one for COVID-19 facts. Before you start designing and coding your chatbot, check out our featured Women in Tech Spotlight, Erica Kochi. As the Co-founder of UNICEF’s Innovation Unit, Erica built a chatbot to help provide care and assistance for people in Nigeria and Rwanda.",
        "category": "top",
        "lesson": `<iframe src="/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Can-I-Help-You.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Can-I-Help-You.pdf",
        "exampleLink": "https://trinket.io/python/d535629467?outputOnly=true",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/Poetry.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortPoetry.png",
        "title": "Python Poetry",
        "language": "Python",
        "difficulty": "Beginner",
        "platform": "Repl.it",
        "description": "In this Code at Home activity, you will bring awareness to the art of poetry and code. You’ll start this project by choosing a poem that is meaningful to you. Then, you will learn how to format and display your poem using the coding language, Python. Finally, you will create a poem generator that will allow others to personalize the poem you are spotlighting. Before you start, be sure to check out the featured Women in Tech Spotlight, Joy Buolamwini, who many people call, \"The Poet of Code.\"",
        "category": "Python",
        "lesson": `<iframe src="/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Python-Poetry.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Python-Poetry.pdf",
        "exampleLink": "https://replit.com/@GWCEducation/PythonPoetry-Using-Newline#main.py",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/DataPlay.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortDataPlay.png",
        "title": "Data Playground (Data 1)",
        "language": "Python",
        "difficulty": "Intermediate",
        "platform": "Kaggle, Jupyter Notebook",
        "description": "The field of data science is vast, connecting concepts of artificial intelligence, data mining, big data, and machine learning. According to Glassdoor, data scientists are one of the most sought after jobs with an average base salary of $110,000! In this activity you will learn how to draw information from a dataset in order to observe possible trends. By using Python, we will learn how to do basic data manipulation by filtering, modifying, removing, and performing calculations on a given dataset. In this activity we will specifically look at data around Kickstarter projects, a crowdfunding platform, to determine which category of projects are the most successful.",
        "category": "Python",
        "lesson": `<iframe src="/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Data-Playground-1.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Data-Playground-1.pdf",
        "exampleLink": "https://www.kaggle.com/code/samanthahe/gwc-data-playground-sample-project?scriptVersionId=42242721",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/Password.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortPassword.png",
        "title": "Password Generator",
        "language": "Python",
        "difficulty": "Intermediate",
        "platform": "Repl.it",
        "description": "We use passwords for almost everything we do digitally! You may have a password for your email, shopping websites, Instagram, food delivery apps, etc. Did you know that in order to secure your personal information, such as your name, birthday, or location, you should create a different password for all of your accounts? In 2019 about 1 in 15 people became victims of identity fraud where one of the most common reasons for attack was due to weak passwords. Cyber Security Specialists are responsible for implementing security measures in any computer and recognizing potential threats. Cyber Security is a fast growing industry that makes up about 32-45% of all U.S tech jobs with an average base salary of $83,000. There are many things that you can do at home to secure your systems to prevent a cyber attack! In this activity you will be randomly generating 10-character long passwords that are strong enough to prevent cyber attacks on your personal information.",
        "category": "Python",
        "lesson": `<iframe src="/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Password-Generator.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Password-Generator.pdf",
        "exampleLink": "https://replit.com/@samanthahegwc/GWCpasswordGenerator#main.py",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/DepData.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortDepData.png",
        "title": "Depicting Data (Data 2)",
        "language": "Python",
        "difficulty": "Intermediate",
        "platform": "Kaggle, Jupyter Notebook",
        "description": "In this activity you will learn how to depict data using various types of graphs: line, bar, pie, histogram, and scatter plot using Python. We will specifically be looking at data around Kickstarter projects, a crowdfunding platform. Data Scientists today take on many roles when working with data. They must first clean the data, this means removing any inaccurate data or looking for duplicate data, then analyze the data using various types of algorithms, and finally they present their data to stakeholders (depending on the data, stakeholders could include people like policy makers, business leaders, researchers, doctors, the general public, etc.).",
        "category": "Python",
        "lesson": `<iframe src="https://girlswhocode.com/assets/downloads/craft-prod/downloads/Girls-Who-Code-At-Home-Depicting-Data.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "https://girlswhocode.com/assets/downloads/craft-prod/downloads/Girls-Who-Code-At-Home-Depicting-Data.pdf",
        "exampleLink": "https://www.kaggle.com/code/samanthahe/gwc-depicting-data-sample-project-v2/notebook",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/Meteor.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortMeteor.png",
        "topImage": "/Users/brynnemittleider/Orientation_Website/Top_Images/topMeteor.png",
        "title": "Meteor Catcher Game",
        "language": "Javascript",
        "difficulty": "Intermediate",
        "platform": "p5.js Online Editor",
        "description": "In this project, you will learn to program a collecting game using p5.js, a JavaScript library created especially for artists and designers.  In Part 1 of this project, you will learn about how different parts of a game work together as a system, explore the basics of p5.js, and create sketches using functions. In Part 2, you will use the coordinate system to draw the first component of your game: the meteor! In Part 3, you will learn how to create and use variables in p5.js to move the meteor across the screen at a specified speed. Yes, it is magical, but really it’s just simple math! In Part 4, you will learn how to add player input by programming a catcher that responds to mouse movement. In the final part, we will explore one way to make your game more challenging - and more fun!",
        "category": "top",
        "lesson": `<iframe src="/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Meteor-Catcher-Game.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "/Users/brynnemittleider/Orientation_Website/Pdfs/Girls-Who-Code-At-Home-Meteor-Catcher-Game.pdf",
        "exampleLink": "https://editor.p5js.org/GWCEducation/full/NFjNmEEqP",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/Wireframe.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortWireframe.png",
        "topImage": "/Users/brynnemittleider/Orientation_Website/Top_Images/topMeteor.png",
        "title": "Wireframe",
        "language": "None",
        "difficulty": "Beginner",
        "platform": "Google Slides",
        "description": "A wireframe is a high level plan of your website. Like a blueprint! It will act as a guide when you begin programming. Web designers use wireframes as a way to quickly test out lots of different possible layouts before choosing one to build. They don’t need to be pretty or have all the pictures or words filled in. All they need to do is clearly display how information will be organized on a user’s screen. ",
        "category": "Web Development",
        "lesson": `<iframe src="https://girlswhocode.com/assets/images/craft-prod/images/Build-your-best-wireframe-2.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "https://girlswhocode.com/assets/images/craft-prod/images/Build-your-best-wireframe-2.pdf",
        "exampleLink": "https://girlswhocode.com/assets/images/craft-prod/images/Build-your-best-wireframe-2.pdf",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/Skillz.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortSkillz.png",
        "topImage": "/Users/brynnemittleider/Orientation_Website/Top_Images/topMeteor.png",
        "title": "Share Your Skillz: Personal Website",
        "language": "HTML & CSS",
        "difficulty": "Beginner",
        "platform": "Glitch",
        "description": "During uncertain times, it’s important to take a break to focus on and share something that brings you joy! Learn how to use HTML and CSS to build a tutorial that teaches someone how to do something like how to make a TikTok, how to draw a cat, how to make your favorite cookies, how to land a perfect water bottle flip - no skill is too small!",
        "category": "Web Development",
        "lesson": `<iframe src="https://girlswhocode.com/assets/downloads/craft-prod/downloads/Girls-Who-Code-At-Home-Share-Your-Skillz1.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "https://girlswhocode.com/assets/downloads/craft-prod/downloads/Girls-Who-Code-At-Home-Share-Your-Skillz1.pdf",
        "exampleLink": "https://glitch.com/~share-your-skillz",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/Hike.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortHike.png",
        "topImage": "/Users/brynnemittleider/Orientation_Website/Top_Images/topMeteor.png",
        "title": "Virtual Hike: Landmark Showcase App",
        "language": "Javascript, HTML & CSS",
        "difficulty": "Intermediate",
        "platform": "Glitch",
        "description": "With Earth Day happening this week, we want to encourage you to think about some of the wild and outdoor places you’d like to explore. Where would you go? What would you want to do and see? In this tutorial, you’ll learn how to use arrays, or lists in JavaScript, to create a virtual hike! You’ll create a website that can take someone on a trip to visit a national park, your favorite museum, or travel to a different country! The possibilities are endless!",
        "category": "Web Development",
        "lesson": `<iframe src="https://girlswhocode.com/assets/downloads/craft-prod/downloads/Girls-Who-Code-At-Home-Virtual-Hike.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "https://girlswhocode.com/assets/downloads/craft-prod/downloads/Girls-Who-Code-At-Home-Virtual-Hike.pdf",
        "exampleLink": "https://gwc-virtual-hike.glitch.me/",
    },
    {
        "longImage": "/Users/brynnemittleider/Orientation_Website/Long_Images/Memory.png",
        "shortImage": "/Users/brynnemittleider/Orientation_Website/Short_Images/shortMemory.png",
        "topImage": "/Users/brynnemittleider/Orientation_Website/Top_Images/topMeteor.png",
        "title": "Digital Memory Book",
        "language": "HTML & CSS",
        "difficulty": "Intermediate",
        "platform": "Glitch",
        "description": "Have you ever wanted to make your own website to store your memories? Are you looking for a way to create a digital yearbook for you and your friends? If so, this activity is for you! Digital media like photos, audio, and video are important ways of remembering the people, events, and places that we love. In this activity, we will be mainly coding in HTML and CSS to build and design your digital memory book. First, we will use HTML to add and organize the photos and text of each memory, then we will use Flexbox, a tool in CSS, to design each memory and organize all of the memory cards into a grid layout.",
        "category": "Web Development",
        "lesson": `<iframe src="https://girlswhocode.com/assets/images/craft-prod/images/Girls-Who-Code-At-Home-Digital-Memory-Book.pdf" width="400px" height="573px" class="lesson-frame">`,
        "lessonLink": "https://girlswhocode.com/assets/images/craft-prod/images/Girls-Who-Code-At-Home-Digital-Memory-Book.pdf",
        "exampleLink": "https://digital-memory-book-ext.glitch.me/",
    }
];

if (location.href == 'file:///Users/brynnemittleider/Orientation_Website/tutorials.html') {

    function topZoom() {
        for (const box of document.getElementsByClassName('box')) {
            box.style.transform = 'scale(1.05)'
        }
    }

    function topUnzoom() {
        for (const box of document.getElementsByClassName('box')) {
            box.style.transform = 'scale(1)'
        }
    }

    const categories = [];

    for (let i = 0; i < projects.length; i++) {

        const project = projects[i];

        if (project.category == 'top') {
            if (document.getElementsByClassName('carousel-indicators top')[0].childElementCount == 0) {
                document.getElementsByClassName('carousel-indicators top')[0].innerHTML += `<button
                                                    type="button"
                                                    data-bs-target="#top-carousel"
                                                    data-bs-slide-to="${document.getElementsByClassName('carousel-indicators top')[0].childElementCount}"
                                                    class="active"
                                                    aria-current="true"
                                                    aria-label="Slide ${document.getElementsByClassName('carousel-indicators top')[0].childElementCount + 1}">
                                                </button>`;
            } else {
                document.getElementsByClassName('carousel-indicators top')[0].innerHTML += ` <button
                                                        type="button"
                                                        data-bs-target="#top-carousel"
                                                        data-bs-slide-to="${document.getElementsByClassName('carousel-indicators top')[0].childElementCount}"
                                                        aria-label="Slide ${document.getElementsByClassName('carousel-indicators top')[0].childElementCount + 1}">
                                                    </button>`;
            }

            const item = document.createElement('div');
            item.className = 'carousel-item top project';
            item.id = `project-${i}`;
            if (document.getElementsByClassName('carousel-inner top')[0].childElementCount == 0) {
                item.className += ' active';
            }
            document.getElementsByClassName('carousel-inner top')[0].appendChild(item);

            item.innerHTML = `<img class="d-block w-100 box" src="${project.topImage}" alt="Picture of ${project.title}">
                            <div class="carousel-caption d-none d-md-block">
                                <div class="top-project-grid">
                                    <h1 class="header">${project.title}</h1>
                                    <div class="project-info-grid">
                                        <h2 class="Q">Language</h2>
                                        <div class="v-line"></div>
                                        <h2 class="A">${project.language}</h2>
                                        <h2 class="Q">Level of Difficulty</h2>
                                        <h2 class="A">${project.difficulty}</h2>
                                        <h2 class="Q gen">Platform</h2>
                                        <h2 class="A gen">${project.platform}</h2>
                                    </div>
                                </div>
                            </div>`
        } else {
            const unspacedCategory = project.category.replace(' ', '%20');
            if (categories.includes(project.category)) {
                const carousel = document.getElementById(`carousel-${unspacedCategory}`);
                const innerCarousel = carousel.getElementsByClassName('carousel-inner gen')[0];
                const numberOfItems = innerCarousel.childElementCount;
                const lastItem = innerCarousel.children[numberOfItems - 1];
                const lastSet = lastItem.children[0];
                if (lastSet.childElementCount < 4) {
                    lastSet.innerHTML += `<div class="project gen" id="project-${i}">
                                            <img class="background gen" src="${project.shortImage}"></img>
                                            <div class="project-info-grid gen">
                                                <h1 class="header gen">${project.title}</h1>
                                                <h2 class="Q gen">Language</h2>
                                                <div class="v-line"></div>
                                                <h2 class="A gen">${project.language}</h2>
                                                <h2 class="Q gen">Level of Difficulty</h2>
                                                <h2 class="A gen">${project.difficulty}</h2>
                                                <h2 class="Q gen">Platform</h2>
                                                <h2 class="A gen">${project.platform}</h2>
                                            </div>
                                        </div>`
                } else {
                    innerCarousel.innerHTML += `<div class="carousel-item">
                                                    <div class="slide-set">
                                                        <div class="project gen" id="project-${i}">
                                                            <img class="background gen" src="${project.shortImage}"></img>
                                                            <div class="project-info-grid gen">
                                                                <h1 class="header gen">${project.title}</h1>
                                                                <h2 class="Q gen">Language</h2>
                                                                <div class="v-line"></div>
                                                                <h2 class="A gen">${project.language}</h2>
                                                                <h2 class="Q gen">Level of Difficulty</h2>
                                                                <h2 class="A gen">${project.difficulty}</h2>
                                                                <h2 class="Q gen">Platform</h2>
                                                                <h2 class="A gen">${project.platform}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`
                }
            } else {
                categories.push(project.category);
                document.body.innerHTML += `<section class="tutorials">
                                                <h2 class="header yellow-circle">${project.category}</h2>
                                                <div id="carousel-${unspacedCategory}" class="carousel slide gen" data-bs-ride="carousel" data-bs-interval="false">
                                                    <div class="carousel-grid align-items-center">
                                                        <button class="carousel-control-prev gen" type="button" data-bs-target="#carousel-${unspacedCategory}" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <div class="carousel-inner gen">
                                                            <div class="carousel-item active">
                                                                <div class="slide-set">
                                                                    <div class="project gen" id="project-${i}">
                                                                        <img class="background gen" src="${project.shortImage}"></img>
                                                                        <div class="project-info-grid gen">
                                                                            <h1 class="header gen">${project.title}</h1>
                                                                            <h2 class="Q gen">Language</h2>
                                                                            <div class="v-line"></div>
                                                                            <h2 class="A gen">${project.language}</h2>
                                                                            <h2 class="Q gen">Level of Difficulty</h2>
                                                                            <h2 class="A gen">${project.difficulty}</h2>
                                                                            <h2 class="Q gen">Platform</h2>
                                                                            <h2 class="A gen">${project.platform}</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="text-right">
                                                            <button class="carousel-control-next gen" type="button" data-bs-target="#carousel-${unspacedCategory}" data-bs-slide="next">
                                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span class="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>`
            }
        }
    }

    for (const genProject of document.getElementsByClassName('project gen')) {
        const background = genProject.getElementsByClassName('background gen')[0];
        const grid = genProject.getElementsByClassName('project-info-grid gen')[0];

        genProject.addEventListener('mouseover', () => {
            background.className = 'background gen obscure';
            grid.style.display = 'grid';
        });
        genProject.addEventListener('mouseout', () => {
            background.className = 'background gen clear';
            grid.style.display = 'none';
        });
    }

    for (let i = 0; i < document.getElementsByClassName('project').length; i++) {
        const proj = document.getElementById(`project-${i}`);
        proj.addEventListener('click', () => {
            goToProject(projects[i]);
        });
    }

    function goToProject(givenProject) {
        localStorage.setItem('objectToPass', JSON.stringify(givenProject));
        location.href = "exampleTutorial.html";
    }

} else {
    if (JSON.parse(localStorage.getItem('objectToPass')) != null) {
        const project = JSON.parse(localStorage.getItem('objectToPass'));
        localStorage.removeItem('objectToPass');
        document.getElementById('project-page-title').innerText = project.title;
        const image = document.getElementById('project-page-image');
        image.src = project.longImage;
        const container = document.getElementById('project-page-image-container');
        const goTo = document.getElementById('go-to')
        container.addEventListener('mouseover', () => {
            image.className = 'obscure';
            goTo.style.display = 'block';
        });
        container.addEventListener('mouseout', () => {
            image.className = 'clear';
            goTo.style.display = 'none';
        });

        document.getElementById('project-page-image-link').href = project.exampleLink;

        document.getElementById('language').innerText = project.language;
        document.getElementById('difficulty').innerText = project.difficulty;
        document.getElementById('description').innerText = project.description;
        document.getElementById('lesson').innerHTML = project.lesson;
        document.getElementById('pdf-link').href = project.lessonLink;

        window.onbeforeunload = function () {
            localStorage.setItem('objectToPass', JSON.stringify(project));
        }

        const backArrow = document.getElementsByClassName('glyphicon glyphicon-menu-left project-page')[0];
        backArrow.addEventListener('mouseover', () => {
            backArrow.className = 'glyphicon glyphicon-menu-left project-page fade-black';
            backArrow.style.color = 'black';
        });
        backArrow.addEventListener('mouseout', () => {
            backArrow.className = 'glyphicon glyphicon-menu-left project-page fade-gray';
            backArrow.style.color = 'lightgray';
        });
    }
}

function goHome() {
    location.href = 'file:///Users/brynnemittleider/Orientation_Website/tutorials.html';
}