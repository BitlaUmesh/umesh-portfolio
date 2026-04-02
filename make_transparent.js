import { Jimp, intToRGBA } from 'jimp';

async function processImage() {
    try {
        const image = await Jimp.read('e:/umesh-portfolio/public/favicon.png');
        const width = image.bitmap.width;
        const height = image.bitmap.height;
        
        const bgColorInt = image.getPixelColor(1, 1);
        const { r, g, b } = intToRGBA(bgColorInt);
        
        let tolerance = 20;

        image.scan(0, 0, width, height, function (x, y, idx) {
            const pr = this.bitmap.data[idx + 0];
            const pg = this.bitmap.data[idx + 1];
            const pb = this.bitmap.data[idx + 2];
            
            if (Math.abs(pr - r) <= tolerance && Math.abs(pg - g) <= tolerance && Math.abs(pb - b) <= tolerance) {
                this.bitmap.data[idx + 3] = 0; // set alpha to 0
            }
        });
        
        await image.write('e:/umesh-portfolio/public/favicon_transparent.png');
        console.log("Success");
    } catch(err) {
        console.error("Error:", err);
    }
}

processImage();
