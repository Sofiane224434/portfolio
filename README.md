# portfolio

Portfolio personnel servi sur sofiane-kherarfa.azim404.com.

## Stack

- React + Vite
- Docker + Docker Compose
- Reverse proxy Nginx sur le VPS
- GitHub Actions pour le deploiement automatique

## Developpement local

```bash
npm install
npm run dev
```

## Production reelle

L'application est exposee uniquement en local sur le VPS:

- 127.0.0.1:3002:80 pour le conteneur
- Nginx cote hote route sofiane-kherarfa.azim404.com vers ce port
- Le HTTPS est gere par Certbot et Nginx, pas dans Docker

## Deploiement

Le workflow deploye dans ~/apps/deploy-app-react et relance uniquement ce projet.

Secrets GitHub requis:

- VPS_HOST
- VPS_USERNAME
- VPS_SSH_KEY
- VPS_PORT

## Commandes utiles sur le VPS

```bash
cd ~/apps/deploy-app-react
docker compose ps
docker compose logs --tail=100
```

## Regle importante

Ne pas ajouter de labels Traefik ou de config proxy parallele tant que l'infrastructure officielle reste Nginx hote + port local dedie.
