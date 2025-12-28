# Скрипт для деплоя в существующий проект Vercel

Write-Host "=== Деплой в Vercel ===" -ForegroundColor Cyan

# Проверка авторизации
Write-Host "`n1. Проверка авторизации Vercel..." -ForegroundColor Yellow
$loginCheck = vercel whoami 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Требуется авторизация. Запустите: vercel login" -ForegroundColor Red
    Write-Host "Или используйте автоматический деплой через GitHub (см. VERCEL_DEPLOY.md)" -ForegroundColor Yellow
    exit 1
}

Write-Host "Авторизован как: $loginCheck" -ForegroundColor Green

# Проверка привязки проекта
if (-not (Test-Path ".vercel")) {
    Write-Host "`n2. Привязка к существующему проекту..." -ForegroundColor Yellow
    Write-Host "Выберите существующий проект из списка" -ForegroundColor Cyan
    vercel link
} else {
    Write-Host "`n2. Проект уже привязан" -ForegroundColor Green
    Get-Content .vercel/project.json
}

# Сборка проекта
Write-Host "`n3. Сборка проекта..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Ошибка сборки!" -ForegroundColor Red
    exit 1
}

# Деплой
Write-Host "`n4. Деплой в production..." -ForegroundColor Yellow
$deployChoice = Read-Host "Деплой в production? (y/n)"
if ($deployChoice -eq "y" -or $deployChoice -eq "Y") {
    vercel --prod
} else {
    Write-Host "Деплой в preview..." -ForegroundColor Yellow
    vercel
}

Write-Host "`n=== Готово! ===" -ForegroundColor Green

