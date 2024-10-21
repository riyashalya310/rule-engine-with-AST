// frontend/app.js

document.getElementById('create-rule-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const rule = document.getElementById('rule').value;
    const response = await fetch('/create_rule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rule: rule }),
    });
    const result = await response.json();
    console.log('Rule created with ID:', result.rule_id);
});
