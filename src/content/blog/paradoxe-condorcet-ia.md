---
title: "Le Paradoxe de Condorcet : Pourquoi vos IAs ne sont pas d'accord"
description: 'Comment transformer les hallucinations des LLM en un consensus fiable grâce aux mathématiques sociales du XVIIIe siècle.'
pubDate: 'Jan 15 2026'
heroImage: '../../assets/illustrations/condorcet-cycle.svg'
---

Imaginez trois experts en sécurité chargés de surveiller une usine.

- L'expert A pense qu'il faut arrêter la machine.
- L'expert B pense qu'il faut juste ralentir.
- L'expert C pense qu'il n'y a aucun danger.

C'est exactement ce qui se passe lorsque vous utilisez une architecture "Mixture of Experts" (MoE) ou plusieurs agents LLM. Ils ont des "avis" divergents. Qui croire ?

## La tyrannie de la moyenne

L'approche classique consiste à faire une moyenne des probabilités (Softmax). C'est une erreur. En faisant la moyenne d'une opinion "très dangereuse" et "très sûre", vous obtenez une décision "moyennement dangereuse" qui ne veut rien dire. C'est le meilleur moyen d'avoir des hallucinations.

## La Méthode de Condorcet

Nicolas de Condorcet, mathématicien des Lumières, a théorisé une méthode de vote par paires. Au lieu de demander "Qui a raison ?", on compare chaque option contre toutes les autres en duel.

- Est-ce que "Arrêter" est préférable à "Ralentir" ?
- Est-ce que "Ralentir" est préférable à "Continuer" ?

Si une option gagne tous ses duels, elle est le **Vainqueur de Condorcet**. C'est un consensus robuste, mathématiquement stable.

## L'Application dans R.A.I.S.E.

Notre moteur applique cet algorithme à vos agents IA.

1.  Nous interrogeons plusieurs modèles (ex: Llama 3, Mistral, GPT-4) sur la même situation.
2.  Nous organisons un tournoi de Condorcet entre leurs réponses.
3.  Si un vainqueur émerge, la décision est exécutée.
4.  Si nous tombons sur un "Paradoxe" (A > B > C > A), le système se met en sécurité (Fail-Safe) et demande une intervention humaine.

C'est ainsi que nous garantissons qu'aucune hallucination isolée ne peut prendre le contrôle de vos opérations.
