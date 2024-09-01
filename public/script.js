document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/crypto');
        const data = await response.json();
        const container = document.getElementById('crypto-container');

        data.forEach(crypto => {
            const cryptoItem = document.createElement('div');
            cryptoItem.className = 'crypto-item';
            cryptoItem.innerHTML = `
                <img src="${crypto.image}" alt="${crypto.name}">
                <h2>${crypto.name}</h2>
                <p>Price: $${crypto.current_price}</p>
                <p>Market Cap: $${crypto.market_cap.toLocaleString()}</p>
            `;
            container.appendChild(cryptoItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
