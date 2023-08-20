document.addEventListener("DOMContentLoaded", function() {
    
    // Fetch and display the business rules
    fetch('/api/rules')
        .then(response => response.json())
        .then(data => {
            const rulesTableBody = document.querySelector('#rulesTable tbody');
            data.rules.forEach(rule => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${rule.category}</td>
                    <td>${rule.condition}</td>
                    <td>${rule.action}</td>
                `;
                rulesTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('There was an error fetching the business rules:', error);
        });
    
    // Fetch and display the rule schema
    fetch('/api/ruleSchema')
        .then(response => response.json())
        .then(data => {
            const schemaDisplay = document.getElementById('schemaDisplay');
            schemaDisplay.textContent = JSON.stringify(data.schema, null, 2);
        })
        .catch(error => {
            console.error('There was an error fetching the rule schema:', error);
        });

    // Check if MongoDB is set up correctly
    fetch('/api/checkDBConnection')
        .then(response => response.json())
        .then(data => {
            if (data.status !== 'success') {
                alert('Error connecting to MongoDB: ' + data.message);
            }
        })
        .catch(error => {
            console.error('There was an error checking the MongoDB connection:', error);
        });

});
