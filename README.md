# Image Gallery

This project is a simple image gallery that displays images in a grid format. When an image is clicked, it opens in a modal with a blurred background. Users can navigate through the images using previous and next buttons. The gallery uses a custom font from Google Fonts for a modern look.

## Features

- Responsive grid layout for displaying images.
- Click on an image to view it in a modal.
- Modal includes previous and next buttons to navigate through images.
- Modal background is blurred when an image is opened.
- Click outside the modal or on the close button to exit the modal.
- Custom font from Google Fonts is used for the text.

## Technologies Used

- HTML
- CSS
- JavaScript
- Google Fonts

## Setup and Usage

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/image-gallery.git
    cd image-gallery
    ```

2. **Ensure your project structure looks like this**:
    ```
    image-gallery/
    ├── img/
    │   ├── image1.jpeg
    │   ├── image2.jpeg
    │   ├── image3.jpeg
    │   ├── image4.jpeg
    │   ├── image5.jpeg
    │   ├── image6.jpeg
    │   ├── image7.jpeg
    │   ├── image8.jpeg
    │   ├── image9.jpeg
    │   └── image10.jpeg
    ├── index.html
    ├── style.css
    └── script.js
    ```

3. **Open `index.html` in a web browser**:
    - You can open `index.html` directly in your web browser to view the gallery.

## File Descriptions

- `index.html`: Contains the HTML structure of the gallery.
- `style.css`: Contains the CSS styles for the gallery layout and modal.
- `script.js`: Contains the JavaScript code to handle image clicking, modal functionality, and navigation.

## Customizing

### Adding More Images

- Place your image files in the `img/` directory.
- Add corresponding `<img>` tags in the `index.html` file inside the `.gallery` div, ensuring you set appropriate `src`, `alt`, and `data-index` attributes.

### Changing the Font

- To change the font, go to [Google Fonts](https://fonts.google.com/), choose a font, and update the `<link>` tag in the `<head>` of `index.html`.
- Update the `font-family` property in the `style.css` file to use the new font.

