// Floating Hearts Animation
const heartsContainer = document.getElementById('heartsContainer');
const heartIcons = ['fa-heart', 'fa-heart-pulse', 'fa-heart'];

function createHeart() {
    const heart = document.createElement('i');
    const icon = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    heart.className = `fas ${icon} heart`;
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Entry Logic & Typing Animation
document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enterBtn');
    const entryScreen = document.getElementById('entryScreen');
    const mainContent = document.getElementById('mainContent');
    const message = "انتي مش بس حببتي دنتي كل حاجه في حياتي بجد انتي هديه وعوض ربنا ليا جيتيلي ف وقت كنت محتاجلك فيه وفعلا اختارت صح يا اعظم اختياراتي بشكر ربناانو عوضني بيكي يبنتي بحبك وهفضل احبك لاخر يوم ف عمري يحبيبه قلبييي وعاوزك تكوني عارفه انك اغلي منك في حياتي ومعنديش استعداد اخسرك وانتي بالنسبالي حببتي وبنتي وصحبتي وكل حاجه ليا ونا مليش ف الدنيا غيرك وربنا يقدرني واقدر اسعدك واكون سند ليكي يبنوتي 😍😍😍😘😘😍😘😘💗💗🫂";

    // Pre-check
    if (!enterBtn || !entryScreen || !mainContent) {
        console.error('Elements not found');
        return;
    }

    enterBtn.addEventListener('click', () => {
        console.log('Button clicked');
        entryScreen.style.opacity = '0';
        
        // Immediate switch for responsiveness
        setTimeout(() => {
            entryScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = '0';
            
            // Fade in main content
            let op = 0;
            const timer = setInterval(() => {
                if (op >= 1) clearInterval(timer);
                mainContent.style.opacity = op;
                op += 0.1;
            }, 50);

            // Start typing with custom function
            let i = 0;
            const speed = 70;
            const target = document.getElementById("typedMessage");
            target.innerHTML = ""; // Clear first
            
            function typeWriter() {
                if (i < message.length) {
                    target.innerHTML += message.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    // Add a pulsing heart at the end
                    target.innerHTML += ' <span class="heart-loader" style="font-size: 1.5rem; display: inline-block;">❤️</span>';
                }
            }
            typeWriter();
        }, 800);
    });
});

// Heart Trail Effect
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.1) return; // Limit trail density
    
    const trail = document.createElement('i');
    trail.className = 'fas fa-heart trail-heart';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    trail.style.fontSize = (Math.random() * 10 + 5) + 'px';
    trail.style.color = 'var(--secondary-pink)';
    trail.style.position = 'absolute';
    trail.style.pointerEvents = 'none';
    trail.style.opacity = '0.6';
    trail.style.zIndex = '999';
    
    document.body.appendChild(trail);
    
    trail.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 0.6 },
        { transform: `translate(${(Math.random()-0.5)*100}px, -100px) scale(0)`, opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => trail.remove();
});

// Sound Toggle (Conceptual - usually requires user interaction)
const musicBtn = document.getElementById('musicToggle');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if(isPlaying) {
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        // Add romantic music logic here if needed
    } else {
        musicBtn.innerHTML = '<i class="fas fa-heart"></i>';
    }
});
