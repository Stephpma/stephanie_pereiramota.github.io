/*
  Liste des projets du portfolio.
  Pour ajouter un projet : copiez le modèle en bas de ce fichier, collez-le
  en haut de la liste et remplissez-le. Le guide GUIDE-AJOUT-PROJET.md explique
  chaque champ pas à pas.

  Vidéos : mettez la vidéo sur YouTube en « Non répertoriée », puis copiez
  son identifiant (les 11 caractères après « v= » dans l'adresse) dans le
  champ youtube. Tant que le champ est vide, le site affiche
  « Vidéo bientôt en ligne ».
*/
window.PROJECTS = [
  {
    id: "playoff",
    year: "2026",
    title: "Playoff_Amateurs",
    cover: "assets/img/playoff/app-accueil.webp",
    coverAlt: {
      fr: "Page d'accueil de l'application Playoff_Amateurs : « Prêt pour le prochain match ? »",
      en: "Playoff_Amateurs app home page: “Ready for the next match?”"
    },
    tagline: {
      fr: "Gestion de compétitions sportives et réservation de terrains, en No-Code",
      en: "Sports competition management and pitch booking, built in No-Code"
    },
    summary: {
      fr: "Une PME organisait ses compétitions avec des tableurs et des e-mails. J'ai construit seule, en 12 semaines, un back-office automatisé et une application de réservation avec paiement en ligne.",
      en: "An SME ran its competitions on spreadsheets and emails. In 12 weeks, on my own, I built an automated back office and a booking app with online payment."
    },
    tags: ["Bubble", "Airtable", "Make", "Stripe", "OpenAI", "Figma", "Notion"],

    context: {
      fr: "Projet de certification Product Builder No-Code & IA (École Cube, 2026), mené sur un cas d'entreprise.",
      en: "Certification project for the No-Code & AI Product Builder programme (École Cube, 2026), based on a business case."
    },

    facts: [
      { label: { fr: "Rôle", en: "Role" }, value: { fr: "Product Builder, seule", en: "Product Builder, solo" } },
      { label: { fr: "Durée", en: "Duration" }, value: { fr: "12 semaines, 6 sprints", en: "12 weeks, 6 sprints" } },
      { label: { fr: "Base back-office", en: "Back-office base" }, value: { fr: "5 tables Airtable", en: "5 Airtable tables" } },
      { label: { fr: "Automatisations", en: "Automations" }, value: { fr: "2 scénarios Make", en: "2 Make scenarios" } },
      { label: { fr: "Audit sécurité", en: "Security audit" }, value: { fr: "23 points de contrôle", en: "23 checkpoints" } },
      { label: { fr: "Livrables", en: "Deliverables" }, value: { fr: "MVP, doc Notion, audit", en: "MVP, Notion docs, audit" } }
    ],

    problem: [
      {
        fr: "Playoff_Amateurs organise des compétitions sportives amateurs. Son activité reposait sur des tableurs multiples et des échanges d'e-mails : des doublons, des statuts différents d'un fichier à l'autre, aucune vue d'ensemble d'une compétition, et des données personnelles trop largement exposées.",
        en: "Playoff_Amateurs organises amateur sports competitions. It ran on multiple spreadsheets and email threads: duplicates, statuses that differed from file to file, no overall view of a competition, and personal data exposed far too widely."
      },
      {
        fr: "Les contraintes : uniquement des outils No-Code, 12 semaines, et une solution qu'une PME sans équipe technique puisse comprendre, maintenir et reprendre.",
        en: "The constraints: No-Code tools only, 12 weeks, and a solution that an SME with no tech team can understand, maintain and hand over."
      }
    ],

    solution: [
      {
        title: { fr: "Un back-office qui centralise et automatise", en: "A back office that centralises and automates" },
        text: {
          fr: "Une base Airtable relationnelle (compétitions, clubs, équipes, matchs, contacts), des formulaires sécurisés pour les clubs et deux scénarios Make qui valident les équipes et préparent chaque compétition.",
          en: "A relational Airtable base (competitions, clubs, teams, matches, contacts), secure forms for clubs and two Make scenarios that validate teams and prepare each competition."
        }
      },
      {
        title: { fr: "Une application de réservation avec paiement", en: "A booking app with payment" },
        text: {
          fr: "Une application Bubble pour trouver un terrain près de chez soi, choisir un créneau et payer avec Stripe, sans risque de double réservation.",
          en: "A Bubble app to find a pitch nearby, pick a slot and pay with Stripe, with no risk of double booking."
        }
      }
    ],

    /* Le détail, bloc par bloc : texte, captures et vidéos */
    chapters: [
      {
        title: { fr: "Cadrer et piloter le projet", en: "Scoping and steering the project" },
        body: [
          {
            fr: "J'ai organisé les 12 semaines en 6 sprints de 2 semaines, avec une roadmap, un backlog rédigé en user stories et une Sprint Review à chaque étape, le tout dans Notion. Chaque décision y est tracée avec sa raison.",
            en: "I split the 12 weeks into 6 two-week sprints, with a roadmap, a backlog written as user stories and a Sprint Review at each step, all in Notion. Every decision is recorded there with its reason."
          },
          {
            fr: "Pour choisir l'outil d'automatisation, j'ai comparé Make, Zapier et n8n sur onze critères. J'ai retenu Make : plus lisible que Zapier sur des scénarios complexes, et sans l'hébergement technique qu'exige n8n. J'ai ensuite dessiné le parcours dans Figma, puis je l'ai testé avec une démo cliquable Lovable avant de développer.",
            en: "To choose the automation tool, I compared Make, Zapier and n8n on eleven criteria. I picked Make: easier to read than Zapier on complex scenarios, without the self-hosting n8n requires. I then designed the journey in Figma and tested it with a clickable Lovable demo before building."
          }
        ],
        media: [
          { type: "video", file: "assets/video/bloc1.mp4", youtube: "", poster: "assets/img/posters/v-bloc1.webp", title: { fr: "Bloc 1 : le pilotage du projet dans Notion", en: "Block 1: steering the project in Notion" }, duration: "0:58" },
          { type: "image", src: "assets/img/playoff/notion-roadmap.webp", alt: { fr: "Roadmap et backlog du projet dans Notion", en: "Project roadmap and backlog in Notion" }, caption: { fr: "Roadmap par sprint et backlog dans Notion", en: "Sprint roadmap and backlog in Notion" } },
          { type: "image", src: "assets/img/playoff/benchmark.webp", alt: { fr: "Tableau comparatif de Make, Zapier et n8n sur onze critères", en: "Comparison table of Make, Zapier and n8n across eleven criteria" }, caption: { fr: "Benchmark des outils d'automatisation", en: "Automation tools benchmark" } },
          { type: "image", src: "assets/img/playoff/figma-parcours.webp", alt: { fr: "Trois écrans Figma : choix du terrain, réservation d'un créneau, récapitulatif", en: "Three Figma screens: pitch choice, slot booking, summary" }, caption: { fr: "Le parcours de réservation dessiné dans Figma", en: "The booking journey designed in Figma" } },
          { type: "image", src: "assets/img/playoff/lovable.webp", alt: { fr: "Écran de sélection de terrain du prototype Lovable", en: "Pitch selection screen of the Lovable prototype" }, caption: { fr: "Prototype cliquable Lovable, pour valider le parcours", en: "Clickable Lovable prototype, to validate the journey" } }
        ]
      },
      {
        title: { fr: "Développer l'application de réservation", en: "Building the booking app" },
        body: [
          {
            fr: "L'application est pensée d'abord pour le mobile. Deux entrées de recherche répondent à deux intentions : le joueur pressé qui connaît son terrain, et celui qui explore par sport, type de terrain ou ville, dans un rayon d'environ 50 km.",
            en: "The app is mobile-first. Two search entries match two intentions: the player in a hurry who knows their pitch, and the one exploring by sport, pitch type or town, within roughly 50 km."
          },
          {
            fr: "Le modèle de données tient en cinq types : Terrain, User, Créneau, Réservation, Transaction. Pour empêcher la double réservation, le créneau passe en « Réservé » dès le début du paiement ; un workflow programmé le libère au bout de dix minutes si le paiement n'aboutit pas. Le paiement Stripe est confirmé côté serveur par un webhook protégé par jeton.",
            en: "The data model has five types: Pitch, User, Slot, Booking, Transaction. To prevent double booking, the slot switches to “Booked” as soon as payment starts; a scheduled workflow frees it after ten minutes if payment fails. Stripe payment is confirmed server-side by a token-protected webhook."
          }
        ],
        media: [
          { type: "video", file: "assets/video/parcours-court.mp4", youtube: "", poster: "assets/img/posters/v-parcours-court.webp", title: { fr: "Le parcours utilisateur, de la recherche au paiement", en: "The user journey, from search to payment" }, duration: "2:17" },
          { type: "image", src: "assets/img/playoff/app-recherche.webp", alt: { fr: "Recherche de terrains avec filtres, résultats en cartes et carte Google Maps", en: "Pitch search with filters, result cards and a Google Map" }, caption: { fr: "Recherche par sport, type et ville, avec carte", en: "Search by sport, type and town, with a map" } },
          { type: "image", src: "assets/img/playoff/app-creneaux.webp", alt: { fr: "Grille des créneaux disponibles d'un terrain avec horaires et prix", en: "Grid of a pitch's available slots with times and prices" }, caption: { fr: "Choix du créneau", en: "Choosing a slot" } },
          { type: "video", file: "assets/video/blocage.mp4", youtube: "", poster: "assets/img/posters/v-blocage.webp", title: { fr: "Comment j'empêche la double réservation", en: "How I prevent double booking" }, duration: "0:46" },
          { type: "image", src: "assets/img/playoff/mcd.webp", alt: { fr: "Modèle conceptuel de données de l'application Bubble", en: "Conceptual data model of the Bubble app" }, caption: { fr: "Le modèle de données : cinq types reliés", en: "The data model: five linked types" } },
          { type: "image", src: "assets/img/playoff/bubble-workflow-payer.webp", alt: { fr: "Workflow Bubble du bouton Payer, étape par étape", en: "Bubble workflow of the Pay button, step by step" }, caption: { fr: "Le workflow du bouton « Payer »", en: "The “Pay” button workflow" } },
          { type: "video", file: "assets/video/structure.mp4", youtube: "", poster: "assets/img/posters/v-structure.webp", title: { fr: "La structure de l'application dans Bubble", en: "The app structure in Bubble" }, duration: "1:04" },
          { type: "video", file: "assets/video/parcours.mp4", youtube: "", poster: "assets/img/posters/v-parcours.webp", title: { fr: "Le parcours complet, version longue", en: "The full journey, long version" }, duration: "3:21" }
        ]
      },
      {
        title: { fr: "Automatiser le back-office", en: "Automating the back office" },
        body: [
          {
            fr: "Airtable porte les règles de gestion : une équipe est complète à partir de cinq joueurs, un match n'est valide que si ses deux équipes le sont. Des champs de contrôle signalent toute incohérence, par exemple une équipe validée qui perd un joueur.",
            en: "Airtable holds the business rules: a team is complete from five players, a match is only valid if both its teams are. Control fields flag any inconsistency, such as a validated team losing a player."
          },
          {
            fr: "Make prend le relais. Un premier scénario confirme l'inscription d'une équipe par e-mail et l'ajoute à l'agenda. Un second prépare chaque compétition : OpenAI rédige un brief, Google Docs crée la fiche, Gmail l'envoie aux Opérations. Aucune donnée personnelle n'est transmise à OpenAI, et chaque erreur est tracée.",
            en: "Make takes over. A first scenario confirms a team's registration by email and adds it to the calendar. A second prepares each competition: OpenAI drafts a brief, Google Docs creates the sheet, Gmail sends it to Operations. No personal data is sent to OpenAI, and every error is logged."
          }
        ],
        media: [
          { type: "video", file: "assets/video/bloc3.mp4", youtube: "", poster: "assets/img/posters/v-bloc3.webp", title: { fr: "Bloc 3 : le back-office Airtable et Make", en: "Block 3: the Airtable and Make back office" }, duration: "4:03" },
          { type: "image", src: "assets/img/playoff/make-preparation.webp", alt: { fr: "Scénario Make de préparation d'une compétition avec OpenAI, Google Docs, Drive et Gmail", en: "Make scenario preparing a competition with OpenAI, Google Docs, Drive and Gmail" }, caption: { fr: "Scénario « Préparation opérationnelle d'une compétition »", en: "“Competition operational prep” scenario" } },
          { type: "image", src: "assets/img/playoff/make-validation.webp", alt: { fr: "Scénario Make de validation automatique d'une équipe complète", en: "Make scenario automatically validating a complete team" }, caption: { fr: "Scénario « Validation automatique d'une équipe complète »", en: "“Automatic validation of a complete team” scenario" } },
          { type: "image", src: "assets/img/playoff/airtable-competitions.webp", alt: { fr: "Table des compétitions dans Airtable avec disciplines et statuts", en: "Competitions table in Airtable with disciplines and statuses" }, caption: { fr: "La base Airtable, source de vérité unique", en: "The Airtable base, single source of truth" } },
          { type: "image", src: "assets/img/playoff/dashboard-operations.webp", alt: { fr: "Tableau de bord Opérations dans Airtable", en: "Operations dashboard in Airtable" }, caption: { fr: "Tableau de bord des Opérations", en: "Operations dashboard" } },
          { type: "image", src: "assets/img/playoff/dashboard-direction.webp", alt: { fr: "Tableau de bord Direction dans Airtable", en: "Management dashboard in Airtable" }, caption: { fr: "Tableau de bord de la Direction", en: "Management dashboard" } },
          { type: "video", file: "assets/video/validation.mp4", youtube: "", poster: "assets/img/posters/v-validation.webp", title: { fr: "Une équipe complète, validée et prévenue par e-mail", en: "A complete team, validated and notified by email" }, duration: "0:22" }
        ]
      },
      {
        title: { fr: "Sécuriser et mettre en conformité", en: "Securing and complying" },
        body: [
          {
            fr: "J'ai audité toute la chaîne avec une grille de 23 points de contrôle construite dans Airtable, en testant chaque rôle (joueur, gestionnaire, administrateur). Dans Bubble, les privacy rules sont en refus par défaut : un joueur ne voit que ses réservations, un gestionnaire que ses terrains.",
            en: "I audited the whole chain with a 23-point checklist built in Airtable, testing each role (player, manager, admin). In Bubble, privacy rules deny by default: a player only sees their own bookings, a manager only their own pitches."
          },
          {
            fr: "Côté RGPD : minimisation des données, aucune donnée bancaire stockée (tout passe par Stripe), bannière cookies, pages légales, durées de conservation et procédure d'incident. J'ai aussi conçu un atelier de sensibilisation de deux heures pour les équipes.",
            en: "On GDPR: data minimisation, no card data stored (everything goes through Stripe), cookie banner, legal pages, retention periods and an incident procedure. I also designed a two-hour awareness workshop for the teams."
          }
        ],
        media: [
          { type: "video", file: "assets/video/securite.mp4", youtube: "", poster: "assets/img/posters/v-securite.webp", title: { fr: "Tests de sécurité dans Bubble", en: "Security tests in Bubble" }, duration: "0:58" },
          { type: "image", src: "assets/img/playoff/audit-securite.webp", alt: { fr: "Grille d'audit de sécurité dans Airtable avec catégories et statuts", en: "Security audit checklist in Airtable with categories and statuses" }, caption: { fr: "La grille d'audit : risque, preuve, statut, recommandation", en: "The audit checklist: risk, evidence, status, recommendation" } },
          { type: "image", src: "assets/img/playoff/bubble-data-types.webp", alt: { fr: "Types de données Bubble avec privacy rules appliquées", en: "Bubble data types with privacy rules applied" }, caption: { fr: "Privacy rules appliquées à chaque type de données", en: "Privacy rules applied to every data type" } }
        ]
      }
    ],

    decisions: [
      {
        fr: "Le paiement était d'abord hors du MVP. Je l'ai réintégré avec une vraie intégration Stripe une fois les outils arrêtés.",
        en: "Payment was first out of the MVP scope. I brought it back with a real Stripe integration once the stack was settled."
      },
      {
        fr: "J'ai simplifié le modèle de données en cours de route, de six à cinq types, pour garder un MVP centré sur l'essentiel : trouver, réserver, payer.",
        en: "I simplified the data model along the way, from six to five types, to keep the MVP focused: find, book, pay."
      },
      {
        fr: "Les filtres prévus dans la maquette se sont révélés peu utiles à l'usage : je les ai repensés pendant le développement.",
        en: "The filters planned in the mock-up proved unhelpful in use, so I redesigned them during development."
      }
    ],

    status: {
      done: [
        { fr: "Privacy rules Bubble par rôle", en: "Role-based Bubble privacy rules" },
        { fr: "Traitements critiques en back-end workflows", en: "Critical processing in back-end workflows" },
        { fr: "Paiement délégué à Stripe, testé en mode test", en: "Payment delegated to Stripe, tested in test mode" },
        { fr: "Pages légales et bannière cookies", en: "Legal pages and cookie banner" },
        { fr: "Aucune donnée personnelle envoyée à OpenAI", en: "No personal data sent to OpenAI" }
      ],
      planned: [
        { fr: "Formulaire automatisé d'exercice des droits RGPD", en: "Automated GDPR rights request form" },
        { fr: "Anonymisation automatique des comptes inactifs", en: "Automatic anonymisation of inactive accounts" },
        { fr: "Double authentification des comptes administrateurs", en: "Two-factor authentication for admin accounts" },
        { fr: "Vérification cryptographique de la signature Stripe", en: "Cryptographic check of the Stripe signature" }
      ]
    },

    stack: [
      { name: "Notion", role: { fr: "Pilotage, backlog, documentation", en: "Steering, backlog, documentation" } },
      { name: "Figma", role: { fr: "Design system et maquettes", en: "Design system and mock-ups" } },
      { name: "Lovable", role: { fr: "Prototype cliquable généré avec l'IA", en: "AI-generated clickable prototype" } },
      { name: "Airtable", role: { fr: "Base métier, formulaires, tableaux de bord", en: "Business base, forms, dashboards" } },
      { name: "Make", role: { fr: "Automatisations et gestion d'erreurs", en: "Automations and error handling" } },
      { name: "OpenAI", role: { fr: "Rédaction des briefs opérationnels", en: "Drafting operational briefs" } },
      { name: "Bubble", role: { fr: "Application MVP, workflows, rôles", en: "MVP app, workflows, roles" } },
      { name: "Stripe", role: { fr: "Paiement en ligne sécurisé", en: "Secure online payment" } }
    ]
  }

  /*
  ,{
    id: "mon-nouveau-projet",
    year: "2027",
    title: "Nom du projet",
    cover: "assets/img/mon-nouveau-projet/couverture.webp",
    coverAlt: { fr: "Description de l'image", en: "Image description" },
    tagline: { fr: "Une phrase qui dit ce que c'est", en: "One line saying what it is" },
    summary: { fr: "Deux phrases : le besoin, ce que j'ai fait.", en: "Two sentences: the need, what I did." },
    tags: ["Outil 1", "Outil 2"],
    context: { fr: "Cadre du projet (client, école, perso…)", en: "Project setting" },
    facts: [ { label: { fr: "Rôle", en: "Role" }, value: { fr: "…", en: "…" } } ],
    problem: [ { fr: "Le problème de départ.", en: "The starting problem." } ],
    solution: [ { title: { fr: "…", en: "…" }, text: { fr: "…", en: "…" } } ],
    chapters: [
      {
        title: { fr: "Titre de l'étape", en: "Step title" },
        body: [ { fr: "Paragraphe.", en: "Paragraph." } ],
        media: [
          { type: "image", src: "assets/img/…", alt: { fr: "…", en: "…" }, caption: { fr: "…", en: "…" } },
          { type: "video", youtube: "IDENTIFIANT", poster: "assets/img/…", title: { fr: "…", en: "…" }, duration: "1:30" }
        ]
      }
    ],
    decisions: [],
    status: { done: [], planned: [] },
    stack: [ { name: "Outil", role: { fr: "Son rôle", en: "Its role" } } ]
  }
  */
];
