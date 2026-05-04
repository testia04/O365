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
      },
      onenote: {
          title: '📓 OneNote - Votre carnet numérique ultime',
          sections: [
              {
                  title: 'Organisation flexible',
                  items: [
                      'Créez des carnets pour chaque projet avec des sections et pages illimitées',
                      'Utilisez les indicateurs pour marquer tâches, questions importantes et idées',
                      'Insérez n\'importe quel type de contenu : texte, images, audio, vidéos, fichiers',
                      'Organisez visuellement avec des tableaux, dessins et diagrammes'
                  ]
              },
              {
                  title: 'Capture et recherche',
                  items: [
                      'Capturez instantanément des idées avec OneNote Web Clipper depuis votre navigateur',
                      'Recherchez du texte dans vos notes manuscrites et images grâce à l\'OCR',
                      'Enregistrez des réunions avec synchronisation audio-texte',
                      'Scannez et numérisez des documents papier directement dans vos notes'
                  ]
              },
              {
                  title: 'Collaboration et accessibilité',
                  items: [
                      'Partagez des carnets entiers ou des pages spécifiques avec votre équipe',
                      'Travaillez simultanément sur les mêmes notes avec vos collègues',
                      'Accédez à vos notes depuis n\'importe quel appareil avec synchronisation cloud',
                      'Utilisez le stylet pour annoter et dessiner naturellement sur tablette'
                  ]
              }
          ],
          tip: {
              title: '💡 Astuce productivité',
              content: 'Utilisez Win+Alt+N pour créer instantanément une nouvelle note rapide. Parfait pour capturer une idée sans interrompre votre flux de travail.'
          }
      },
      planner: {
          title: '📋 Planner - Gestion de projets simplifiée',
          sections: [
              {
                  title: 'Visualisation et organisation',
                  items: [
                      'Créez des plans avec des compartiments personnalisés (À faire, En cours, Terminé)',
                      'Utilisez la vue Tableau pour un aperçu Kanban de toutes vos tâches',
                      'Consultez la vue Graphiques pour suivre la progression globale du projet',
                      'Organisez par échéance, affectation ou priorité selon vos besoins'
                  ]
              },
              {
                  title: 'Gestion des tâches',
                  items: [
                      'Affectez des tâches à plusieurs membres avec dates d\'échéance et priorités',
                      'Ajoutez des listes de contrôle, pièces jointes et commentaires à chaque tâche',
                      'Utilisez les étiquettes colorées pour catégoriser visuellement vos tâches',
                      'Recevez des notifications automatiques pour les tâches qui vous sont assignées'
                  ]
              },
              {
                  title: 'Intégration Teams',
                  items: [
                      'Ajoutez Planner comme onglet dans vos canaux Teams pour un accès direct',
                      'Synchronisez automatiquement avec To Do pour gérer vos tâches personnelles',
                      'Exportez vos plans vers Excel pour des analyses approfondies',
                      'Créez des plans depuis des modèles prédéfinis pour démarrer rapidement'
                  ]
              }
          ],
          tip: {
              title: '💡 Astuce productivité',
              content: 'Créez un plan "Template" avec vos compartiments et étiquettes standards. Copiez-le pour démarrer rapidement de nouveaux projets avec la même structure.'
          }
      },
      todo: {
          title: '✓ To Do - Maîtrisez votre quotidien',
          sections: [
              {
                  title: 'Listes intelligentes',
                  items: [
                      'Utilisez "Ma journée" pour vous concentrer sur les tâches prioritaires du jour',
                      'Créez des listes par projet, contexte ou thématique',
                      'La liste "Important" regroupe automatiquement vos tâches marquées prioritaires',
                      'Accédez à "Planifié" pour voir toutes vos tâches avec échéance'
                  ]
              },
              {
                  title: 'Détails et rappels',
                  items: [
                      'Ajoutez des étapes détaillées pour décomposer les tâches complexes',
                      'Configurez des rappels avec date, heure et même localisation',
                      'Ajoutez des notes et pièces jointes pour contextualiser vos tâches',
                      'Définissez des récurrences quotidiennes, hebdomadaires ou personnalisées'
                  ]
              },
              {
                  title: 'Partage et synchronisation',
                  items: [
                      'Partagez des listes avec collègues ou famille pour collaborer',
                      'Synchronisez automatiquement avec Outlook et Planner',
                      'Assignez des tâches aux membres de listes partagées',
                      'Accédez depuis mobile, web ou application de bureau'
                  ]
              }
          ],
          tip: {
              title: '💡 Astuce productivité',
              content: 'Chaque matin, consultez "Suggestions" qui vous propose intelligemment des tâches à ajouter à "Ma journée" selon vos échéances et habitudes.'
          }
      },
      forms: {
          title: '📝 Forms - Collectez des données efficacement',
          sections: [
              {
                  title: 'Création de formulaires',
                  items: [
                      'Choisissez parmi des modèles professionnels ou créez depuis zéro',
                      'Utilisez 10+ types de questions : choix, texte, évaluation, date, fichier',
                      'Ajoutez une logique de branchement pour adapter le formulaire aux réponses',
                      'Personnalisez avec votre thème, logo et images pour refléter votre marque'
                  ]
              },
              {
                  title: 'Quiz et évaluations',
                  items: [
                      'Créez des quiz avec notation automatique et barème personnalisé',
                      'Définissez des bonnes réponses et ajoutez des explications pour chaque question',
                      'Activez le mode quiz pour empêcher les retours en arrière',
                      'Partagez les résultats immédiatement ou après révision'
                  ]
              },
              {
                  title: 'Analyse et export',
                  items: [
                      'Consultez les résultats en temps réel avec graphiques et statistiques',
                      'Exportez vers Excel pour des analyses approfondies',
                      'Recevez des notifications par email pour chaque nouvelle réponse',
                      'Utilisez Power Automate pour automatiser les actions selon les réponses'
                  ]
              }
          ],
          tip: {
              title: '💡 Astuce productivité',
              content: 'Utilisez la fonction "Brancher" pour créer des formulaires adaptatifs. Par exemple, affichez des questions spécifiques selon le département sélectionné.'
          }
      },
      bookings: {
          title: '📅 Bookings - Rendez-vous sans effort',
          sections: [
              {
                  title: 'Configuration de services',
                  items: [
                      'Créez plusieurs types de rendez-vous avec durées et descriptions personnalisées',
                      'Définissez vos horaires de disponibilité par service et par jour',
                      'Configurez des temps tampons avant/après pour éviter les chevauchements',
                      'Ajoutez plusieurs membres d\'équipe avec disponibilités individuelles'
                  ]
              },
              {
                  title: 'Page de réservation',
                  items: [
                      'Personnalisez votre page avec logo, couleurs et informations de contact',
                      'Partagez un lien direct ou intégrez la page dans votre site web',
                      'Collectez des informations personnalisées via des champs sur mesure',
                      'Activez les paiements en ligne avec intégration de services de paiement'
                  ]
              },
              {
                  title: 'Gestion automatisée',
                  items: [
                      'Envoyez automatiquement confirmations et rappels par email/SMS',
                      'Créez automatiquement des réunions Teams pour les rendez-vous virtuels',
                      'Synchronisez avec votre calendrier Outlook pour éviter les conflits',
                      'Permettez aux clients de reprogrammer ou annuler facilement'
                  ]
              }
          ],
          tip: {
              title: '💡 Astuce productivité',
              content: 'Utilisez des questions personnalisées pour qualifier vos prospects avant le rendez-vous. Cela vous permet d\'arriver préparé et d\'optimiser le temps de réunion.'
          }
      },
      loop: {
          title: '🔄 Loop - Collaboration nouvelle génération',
          sections: [
              {
                  title: 'Composants Loop',
                  items: [
                      'Créez des listes de tâches, tableaux et notes qui restent synchronisés partout',
                      'Insérez des composants Loop dans Teams, Outlook, OneNote et Word',
                      'Modifiez depuis n\'importe où : les changements se reflètent instantanément',
                      'Utilisez @mentions pour notifier les collaborateurs dans les composants'
                  ]
              },
              {
                  title: 'Espaces de travail',
                  items: [
                      'Organisez vos projets dans des espaces dédiés avec tous vos composants',
                      'Structurez avec des pages et sous-pages pour une navigation claire',
                      'Collaborez en temps réel avec curseurs et présence des autres utilisateurs',
                      'Ajoutez rapidement des composants avec "/" pour accéder aux modèles'
                  ]
              },
              {
                  title: 'Co-création fluide',
                  items: [
                      'Voyez qui travaille sur quoi en temps réel avec les indicateurs de présence',
                      'Réagissez aux contributions avec des émojis et commentaires inline',
                      'Accédez à l\'historique des versions pour restaurer des versions antérieures',
                      'Partagez des espaces entiers ou des composants individuels avec permissions'
                  ]
              }
          ],
          tip: {
              title: '💡 Astuce productivité',
              content: 'Créez un composant Loop de statut de projet et insérez-le dans tous vos canaux Teams concernés. Une seule mise à jour = tout le monde informé instantanément.'
          }
      }
  };

  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.learn-btn').forEach(btn => {
      btn.addEventListener('click', e => {
          /*e.stopPropagation();*/
          const app = btn.closest('.app-card').dataset.app;
          const lesson = lessons[app];

          let content = `<h2>${lesson.title}</h2>`;

          lesson.sections.forEach(sec => {
              content += `<div class="lesson-section">
                  <h3>${sec.title}</h3>
                  <ul>${sec.items.map(i => `<li>${i}</li>`).join('')}</ul>
              </div>`;
          });

          if (lesson.tip) {
              content += `<div class="productivity-tip">
                  <h4>${lesson.tip.title}</h4>
                  <p>${lesson.tip.content}</p>
              </div>`;
          }

          modalBody.innerHTML = content;
          modal.style.display = 'block';
      });
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');

  window.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
  });

  document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.style.display === 'block') {
          modal.style.display = 'none';
      }
  });
