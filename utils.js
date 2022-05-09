export function renderListItem(animal) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `./animals.js/?id=${animal.id}`;
    a.textContent = animal.name;
    li.append(a);
    return li;
}


export function findById(id, data) {
    for (let item of data) {
        if (id === item.id) {
            return item;
        }
    }
    // return data.find((item) => item.id === id);
}
