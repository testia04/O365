  // Données des leçons pour chaque application Office 365
const lessons = {
    outlook: {
        title: '📧 Outlook - Maîtrisez votre communication',
        sections: [
            {
                title: 'Gestion intelligente des emails',
                items: [
                    'Utilisez la boîte de réception prioritaire pour ne manquer aucun message important',
                    'Créez des règles automatiques pour trier vos emails par projet ou expéditeur',
                    'Ajoutez des catégories colorées pour identifier rapidement vos messages',
                    'Configurez des signatures personnalisées pour chaque compte email'
                ]
            },
            {
                title: 'Calendrier et productivité',
                items: [
                    'Partagez votre calendrier avec des permissions granulaires (lecture, modification)',
                    'Trouvez automatiquement des créneaux communs avec l\'Assistant Planification',
                    'Créez des réunions Teams directement depuis Outlook',
                    'Configurez des rappels multiples pour ne rien oublier'
                ]
            },
            {
                title: 'Astuces de pros',
                items: [
                    'Raccourci Ctrl+1, 2, 3, 4 pour naviguer rapidement entre Mail, Calendrier, Contacts, Tâches',
                    'Utilisez @ pour mentionner des collègues dans vos emails',
                    'Activez les réponses rapides pour gagner du temps',
                    'Recherchez avec des filtres avancés : from:nom, subject:projet, hasattachment:yes'
                ]
            }
        ],
        tip: {
            title: '💡 Astuce productivité',
            content: 'Utilisez les catégories colorées combinées aux règles automatiques pour créer un système de tri visuel. Par exemple : rouge pour urgent, bleu pour projets clients, vert pour informations.'
        }
    },
    word: {
        title: '📄 Word - Documents professionnels',
        sections: [
            {
                title: 'Mise en forme qui impressionne',
                items: [
                    'Utilisez les styles de titre (Titre 1, 2, 3) pour une hiérarchie claire et générer automatiquement une table des matières',
                    'Appliquez des thèmes de couleurs cohérents pour une identité visuelle professionnelle',
                    'Créez des en-têtes et pieds de page différents pour la première page',
                    'Insérez des sauts de section pour varier la mise en page dans un même document'
                ]
            },
            {
                title: 'Collaboration efficace',
                items: [
                    'Activez le suivi des modifications pour voir qui a modifié quoi et quand',
                    'Utilisez les commentaires contextuels plutôt que des notes dans le texte',
                    'Comparez deux versions pour identifier précisément les changements',
                    'Co-éditez en temps réel avec jusqu\'à 100 personnes simultanément'
                ]
            },
            {
                title: 'Fonctionnalités avancées',
                items: [
                    'Créez une table des matières automatique qui se met à jour en un clic',
                    'Utilisez les références croisées pour créer des liens internes dynamiques',
                    'Insérez des légendes automatiques pour numéroter figures et tableaux',
                    'Créez des modèles personnalisés avec votre charte graphique'
                ]
            }
        ],
        tip: {
            title: '💡 Astuce productivité',
            content: 'Utilisez F4 pour répéter la dernière action de mise en forme. Idéal pour appliquer rapidement le même style à plusieurs éléments sans copier-coller.'
        }
    },
    excel: {
        title: '📊 Excel - Donnez du sens à vos données',
        sections: [
            {
                title: 'Formules qui changent tout',
                items: [
                    'SOMME.SI et MOYENNE.SI pour des calculs conditionnels puissants',
                    'RECHERCHEV et INDEX+EQUIV pour croiser des données entre tableaux',
                    'SI.CONDITIONS pour gérer plusieurs critères logiques facilement',
                    'CONCATENER ou & pour assembler des données textuelles dynamiquement'
                ]
            },
            {
                title: 'Visualisations percutantes',
                items: [
                    'Créez des tableaux croisés dynamiques pour analyser des milliers de lignes en secondes',
                    'Utilisez la mise en forme conditionnelle avec barres de données et échelles de couleurs',
                    'Construisez des graphiques combinés (courbes + barres) pour comparer des indicateurs',
                    'Ajoutez des segments pour filtrer visuellement vos tableaux croisés'
                ]
            },
            {
                title: 'Automatisation et efficacité',
                items: [
                    'Convertissez vos plages en tableaux structurés pour des formules dynamiques',
                    'Créez des listes déroulantes avec validation pour éviter les erreurs de saisie',
                    'Enregistrez des macros pour automatiser vos tâches répétitives',
                    'Protégez certaines cellules tout en laissant d\'autres modifiables'
                ]
            }
        ],
        tip: {
            title: '💡 Astuce productivité',
            content: 'Ctrl+T transforme instantanément votre plage de données en tableau structuré avec tri, filtre et formules auto-étendues. Un gain de temps énorme pour l\'analyse de données.'
        }
    },
    powerpoint: {
        title: '📽️ PowerPoint - Présentations mémorables',
        sections: [
            {
                title: 'Design professionnel',
                items: [
                    'Utilisez le Designer PowerPoint (IA) pour générer automatiquement des mises en page créatives',
                    'Modifiez les masques de diapositives pour assurer une cohérence visuelle parfaite',
                    'Appliquez la règle des tiers pour positionner vos éléments visuels',
                    'Limitez-vous à 2-3 polices maximum et utilisez des contrastes forts'
                ]
            },
            {
                title: 'Animations intelligentes',
                items: [
                    'Utilisez la transition Morphose pour créer des animations fluides entre diapositives',
                    'Animez les éléments dans un ordre logique pour guider l\'attention',
                    'Créez des animations déclenchées par clic pour contrôler le rythme',
                    'Utilisez les trajectoires de mouvement pour des effets dynamiques'
                ]
            },
            {
                title: 'Présentation comme un pro',
                items: [
                    'Activez le mode Présentateur pour voir vos notes et le chrono sur votre écran',
                    'Enregistrez votre présentation avec narration pour un partage asynchrone',
                    'Utilisez le pointeur laser et le stylet pendant votre présentation',
                    'Exportez en vidéo pour une diffusion sur les réseaux sociaux ou intranet'
                ]
            }
        ],
        tip: {
            title: '💡 Astuce productivité',
            content: 'La touche B (black) pendant une présentation permet d\'éteindre temporairement l\'écran pour recentrer l\'attention sur vous. Idéal pour les transitions importantes.'
        }
    },
    teams: {
        title: '💬 Teams - Votre espace de travail digital',
        sections: [
            {
                title: 'Communication fluide',
                items: [
                    'Utilisez @mentions pour notifier des personnes spécifiques dans les conversations',
                    'Démarrez des appels vidéo avec floutage d\'arrière-plan ou fonds personnalisés',
                    'Partagez votre écran avec annotation en temps réel pendant les réunions',
                    'Créez des canaux thématiques pour organiser les discussions par projet'
                ]
            },
            {
                title: 'Organisation optimale',
                items: [
                    'Épinglez les conversations et canaux importants pour un accès rapide',
                    'Utilisez les onglets pour intégrer OneNote, Planner, ou des sites web',
                    'Créez des équipes avec des canaux standard (visibles) ou privés (restreints)',
                    'Configurez des notifications personnalisées par canal ou conversation'
                ]
            },
            {
                title: 'Réunions productives',
                items: [
                    'Enregistrez automatiquement vos réunions pour les absents (stockage OneDrive)',
                    'Activez la transcription en direct avec traduction en plusieurs langues',
                    'Créez des salles de discussion pour diviser en sous-groupes',
                    'Utilisez le mode Ensemble pour une expérience collective immersive'
                ]
            }
        ],
        tip: {
            title: '💡 Astuce productivité',
            content: 'Ctrl+E active la barre de recherche universelle de Teams. Tapez /disponible, /absent, /occupé pour changer rapidement votre statut, ou cherchez messages, fichiers et personnes.'
        }
    },
    onedrive: {
        title: '☁️ OneDrive - Vos fichiers, partout',
        sections: [
            {
                title: 'Stockage intelligent',
                items: [
                    'Profitez de 1 To d\'espace cloud avec votre abonnement Office 365',
                    'Synchronisez automatiquement vos dossiers bureau, documents et photos',
                    'Accédez à vos fichiers hors ligne et synchronisez quand vous reconnectez',
                    'Utilisez Files On-Demand pour économiser l\'espace disque local'
                ]
            },
            {
                title: 'Partage sécurisé',
                items: [
                    'Créez des liens de partage avec date d\'expiration automatique',
                    'Définissez des permissions granulaires : lecture seule ou modification',
                    'Ajoutez un mot de passe aux liens de partage pour plus de sécurité',
                    'Co-éditez des documents Office en temps réel depuis le cloud'
                ]
            },
            {
                title: 'Protection des données',
                items: [
                    'Restaurez jusqu\'à 30 versions antérieures de n\'importe quel fichier',
                    'Récupérez des fichiers supprimés jusqu\'à 93 jours après suppression',
                    'Activez l\'authentification à deux facteurs pour votre compte Microsoft',
                    'Consultez l\'historique d\'activité pour voir qui a accédé à vos fichiers'
                ]
            }
        ],
        tip: {
            title: '💡 Astuce productivité',
            content: 'Utilisez OneDrive comme système de sauvegarde automatique. Tous vos documents Office s\'enregistrent automatiquement dans le cloud, éliminant le risque de perte de données.'
        }
    }
};

// Références aux éléments du DOM
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

// Gestion des clics sur les boutons "Découvrir"
document.querySelectorAll('.learn-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        const app = btn.closest('.app-card').dataset.app;
        const lesson = lessons[app];

        // Construction du contenu de la modal
        let content = `<h2>${lesson.title}</h2>`;

        lesson.sections.forEach(sec => {
            content += `
                <div class="lesson-section">
                    <h3>${sec.title}</h3>
                    <ul>${sec.items.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
            `;
        });

        // Ajout de l'astuce de productivité si disponible
        if (lesson.tip) {
            content += `
                <div class="productivity-tip">
                    <h4>${lesson.tip.title}</h4>
                    <p>${lesson.tip.content}</p>
                </div>
            `;
        }

        modalBody.innerHTML = content;
        modal.style.display = 'block';
    });
});

// Fermeture de la modal via le bouton X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fermeture de la modal en cliquant à l'extérieur
window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Fermeture de la modal avec la touche Échap
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});
