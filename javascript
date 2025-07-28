<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Gaming Platform</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #111;
      color: #fff;
      text-align: center;
      padding: 40px;
    }
    select, button {
      padding: 10px;
      margin: 10px;
      font-size: 16px;
    }
    #game-message {
      margin-top: 20px;
      font-size: 20px;
      color: #00ffcc;
    }
  </style>
</head>
<body>

  <h1>🎮 Simple Gaming Platform</h1>

  <label for="gameSelect">Choose a game:</label>
  <select id="gameSelect">
    <option value="">-- Select a Game --</option>
    <option value="Space Invaders">Space Invaders</option>
    <option value="Zombie Attack">Zombie Attack</option>
    <option value="Puzzle Master">Puzzle Master</option>
  </select>

  <button onclick="startGame()">Start Game</button>

  <div id="game-message"></div>

  <script>
    function startGame() {
      const selectedGame = document.getElementById("gameSelect").value;
      const messageDiv = document.getElementById("game-message");

      if (selectedGame) {
        messageDiv.textContent = `🚀 Starting "${selectedGame}"... Good luck!`;
      } else {
        messageDiv.textContent = "⚠️ Please select a game to start.";
      }
    }
  </script>

</body>
</html>
