# Image Pixelation Script

This script pre-processes judge images using a pixelation effect inspired by p5.js to generate static pixelated images for the hackathon landing page. This approach improves website performance by avoiding runtime image processing.

## Features

- Applies a clean pixelation effect to images
- Creates circular masked images for judge portraits
- Automatically handles image resizing and optimization
- Outputs WebP format for better performance
- Creates placeholder images when needed

## Usage

### Running the Script

```bash
# Install dependencies (if not already installed)
bun add sharp

# Run the script
bun scripts/dither-images.js
```

### Image Placement

1. Place original judge images in `/public/images/judges/`
2. Run the script to generate dithered versions in `/public/images/judges-dithered/`
3. The judges component will automatically use the dithered images

### Customizing Pixelation

You can customize the pixelation effect by modifying the options in the `pixelateImage` function:

- `pixelSize`: Controls the size of each pixel block (higher values = more pixelated)
- `grayscale`: Set to true for black and white images
- `contrast`: Adjust the contrast level (1.2 is default)
- `dark`: Set to true for darker images
- `circle`: Set to true to create circular masked images

### Naming Conventions

You can use specific naming patterns to control the pixelation effect:

- Include `large`, `medium` in the filename to control pixel size
- Include `bw` or `gray` in the filename for grayscale images
- Include `high-contrast` for higher contrast
- Include `dark` for darker images
- Include `square` to avoid circular masking

## Implementation Details

The script uses the Sharp image processing library to:

1. Resize images to a smaller size first
2. Apply various image adjustments (contrast, sharpening)
3. Convert to grayscale (optional)
4. Resize back to target size using nearest-neighbor interpolation for the pixelated look
5. Apply a circular mask (optional)
6. Save as optimized WebP images

## Troubleshooting

If you encounter issues:

1. Make sure the source directory exists
2. Check that Sharp is properly installed
3. Verify file permissions for the output directory
