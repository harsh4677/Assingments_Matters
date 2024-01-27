## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

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

        // Function to update the counter and display
        function updateCounter() {
            count++;
            document.getElementById('counter').textContent = count;
        }

        // Set interval to update the counter every second (1000 milliseconds)
        setInterval(updateCounter, 1000);
    </script>

</body>
</html>
