@echo off
echo [1/3] Building Web Assets...
npm run build
echo [2/3] Syncing with Android...
npx cap sync android
echo [3/3] Pushing to GitHub...
git add .
git commit -m "Build New Version"
git push origin main
echo Done! Please check GitHub Actions for the APK.
pause