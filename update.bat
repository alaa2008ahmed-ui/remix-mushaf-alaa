@echo off
cls
echo ==========================================
echo    MUSHAF AL-ALAA - FULLY AUTOMATED
echo ==========================================

:: 1. بناء ملفات الويب (Vite)
echo [1/4] Building Web Assets...
call npm run build

:: 2. مزامنة كاباسيتور مع الأندرويد
echo [2/4] Syncing Capacitor...
call npx cap sync android

:: 3. تجهيز الملفات (إجبار إضافة ملفات الإعدادات)
echo [3/4] Adding files to Git...
git add .
git add .github/workflows/build.yml --force

:: 4. الرفع التلقائي (برسالة ثابتة وتوقيت آلي)
echo [4/4] Pushing to GitHub...
git commit -m "Automated Build %date% %time%"
git branch -M main
git push origin main --force

echo ==========================================
echo    SUCCESS! PROCESS COMPLETE.
echo ==========================================
pause