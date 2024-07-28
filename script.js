// Define parameters and initial state
let currentScene = 0;

// Define the data and scenes
const scenes = [
    { id: 0, title: "Global Carbon Emissions", data: "data/emissions_overview.json" },
    { id: 1, title: "Emissions by Sector", data: "data/emissions_by_sector.json" },
    { id: 2, title: "Impact of Renewable Energy", data: "data/renewable_impact.json" }
];

// Function to render scenes
function renderScene(scene) {
    d3.select("#visualization-container").html(""); // Clear existing content

    // Load data for the scene
    d3.json(scene.data).then(data => {
        // Render the visualization based on the data
        // Add annotations, charts, etc.
    });

    // Update scene title
    d3.select("body").append("h1").text(scene.title);
}

// Initial render
renderScene(scenes[currentScene]);

// Event listeners for navigation
d3.select("body").append("button").text("Next").on("click", () => {
    currentScene = (currentScene + 1) % scenes.length;
    renderScene(scenes[currentScene]);
});
