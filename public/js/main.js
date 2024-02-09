document.getElementById('shortenBtn').addEventListener('click', async () => {
    const originalUrl = document.getElementById('originalUrl').value;
    if (!originalUrl || !isValidUrl(originalUrl)) {
        alert('Please enter a valid URL');
        return;
    }
    try {
        const response = await fetch('/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ originalUrl })
        });
        const data = await response.json();
        const shortenedLink = `${window.location.href}${data.shortUrl}`;
        document.getElementById('result').innerHTML = `<a href="${shortenedLink}" target="_blank"><span>Shortened URL</span> : ${shortenedLink}</a>`;
    } catch (err) {
        console.error('Error shortening the URL : ', err);
        alert('Error shortening the URL , PLEASE TRY AGAIN');
    }
});

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}