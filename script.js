// ==========================================
// MOVIEMOOD DATABASE
// ==========================================

let movies = [

    {
        id: 1,
        name: "หลานม่า",
        genre: "Drama",
        mood: "sad",
        year: 2024,
        rating: 9.0,
        description:
            "เรื่องราวความสัมพันธ์ของหลานกับอาม่าที่ทำให้เราได้มองเห็นคุณค่าของครอบครัว",

        review:
            "หนังอบอุ่นและซึ้งมาก เล่าเรื่องครอบครัวได้เข้าถึงง่าย มีหลายฉากที่ทำให้ต้องเสียน้ำตา"
    },


    {
        id: 2,
        name: "วิมานหนาม",
        genre: "Drama / Romance",
        mood: "sad",
        year: 2024,
        rating: 8.0,
        description:
            "เรื่องราวความรัก ความขัดแย้ง และการต่อสู้เพื่อสิ่งที่ตัวเองต้องการ",

        review:
            "ดราม่าเข้มข้น นักแสดงเล่นได้ดี เหมาะกับคนที่อยากดูหนังที่มีประเด็นให้คิดต่อ"
    },


    {
        id: 3,
        name: "อนงค์",
        genre: "Comedy / Romance",
        mood: "happy",
        year: 2024,
        rating: 7.8,
        description:
            "เรื่องราวความรักสุดวุ่นวายระหว่างชายหนุ่มกับผีสาวที่ต้องมาใช้ชีวิตร่วมกัน",

        review:
            "ดูง่ายและมีมุกให้หัวเราะตลอดเรื่อง เหมาะกับวันสบาย ๆ ที่อยากดูหนังโรแมนติก"
    },


    {
        id: 4,
        name: "ธี่หยด 2",
        genre: "Horror / Thriller",
        mood: "scared",
        year: 2024,
        rating: 8.1,
        description:
            "การกลับมาของเรื่องราวสยองขวัญที่เต็มไปด้วยความลึกลับและการไล่ล่า",

        review:
            "หลอนและลุ้นต่อเนื่อง เหมาะสำหรับคนที่ชอบหนังผีไทยที่มีฉากตื่นเต้น"
    },


    {
        id: 5,
        name: "404 สุขีนิรันดร์..RUN RUN",
        genre: "Comedy / Horror",
        mood: "happy",
        year: 2024,
        rating: 7.2,
        description:
            "เรื่องราวความวุ่นวายของบ้านที่เต็มไปด้วยเหตุการณ์เหนือธรรมชาติ",

        review:
            "ผสมความตลกกับความหลอนได้ลงตัว เหมาะกับการดูเป็นกลุ่มกับเพื่อน"
    },


    {
        id: 6,
        name: "เธอฟอร์แคช",
        genre: "Romance / Drama",
        mood: "romantic",
        year: 2024,
        rating: 7.5,
        description:
            "เรื่องราวความสัมพันธ์ที่เริ่มต้นจากข้อตกลง แต่กลับพัฒนาเป็นความรู้สึกจริง",

        review:
            "โรแมนติก ดูเพลิน และมีประเด็นเกี่ยวกับความสัมพันธ์ให้คิดตาม"
    },


    {
        id: 7,
        name: "แฟลตเกิร์ล ชั้นห่างระหว่าง เรา",
        genre: "Drama",
        mood: "sad",
        year: 2025,
        rating: 7.7,
        description:
            "เรื่องราวของมิตรภาพและชีวิตของวัยรุ่นที่เติบโตขึ้นท่ามกลางความแตกต่าง",

        review:
            "หนังวัยรุ่นที่มีทั้งความสนุกและดราม่า ดูแล้วเข้าใจความสัมพันธ์ของเพื่อนมากขึ้น"
    },


    {
        id: 8,
        name: "วัยหนุ่ม 2544",
        genre: "Drama",
        mood: "angry",
        year: 2024,
        rating: 8.2,
        description:
            "เรื่องราวชีวิตของวัยรุ่นที่ต้องเผชิญกับความรุนแรงและการเปลี่ยนแปลง",

        review:
            "เนื้อเรื่องหนักและจริงจัง ถ่ายทอดด้านมืดของชีวิตวัยรุ่นได้อย่างน่าสนใจ"
    },


    {
        id: 9,
        name: "พนอ",
        genre: "Horror",
        mood: "scared",
        year: 2025,
        rating: 7.4,
        description:
            "เรื่องราวลึกลับที่เชื่อมโยงกับเหตุการณ์เหนือธรรมชาติ",

        review:
            "บรรยากาศหลอนและมีความลึกลับ เหมาะกับคนที่ชอบหนังสยองขวัญไทย"
    },


    {
        id: 10,
        name: "มานะแมน",
        genre: "Comedy",
        mood: "happy",
        year: 2024,
        rating: 7.0,
        description:
            "เรื่องราวของชายหนุ่มธรรมดาที่ต้องพบกับสถานการณ์สุดวุ่นวาย",

        review:
            "เน้นความฮาและความบันเทิง เหมาะสำหรับดูคลายเครียด"
    },


    {
        id: 11,
        name: "Friend Zone",
        genre: "Romance / Comedy",
        mood: "romantic",
        year: 2019,
        rating: 7.2,
        description:
            "เรื่องราวของเพื่อนสนิทที่ต้องเผชิญกับความรู้สึกที่มากกว่าเพื่อน",

        review:
            "ดูสนุกและเข้าถึงง่าย โดยเฉพาะคนที่เคยติดอยู่ในสถานะเพื่อน"
    },


    {
        id: 12,
        name: "รถไฟฟ้า มาหานะเธอ",
        genre: "Romance / Comedy",
        mood: "romantic",
        year: 2009,
        rating: 7.8,
        description:
            "เรื่องราวความรักสุดน่ารักของหญิงสาวกับวิศวกรรถไฟฟ้า",

        review:
            "โรแมนติกแบบคลาสสิก ดูแล้วรู้สึกอบอุ่นและยิ้มตาม"
    },


    {
        id: 13,
        name: "พี่มาก..พระโขนง",
        genre: "Comedy / Horror",
        mood: "happy",
        year: 2013,
        rating: 7.4,
        description:
            "ตำนานแม่นาคพระโขนงในมุมมองที่ผสมทั้งความรัก ความฮา และความหลอน",

        review:
            "เป็นหนังผีที่ดูสนุกและมีมุกตลกเยอะ เหมาะกับการดูพร้อมเพื่อน"
    },


    {
        id: 14,
        name: "ชัตเตอร์ กดติดวิญญาณ",
        genre: "Horror",
        mood: "scared",
        year: 2004,
        rating: 8.0,
        description:
            "ช่างภาพหนุ่มพบความผิดปกติบางอย่างในภาพถ่ายของเขา",

        review:
            "บรรยากาศกดดันและมีปริศนาให้ติดตาม เป็นหนังผีไทยที่ยังน่ากลัว"
    },


    {
        id: 15,
        name: "องค์บาก",
        genre: "Action",
        mood: "angry",
        year: 2003,
        rating: 7.1,
        description:
            "ชายหนุ่มออกเดินทางเพื่อตามหาของสำคัญที่ถูกขโมยไป",

        review:
            "ฉากแอ็กชันโดดเด่นและดูมันส์ เหมาะกับวันที่อยากดูอะไรที่เร้าใจ"
    }

];


// ==========================================
// SELECT MOOD
// ==========================================

let selectedMood = "";


function selectMood(mood, button) {

    selectedMood = mood;


    document
        .querySelectorAll(".mood")
        .forEach(item => {

            item.classList.remove("selected");

        });


    button.classList.add("selected");

}



// ==========================================
// RECOMMEND MOVIE
// ==========================================

function recommendMovie() {

    if (!selectedMood) {

        alert("กรุณาเลือกอารมณ์ของคุณก่อน 🎬");

        return;

    }


    const result = movies.filter(movie => {

        return movie.mood === selectedMood;

    });


    const container =
        document.getElementById("recommendation");


    if (result.length === 0) {

        container.innerHTML =
            `<p class="empty">
                ยังไม่มีหนังสำหรับอารมณ์นี้
            </p>`;

        return;

    }


    container.innerHTML =
        result
            .map(movie => createMovieCard(movie))
            .join("");


    document
        .getElementById("recommend")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// ==========================================
// CREATE MOVIE CARD
// ==========================================

function createMovieCard(movie) {

    return `

        <div class="movie-card">

            <div class="movie-poster">
                🎬
            </div>


            <div class="movie-info">

                <h3>
                    ${movie.name}
                </h3>


                <div class="movie-meta">
                    ${movie.year}
                </div>


                <div class="genre">
                    ${movie.genre}
                </div>


                <div class="rating">
                    ⭐ ${movie.rating}/10
                </div>


                <p class="description">
                    ${movie.description}
                </p>


                <div class="review">

                    <span class="review-title">
                        💬 รีวิวสั้น ๆ
                    </span>

                    ${movie.review}

                </div>


                <button
                    class="favorite"
                    onclick="addFavorite('${movie.name}')"
                >
                    ❤️ เพิ่มในรายการโปรด
                </button>

            </div>

        </div>

    `;

}



// ==========================================
// DISPLAY MOVIES
// ==========================================

function displayMovies(data = movies) {

    const container =
        document.getElementById("movieList");


    if (data.length === 0) {

        container.innerHTML =
            `<p class="empty">
                ไม่พบหนังที่ค้นหา 😢
            </p>`;

        return;

    }


    container.innerHTML =
        data
            .map(movie => createMovieCard(movie))
            .join("");

}


displayMovies();



// ==========================================
// SEARCH
// ==========================================

function searchMovies() {

    const keyword =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const result = movies.filter(movie => {

        return (

            movie.name
                .toLowerCase()
                .includes(keyword)

            ||

            movie.genre
                .toLowerCase()
                .includes(keyword)

        );

    });


    displayMovies(result);

}



// ==========================================
// FILTER
// ==========================================

function filterGenre(type) {

    let result = [];


    if (type === "all") {

        result = movies;

    }


    else if (type === "thai") {

        result = movies;

    }


    else if (type === "new") {

        result =
            movies.filter(movie => movie.year >= 2024);

    }


    else if (type === "romance") {

        result =
            movies.filter(movie =>
                movie.genre
                    .toLowerCase()
                    .includes("romance")
            );

    }


    else if (type === "comedy") {

        result =
            movies.filter(movie =>
                movie.genre
                    .toLowerCase()
                    .includes("comedy")
            );

    }


    else if (type === "horror") {

        result =
            movies.filter(movie =>
                movie.genre
                    .toLowerCase()
                    .includes("horror")
            );

    }


    displayMovies(result);

}



// ==========================================
// FAVORITE
// ==========================================

function addFavorite(movieName) {

    let favorites =
        JSON.parse(
            localStorage.getItem("movieFavorites")
        ) || [];


    if (favorites.includes(movieName)) {

        alert(
            "❤️ หนังเรื่องนี้อยู่ในรายการโปรดแล้ว"
        );

        return;

    }


    favorites.push(movieName);


    localStorage.setItem(
        "movieFavorites",
        JSON.stringify(favorites)
    );


    alert(
        `❤️ เพิ่ม "${movieName}" ในรายการโปรดแล้ว`
    );

}



// ==========================================
// CREATE MOVIE
// ==========================================

document
    .getElementById("movieForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const newMovie = {

            id: Date.now(),


            name:
                document
                    .getElementById("movieName")
                    .value,


            genre:
                document
                    .getElementById("movieGenre")
                    .value,


            mood:
                document
                    .getElementById("movieMood")
                    .value,


            year:
                Number(
                    document
                        .getElementById("movieYear")
                        .value
                ),


            rating:
                Number(
                    document
                        .getElementById("movieRating")
                        .value
                ),


            description:
                document
                    .getElementById("movieDescription")
                    .value,


            review:
                document
                    .getElementById("movieReview")
                    .value

        };


        // CREATE
        movies.push(newMovie);


        // READ
        displayMovies();


        alert(
            `🎬 เพิ่ม "${newMovie.name}" สำเร็จแล้ว`
        );


        this.reset();


        document
            .getElementById("movies")
            .scrollIntoView({
                behavior: "smooth"
            });

    });