document.getElementById("chatbotForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const techStack = document.getElementById("techStack").value.toLowerCase();
    const duration = document.getElementById("duration").value;
    const qualification = document.getElementById("qualification").value;

    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Loading...";

    try {
        const res = await fetch(`http://127.0.0.1:5005/data`);
        const data = await res.json();

        // Get roadmap and YouTube links based on techStack
        const roadmap = data.roadmaps[techStack] || "No roadmap available";
        const youtubeLinks = data.youtube[techStack] ? `<a href="${data.youtube[techStack]}" target="_blank">Watch Video</a>` : "No videos available";

        responseDiv.innerHTML = `
            <p><strong>Motivation:</strong> Learning ${techStack} is a great decision! Stay consistent and keep practicing.</p>
            <p><a href="${roadmap}" target="_blank">View Roadmap</a></p>
            <p>${youtubeLinks}</p>
        `;
    } catch (error) {
        responseDiv.innerHTML = "Error fetching response!";
    }
});
function getGuidance() {
    document.getElementById("chatbotForm").dispatchEvent(new Event("submit"));
}

