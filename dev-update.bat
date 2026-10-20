@echo off
REM Installs/updates dependencies, applies DB migrations and refreshes Next.js route types.
setlocal
set ROOT=%~dp0

echo === API: virtualenv and Python packages ===
if not exist "%ROOT%api\.venv\Scripts\python.exe" (
  python -m venv "%ROOT%api\.venv" || goto :fail
)
"%ROOT%api\.venv\Scripts\python.exe" -m pip install -r "%ROOT%api\requirements.txt" || goto :fail

echo === API: migrations ===
pushd "%ROOT%api"
".venv\Scripts\python.exe" manage.py migrate || (popd & goto :fail)
popd
if not exist "%ROOT%api\.env" copy "%ROOT%api\.env.example" "%ROOT%api\.env" >nul

echo === Web: npm packages ===
pushd "%ROOT%web"
call npm install || (popd & goto :fail)
call npx next typegen
popd
if not exist "%ROOT%web\.env.local" copy "%ROOT%web\.env.example" "%ROOT%web\.env.local" >nul

echo.
echo Update complete.
endlocal
exit /b 0

:fail
echo.
echo Update FAILED. See the error above.
endlocal
exit /b 1
