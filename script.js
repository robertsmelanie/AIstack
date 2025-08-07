const tools = [
    {
        name: "Vidyo.ai",
        tags: ["🎥 Video Editing", "Automation"],
        match: ["YouTuber", "Repurpose content", "Under $30", "Simple & fast (low-touch)"],
        cost: 20,
        score: 8,
        link: "https://affiliate-link.com/vidyo"
    },
    {
        name: "Copy.ai",
        tags: ["✍️ AI Writing", "SEO"],
        match: ["YouTuber", "Blogger", "Optimize SEO", "$30–$70", "Simple & fast (low-touch)"],
        cost: 49,
        score: 9,
        link: "https://affiliate-link.com/copyai"
    },
    {
        name: "TubeBuddy",
        tags: ["📈 Analytics", "SEO"],
        match: ["YouTuber", "Optimize SEO", "Under $30", "Simple & fast (low-touch)"],
        cost: 9,
        score: 7,
        link: "https://affiliate-link.com/tubebuddy"
    },
    {
        name: "Thumbnail.ai",
        tags: ["🎨 Visuals"],
        match: ["YouTuber", "Create better visuals", "Under $30"],
        cost: 10,
        score: 7,
        link: "https://affiliate-link.com/thumbnailai"
    },
    {
        name: "Beehiiv",
        tags: ["📬 Email Marketing"],
        match: ["Blogger", "Grow email list", "$30–$70"],
        cost: 49,
        score: 8,
        link: "https://affiliate-link.com/beehiiv"
    },
    {
        name: "Jasper AI",
        tags: ["✍️ AI Writing"],
        match: ["Blogger", "Course Creator", "Optimize SEO", "$70–$150"],
        cost: 89,
        score: 9,
        link: "https://affiliate-link.com/jasper"
    }
];

document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const creator = document.getElementById("creatorType").value;
    const goals = Array.from(document.getElementById("goals").selectedOptions).map(o => o.value);
    const budget = document.getElementById("budget").value;
    const workflow = document.getElementById("workflow").value;

    const toolListDiv = document.getElementById("toolList");
    toolListDiv.innerHTML = "";

    let total = 0;
    let scoreSum = 0;
    let matchedTools = 0;

    const filtered = tools.filter(tool => {
        const matched = tool.match.some(tag =>
            [creator, budget, workflow, ...goals].includes(tag)
        );
        return matched;
    }).slice(0, 5); // Limit to 5 tools

    filtered.forEach(tool => {
        const card = document.createElement("div");
        card.className = "border rounded p-4 shadow";

        card.innerHTML = `
          <h3 class="text-xl font-bold mb-1">${tool.name}</h3>
          <p class="text-sm mb-2">${tool.tags.join(", ")}</p>
          <p class="mb-2 text-gray-600">Why it fits: Tailored to your content type and goals.</p>
          <a href="${tool.link}" target="_blank" class="inline-block bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
            🔗 Try ${tool.name}
          </a>
        `;

        total += tool.cost;
        scoreSum += tool.score;
        matchedTools++;

        toolListDiv.appendChild(card);
    });

    document.getElementById("totalCost").textContent = `$${total}`;
    document.getElementById("valueScore").textContent = matchedTools ? Math.round(scoreSum / matchedTools) : 0;
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
});