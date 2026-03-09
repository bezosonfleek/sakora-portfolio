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
            
            if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd !== "") {
                const response = commands[cmd] || `ERROR: '${cmd}' not recognized.`;
                const p = document.createElement('p');
                // Using innerHTML here to allow for the <br> break
                p.innerHTML = `<span class="text-white">$ ${cmd}</span><br>${response}`;
                output.appendChild(p);
            }
            
            input.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });
});
