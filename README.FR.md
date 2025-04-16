# Linux & Open Source Lovers Community

## Installation

Suivez les étapes ci-dessous pour installer et exécuter le projet localement.

### Prérequis

- PHP >= 8.2
- Composer
- Node & Npm ou bun
- MySql
- Git

### Étapes d'installation

1. **Cloner le projet :**

    ```bash
    git clone https://github.com/LOSL/website.git
    cd website
    ```

2. **Installer les dépendances :**

    ```bash
    composer install
    npm install
    ```

3. **Configurer les variables d'environnement :**

    ```bash
    cp .env.example .env
    ```

    Ensuite, ouvrez le fichier `.env` et configurez les paramètres de la base de données et d'autres variables nécessaires.

4. **Générer la clé de l'application :**

    ```bash
    php artisan key:generate
    ```

5. **Exécuter les migrations :**

    ```bash
    php artisan migrate
    ```

    Suivez les instructions dans le terminal pour compléter les migrations.

6. **Créer le lien symbolique pour le stockage des fichiers :**

    ```bash
    php artisan storage:link
    ```

7. **Démarrer le serveur de développement :**

    ```bash
    npm run build
    php artisan serve
    ```

    Le serveur sera démarré à l'adresse [http://localhost:8000](http://localhost:8000).

## Utilisation

Accédez à l'application via votre navigateur à l'adresse [http://localhost:8000](http://localhost:8000).
