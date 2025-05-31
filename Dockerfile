FROM php:8.2-apache
COPY public/ /var/www/html/
COPY includes/ /var/www/includes/
