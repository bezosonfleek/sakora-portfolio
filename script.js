document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');

    // Safety check: Stop if elements aren't found
    if (!output || !input) {
        console.error("Terminal elements not found in the DOM.");
        return;
    }

    const initialMessages = [
        "Initializing secure session...",
        "Host: 127.0.0.1 (Local)",
        "Accessing personnel dossier...",
        "SUCCESS: Profile Loaded.",
        "Type 'help' to see system commands."
    ];

    let msgIndex = 0;
    function typeInit() {
        if (msgIndex < initialMessages.length) {
            const p = document.createElement('p');
            p.textContent = `> ${initialMessages[msgIndex]}`;
            output.appendChild(p);
            msgIndex++;
            output.scrollTop = output.scrollHeight;
            setTimeout(typeInit, 400); 
        }
    }
    
    // Start the typing sequence
    typeInit();

    const commands = {
    'help':    { type: 'text',  value: 'Available: skills, projects, status, contact, clear' },
    'ls':      { type: 'text',  value: ' skills  projects  status  contact  clear' },
    'status':  { type: 'text',  value: 'System Operational. All nodes green.' },
    'contact': { type: 'text',  value: 'Direct Route: geoffreysakora@gmail.com' },
    'skills': {
        type: 'lines',
        value: [
            '> Network Configuration',
            '> Docker & Containerisation',
            '> Cloud Architecture',
            '> Web Security',
            '> Linux Administration',
            '> Python'
        ]
    },
    'projects': {
        type: 'lines',
        value: [
            '[01] PacketPulse — Multi-threaded network enumeration engine',
            '     https://bezosonfleek.github.io/PacketPulse/'
        ]
    },
    'clear': { type: 'clear' }
};

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.toLowerCase().trim();
            
            if (cmd !== '') {
    const command = commands[cmd];
    if (!command) {
        const p = document.createElement('p');
        p.textContent = `ERROR: '${cmd}' not recognized.`;
        output.appendChild(p);
    } else if (command.type === 'clear') {
        output.innerHTML = '';
    } else if (command.type === 'text') {
        const p = document.createElement('p');
        p.textContent = command.value;
        output.appendChild(p);
    } else if (command.type === 'lines') {
        command.value.forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            output.appendChild(p);
        });
    }
}
            
            input.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });
});
