@echo off
REM Stops whatever is listening on the Evidome dev ports (3000 web, 8000 API) plus child processes.
setlocal
for %%P in (3000 3001 8000) do (
  for /f "tokens=5" %%I in ('netstat -ano ^| findstr /R /C:":%%P .*LISTENING"') do (
    echo Stopping PID %%I on port %%P
    taskkill /PID %%I /T /F >nul 2>&1
  )
)

REM Close the console windows opened by dev-start.bat
taskkill /FI "WINDOWTITLE eq Evidome API*" /T /F >nul 2>&1
taskkill /FI "WINDOWTITLE eq Evidome Web*" /T /F >nul 2>&1

echo Done.
endlocal
