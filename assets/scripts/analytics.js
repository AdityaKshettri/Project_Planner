const intervalId = setInterval(() => {
    console.log("Starting Analytics...")
},2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    clearInterval(intervalId);
});