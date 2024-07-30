function addTransaction() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (type && name && amount) {
        const tableBody = document.getElementById('transaction-table-body');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${type.charAt(0).toUpperCase() + type.slice(1)}</td>
            <td>${name}</td>
            <td>$${amount}</td>
            <td><button onclick="deleteTransaction(this)">Delete</button></td>
        `;

        tableBody.appendChild(row);

        // Clear input fields after adding transaction
        document.getElementById('type').value = '';
        document.getElementById('name').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please fill out all fields');
    }
}

function deleteTransaction(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}