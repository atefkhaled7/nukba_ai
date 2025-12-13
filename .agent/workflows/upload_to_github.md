---
description: Upload project to GitHub
---

Follow these steps to upload your project to GitHub:

1. **Stage and Commit your changes**:
   ```bash
   git add .
   git commit -m "Initial commit of Nukhba AI landing page"
   ```

2. **Create a new repository on GitHub**:
   - Go to [GitHub.com](https://github.com) and log in.
   - Click the **+** icon in the top right and select **New repository**.
   - Name your repository (e.g., `nukhba-ai-landing`).
   - Click **Create repository**.

3. **Link your local repository to GitHub**:
   - Copy the URL of your new repository (e.g., `https://github.com/username/nukhba-ai-landing.git`).
   - Run the following command (replace `<URL>` with your actual repository URL):
   ```bash
   git remote add origin <URL>
   git branch -M main
   git push -u origin main
   ```

4. **Verify**:
   - Refresh your GitHub repository page to see your files.
