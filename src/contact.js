function loadContact() {
    const mainContainer = document.getElementById('content');

    // Header
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us';

    // Mama Bear
    const mamaContainer = document.createElement('div');
    const mamaName = document.createElement('h3')
    const mamaJob = document.createElement('p');
    const mamaNumber = document.createElement('p');
    const mamaEmail = document.createElement('p');

    mamaName.textContent = 'Mama Bear';
    mamaJob.textContent = 'Chef';
    mamaNumber.textContent = '555-555-5554';
    mamaEmail.textContent = 'totallyRealEmail@notFake.com';

    mamaContainer.appendChild(mamaName);
    mamaContainer.appendChild(mamaJob);
    mamaContainer.appendChild(mamaNumber);
    mamaContainer.appendChild(mamaEmail);

    // Papa Bear
    const papaContainer = document.createElement('div');
    const papaName = document.createElement('h3')
    const papaJob = document.createElement('p');
    const papaNumber = document.createElement('p');
    const papaEmail = document.createElement('p');

    papaName.textContent = 'Papa Bear';
    papaJob.textContent = 'Manager';
    papaNumber.textContent = '555-555-5555';
    papaEmail.textContent = 'perfectlyRealEmail@notFake.com';

    papaContainer.appendChild(papaName);
    papaContainer.appendChild(papaJob);
    papaContainer.appendChild(papaNumber);
    papaContainer.appendChild(papaEmail);

    // Appending everything
    mainContainer.appendChild(contactHeader);
    mainContainer.appendChild(mamaContainer);
    mainContainer.appendChild(papaContainer);
}

export { loadContact };