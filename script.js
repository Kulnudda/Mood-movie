const movies = [
    { title: "หลานม่า (How to Make Millions Before Grandma Dies)", mood: "เศร้าซึ้ง", rating: "9.2/10", review: "หนังไทยสุดซึ้งที่สะท้อนความสัมพันธ์ในครอบครัว เตรียมพกทิชชู่ไปให้พร้อม" },
    { title: "The Fault in Our Stars", mood: "เศร้าซึ้ง", rating: "8.5/10", review: "เรื่องราวความรักของวัยรุ่นที่ต้องเผชิญหน้ากับโรคร้าย ซาบซึ้งและบีบหัวใจ" },
    { title: "Past Lives", mood: "เศร้าซึ้ง", rating: "8.6/10", review: "หนังดราม่าโรแมนติกชั้นเยี่ยม เกี่ยวกับโชคชะตา ความสัมพันธ์ และเส้นทางชีวิตที่เลือกเดิน" },
    { title: "Interstellar", mood: "ตื่นเต้น/ลุ้นระทึก", rating: "9.5/10", review: "ภาพยนตร์ไซไฟระดับชิ้นเอกที่พาเดินทางข้ามขอบจักรวาล ลุ้นระทึกและสะเทือนอารมณ์" },
    { title: "Oppenheimer", mood: "ตื่นเต้น/ลุ้นระทึก", rating: "8.9/10", review: "ภาพยนตร์ชีวประวัติสุดเข้มข้น เต็มไปด้วยความกดดันและการตัดสินใจครั้งประวัติศาสตร์" },
    { title: "Dune: Part Two", mood: "ตื่นเต้น/ลุ้นระทึก", rating: "9.1/10", review: "มหากาพย์ไซไฟฟอร์มยักษ์ ภาพและเสียงอลังการ เต็มไปด้วยฉากสงครามและการแย่งชิงอำนาจ" },
    { title: "Train to Busan (ด่วนนรกซอมบี้คลั่ง)", mood: "ตื่นเต้น/ลุ้นระทึก", rating: "8.8/10", review: "หนังเอาตัวรอดจากซอมบี้บนรถไฟที่ลุ้นจนแทบหยุดหายใจ" },
    { title: "สัปเหร่อ (The Undertaker)", mood: "ตลก/คลายเครียด", rating: "8.8/10", review: "หนังไทยจักรวาลไทบ้านที่ผสมผสานความตลกและเรื่องราวความตายได้อย่างลงตัว" },
    { title: "พี่มาก..พระโขนง", mood: "ตลก/คลายเครียด", rating: "8.7/10", review: "ตำนานหนังไทยรอมคอมสยองขวัญที่เสียงฮามาเต็มและความอบอุ่นครบรส" },
    { title: "Free Guy", mood: "ตลก/คลายเครียด", rating: "8.4/10", review: "หนังตลกแอคชันไอเดียสุดบรรเจิด เมื่อตัวประกอบในเกมลุกขึ้นมาเป็นฮีโร่" },
    { title: "Notting Hill", mood: "โรแมนติก", rating: "8.7/10", review: "หนังรักคลาสสิกอบอุ่นหัวใจ ระหว่างหนุ่มร้านหนังสือกับซูเปอร์สตาร์ระดับโลก" },
    { title: "Friend Zone ระวัง..สิ้นสุดทางเพื่อน", mood: "โรแมนติก", rating: "8.0/10", review: "หนังไทยรอมคอมสุดฟินและอินไปกับเส้นกั้นบางๆ ระหว่างเพื่อนกับแฟน" },
    { title: "La La Land", mood: "โรแมนติก", rating: "8.8/10", review: "เพลงเพราะ ภาพสวย และเรื่องราวความรักความฝันที่ตราตรึงใจไม่รู้ลืม" }
];

function displayMovies(filterMood) {
    const grid = document.getElementById('movieGrid');
    grid.innerHTML = '';

    let filtered = filterMood === 'all' 
        ? [...movies] 
        : movies.filter(m => m.mood === filterMood);

    filtered.sort(() => Math.random() - 0.5);
    const selectedMovies = filtered.slice(0, 3);

    selectedMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => openModal(movie); // คลิกเพื่อดูข้อมูลหนังแบบเต็มๆ
        card.innerHTML = `
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">
                    <span class="movie-mood">${movie.mood}</span>
                    <span class="movie-rating">⭐ ${movie.rating}</span>
                </div>
                <p class="movie-review">${movie.review}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterMovies(mood, event) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(event) event.target.classList.add('active');
    displayMovies(mood);
}

// ค้นหาตามความรู้สึกที่พิมพ์เอง
function searchByCustomMood() {
    const input = document.getElementById('userCurrentMood').value.trim();
    if(!input) {
        alert('กรุณากรอกความรู้สึกของคุณก่อนครับ');
        return;
    }
    // สุ่มเลือกหนังมาแสดง 3 เรื่องเมื่อผู้ใช้พิมพ์ความรู้สึก
    displayMovies('all');
    alert(`ระบบได้รับความรู้สึกของคุณ ("${input}") แล้ว! นี่คือภาพยนตร์ที่เหมาะกับคุณวันนี้ครับ`);
}

// ฟังก์ชันเปิด Modal ดูข้อมูลหนัง
function openModal(movie) {
    document.getElementById('modalTitle').innerText = movie.title;
    document.getElementById('modalMood').innerText = movie.mood;
    document.getElementById('modalRating').innerText = `⭐ คะแนนรีวิว: ${movie.rating}`;
    document.getElementById('modalReview').innerText = movie.review;
    document.getElementById('movieModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
}

displayMovies('all');

// ส่งข้อมูลเข้า Google Sheets
function submitToGoogleSheet(e) {
    e.preventDefault();
    
    const loadingMsg = document.getElementById('loading-msg');
    loadingMsg.style.display = 'block';

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyKrWqNuM13rw1YPC-Kx2xp4zqNfsFS8Sfo86DJiB5kISVy386qSwlRTn8QE82i2Ja1VA/exec';

    const formData = {
        title: document.getElementById('movieTitle').value,
        mood: document.getElementById('movieMood').value,
        rating: document.getElementById('movieRating').value,
        review: document.getElementById('movieReview').value
    };

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(() => {
        alert('บันทึกข้อมูลเข้า Google Sheets สำเร็จ!');
        document.getElementById('movieForm').reset();
        loadingMsg.style.display = 'none';
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
        loadingMsg.style.display = 'none';
    });
}