document.addEventListener('DOMContentLoaded', (event) => {
    const GRID_SIZE = 4;
    const MAX_BINARY_LENGTH = 64;
    const MIDI_FILES = [
        "ttps://bitmidi.com",
        "https://bitmidi.com",
        "https://bitmidi.com",
        "https://bitmidi.com",
        "https://bitmidi.com",
      ... // Removed for security reasons.
    ];

    let binaryMessage = "";
    let currentCellIndex = 0;
    let lastGreenPosition = "";

    const gameboard = document.getElementById("gameboard");
    const matrix = document.getElementById("matrix");
    const textInput = document.getElementById("textInput");
    const overlay = document.getElementById("overlay");

    function initializeGameboard() {
        gameboard.innerHTML = '';
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                cell.id = `cell_${row}_${col}`;
                cell.dataset.row = row;
                cell.dataset.col = col;
                gameboard.appendChild(cell);
            }
        }
    }

    async function processMidi(midi) {
        const synth = new Tone.PolySynth(Tone.Synth, {
            maxPolyphony: 8 // Adjust this number as needed
        }).toDestination();
        const notes = midi.tracks.flatMap(track => track.notes);
        const startTime = Tone.now() + 0.5;
        const totalDuration = notes[notes.length - 1].time + notes[notes.length - 1].duration;

        notes.forEach(note => {
            const midiNumber = note.midi % 16;
            const cell = document.getElementById(`cell_${Math.floor(midiNumber / GRID_SIZE)}_${midiNumber % GRID_SIZE}`);

            synth.triggerAttackRelease(note.name, note.duration, note.time + startTime, note.velocity);

            Tone.Transport.schedule(time => {
                if (cell) {
                    cell.classList.add("note-playing");
                    updateBinaryMessage(note.name.charCodeAt(0).toString(2).padStart(8, "0"));
                    updateGrid(binaryMessage);
                    setTimeout(() => cell.classList.remove("note-playing"), note.duration * 1000);
                }
            }, note.time + startTime - Tone.now());
        });

        Tone.Transport.start();
        Tone.Transport.scheduleOnce(() => {
            Tone.Transport.stop();
            displayArtisticShape(binaryMessage);
        }, totalDuration + 0.5);
    }

    function updateBinaryMessage(binaryValue) {
        binaryMessage += binaryValue;
        if (binaryMessage.length > MAX_BINARY_LENGTH) {
            binaryMessage = binaryMessage.substring(binaryMessage.length - MAX_BINARY_LENGTH);
        }
        drawBinaryCanvas(binaryMessage);
        updateMatrix(binaryMessage);
    }

    function drawBinaryCanvas(binaryMessage) {
        const canvas = document.getElementById("binaryCanvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            console.error('Canvas context is null');
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00FF00";
        ctx.font = '16px Courier New';
        const cols = Math.ceil(binaryMessage.length / 4); // Calculate the number of columns
        const rowHeight = canvas.height / 4; // Height of each row
        const colWidth = canvas.width / cols; // Width of each column

        for (let i = 0; i < binaryMessage.length; i++) {
            const x = (i % cols) * colWidth;
            const y = Math.floor(i / cols) * rowHeight + 16; // Adjust y coordinate for proper alignment
            ctx.fillText(binaryMessage[i], x, y);
        }
    }

    function updateMatrix(binaryMessage) {
        matrix.innerHTML = '';
        const columns = Math.floor(matrix.offsetWidth / 20);
        const rows = Math.floor(matrix.offsetHeight / 20);
        let binaryIndex = 0;

        for (let i = 0; i < columns; i++) {
            const column = document.createElement("div");
            column.className = "matrix-column";
            column.style.left = `${i * 50}px`;
            for (let j = 0; j < rows; j++) {
                const span = document.createElement("span");
                span.textContent = binaryMessage[binaryIndex % binaryMessage.length];
                span.style.color = binaryMessage[binaryIndex % binaryMessage.length] === '0' ? 'red' : '#00FF00'; // Set color of 0s to red
                span.style.animationDelay = `${Math.random() * 5}s`;
                column.appendChild(span);
                binaryIndex++;
            }
            matrix.appendChild(column);
        }
    }

    function updateGrid(binaryMessage) {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.style.backgroundColor = '#2d3748';
            cell.textContent = '';
        });

        const flowPattern = [
            0, 1, 2, 3,
            7, 6, 5, 4,
            8, 9, 10, 11,
            15, 14, 13, 12
        ];
        currentCellIndex = (currentCellIndex + 1) % flowPattern.length;
        const cellIndex = flowPattern[currentCellIndex];
        const row = Math.floor(cellIndex / GRID_SIZE);
        const col = cellIndex % GRID_SIZE;
        const cell = document.getElementById(`cell_${row}_${col}`);

        const binaryValue = binaryMessage[binaryMessage.length - 1];
        if (cell) {
            cell.style.backgroundColor = binaryValue === '1' ? '#00FF00' : '#FF0000';
            cell.textContent = binaryValue;
            if (binaryValue === '1') {
                lastGreenPosition = `${String.fromCharCode(65 + col)}${row + 1}`; // Example: A1, B3
            }
            cell.classList.add("glitch");
            setTimeout(() => cell.classList.remove("glitch"), 300);
        }
        drawBinaryCanvas(binaryMessage);
    }

    function binaryToString(binary) {
        return binary.match(/.{1,8}/g).map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
    }

    function displayArtisticShape(binaryMessage) {
        const canvas = document.getElementById('binaryCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Artistic representation of the binary message
        ctx.fillStyle = '#00FF00';
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const maxRadius = Math.min(centerX, centerY);

        for (let i = 0; i < binaryMessage.length; i++) {
            const angle = (i / binaryMessage.length) * Math.PI * 2;
            const radius = maxRadius * (i / binaryMessage.length);
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const value = binaryMessage[i];
            ctx.fillStyle = value === '1' ? '#00FF00' : '#FF0000';
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        }

        // Display the binary output as text in the center of the canvas
        ctx.fillStyle = 'white';
        ctx.font = '16px Courier New';
        ctx.fillText(binaryMessage, 10, 20);
    }

    initializeGameboard();

    document.getElementById("FileDrop").addEventListener("click", () => {
        document.getElementById("fileInput").click();
    });

    document.getElementById("fileInput").addEventListener("change", function () {
        handleFiles(this.files);
    });

    document.getElementById("encryptButton").addEventListener("click", async function () {
        if (overlay) {
            overlay.classList.add("active");
        }
        const songNumber = document.getElementById("songNumber").value;
        if (!songNumber) {
            alert("Please select a valid song number.");
            if (overlay) {
                overlay.classList.remove("active");
            }
            return;
        }

        const textToEncrypt = textInput.value;
        if (!textToEncrypt) {
            alert("Please enter text to encrypt.");
            if (overlay) {
                overlay.classList.remove("active");
            }
            return;
        }

        const response = await fetch(MIDI_FILES[songNumber - 1]);
        const arrayBuffer = await response.arrayBuffer();
        const midi = new Midi(arrayBuffer);
        binaryMessage = textToEncrypt.split("").map(char => char.charCodeAt(0).toString(2).padStart(8, "0")).join("");
        processMidi(midi);
        if (overlay) {
            overlay.classList.remove("active");
        }
    });

    document.getElementById("decryptButton").addEventListener("click", function () {
        const userPosition = prompt(`Enter the position of the last green "1" (e.g., A1, B3):`);
        if (userPosition === lastGreenPosition) {
            const decodedMessage = binaryToString(binaryMessage);
            textInput.value = decodedMessage;
            document.querySelector("h1").textContent = "GSL Encryption: " + decodedMessage;
        } else {
            alert("Incorrect position. Decryption failed.");
        }
    });

    function handleFiles(files) {
        if (!files.length) return;
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const midi = new Midi(e.target.result);
            processMidi(midi);
        };
        reader.readAsArrayBuffer(file);
    }
});
