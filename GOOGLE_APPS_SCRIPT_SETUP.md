# Интеграция Google Apps Script с GitHub и CI/CD

## 📋 Содержание
1. [Структура репозитория](#структура-репозитория)
2. [Настройка clasp](#настройка-clasp)
3. [CI/CD с GitHub Actions](#cicd-с-github-actions)
4. [Best Practices для Google Apps Script](#best-practices)
5. [Рекомендации по улучшению кода](#рекомендации-по-улучшению)

---

## 🗂️ Структура репозитория

### Рекомендуемая структура проекта:

```
google-sheets-scripts/
├── .github/
│   └── workflows/
│       ├── deploy.yml           # Автодеплой на production
│       ├── test.yml             # Тестирование и линтинг
│       └── staging.yml          # Деплой на staging таблицу
│
├── src/                         # Исходный код скриптов
│   ├── main.gs                  # Главные функции
│   ├── utils.gs                 # Вспомогательные функции
│   ├── api.gs                   # Интеграции с внешними API
│   ├── ui.gs                    # Функции пользовательского интерфейса
│   └── config.gs                # Конфигурация и константы
│
├── tests/                       # Тесты (Google Apps Script Unit Testing)
│   ├── main.test.gs
│   └── utils.test.gs
│
├── appsscript.json             # Манифест Apps Script проекта
├── .clasp.json                 # Конфигурация clasp
├── .claspignore                # Исключаемые файлы
├── package.json                # npm зависимости для линтинга
├── .eslintrc.json              # ESLint конфигурация
├── README.md                   # Документация
└── CHANGELOG.md                # История изменений

```

---

## 🔧 Настройка clasp

### 1. Установка clasp

```bash
# Глобальная установка clasp
npm install -g @google/clasp

# Или локально в проект
npm install --save-dev @google/clasp
```

### 2. Аутентификация

```bash
# Войти в Google аккаунт
clasp login

# Для CI/CD используется Service Account
# Создать .clasprc.json с токенами
```

### 3. Инициализация проекта

**Вариант A: Клонировать существующий проект из Google Sheets**

```bash
# Получить Script ID из Google Sheets:
# Extensions → Apps Script → Project Settings → Script ID

clasp clone <SCRIPT_ID>
```

**Вариант B: Создать новый проект**

```bash
# Создать standalone проект
clasp create --type standalone --title "My Google Sheets Scripts"

# Или привязать к существующей таблице
clasp create --type sheets --title "My Spreadsheet Scripts"
```

### 4. Файл `.clasp.json`

```json
{
  "scriptId": "YOUR_SCRIPT_ID_HERE",
  "rootDir": "./src",
  "fileExtension": "gs"
}
```

### 5. Файл `.claspignore`

```
# Git
.git/**
.gitignore

# Node
node_modules/**
package.json
package-lock.json

# Tests
tests/**

# CI/CD
.github/**

# Documentation
README.md
CHANGELOG.md
docs/**

# Development
.env
*.log
```

### 6. Основные команды clasp

```bash
# Скачать код из Google Apps Script
clasp pull

# Загрузить код в Google Apps Script
clasp push

# Открыть проект в браузере
clasp open

# Создать новую версию
clasp version "v1.0.0"

# Развернуть как Web App
clasp deploy

# Посмотреть логи
clasp logs
```

---

## 🚀 CI/CD с GitHub Actions

### Workflow 1: Автоматическое тестирование и линтинг

`.github/workflows/test.yml`:

```yaml
name: Test & Lint

on:
  pull_request:
    branches: [ main, develop ]
  push:
    branches: [ main, develop ]

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Check code formatting
        run: npm run format:check

  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      # Для Google Apps Script можно использовать gas-local для локального запуска
      - name: Run tests
        run: npm test
```

### Workflow 2: Автоматический деплой на Production

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]
    tags:
      - 'v*'
  workflow_dispatch:
    inputs:
      version:
        description: 'Version description'
        required: false

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install clasp
        run: npm install -g @google/clasp

      - name: Configure clasp credentials
        run: |
          echo '${{ secrets.CLASPRC_JSON }}' > ~/.clasprc.json
          echo '${{ secrets.CLASP_JSON }}' > .clasp.json

      - name: Push to Google Apps Script
        run: clasp push --force

      - name: Create new version
        id: version
        run: |
          VERSION="${{ github.event.inputs.version || github.sha }}"
          clasp version "$VERSION"

      - name: Deploy
        run: |
          DEPLOYMENT_ID="${{ secrets.DEPLOYMENT_ID }}"
          if [ -n "$DEPLOYMENT_ID" ]; then
            clasp deploy --deploymentId "$DEPLOYMENT_ID" --description "Auto-deployed from GitHub"
          else
            clasp deploy --description "Auto-deployed from GitHub"
          fi

      - name: Notify on success
        if: success()
        run: |
          echo "✅ Successfully deployed to Google Apps Script"
          clasp open
```

### Workflow 3: Staging Environment

`.github/workflows/staging.yml`:

```yaml
name: Deploy to Staging

on:
  push:
    branches: [ develop ]

jobs:
  deploy-staging:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install clasp
        run: npm install -g @google/clasp

      - name: Configure staging credentials
        run: |
          echo '${{ secrets.CLASPRC_JSON_STAGING }}' > ~/.clasprc.json
          echo '${{ secrets.CLASP_JSON_STAGING }}' > .clasp.json

      - name: Deploy to staging
        run: |
          clasp push --force
          clasp deploy --description "Staging deployment"
```

---

## 🔐 Настройка GitHub Secrets

Для работы CI/CD нужно добавить следующие секреты в GitHub:

### 1. Получить `.clasprc.json`

```bash
# После clasp login, файл находится в:
# Linux/Mac: ~/.clasprc.json
# Windows: %APPDATA%\.clasprc.json

cat ~/.clasprc.json
```

Скопировать содержимое и добавить как **`CLASPRC_JSON`** в GitHub Secrets.

### 2. Получить `.clasp.json`

```bash
cat .clasp.json
```

Добавить как **`CLASP_JSON`** в GitHub Secrets.

### 3. (Опционально) Deployment ID

```bash
# Получить ID деплоймента
clasp deployments

# Добавить как DEPLOYMENT_ID в GitHub Secrets
```

### Как добавить секреты в GitHub:

```
Settings → Secrets and variables → Actions → New repository secret
```

---

## 📦 package.json для линтинга

```json
{
  "name": "google-sheets-scripts",
  "version": "1.0.0",
  "description": "Google Apps Script for Legal AI Spreadsheet",
  "scripts": {
    "lint": "eslint src/**/*.gs",
    "lint:fix": "eslint src/**/*.gs --fix",
    "format": "prettier --write 'src/**/*.gs'",
    "format:check": "prettier --check 'src/**/*.gs'",
    "test": "jest",
    "deploy": "clasp push && clasp deploy",
    "watch": "clasp push --watch"
  },
  "devDependencies": {
    "@google/clasp": "^2.4.2",
    "@types/google-apps-script": "^1.0.83",
    "eslint": "^8.57.0",
    "eslint-config-google": "^0.14.0",
    "prettier": "^3.1.0",
    "jest": "^29.7.0"
  }
}
```

---

## 🎯 Best Practices для Google Apps Script

### 1. Модульная структура

**Плохо:**
```javascript
// Всё в одном файле Code.gs
function onOpen() {
  // 500 строк кода...
}
```

**Хорошо:**
```javascript
// main.gs
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  createCustomMenu(ui);
}

// ui.gs
function createCustomMenu(ui) {
  ui.createMenu('Custom Menu')
    .addItem('Action 1', 'action1')
    .addItem('Action 2', 'action2')
    .addToUi();
}

// config.gs
const CONFIG = {
  SPREADSHEET_ID: 'your-spreadsheet-id',
  SHEET_NAME: 'Data',
  API_URL: 'https://api.example.com'
};
```

### 2. Использование именованных диапазонов

**Плохо:**
```javascript
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
const data = sheet.getRange('A2:D100').getValues();
```

**Хорошо:**
```javascript
const sheet = SpreadsheetApp.getActiveSpreadsheet();
const data = sheet.getRangeByName('DataTable').getValues();
```

### 3. Кэширование данных

**Плохо:**
```javascript
function processData() {
  for (let i = 0; i < 100; i++) {
    const value = SpreadsheetApp.getActiveSheet().getRange('A' + i).getValue();
    // Обработка...
  }
}
```

**Хорошо:**
```javascript
function processData() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getRange('A1:A100').getValues(); // Один запрос

  values.forEach((row, index) => {
    const value = row[0];
    // Обработка...
  });
}
```

### 4. Обработка ошибок

**Плохо:**
```javascript
function getData() {
  const response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}
```

**Хорошо:**
```javascript
function getData() {
  try {
    const response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true
    });

    if (response.getResponseCode() !== 200) {
      Logger.log('Error: ' + response.getResponseCode());
      return null;
    }

    return JSON.parse(response.getContentText());
  } catch (error) {
    Logger.log('Error fetching data: ' + error.message);
    showAlert('Failed to fetch data. Please try again.');
    return null;
  }
}

function showAlert(message) {
  SpreadsheetApp.getUi().alert(message);
}
```

### 5. Использование Properties Service для конфигурации

**Плохо:**
```javascript
const API_KEY = 'your-hardcoded-api-key';
```

**Хорошо:**
```javascript
// Установка (один раз)
function setupConfig() {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('API_KEY', 'your-api-key');
  scriptProperties.setProperty('API_URL', 'https://api.example.com');
}

// Использование
function getApiKey() {
  return PropertiesService.getScriptProperties().getProperty('API_KEY');
}
```

### 6. Batch операции

**Плохо:**
```javascript
function updateCells() {
  const sheet = SpreadsheetApp.getActiveSheet();
  for (let i = 1; i <= 100; i++) {
    sheet.getRange('A' + i).setValue(i); // 100 записей в Sheet
  }
}
```

**Хорошо:**
```javascript
function updateCells() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = Array.from({ length: 100 }, (_, i) => [i + 1]);
  sheet.getRange('A1:A100').setValues(values); // 1 запись в Sheet
}
```

### 7. Триггеры времени выполнения

**Для длительных операций:**
```javascript
function processLargeDataset() {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000); // Ждем до 30 секунд

    const cache = CacheService.getScriptCache();
    let startRow = parseInt(cache.get('lastProcessedRow') || '1');

    const sheet = SpreadsheetApp.getActiveSheet();
    const BATCH_SIZE = 100;

    // Обработать партию
    const data = sheet.getRange(startRow, 1, BATCH_SIZE, 10).getValues();

    data.forEach((row, index) => {
      // Обработка строки
      processRow(row);
    });

    // Сохранить прогресс
    cache.put('lastProcessedRow', String(startRow + BATCH_SIZE), 21600);

    // Если еще есть данные, запланировать следующую итерацию
    if (data.length === BATCH_SIZE) {
      ScriptApp.newTrigger('processLargeDataset')
        .timeBased()
        .after(1000) // Через 1 секунду
        .create();
    } else {
      cache.remove('lastProcessedRow');
      Logger.log('Processing complete!');
    }

  } catch (error) {
    Logger.log('Error: ' + error.message);
  } finally {
    lock.releaseLock();
  }
}
```

---

## 🔍 ESLint конфигурация для Google Apps Script

`.eslintrc.json`:

```json
{
  "extends": "google",
  "env": {
    "browser": false,
    "es6": true,
    "googleappsscript/googleappsscript": true
  },
  "plugins": ["googleappsscript"],
  "rules": {
    "no-unused-vars": "warn",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "max-len": ["error", { "code": 100 }],
    "camelcase": "warn",
    "no-var": "error",
    "prefer-const": "error"
  },
  "globals": {
    "SpreadsheetApp": true,
    "Logger": true,
    "UrlFetchApp": true,
    "PropertiesService": true,
    "ScriptApp": true,
    "CacheService": true,
    "LockService": true,
    "Utilities": true
  }
}
```

Установить плагин:
```bash
npm install --save-dev eslint-plugin-googleappsscript
```

---

## 📝 Рекомендации по улучшению кода

Без доступа к вашим скриптам, вот общие рекомендации:

### 1. Разделение ответственности (SRP)
- Отдельные файлы для UI, бизнес-логики, API интеграций
- Каждая функция делает одно действие

### 2. Использование TypeScript типов
```javascript
/**
 * @typedef {Object} UserData
 * @property {string} name
 * @property {string} email
 * @property {Date} createdAt
 */

/**
 * Получить данные пользователя
 * @param {number} userId
 * @return {UserData}
 */
function getUserData(userId) {
  // ...
}
```

### 3. Константы и конфигурация
```javascript
// config.gs
const CONFIG = Object.freeze({
  SHEETS: {
    MAIN: 'Main Data',
    ARCHIVE: 'Archive',
    LOGS: 'Logs'
  },
  COLUMNS: {
    NAME: 1,
    EMAIL: 2,
    DATE: 3
  },
  API: {
    TIMEOUT: 10000,
    MAX_RETRIES: 3
  }
});
```

### 4. Логирование
```javascript
// utils.gs
function logInfo(message, data = {}) {
  const logSheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(CONFIG.SHEETS.LOGS);

  logSheet.appendRow([
    new Date(),
    'INFO',
    message,
    JSON.stringify(data)
  ]);

  Logger.log(`[INFO] ${message}`, data);
}

function logError(message, error) {
  const logSheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(CONFIG.SHEETS.LOGS);

  logSheet.appendRow([
    new Date(),
    'ERROR',
    message,
    error.toString()
  ]);

  Logger.log(`[ERROR] ${message}`, error);
}
```

### 5. Unit тестирование

Используйте библиотеку для тестирования, например [GasT](https://github.com/zixia/gast):

```javascript
// tests/utils.test.gs
function testGetUserData() {
  const result = getUserData(123);

  GasT.assertEquals('Test User', result.name);
  GasT.assertEquals('test@example.com', result.email);
}

function testProcessRow() {
  const testRow = ['John', 'john@example.com', new Date()];
  const result = processRow(testRow);

  GasT.assertTrue(result.success);
}
```

### 6. Версионирование и Changelog

```markdown
# CHANGELOG.md

## [1.2.0] - 2025-11-14
### Added
- Автоматическая отправка email уведомлений
- Интеграция с Telegram API

### Changed
- Улучшена производительность batch операций
- Обновлена логика обработки ошибок

### Fixed
- Исправлена ошибка при пустых ячейках
- Исправлен баг с дублированием записей

## [1.1.0] - 2025-11-01
...
```

---

## 🎓 Полезные ресурсы

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [clasp Documentation](https://github.com/google/clasp)
- [Best Practices Guide](https://developers.google.com/apps-script/guides/support/best-practices)
- [Apps Script Samples](https://github.com/googleworkspace/apps-script-samples)

---

## 🚀 Быстрый старт

```bash
# 1. Клонировать репозиторий
git clone <your-repo>
cd google-sheets-scripts

# 2. Установить зависимости
npm install

# 3. Войти в clasp
clasp login

# 4. Клонировать существующий проект
clasp clone <SCRIPT_ID>

# 5. Внести изменения в код

# 6. Протестировать и загрузить
npm run lint
clasp push

# 7. Коммит и пуш в GitHub
git add .
git commit -m "feat: add new functionality"
git push origin main

# 8. CI/CD автоматически задеплоит в Google Apps Script
```

---

## 📞 Дальнейшие шаги

Чтобы дать более конкретные рекомендации по вашим скриптам:

1. **Предоставьте доступ к таблице:**
   - Откройте доступ по ссылке (Viewer или Editor)
   - Или экспортируйте код скриптов (Extensions → Apps Script → Copy code)

2. **Опишите задачи скриптов:**
   - Что они делают?
   - Какие проблемы решают?
   - Какие есть узкие места?

3. **Укажите цели рефакторинга:**
   - Производительность?
   - Читаемость?
   - Поддерживаемость?
   - Добавление новых функций?
