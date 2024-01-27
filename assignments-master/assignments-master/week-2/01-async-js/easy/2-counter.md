## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Counter</title>
</head>
<body>

    <h1 id="counter">0</h1>

    <script>
        // Initialize counter variable
        let count = 0;

        // Function to update the counter and schedule the next update
        function updateCounter() {
            count++;
            document.getElementById('counter').textContent = count;

            // Schedule the next update after 1000 milliseconds (1 second)
            setTimeout(updateCounter, 1000);
        }

        // Start the initial update
        updateCounter();
    </script>

</body>
</html>
__________________________________________________________________________________________________________________
// Initialize counter variable
let count = 0;

// Function to update the counter and schedule the next update
function updateCounter() {
    count++;
    console.log(count);

    // Schedule the next update after 1000 milliseconds (1 second)
    setTimeout(updateCounter, 1000);
}

// Start the initial update
updateCounter();



































































(Hint: setTimeout)