# Usar uma imagem base
FROM node:18-alpine
 
# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos de dependência
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY . .

# Expor a porta em que o servidor será executado
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]