(() => {
    const $table = document.getElementById('date_table'),
        currentTimestamp = Date.now();
    let rows = [];
    for ( let i = 0; i < 7; i++ ){
        const ts = currentTimestamp + (i * 60 * 60 * 24 * 1000),
            date = new Date(ts),
            value = (date.getDay()%2?300:200);
        rows.push(`
                <tr>
                    <td>${date.toLocaleDateString()}</td>
                    <td>${value} рублей</td>
                </tr>
            `);
    }
    $table.innerHTML = rows.join('');
})();