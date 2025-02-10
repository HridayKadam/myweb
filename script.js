document.addEventListener('DOMContentLoaded', function() {
    // Scramble effect for title
    const title = document.querySelector('.title');
    if (title) {
        const originalText = title.dataset.text;
        const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let iterations = 0;
        
        const interval = setInterval(() => {
            title.innerText = originalText.split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return possibleChars[Math.floor(Math.random() * possibleChars.length)];
                })
                .join('');
            
            if (iterations >= originalText.length) {
                clearInterval(interval);
                title.innerText = originalText;
            }
            iterations += 1/3;
        }, 50);
    }

    // Type out the lines
    const content = document.querySelector('.content');
    const lines = [
        'Hello world!',
        'Exploring tech, startups, & the cosmos - one project at a time.',
        'An active problem solver, & creator of things that matter!',
        { text: 'Building something that people love!', color: '#FFA500' }  // Orange color
    ];

    let currentLine = 0;
    content.innerHTML = '';

    function typeLine() {
        if (currentLine >= lines.length) return;

        const p = document.createElement('p');
        const line = lines[currentLine];
        
        // Check if the line is an object with custom color
        if (typeof line === 'object') {
            p.style.color = line.color;
            p.style.textShadow = `0 0 5px ${line.color}`;
        } else {
            p.style.color = '#33ffff';
            p.style.textShadow = '0 0 5px rgba(51, 255, 255, 0.5)';
        }
        
        p.style.fontWeight = 'bold';
        content.appendChild(p);

        let currentChar = 0;
        const text = '> ' + (typeof line === 'object' ? line.text : line);

        const typeInterval = setInterval(() => {
            p.textContent = text.substring(0, currentChar + 2);
            currentChar++;

            if (currentChar === text.length - 1) {
                clearInterval(typeInterval);
                currentLine++;
                setTimeout(typeLine, 200);
            }
        }, 30);
    }

    typeLine();
});

// ... rest of your scramble effect code ...