# 🚀 Installation de Traefik sur le serveur

## 📋 Prérequis

Vous devez arrêter le conteneur `azim_main_site` qui occupe les ports 80 et 443.

## 🔧 Installation

### 1️⃣ Connexion au serveur

```bash
ssh debian@51.210.244.46 -p 2222
```

### 2️⃣ Arrêt du conteneur existant

```bash
# Arrêter le conteneur qui occupe les ports 80 et 443
docker stop azim_main_site
docker rm azim_main_site
```

### 3️⃣ Création du réseau Docker

```bash
docker network create web
```

### 4️⃣ Installation de Traefik

```bash
# Créer le dossier Traefik
mkdir -p ~/traefik
cd ~/traefik

# Télécharger la configuration depuis GitHub
curl -o traefik.yml https://raw.githubusercontent.com/Sofiane224434/portfolio/main/traefik/traefik.yml
curl -o docker-compose.yml https://raw.githubusercontent.com/Sofiane224434/portfolio/main/traefik/docker-compose.traefik.yml

# Créer le dossier pour les certificats
mkdir -p letsencrypt
touch letsencrypt/acme.json
chmod 600 letsencrypt/acme.json

# Démarrer Traefik
docker compose up -d
```

### 5️⃣ Vérification

```bash
# Voir les logs Traefik
docker logs traefik -f

# Vérifier que Traefik tourne
docker ps | grep traefik
```

### 6️⃣ Redéployer le portfolio

```bash
cd ~/apps/deploy-app-react

# Le script de déploiement GitHub Actions fera le reste
# Ou manuellement :
git pull
docker compose down
docker compose up -d --build
```

## ✅ Résultat attendu

Après quelques minutes, les certificats SSL seront automatiquement générés et vos sites seront accessibles en HTTPS :

- ✅ https://sofiane-kherarfa.azim404.com
- ✅ https://azim404.com
- ✅ https://www.azim404.com
- ✅ https://traefik.azim404.com (Dashboard Traefik)

## 🔐 Sécurité

Le dashboard Traefik est protégé par mot de passe :
- **Utilisateur :** admin
- **Mot de passe :** admin

⚠️ **IMPORTANT :** Changez ce mot de passe ! 

Pour générer un nouveau hash :

```bash
echo $(htpasswd -nb admin VotreNouveauMotDePasse) | sed -e s/\\$/\\$\\$/g
```

Puis remplacez dans `docker-compose.traefik.yml` la ligne :
```yaml
- "traefik.http.middlewares.auth.basicauth.users=nouveau_hash_ici"
```

## 🐛 Dépannage

### Les certificats ne se génèrent pas

```bash
# Voir les logs Traefik
docker logs traefik

# Vérifier les permissions
ls -la ~/traefik/letsencrypt/
chmod 600 ~/traefik/letsencrypt/acme.json
```

### Le portfolio n'est pas accessible

```bash
# Vérifier que le conteneur portfolio est sur le réseau 'web'
docker inspect portfolio_app | grep -A 5 Networks

# Vérifier les labels Traefik
docker inspect portfolio_app | grep -A 20 Labels
```

### Réinitialiser complètement

```bash
cd ~/traefik
docker compose down
rm letsencrypt/acme.json
touch letsencrypt/acme.json
chmod 600 letsencrypt/acme.json
docker compose up -d
```
