        const output = document.getElementById('terminal-output');
        const input = document.getElementById('terminal-input');

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
                setTimeout(typeInit, 400); // Speed up slightly
            }
        }
        typeInit();

        const commands = {
            'help': 'Available: skills, status, contact, clear',
            'ls': ' skills  status  contact  clear',
            'skills': 'Network Configuration, Docker, Cloud, Web Security, Linux, Python',
            'status': 'System Operational. All nodes green.',
            'contact': 'Direct Route: geoffreysakora@gmail.com',
            'clear': 'CLEAR'
        };

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = input.value.toLowerCase().trim();
                if (cmd === 'clear') {
                    output.innerHTML = '';
                } else if (cmd !== "") {
                    const response = commands[cmd] || `ERROR: '${cmd}' not recognized.`;
                    const p = document.createElement('p');
                    p.innerHTML = `<span class="text-white">$ ${cmd}</span><br>${response}`;
                    output.appendChild(p);
                }
                input.value = '';
                output.scrollTop = output.scrollHeight;
            }
        });
