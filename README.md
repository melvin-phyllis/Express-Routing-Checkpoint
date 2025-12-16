# Apex Solutions – Site vitrine Express/EJS

Link :https://express-routing-checkpoint-rose.vercel.app/

Application Express qui sert trois pages (Accueil, Nos services, Contactez-nous) avec EJS et Tailwind CDN.
 Un middleware contrôle l’accès : le site n’est disponible que du lundi au vendredi, de 9h à 17h (heure du serveur).

## Prérequis
- Node.js 16+ (npm inclus)

## Installation
```bash
npm install
```

## Lancement
```bash
npm run dev   # démarre sur http://localhost:3500
```

## Fonctionnalités
- Pages : `/` (accueil), `/service`, `/contact`
- Formulaire de contact (POST `/api/sendmail`) qui loggue le corps et renvoie un JSON de confirmation
- Middleware horaire pour limiter l’accès aux heures ouvrées
- Assets statiques servis depuis `publics/` (ex. l’image de hero)

## Structure
- `index.js` : configuration Express, EJS, statiques, middleware horaire
- `controllers/CheckTime.js` : middleware heures ouvrées (lundi–vendredi, 9h–17h)
- `routes/routes.js` : routes pages + endpoint `/api/sendmail`
- `views/` : vues EJS et composants (`accueil.ejs`, `service.ejs`, `contact.ejs`, `components/header.ejs`, `components/footer.ejs`)
- `publics/` : fichiers statiques (images, CSS custom éventuel)

## Middleware horaires
Implémenté dans `controllers/CheckTime.js` et appliqué via `app.use(CheckTime)` dans `index.js`.
- Autorise uniquement si `day` est entre 1 et 5 (lundi–vendredi) **et** `hour` entre 9 et 17 exclus
- Sinon répond `403` avec le message : “Site disponible du lundi au vendredi, de 9h à 17h.”

## Routes rapides
- `GET /` : accueil
- `GET /service` : nos services
- `GET /contact` : contactez-nous
- `POST /api/sendmail` : traitement du formulaire (exemple ci-dessous)

### Exemple requête contact
```bash
curl -X POST http://localhost:3500/api/sendmail \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","sujet":"Question","message":"Bonjour !"}'
```

## Notes
- Tailwind est chargé via CDN dans chaque vue (pas de build nécessaire).
