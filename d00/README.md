Tests:
- Test en recette (manuel)
- Tests automatiques:
  - Tests unitaires
  - Tests d'integration
  - Tests E2E (End to end)

Bon test:
- Precis
- Utile
- Rapide
- Fiable
  - Independant
  - Constant (Peu importe l'ordre dans lequel on execute les tests)
- Happy path + cas particuliers
- Non dupliqué

Pourquoi ?
- S'assurer que ca fonctionne bien
- Eviter les bugs
- Eviter les regressions
- Anticiper des scenarios
- Anticiper nos erreurs
- Uniformiser la facon de coder
- Documenter le code
- Code plus clean
- Temps gagné sur long-terme
- Projet complexe
- Gagner de l'argent

Pourquoi pas ?
- Temps perdu sur court terme
- On sait pas faire, on ecrit des mauvais tests
- Framework de test obscur
- Durée de vie du projet trop courte
- Projet trop facile
- Environnement trop complexe a simuler 

Quand ?
- Apres
- Pendant
- Avant

Comment ecrire un test:
1- Given - Definition des variables, des dependances
2- When - Appel de la fonction
3- Then - Verification du resultat

TDD -> Test Driven Development
1 - RED - Ecrire un test qui fail (et qui fait avancer dans la bonne direction)
2 - GREEN - Ecrire le code qui fait passer le test
3 - Refacto
