const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append image element
    const image = document.createElement('img');
    image.src = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400";
    image.height = '300';
    pageContent.appendChild(image);

    // Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    // Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town.';
    pageContent.appendChild(copy);

    // Append pageContent to content
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;