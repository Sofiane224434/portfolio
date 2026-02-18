#!/bin/bash

# ═══════════════════════════════════════════════════════════════════════
# Script de déploiement automatique de Traefik
# ═══════════════════════════════════════════════════════════════════════

set -e

echo "🚀 Installation de Traefik..."

# Vérifier si on est sur le serveur
if [ ! -f "/etc/debian_version" ]; then
    echo "❌ Ce script doit être exécuté sur le serveur Debian"
    exit 1
fi

# Variables
TRAEFIK_DIR=~/traefik
REPO_RAW="https://raw.githubusercontent.com/Sofiane224434/portfolio/main"

echo "📁 Création du dossier Traefik..."
mkdir -p $TRAEFIK_DIR
cd $TRAEFIK_DIR

echo "📥 Téléchargement de la configuration..."
curl -o traefik.yml $REPO_RAW/traefik/traefik.yml
curl -o docker-compose.yml $REPO_RAW/traefik/docker-compose.traefik.yml

echo "🔐 Configuration des certificats..."
mkdir -p letsencrypt
touch letsencrypt/acme.json
chmod 600 letsencrypt/acme.json

echo "🌐 Création du réseau Docker..."
docker network inspect web >/dev/null 2>&1 || docker network create web

echo "🛑 Arrêt des conteneurs utilisant les ports 80/443..."
docker ps --format '{{.Names}}' | grep -E '(azim_main_site|nginx|apache)' | xargs -r docker stop || true
docker ps -a --format '{{.Names}}' | grep -E '(azim_main_site|nginx|apache)' | xargs -r docker rm || true

echo "🐳 Démarrage de Traefik..."
docker compose down || true
docker compose up -d

echo "⏳ Attente du démarrage de Traefik (10 secondes)..."
sleep 10

echo "🔍 Vérification de l'installation..."
if docker ps | grep -q traefik; then
    echo "✅ Traefik est démarré !"
    docker logs traefik --tail 20
else
    echo "❌ Erreur : Traefik n'est pas démarré"
    docker logs traefik
    exit 1
fi

echo ""
echo "✅ Installation terminée !"
echo ""
echo "📊 Dashboard accessible sur : https://traefik.azim404.com"
echo "🔐 Utilisateur: admin | Mot de passe: admin (À CHANGER !)"
echo ""
echo "🔄 Redéployez maintenant votre portfolio depuis GitHub Actions"
echo "   ou manuellement avec: cd ~/apps/deploy-app-react && git pull && docker compose up -d --build"
