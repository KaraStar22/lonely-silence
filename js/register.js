document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        login: document.querySelector('input').value,
        password: document.querySelector('textarea').value
    }

    sendForm(data);
});

async function sendForm(data){
    const res = await fetch('./register.php', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.srtingify(data)
    });

    const result = await res.json();

    if (res.status === 201){
        alert('Thank you! ${result.message}')
    }else {
        alert('Oops, something went wrong');
    }
}
