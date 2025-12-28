function onPageLoad() {
    const mainContainer = document.getElementById('content');
    const hoursArray = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'];

    // Headline
    const headline = document.createElement('h1');
    headline.textContent = "Beary's Breakfast Bar";

    // Description
    const descContainer = document.createElement('div');
    const descText = document.createElement('p');
    const descName = document.createElement('h3');

    descText.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    descName.textContent = "Goldilocks";

    descContainer.appendChild(descText);
    descContainer.appendChild(descName);

    // Hours
    const hoursContainer = document.createElement('div');
    const hoursTitle = document.createElement('h2');
    const hoursText = document.createElement('div');

    hoursTitle.textContent = "Hours";
    hoursArray.forEach(day => {
        const hoursTextElement = document.createElement('p');
        hoursTextElement.textContent = day;
        hoursText.appendChild(hoursTextElement);
    });

    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(hoursText);

    // Location
    const locationContainer = document.createElement('div');
    const locationHeader = document.createElement('h2');
    const locationText = document.createElement('p');

    locationHeader.textContent = 'Location';
    locationText.textContent = '123 Forest Drive, Forestville, Maine';

    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(locationText);

    // Appending everything
    mainContainer.appendChild(headline);
    mainContainer.appendChild(descContainer);
    mainContainer.appendChild(hoursContainer);
    mainContainer.appendChild(locationContainer);

}

export { onPageLoad };