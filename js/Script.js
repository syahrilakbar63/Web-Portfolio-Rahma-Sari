// Membuat elemen-elemen salju secara dinamis
for (let i = 0; i < 200; i++) {
    let snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDelay = Math.random() * 15 + 's';
    snowflake.style.animationDuration = Math.max(1, Math.random() * 10) + 's';
    document.body.appendChild(snowflake);
}

// Menambahkan event listener untuk scroll
$(document).ready(function() {
    $(window).scroll(function() {
        // Menambahkan kelas 'sticky' pada elemen navbar ketika di-scroll lebih dari 20 piksel
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("Sticky");
        }

        // Menambahkan kelas 'show' pada tombol scroll-up ketika di-scroll lebih dari 500 piksel
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("Sticky");
        }
    });

    // Mengatur animasi scroll ke atas ketika tombol scroll-up ditekan
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // Skrip untuk toggle menu/navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Skrip untuk animasi teks ketik
    var typed = new Typed(".typing", {
        strings: ["Matematika", "Saintek", "Uinam"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    // Konfigurasi carousel menggunakan OwlCarousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Mengambil elemen dengan ID 'tahun-copyright' dan mengatur teksnya dengan tahun saat ini
document.getElementById('tahun-copyright').textContent = new Date().getFullYear();
