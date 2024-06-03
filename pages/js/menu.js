function createMenu(menuItems) {
    const menu = document.getElementById('menu');
    menuItems.forEach(item => {
        if (item.type === 'link') {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            menu.appendChild(li);
        } else if (item.type === 'divider') {
            const div = document.createElement('div');
            div.className = 'divider divider-start font-bold';
            div.textContent = item.text;
            menu.appendChild(div);
        }
    });
}

fetch('/pages/js/menuData.json')
    .then(response => response.json())
    .then(data => {
        createMenu(data.menuItems);
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });
