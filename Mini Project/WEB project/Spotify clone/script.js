async function main() {
    let audio; // The current audio object playing
    let currentIndex = 0; // Index of the currently playing song
    let currentPlaylistData = null; // Current playlist's song data
    let isNavigating = false; // Prevent multiple clicks on navigation buttons

    // 1. Fetch all playlists from the server
    async function getPlaylistsongs() {
        let PlaylistSongs = [];
        let PlaylistSongs_href = [];

        try {
            let playlist = await fetch('https://spotifyminiplayer.vercel.app/All_songs/');
            let response_playlist = await playlist.text();

            let div_playlist = document.createElement('div');
            div_playlist.innerHTML = response_playlist;

            let all_a_playlist = div_playlist.getElementsByTagName('a');

            for (let i = 0; i < all_a_playlist.length; i++) {
                PlaylistSongs.push(all_a_playlist[i].innerText);
                PlaylistSongs_href.push(all_a_playlist[i].href);
            }
        } catch (error) {
            console.error('Error fetching playlists:', error);
        }

        return { PlaylistSongs, PlaylistSongs_href };
    }

    // 2. Fetch the list of songs from a playlist
    async function getSongslist(playlistUrl) {
        let song_name_list = [];
        let song_creator_list = [];
        let song_href_list = [];
        let song_photo_list = [];

        try {
            const folderName = playlistUrl.split('/')[4];

            const [songResponse, imageResponse] = await Promise.all([fetch(playlistUrl.trim()), fetch(`https://spotifyminiplayer.vercel.app/All_songs/${folderName.trim()}/${folderName.trim()}Thumbnail/`)]);

            let response_https = await songResponse.text();
            let response_img = await imageResponse.text();

            let div = document.createElement('div');
            div.innerHTML = response_https;

            let div2 = document.createElement('div');
            div2.innerHTML = response_img;

            let all_a = Array.from(div.getElementsByTagName('a')).slice(1);
            let all_a_img = Array.from(div2.getElementsByTagName('a'));

            for (let i = 0; i < all_a.length; i++) {
                if (all_a[i] && all_a_img[i] && all_a[i].href.endsWith(".mp3") && all_a_img[i].href.endsWith('.jpg')) {
                    song_name_list.push(all_a[i].innerText.replace(/(\s-\[.*\]|\.[^.]+)$/, '').replace(/(\s?-\[.*\])$/, '').trim());
                    song_href_list.push(all_a[i].href);
                    song_photo_list.push(all_a_img[i].href);

                    let creatorName = all_a[i].innerText.match(/-\[(.*?)\]/);
                    song_creator_list.push(creatorName ? creatorName[1] : "Unknown");
                }
            }

        } catch (error) {
            console.error('Error fetching song details:', error);
        }

        return { song_name_list, song_creator_list, song_href_list, song_photo_list };
    }

    // 3. Handle previous and next song navigation
    function nextPrev_song() {
        let prev_btn = document.querySelector('.prev_btn');
        let next_btn = document.querySelector('.next_btn');

        // Event listener for the previous button
        prev_btn.addEventListener('click', async () => {
            if (isNavigating || !currentPlaylistData) return; // Prevent multiple clicks or navigation with no data
            isNavigating = true;

            currentIndex = Math.max(0, currentIndex - 1); // Decrease index, but not below 0
            await handleSongClick(currentIndex, currentPlaylistData); // Pass the current playlist data

            isNavigating = false; // Allow navigation again
        });

        // Event listener for the next button
        next_btn.addEventListener('click', async () => {
            if (isNavigating || !currentPlaylistData) return; // Prevent multiple clicks or navigation with no data
            isNavigating = true;

            currentIndex = Math.min(currentPlaylistData.song_name_list.length - 1, currentIndex + 1); // Increase index, but not beyond the list length
            await handleSongClick(currentIndex, currentPlaylistData); // Pass the current playlist data

            isNavigating = false; // Allow navigation again
        });
    }

    // 4. Display all available playlists
    async function displaySongsList() {
        let playlistData = await getPlaylistsongs();
        let PlaylistSongs = playlistData.PlaylistSongs.slice(1).map(item => item.replace(/\/$/, ''));
        let PlaylistSongs_href = playlistData.PlaylistSongs_href.slice(1);

        let songList = document.querySelector('.songList');
        let songPlaylist = document.querySelector('.songPlaylist');

        for (let i = 0; i < PlaylistSongs.length; i++) {
            let song_info1 = document.createElement('div');
            song_info1.classList.add('song_info-1');
            song_info1.dataset.no = i;
            song_info1.innerHTML = ` 
                <div>
                    <img src="music-icon.svg" alt="music-icon">
                    <div>
                        <h2>${PlaylistSongs[i].replace(/_/g, ' ')}</h2>
                    </div>
                </div>
                <div class="play-2_btn"> <img src="play-2_btn.svg" alt="play-btn"> </div>`;

            song_info1.addEventListener('click', async () => {
                let playlist_songUrl = PlaylistSongs_href[i];

                let right_header = document.getElementsByClassName('right-header')[0];
                right_header.innerHTML = `<h2><span>${PlaylistSongs[i].replace(/_/g, ' ')}</span> </h2>`;

                // Reset the currentIndex when switching playlists
                currentIndex = 0;

                // Clear the current audio if there's one playing
                if (audio) {
                    audio.pause();
                    audio = null;
                }

                currentPlaylistData = await getSongslist(playlist_songUrl);
                displaySongsInPlaylist(currentPlaylistData, songPlaylist);
                nextPrev_song(); // Make sure navigation works with the new playlist
            });

            songList.appendChild(song_info1);
        }
    }

    // 5. Display songs from the selected playlist
    function displaySongsInPlaylist(songData, songPlaylist) {
        songPlaylist.innerHTML = '';

        let nameList = songData.song_name_list;
        let creatorList = songData.song_creator_list;
        let photoList = songData.song_photo_list;

        for (let i = 0; i < nameList.length; i++) {
            let song = document.createElement('div');
            song.classList.add('song');
            song.dataset.no = i;
            song.innerHTML = `
                <div class="play">
                    <img src="play.svg" alt="play">
                </div>
                <img src="${photoList[i]}" alt="Album Art">
                <h2>${nameList[i]}</h2>
                <p>${creatorList[i]}</p>
            `;

            song.addEventListener('click', async () => {
                await handleSongClick(i, songData);
            });

            songPlaylist.appendChild(song);
        }
    }

    // 6. Handle when a song is clicked
    async function handleSongClick(index_no, songData) {
        // Play the song and wait for it to start
        await playSong(index_no, songData);
    
        // Get the song details container
        let song_details = document.querySelector('.song_details');
        
        // Clear any previous song details
        song_details.innerHTML = '';
    
        // Create new song details
        let song_Name = document.createElement('div');
        song_Name.classList.add('song_Name');
        song_Name.innerHTML = ` 
            <img id="currentImage" src="${songData.song_photo_list[index_no] || 'default-image.jpg'}" alt="currentImage">
            <div class="song_info">
                <h2>${songData.song_name_list[index_no] || 'Unknown Song'}</h2>
                <p>${songData.song_creator_list[index_no] || 'Unknown Creator'}</p>
            </div>
        `;
    
        // Append the new song details to the container
        song_details.appendChild(song_Name);
    
        // Update the current time and duration of the song
        musicTime_curr_duration();
    }
    
    // 7. Play the selected song
    async function playSong(index, songData) {
        let songUrl = songData.song_href_list[index];

        // If there's already an audio playing, pause it
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reset the current time if you want to start from the beginning
        }

        // Create a new audio object
        audio = new Audio(songUrl);

        try {
            await audio.play(); // Wait for the play promise to resolve
            play_btn.innerHTML = `<img src="play.svg" alt="play-btn">`; // Update button to show play
        } catch (error) {
            console.error("Error playing audio:", error);
        }

        setupAudioControls();
    }

    // 8. Play/Pause button functionality
    let play_btn = document.querySelector('.play-2_btn');
    play_btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            play_btn.innerHTML = `<img src="play.svg" alt="pause-btn">`;
        } else {
            audio.pause();
            play_btn.innerHTML = `<img src="pause.svg" alt="play-btn">`;
        }
    });

    // 9. Setup audio controls (volume, mute, etc.)
    function setupAudioControls() {
        let isMuted = false;
        let previousVolume = audio.volume;

        // Mute/Unmute functionality
        document.querySelector('#muteOnOff').addEventListener('click', () => {
            if (isMuted) {
                audio.volume = previousVolume;
                isMuted = false;
                document.querySelector('#muteOnOff').src = `volume_mute.svg`;
            } else {
                previousVolume = audio.volume;
                audio.volume = 0;
                isMuted = true;
                document.querySelector('#muteOnOff').src = `mute-icon.svg`;
            }
        });

        // Volume slider functionality
        document.querySelector('.range').addEventListener('change', (e) => {
            let volume = parseInt(e.target.value) / 100;
            audio.volume = volume;
            document.querySelector('.range').style.background = `linear-gradient(to right, rgb(62, 160, 12) ${parseInt(e.target.value)}%, rgb(117, 121, 117) ${parseInt(e.target.value)}%)`;
        });

        document.querySelector('.timeLine').addEventListener('click', (e) => {
            let progressBar = document.querySelector('.progress-bar');
            let timeLine = document.querySelector('.timeLine');
            let progress = (e.offsetX / e.target.getBoundingClientRect().width) * 100;

            progressBar.style.left = ` ${progress}%`;
            timeLine.style.background = `linear-gradient(to right, rgb(96, 255, 16) ${progress}%, rgb(117, 121, 117) ${progress}%)`;

            audio.currentTime = (audio.duration * progress) / 100;
        });

        // Update time and progress bar
        audio.addEventListener('timeupdate', () => {
            let progress = (audio.currentTime / audio.duration) * 100;

            document.querySelector('.progress-bar').style.left = `${progress}%`;
            let timeLine = document.querySelector('.timeLine');
            timeLine.style.background = `linear-gradient(to right, rgb(62, 160, 12) ${progress}%, rgb(117, 121, 117) ${progress}%)`;

            musicTime_curr_duration();
        });
    }

    // 10. Display current time and music duration
    function musicTime_curr_duration() {
        let musicTimeline = document.querySelector('.musicTime');
        let currMusicTime = document.querySelector('.currenTime');

        function formatTime(seconds) {
            let minutes = Math.floor(seconds / 60);
            let remainingSeconds = Math.floor(seconds % 60);
            return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }

        setTimeout(() => {
            currMusicTime.innerText = formatTime(audio.currentTime);
            musicTimeline.innerText = formatTime(audio.duration);
        }, 30);
    }

  

    // 12. Display the song list initially
    displaySongsList(); // Fetch and display the playlist initially when the page loads
}

// Call the main function to run the script
main();
 
