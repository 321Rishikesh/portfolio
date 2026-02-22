# Profile Image Setup

## How to Add Your Profile Photo

Your animated portfolio is ready! To complete the setup, follow these steps to add your profile photo:

### Option 1: Using Your Provided Photo
1. Save your profile photo to the `public` folder with the filename `profile.jpg`
2. The portfolio will automatically use this image

### Option 2: Update Image Path
If you want to use a different filename or location:
1. Open `src/components/Hero.jsx`
2. Find the line: `src="/profile.jpg"`
3. Replace `/profile.jpg` with your image path
4. For example: `src="/my-photo.png"` or `src="https://example.com/photo.jpg"`

### Image Requirements
- Format: JPG, PNG, WebP, or any modern image format
- Size: 250x250 pixels (will be cropped to circle)
- File size: Keep under 500KB for optimal performance
- Quality: High resolution for best appearance

### Quick Steps:
1. You have a profile photo already provided
2. Save it as `profile.jpg` in the `public` folder
3. Run `npm run dev` to see it in action

If you have any questions about customization, refer to the main README.md file!
