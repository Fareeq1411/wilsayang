document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('first-page').classList.add('hidden');
    document.getElementById('gift-page').classList.remove('hidden');
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('first-page').classList.add('hidden');
    document.getElementById('no-page').classList.remove('hidden');
});

document.getElementById('gift-box').addEventListener('click', function() {
    document.getElementById('gift-page').classList.add('hidden');
    drawAnimation();
});

function drawAnimation() {
    const animationPage = document.getElementById('animation-page');
    animationPage.classList.remove('hidden');

    // Create the canvas and animation logic
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animationPage.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let radius = 1;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#ff69b4';
        ctx.lineWidth = 4;
        ctx.stroke();
        radius += 2;

        if (radius < canvas.width / 3) {
            requestAnimationFrame(animate);
        } else {
            setTimeout(() => {
                animationPage.innerHTML = '';
                document.getElementById('animation-page').classList.add('hidden');
                document.getElementById('final-page').classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('final-page').classList.add('hidden');
                    document.getElementById('photo-page').classList.remove('hidden');
                }, 5000);
            }, 500);
        }
    }
    animate();
}
