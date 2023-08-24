// index_testb.js

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submitActionBtn');
    const actionInput = document.getElementById('actionInput');
    const resultDiv = document.getElementById('result');

    submitButton.addEventListener('click', async () => {
        const actionData = JSON.parse(actionInput.value);

        try {
            const response = await fetch('/submitTestAction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(actionData)
            });

            const result = await response.text();
            resultDiv.textContent = result;
        } catch (err) {
            console.error('Error:', err);
            resultDiv.textContent = 'Error submitting action.';
        }
    });
});
