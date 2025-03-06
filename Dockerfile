# Используем базовый образ Node.js
FROM node:18

# Устанавливаем рабочий каталог
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Выполняем команду сборки
RUN npm run build


# Открываем порт для приложения
EXPOSE 5173

# Определяем команду запуска приложения
CMD [ "npm", "run", "dev" ]