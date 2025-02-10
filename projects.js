document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    
    const projects = [
        {
            name: 'Stush',
            description: 'Storytelling rush',
            tags: ['React', 'Stories', 'Creative'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'Quotes',
            description: 'Mood-based quote generator',
            tags: ['React', 'API', 'Emotion Analysis'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'Should You Text?',
            description: 'Pre-send text analysis',
            tags: ['NLP', 'Sentiment Analysis', 'Python'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'Tamas Yami',
            description: 'Am a part of the group that made this game!',
            tags: ['Game Dev', 'Unity', 'C#'],
            type: 'game-label',
            label: 'GAME',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'Lisle',
            description: 'Simplified listing tool',
            tags: ['JavaScript', 'Productivity', 'UI/UX'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'Irony',
            description: 'Smart laundry manager',
            tags: ['IoT', 'Mobile App', 'React Native'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'Dumb Site',
            description: 'Name says it all',
            tags: ['HTML', 'CSS', 'Fun'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'PodFeed',
            description: 'YouTube-based podcast suggestions',
            tags: ['ML', 'Content Analysis', 'Python'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'Project Tracker',
            description: 'Organized project execution',
            tags: ['React', 'Firebase', 'Management'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'Zipp Zag',
            description: 'Reaction time tester',
            tags: ['Game', 'JavaScript', 'Canvas'],
            type: 'game-label',
            label: 'GAME',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'NutriCheck',
            description: 'Meal-based health suggestions',
            tags: ['Health', 'ML', 'Mobile App'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        },
        {
            name: 'My Website',
            description: 'Indie Hacker themed portfolio',
            tags: ['HTML', 'CSS', 'JavaScript'],
            type: 'project-label',
            label: 'PROJECT',
            link: 'https://github.com/HridayKadam'
        }
    ];

    content.innerHTML = `
        <h1 class="section-title">> My Missions_</h1>
        <div class="projects-grid">
            ${projects.map(project => `
                <a href="${project.link}" target="_blank" class="project-card">
                    <div class="project-header">
                        <span class="folder-icon">📂</span>
                        <span class="${project.type}">${project.label}</span>
                    </div>
                    <h3 class="project-name">> ${project.name}_</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `
                            <span class="project-tag">#${tag}</span>
                        `).join('')}
                    </div>
                    <div class="card-glitch"></div>
                </a>
            `).join('')}
        </div>
    `;
}); 