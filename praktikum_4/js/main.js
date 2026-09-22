// =========== 1. TYPING EFFECT ===========
const typingText = document.getElementById('typing-text');

// MODIFIKASI: Menggunakan nama aslimu agar lebih mantap
const names = ['Chattama Albiantoro', 'Web Developer', 'Mahasiswa Sistem Informasi'];
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentName = names[nameIndex];
    
    if (isDeleting) {
        typingText.textContent = currentName.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentName.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentName.length) {
        delay = 2000; // Jeda saat teks selesai diketik
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
        delay = 500; // Jeda sebelum mengetik kata baru
    }
    
    setTimeout(typeEffect, delay);
}

typeEffect(); // Mulai efek


// =========== 2. GENERATE PROJECT CARDS ===========
// MODIFIKASI: Memasukkan proyek Aplikasi Donasi-mu
const projects = [
    { 
        title: 'Aplikasi Donasi', 
        desc: 'Web donasi menggunakan PHP, HTML, CSS, dan JS.', 
        image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Donasi' 
    },
    { 
        title: 'Kalkulator JS', 
        desc: 'Kalkulator interaktif', 
        image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Kalkulator' 
    },
    { 
        title: 'Form Interaktif', 
        desc: 'Form pendaftaran dengan validasi', 
        image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Form' 
    }
];

// Mengambil elemen (Sesuai konsep pemilih elemen di Kuis No. 16)
const projectGrid = document.getElementById('project-grid');

// Kosongkan isi HTML statis sebelumnya agar tidak menumpuk dengan data JS
projectGrid.innerHTML = ''; 

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // MODIFIKASI: Menerapkan alt (Kuis 18), text-align (Kuis 8), dan target="_blank" (Kuis 12)
    card.innerHTML = `
        <img src="${project.image}" alt="Tangkapan layar ${project.title}" style="width: 100%; border-radius: 8px;">
        <h3 style="text-align: center; margin: 15px 0;">${project.title}</h3>
        <p style="text-align: center; margin-bottom: 20px;">${project.desc}</p>
        <div style="text-align: center;">
            <a href="https://github.com/AlbiantoroHub" class="btn" target="_blank">Lihat Detail</a>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        // Mencegah alert muncul jika yang diklik adalah tombol link "Lihat Detail"
        if(e.target.tagName !== 'A') {
            alert(`Anda memilih proyek: ${project.title}`);
        }
    });
    
    projectGrid.appendChild(card);
});