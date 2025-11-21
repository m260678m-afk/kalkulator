# Używamy lekkiego obrazu Nginx (alpine jest bardzo mały)
FROM nginx:alpine

# Kopiujemy wszystkie pliki aplikacji do domyślnego katalogu Nginx,
# z którego serwuje on strony.
COPY . /usr/share/nginx/html
