# GSL Encryption Project

## Overview
The GSL Encryption Project is a web-based application designed to provide robust encryption and decryption functionalities, along with an interactive user interface for various cryptographic tasks. This project leverages modern web technologies and integrates music selection features to enhance user experience.
All current and intended (in privately used repos for now and not published on Gas-Lighting.com -- based on a order of clicking the letters to progress to the vercel app intergration via all the sources below:
<p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
    <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
    <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery"/>
    <img src="https://img.shields.io/badge/Tone.js-1F1F1F?style=for-the-badge&logoColor=white" alt="Tone.js"/>
    <img src="https://img.shields.io/badge/MIDI.js-FFCA28?style=for-the-badge&logo=javascript&logoColor=black" alt="MIDI.js"/>
    <img src="https://img.shields.io/badge/Canvas-1F1F1F?style=for-the-badge&logo=html5&logoColor=white" alt="Canvas"/>
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
    <img src="https://img.shields.io/badge/NVIDIA-76B900?style=for-the-badge&logo=nvidia&logoColor=white" alt="NVIDIA"/>
    <img src="https://img.shields.io/badge/CodeSandbox-040404?style=for-the-badge&logo=codesandbox&logoColor=white" alt="CodeSandbox"/>
    <img src="https://img.shields.io/badge/JSFiddle-4A4A55?style=for-the-badge&logo=jsfiddle&logoColor=white" alt="JSFiddle"/>
    <img src="https://img.shields.io/badge/GPT4-O-8B0000?style=for-the-badge&logo=openai&logoColor=white" alt="GPT4-O"/>
    <img src="https://img.shields.io/badge/Vue-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue"/>
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
    <img src="https://img.shields.io/badge/Qwik-028090?style=for-the-badge&logo=qwiklabs&logoColor=white" alt="Qwik"/>
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
    <img src="https://img.shields.io/badge/Upstash-339933?style=for-the-badge&logo=upstash&logoColor=white" alt="Upstash"/>
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</p>


## Features
- **Text Encryption and Decryption**: Encrypt and decrypt text input using advanced algorithms.
- **File Encryption**: Encrypt files uploaded by the user.
- **Interactive Canvas**: Visualize binary data on an HTML5 canvas.
- **Song Selection**: Choose from a list of songs to play during encryption/decryption processes.
- **Responsive Design**: User-friendly interface adaptable to various devices.

## Technologies Used
# GSL Encryption Project was based on:
## Slayy steganography
- [**The SLAYY Q Key**](https://slayy1.vercel.app) provides a tool for encoding and decoding messages within images. Inspired by the functionalities and design of SLAYY, this project enables secure message transmission through steganography.
- ## Overview
The GSL Encryption Project is a web-based application designed to provide robust encryption and decryption functionalities, along with an interactive user interface for various cryptographic tasks. This project leverages modern web technologies and integrates music selection features to enhance user experience.


## Features
- **Text Encryption and Decryption**: Encrypt and decrypt text input using advanced algorithms.
- **File Encryption**: Encrypt files uploaded by the user.
- **Interactive Canvas**: Visualize binary data on an HTML5 canvas.
- **Song Selection**: Choose from a list of songs to play during encryption/decryption processes.
- **Responsive Design**: User-friendly interface adaptable to various devices.
- **WPM Integration**: Calculates Words Per Minute (WPM) during typing and incorporates it into the encryption process.

## Installation
1. **Clone the Repository**:
   ```
   git clone https://github.com/musha1140/midi.git
   cd GSL-Encryption
   GSL-Encryption/
   ```
## Dependencies
 **install these libraries**:
``` npm install tailwindcss postcss autoprefixer```
## Create Tailwind Configuration Files:
 **Create tailwind.config.js and postcss.config.js files in your project root directory.**
 ```npm install tailwindcss postcss autoprefixer```

**tailwind.config.js**
```
module.exports = {
  purge: ['./public/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```
**postcss.config.js:**
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
## Create a src/styles.css file:
**This file will import the Tailwind CSS base, components, and utilities.**
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Update package.json Scripts:
**package.json:**
```
{
  "scripts": {
    "build:css": "npx tailwindcss build src/styles.css -o public/style.css"
  }
}
```
## Build Tailwind CSS:
**Run the following command to build the Tailwind CSS file:**
```
npm run build:css
```
## Serve the Application:
**Install http-server globally if you don't have it already:**
```
npm install -g http-server
```
**Serve the Application:**
```
http-server public
```
**Alternatively, you can use any other static file server or open the index.html file directly in your browser.**
```project-root/
│
├── public/
│   ├── index.html
│   ├── style.css
│
├── src/
│   ├── commandHandler.js
│   ├── logic.js
│   ├── styles.css // From tailwind
│
├── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
```

## Viewing Mermaid Diagram
To view the following logic portrayed in Mermaid , you can use the Mermaid Live Editor. Follow these steps:

1. Go to the [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/).
2. Copy the Mermaid diagram code below.
3. Paste the code into the Mermaid Live Editor.
4. The editor will render the diagram, allowing you to visualize the project structure and terminal logic. -- If not visible here

```mermaid
mindmap
  root((Input string))
    UI
      Input Area
      Grid Visualization
      Binary Canvas
      Matrix Display
      Console Output
    commandHandler.js
      handleCommand
        help
          Available commands
        clear
          displayMessage("clear")
        list songs
          listSongs
        play [song number]
          startProcess(songNumber)
        upload
          handleFileUpload
        save
          saveBinaryAsFile
        encrypt [message]
          handleEncryption(message)
        decrypt [last green position]
          handleDecryption(position)
        Other
          displayMessage("Unknown command...")
    index.js (Utility Functions)
      startProcess
        loadMidi
          Success
            Extract MIDI Notes
          Error
            displayMessage("Error...")
      handleFiles
        MIDI File
          Extract MIDI Notes
      handleEncryption
        Convert Text to Binary
          AES Encryption
            Create Grid Visualization
              Play Notes with Variations
                Calculate Frequency Range
                  Store Encrypted Data
                  Display Artistic Shape
                    Prompt for Download
                      Yes
                        saveBinaryAsFile
                      No
      handleDecryption
        Check Last Green Position or .slayy File
          Incorrect
            displayMessage("Error...")
          Correct or .slayy File
            Extract Binary Data
              AES Decryption
                Convert to Text
                  XOR with Original MIDI Binary
                    Transition to Grid
                      Display Grid Animation
                        Play Encrypted Music
```
## Visualization of Logic
![Image](https://kappa.lol/nZ38D) *(Proof of concept, though not implemented publicly)*

### File Structure
- **index.html**: The main HTML file.
- **style.css**: Custom styles.
- **logic.js**: Main JavaScript logic.
- **README.md**: Project readme.
- **assets/**: Directory for assets (images, audio files, etc.).
- **libs/**: Directory for external libraries (jQuery, Tone.js, Midi.js).

### Terminal Logic
- **Console**: The terminal console where the user interacts.
- **Welcome Message**: Initial message displayed to the user.
- **User Input**: Captures input from the user.
- **Command**: Determines the action based on user input.
  - **help**: Shows a help message.
  - **clear**: Clears the console.
  - **list songs**: Lists available songs.
  - **play <song_number>**: Plays the specified song.
  - **encrypt <message>**: Encrypts the user-provided message.
  - **decrypt**: Decrypts the message.
  - **upload**: Handles file upload for decryption.
- **Encrypt Message Flow**:
  - Convert the message to binary.
  - XOR with ECC.
  - Visualize the resulting grid.
- **Decrypt Message Flow**:
  - Convert binary back to the message.
- **File Upload**:
  - Handles the upload and processing of .slayy files for decryption.
- **Play Song**:
  - Fetches the MIDI file.
  - Parses the MIDI file.
  - Plays the MIDI file.
  - Updates the gameboard visualization.


## Acknowledgements
- This project takes inspiration from Ghidra's **Sleigh** for its robust and versatile approach to data encryption and steganography.
- [**The SLAYY Q Key**](https://slayy1.vercel.app)  steganography was created as my first step into the pattern and encryption programming space. 

If you just want to use this repo and have some security I recommend using this structure instead:
**Static (for future) as it stands incomplete right now:**
```
GSL-Encryption/
│
├── index.html          # Main HTML file
├── style.css           # Custom styles
├── logic.js            # Main JavaScript logic
├── README.md           # Project readme
│
├── assets/             # Directory for assets (images, audio files, etc.)
│   ├── song1.mid - ToneJS Midi
│   ├── song2.wav - FFT + Recompile to "simulate midi"
│   └── song3.mp3 - FFT + Using mathJS and reverse engineering the binary files (neondb, mongodb via replit's sql)
│
└── libs/               # Directory for external libraries
    ├── jquery.min.js
    ├── tone.min.js
    └── midi.min.js
```
Please use the intended design to create a more polished version, or to use the idea to help better your own idea.
https://www.gas-lighting.com is my website (old, used to run a live service Gnome enviroment as an experiment, so it is just sitting there)
