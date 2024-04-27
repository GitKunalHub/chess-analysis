function updateMoveSummary(analysisData) {
    const bestMovesCount = analysisData.filter(
        (move) => move.classification === "best"
    ).length;
    const inaccuraciesCount = analysisData.filter(
        (move) => move.classification === "inaccuracy"
    ).length;
    // ... similar logic for mistakes and blunders

    document.getElementById("best-moves-count").textContent = bestMovesCount;
    // ... similar updates for other counts
}

// Call the update function after analysis is complete, passing the analysis data
updateMoveSummary(analysisData);
