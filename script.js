
document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyButton');
  const textToCopy = document.getElementById('textToCopy');

  copyButton.addEventListener('click', function() {
      textToCopy.select();
      textToCopy.setSelectionRange(0, 99999); // Untuk perangkat mobile

      navigator.clipboard.writeText(textToCopy.value)
          .then(() => {
              copyButton.textContent = 'Tersalin!';
              copyButton.style.backgroundColor = '#45a049';

              setTimeout(() => {
                  copyButton.textContent = 'Salin Nomor Rekening';
                  copyButton.style.backgroundColor = '#FFA500';
              }, 2000);
          })
          .catch(err => {
              console.error('Gagal menyalin teks: ', err);
          });
  });
});

document.addEventListener('scroll', function() {
    const video = document.getElementById('myVideo');
    const videoRect = video.getBoundingClientRect();
    const videoHeight = videoRect.height;
    const viewportHeight = window.innerHeight;
  
    // Calculate the center of the viewport
    const viewportCenter = viewportHeight / 2;
  
    // Check if the center of the video is within the center of the viewport
    if (videoRect.top + videoHeight / 2 >= viewportCenter - videoHeight / 2 &&
        videoRect.top + videoHeight / 2 <= viewportCenter + videoHeight / 2) {
      if (video.paused) {
        video.play();
      }
    } else {
      if (!video.paused) {
        video.pause();
      }
    }
  });
  



// Fungsi untuk mendeteksi apakah elemen berada dalam viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom > 0
    );
  }
  
  // Dapatkan semua elemen yang akan dianimasikan
  const fadeElements = document.querySelectorAll('.fade-right, .fade-left');
  
  // Fungsi untuk menambahkan/menghapus kelas berdasarkan posisi elemen di viewport
  function handleScroll() {
    fadeElements.forEach(function(el) {
      if (isInViewport(el)) {
        el.classList.add('fade-in');
      } else {
        el.classList.remove('fade-in');  // Hapus kelas saat elemen keluar dari viewport
      }
    });
  }
  
  // Jalankan event listener untuk scroll dan load
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-up, .fade-down');
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                    setTimeout(() => {
                        observer.observe(entry.target);
                    }, 600); 
                } else {
                    entry.target.classList.remove('show');
                }
            });
        },
        { 
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px' 
        }
    );
    fadeElements.forEach((element) => observer.observe(element));
});

  document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-down');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    fadeElements.forEach((element) => observer.observe(element));
  });
  
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        height: '100%',
        width: '100%',
        videoId: 'OUB6zKc-Tos',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Player siap
}

document.addEventListener('DOMContentLoaded', function() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (player && typeof player.playVideo === 'function') {
                    player.playVideo();
                }
            } else {
                if (player && typeof player.pauseVideo === 'function') {
                    player.pauseVideo();
                }
            }
        });
    }, options);

    const checkPlayerReady = setInterval(() => {
        if (document.getElementById('youtubePlayer')) {
            observer.observe(document.getElementById('youtubePlayer'));
            clearInterval(checkPlayerReady);
        }
    }, 100);
});


    let slideIndex = 0;
showSlides();
function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 5000);
}
      function openInvitation() {
        const cover = document.getElementById('cover');
        const mainContent = document.getElementById('mainContent');

        cover.classList.add('slide-up');
        
        setTimeout(() => {
            mainContent.style.display = 'block';
        }, 600);
    }

    document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll('.nav a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });

    const form = document.getElementById('messageForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert('Pesan terkirim! Terima kasih.');
          form.reset();
        } else {
          alert('Terjadi kesalahan. Silakan coba lagi.');
        }
      }).catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      });
    });
    
document.getElementById('cover').addEventListener('click', onCoverOpen);
const audioIconWrapper = document.querySelector("#disc");
const song = document.querySelector("#song");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
let isPlaying = false;

function playAudio() {
  song.volume = 0.5;
  song.play().catch((error) => {
    console.error('Error playing audio:', error);
  });
  audioIconWrapper.classList.remove('hidden'); // Ensure the audio icon is visible
  audioIcon.classList.add("fa-compact-disc");
  audioIcon.classList.remove("fa-circle-pause");
  isPlaying = true;
}

function pauseAudio() {
  song.pause();
  audioIcon.classList.remove("fa-compact-disc");
  audioIcon.classList.add("fa-circle-pause");
  isPlaying = false;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
};

// Function to be called when the cover is opened
function onCoverOpen() {
  playAudio();
}


