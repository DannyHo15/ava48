FROM node:20 AS builder
WORKDIR /app

# Tắt Husky và tăng heap
ENV HUSKY_SKIP_INSTALL=1
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy source code và env
COPY . .

RUN npm run build --verbose

FROM node:20 AS runner
WORKDIR /app

ENV HUSKY_SKIP_INSTALL=1

# Copy các file cần thiết từ builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm","run","start"]