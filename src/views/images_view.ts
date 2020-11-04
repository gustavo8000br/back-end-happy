import Image from '../models/Image'
require('dotenv').config()

const PORT = parseInt(process.env.PORT || "3333", 10)
const PUBLIC_URL = process.env.PUBLIC_URL || `localhost`;

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://${PUBLIC_URL}:${PORT}/uploads/${image.path}`
        };
    },
    renderMany(images: Image[]) {
       return images.map(image => this.render(image)); 
    }
};