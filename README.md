A simple and aesthetic Pomodoro Timer heavily inspired by "https://studywithme.io/aesthetic-pomodoro-timer/", built with HTML, CSS, and JavaScript, designed to help you stay focused and productive using the Pomodoro Technique.

  Features
 Three Modes – Pomodoro (25 min), Short Break (5 min), Long Break (15 min)
 Start, Pause, and Reset – Full control over the timer
 Mode Switching – Seamless transitions between work and break sessions
 Spotify Music Player – Listen to music while working
 Minimalist UI – Clean and responsive design

 🛠 Technologies Used
HTML – Structure of the app
CSS – Custom styling and animations
JavaScript – Timer functionality and mode switching


 🎵 Spotify Music Player
This project includes an embedded Spotify playlist to enhance your focus. You can replace the playlist URL in index.html with your favorite music.

html
Copy
Edit
<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID" 
    width="300" height="80" frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy">
</iframe>

 you can use your own backgrounds or some of my backgrounds which i've given in the images folder
 i changed the spotify player's default colour to blue to match the vibe, if you wanna change the colour or just get the default one you can remove 
 .spotify-container iframe {
    filter: hue-rotate(180deg) brightness(1.2) contrast(1.1);
}
on 127th line in css file

 📸 Screenshots
![image](https://github.com/user-attachments/assets/1554b7be-18ca-4d6b-b255-fec6b410f0ee)

![image](https://github.com/user-attachments/assets/e4ca3b06-82dc-45c9-a78f-6a8a160fce37)

![image](https://github.com/user-attachments/assets/bd41d27a-8d10-47c5-a648-46eb2cae0886)

![image](https://github.com/user-attachments/assets/4fa76caf-0818-446c-8599-0200d951fee9)

 (coming soon)
🔹 Custom Timer Durations – Let users set custom work and break times
🔹 Dark Mode – Toggle between light and dark themes
🔹 Task Tracking – Add a to-do list feature for better productivity
🔹settings is non functional right now, will add that soon

📜 License
This project is licensed under the MIT License.

