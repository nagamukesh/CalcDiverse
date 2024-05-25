function calculateLatticePoints() {
    const radiusInput = document.getElementById('radius');
    const radius = parseInt(radiusInput.value);
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid radius greater than 0.");
        return;
    }

    let count = 0;
    const latticePoints = [];
    for (let x = -radius; x <= radius; x++) {
        for (let y = -radius; y <= radius; y++) {
            if (x * x + y * y <= radius * radius) {
                count++;
                latticePoints.push({ x, y });
            }
        }
    }

    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `Number of lattice points inside the circle: ${count}`;

    drawCircle(radius, latticePoints);
}

function drawCircle(radius, latticePoints) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set the scale
    const scale = canvas.width / (2 * radius + 2);

    // Draw the circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius * scale, 0, Math.PI * 2);
    ctx.stroke();

    // Draw the lattice points
    latticePoints.forEach(point => {
        const x = canvas.width / 2 + point.x * scale;
        const y = canvas.height / 2 - point.y * scale; // Invert y to match the canvas coordinate system
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2); // Draw small circles for points
        ctx.fillStyle = 'red';
        ctx.fill();
    });
}

