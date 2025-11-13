# 🏁 DEVOctober - Application E-Commerce Nike (React Native + Expo)

> **Travaux Pratiques : Développement des Applications Mobiles**  
> **Université : ISIMa**  
> **Section** : GLSI  
> **Encadrante** : Mme Waderni Sajida  
> **Année universitaire** : 2024 / 2025

---

## 🚀 Objectif du projet

Ce projet a pour objectif de développer une **application mobile e-commerce complète** inspirée de la marque **Nike**, permettant à l’utilisateur de consulter une liste de produits, afficher les détails de chaque article et gérer son panier d’achat.

---

## ⚙️ Fonctionnalités implémentées

| TP | Fonctionnalité principale | Détails |
|----|----------------------------|----------|
| **TP1** | Installation de Git + Node.js | Configuration de l’environnement de développement mobile |
| **TP3** | Création du projet Expo + dépôt GitHub | Initialisation du projet et gestion du versionning |
| **TP4** | Affichage d’images depuis Internet | Utilisation du composant **Image** avec des liens distants |
| **TP5** | Écran détail produit + carousel d’images | Utilisation du composant **ScrollView** / **FlatList** horizontal |
| **TP6** | Bouton **Add to Cart** + écran panier | Ajout d’un produit au panier avec mise à jour dynamique |
| **TP7** | Navigation complète + calculs totaux | Implémentation du **Stack Navigator** et gestion du total panier |

---

## 📱 Écrans de l’application

1. **Accueil**
   - Affiche les produits Nike sous forme de **grille à 2 colonnes**
   - Chaque produit est **cliquable** pour afficher ses détails

2. **Détail du produit**
   - Présente un **carousel d’images** du produit
   - Affiche la **description**, le **prix**, et un **bouton Add to Cart**

3. **Panier (Cart)**
   - Liste des produits ajoutés avec leur **quantité**
   - Calcul du **sous-total**, **total**, et bouton **Checkout**

---

## 🧰 Technologies et bibliothèques utilisées

- **React Native** (framework principal)
- **Expo CLI** (pour le lancement et la compilation)
- **React Navigation** – gestion de la navigation entre les écrans
- **FlatList**, **Image**, **Pressable** – composants d’interface
- **Git & GitHub** – suivi et versionnage du code source

---

## ▶️ Lancement de l’application

```bash
# Installation des dépendances
npm install

# Démarrage du projet Expo
npm start
