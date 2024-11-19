


function createCard(title, cName, views, monthsOld, duration, thumbnail) {


    function viewStr(views) {
        if (views < 1000) {
            return views;
        }
        else if (views >= 1000000000) {
            return (views / 1000000000).toFixed(1) + "B";
        }
        else if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + "M";
        }
        else {
            return (views / 1000).toFixed(1) + "K";
        }
    }


    let Html = `        
    <div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="Thumbnail" class="thum">
        <div class="duration">${duration}</div>
        </div>
        <div class="text">
            <h2 id="h2">${title}</h2>
            <p id="p">${cName} • ${viewStr(views)} views • ${monthsOld} months ago</p>
        </div>
    </div>`;


    document.querySelector(".container").innerHTML += Html;
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
