document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById('createRuleForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Extract rule data from the form
        const ruleData = {
            category: form.elements['category'].value,
            condition: form.elements['condition'].value,
            action: form.elements['action'].value
        };

        // Send rule data to the server
        fetch('/defineRule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ruleData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response
            if (data.status === 'success') {
                alert('Rule created successfully!');
                // Redirect to the main page
                window.location.href = '/';
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('There was an error creating the rule:', error);
        });
    });
});
