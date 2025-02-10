document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const progress = document.querySelector('.progress');
    const connectContent = document.getElementById('connect-content');
    
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: '👔',
            url: 'https://www.linkedin.com/in/hridaykadam/',
            color: '#0077b5'
        },
        {
            name: 'Twitter',
            icon: '🐦',
            url: 'https://x.com/hridaykadam',
            color: '#1DA1F2'
        },
        {
            name: 'Instagram',
            icon: '📸',
            url: 'https://www.instagram.com/hrik.1111',
            color: '#E1306C'
        },
        {
            name: 'GitHub',
            icon: '💻',
            url: 'https://github.com/hridaykadam',
            color: '#333'
        },
        {
            name: 'Essays',
            icon: '✍️',
            url: 'https://penpaper1111.substack.com/',
            color: '#FF6B6B'
        }
    ];

    setTimeout(() => {
        loader.style.display = 'none';
        connectContent.style.display = 'block';
        
        const socialGrid = document.createElement('div');
        socialGrid.className = 'social-grid';
        
        socialLinks.forEach(link => {
            const card = document.createElement('a');
            card.href = link.url;
            card.target = '_blank';
            card.className = 'social-card';
            card.innerHTML = `
                <div class="card-content">
                    <span class="card-icon">${link.icon}</span>
                    <span class="card-name">${link.name}</span>
                    <div class="card-glitch"></div>
                </div>
            `;
            socialGrid.appendChild(card);
        });

        connectContent.appendChild(socialGrid);
    }, 1500);
});

async function showContactInfo() {
    const connectContent = document.getElementById('connect-content');
    connectContent.innerHTML = ''; // Clear terminal

    const contactInfo = [
        {
            title: "> Establishing secure connection...",
            delay: 1000
        },
        {
            title: "> Connection established!",
            delay: 500
        },
        {
            title: "> Social Links_",
            items: [
                "GitHub: github.com/hridaykadam",
                "LinkedIn: linkedin.com/in/hridaykadam",
                "Twitter: @hridaykadam"
            ]
        },
        {
            title: "> Contact_",
            items: [
                "Email: hello@hridaykadam.com",
                "Location: Mumbai, India"
            ]
        }
    ];

    for (const section of contactInfo) {
        const div = document.createElement('div');
        div.className = 'contact-section';
        
        // Type title
        const title = document.createElement('div');
        title.style.color = '#27c93f';
        div.appendChild(title);
        
        for (let i = 0; i < section.title.length; i++) {
            title.textContent += section.title[i];
            await new Promise(r => setTimeout(r, 30));
        }

        if (section.delay) {
            await new Promise(r => setTimeout(r, section.delay));
        }

        if (section.items) {
            for (const item of section.items) {
                const p = document.createElement('p');
                p.style.color = '#33ffff';
                div.appendChild(p);
                
                for (let i = 0; i < item.length; i++) {
                    p.textContent += item[i];
                    await new Promise(r => setTimeout(r, 30));
                }
                await new Promise(r => setTimeout(r, 200));
            }
        }

        connectContent.appendChild(div);
        await new Promise(r => setTimeout(r, 500));
    }
} 