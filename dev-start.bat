@echo off
REM Starts the Django API (port 8000) and Next.js dev server (port 3000) in separate windows.
setlocal
set ROOT=%~dp0

if not exist "%ROOT%api\.venv\Scripts\python.exe" (
  echo API virtualenv not found. Run dev-update.bat first.
  exit /b 1
)
if not exist "%ROOT%web\node_modules" (
  echo web\node_modules not found. Run dev-update.bat first.
  exit /b 1
)

start "Evidome API :8000" /D "%ROOT%api" cmd /k ".venv\Scripts\python.exe manage.py runserver 8000"
start "Evidome Web :3000" /D "%ROOT%web" cmd /k "npm run dev"

echo.
echo   Web: http://localhost:3000
echo   API: http://localhost:8000/api/submissions/   (admin: /admin/)
echo   Stop both with dev-kill.bat
endlocal
