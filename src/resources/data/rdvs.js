export const tasks = [
	{
		"id": 99,
		"date": {
			"dateid": "202338",
			"cardid": "20233899",
			"datefull": "2023-03-07T23:00:00.000Z",
			"day": 8,
			"month": 3,
			"year": 2023,
			"dayofweek": 2
		},
		"subject": "soucis de stockage",
		"status": 3,
		"comment": "discussions avec gts"
	},
	{
		"id": 1,
		"date": {
			"dateid": "20231127",
			"cardid": "202311271",
			"datefull": "2023-11-26T23:00:00.000Z",
			"day": 27,
			"month": 11,
			"year": 2023,
			"dayofweek": 1
		},
		"subject": "echanger avec philippe",
		"status": 3,
		"comment": "- arnaud nous envoie un treesize pour calculer la taille de nos shares         \n        - listing des shares cibles pour la copie         \n        - ils mettront le cold à marcoussis         \n        - ils doivent créer un share avec un seul superuser (mosesworker) pour le hot et le cold                  \n        on a 2 options :           \n        1) création d'un share par dossier : pb : beaucoup de changements dans les fichiers excel          \n        2) reproduction de la structure actuelle et copie sans droits sur le nouveau share          \n        vérifier si la 3e copie est une demande légale ou pas ?         \n        arnaud a les scripts pour créer et attribuer les bons groupes aux bons dossiers         \n        d'abord on copie sans droit ensuite on applique les droits          \n        \n        - mettre en place une purge des logs styx          \n        - remettre à plat les groupes                            \n        demander à philippe robert pourquoi on a 3 sauveragdes du share historiquement         \n        2 sauveragdes à roubaix, 1 à marcoussis         \n        si trop éloignées problème de latence possible. c'est pourquoi 1+1 à roubaix         \n        sauf qu'en cas d'incident majeurs, il est probable que les 2 sites de roubaix soient touchés et donc qu'on doive tout de même se rabattre sur marcoussis"
	},
	{
		"id": 2,
		"date": {
			"dateid": "20231127",
			"cardid": "202311272",
			"datefull": "2023-11-26T23:00:00.000Z",
			"day": 27,
			"month": 11,
			"year": 2023,
			"dayofweek": 1
		},
		"subject": "faire des traceroute sur le noeud avec la commande ufx",
		"status": 0,
		"comment": ""
	},
	{
		"id": 3,
		"date": {
			"dateid": "20231128",
			"cardid": "202311283",
			"datefull": "2023-11-27T23:00:00.000Z",
			"day": 28,
			"month": 11,
			"year": 2023,
			"dayofweek": 2
		},
		"subject": "je dois préparer une vm",
		"status": 1,
		"comment": "j'ai retrouvé la doc, mais pas encore effectué la procédure car p-e autre chose et surtout habilitations avec philippe)"
	},
	{
		"id": 4,
		"date": {
			"dateid": "20231128",
			"cardid": "202311284",
			"datefull": "2023-11-27T23:00:00.000Z",
			"day": 28,
			"month": 11,
			"year": 2023,
			"dayofweek": 2
		},
		"subject": "doit tester les noeuds hpe",
		"status": 2,
		"comment": "il semblerait que ça soit plutôt un problème de firewall"
	},
	{
		"id": 5,
		"date": {
			"dateid": "20231129",
			"cardid": "202311295",
			"datefull": "2023-11-28T23:00:00.000Z",
			"day": 29,
			"month": 11,
			"year": 2023,
			"dayofweek": 3
		},
		"subject": "tests de perf prod vs atos",
		"status": 3,
		"comment": ""
	},
	{
		"id": 6,
		"date": {
			"dateid": "20231129",
			"cardid": "202311296",
			"datefull": "2023-11-28T23:00:00.000Z",
			"day": 29,
			"month": 11,
			"year": 2023,
			"dayofweek": 3
		},
		"subject": "install vm",
		"status": 1,
		"comment": ""
	},
	{
		"id": 7,
		"date": {
			"dateid": "20231129",
			"cardid": "202311297",
			"datefull": "2023-11-28T23:00:00.000Z",
			"day": 29,
			"month": 11,
			"year": 2023,
			"dayofweek": 3
		},
		"subject": "exploiter le treesize de arnaud pour les dossiers du share",
		"status": 2,
		"comment": ""
	},
	{
		"id": 8,
		"date": {
			"dateid": "2023121",
			"cardid": "20231218",
			"datefull": "2023-11-30T23:00:00.000Z",
			"day": 1,
			"month": 12,
			"year": 2023,
			"dayofweek": 5
		},
		"subject": "travail avec gts",
		"status": 2,
		"comment": "\t\t-> pleins de tests \t\t-> ils doivent regarder avec hpc pourquoi les flux vers atos et hpe arrivent vers le headnode mais seuls ceux de atos s'exécutent normalement"
	},
	{
		"id": 9,
		"date": {
			"dateid": "2023121",
			"cardid": "20231219",
			"datefull": "2023-11-30T23:00:00.000Z",
			"day": 1,
			"month": 12,
			"year": 2023,
			"dayofweek": 5
		},
		"subject": "echanger avec philippe",
		"status": 2,
		"comment": "pas de retour de philippe. je lui laisse la journée"
	},
	{
		"id": 10,
		"date": {
			"dateid": "2023121",
			"cardid": "202312110",
			"datefull": "2023-11-30T23:00:00.000Z",
			"day": 1,
			"month": 12,
			"year": 2023,
			"dayofweek": 5
		},
		"subject": "calcul taille des shares",
		"status": 2,
		"comment": ""
	},
	{
		"id": 11,
		"date": {
			"dateid": "2023121",
			"cardid": "202312111",
			"datefull": "2023-11-30T23:00:00.000Z",
			"day": 1,
			"month": 12,
			"year": 2023,
			"dayofweek": 5
		},
		"subject": "adm",
		"status": 2,
		"comment": ""
	},
	{
		"id": 12,
		"date": {
			"dateid": "20231211",
			"cardid": "2023121112",
			"datefull": "2023-12-10T23:00:00.000Z",
			"day": 11,
			"month": 12,
			"year": 2023,
			"dayofweek": 1
		},
		"subject": "config vm",
		"status": 2,
		"comment": ""
	},
	{
		"id": 13,
		"date": {
			"dateid": "20231211",
			"cardid": "2023121113",
			"datefull": "2023-12-10T23:00:00.000Z",
			"day": 11,
			"month": 12,
			"year": 2023,
			"dayofweek": 1
		},
		"subject": "meeting dsi",
		"status": 2,
		"comment": ""
	},
	{
		"id": 14,
		"date": {
			"dateid": "20231212",
			"cardid": "2023121214",
			"datefull": "2023-12-11T23:00:00.000Z",
			"day": 12,
			"month": 12,
			"year": 2023,
			"dayofweek": 2
		},
		"subject": "standupm",
		"status": 3,
		"comment": ""
	},
	{
		"id": 15,
		"date": {
			"dateid": "20231212",
			"cardid": "2023121215",
			"datefull": "2023-12-11T23:00:00.000Z",
			"day": 12,
			"month": 12,
			"year": 2023,
			"dayofweek": 2
		},
		"subject": "gts size",
		"status": 3,
		"comment": ""
	},
	{
		"id": 16,
		"date": {
			"dateid": "20231212",
			"cardid": "2023121216",
			"datefull": "2023-12-11T23:00:00.000Z",
			"day": 12,
			"month": 12,
			"year": 2023,
			"dayofweek": 2
		},
		"subject": "lego4assu benchmarking cpu",
		"status": 3,
		"comment": ""
	},
	{
		"id": 18,
		"date": {
			"dateid": "20231213",
			"cardid": "2023121318",
			"datefull": "2023-12-12T23:00:00.000Z",
			"day": 13,
			"month": 12,
			"year": 2023,
			"dayofweek": 3
		},
		"subject": "meeting avec philippe",
		"status": 3,
		"comment": ""
	},
	{
		"id": 19,
		"date": {
			"dateid": "20231213",
			"cardid": "2023121319",
			"datefull": "2023-12-12T23:00:00.000Z",
			"day": 13,
			"month": 12,
			"year": 2023,
			"dayofweek": 3
		},
		"subject": "investiguations ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 20,
		"date": {
			"dateid": "20231213",
			"cardid": "2023121320",
			"datefull": "2023-12-12T23:00:00.000Z",
			"day": 13,
			"month": 12,
			"year": 2023,
			"dayofweek": 3
		},
		"subject": "du",
		"status": 3,
		"comment": "ajout du profil administration local du poste de travail (pour robots uniquement) sur poste de travail ndg full pour biah toby jean luc - x208782 - assu/res/dsi/frc/reg"
	},
	{
		"id": 21,
		"date": {
			"dateid": "20231213",
			"cardid": "2023121321",
			"datefull": "2023-12-12T23:00:00.000Z",
			"day": 13,
			"month": 12,
			"year": 2023,
			"dayofweek": 3
		},
		"subject": "prépa doc lego4assu",
		"status": 3,
		"comment": "lego4assu         tâches de prod             tester les computenodes atos et hpe             computenodes atos : [ otspargrdp41047, otspargrdp41047, otspargrdp45001, otspargrdp45001, otspargrdp45001, otspargrdp45002, otspargrdp45003, otspargrdp45004, otspargrdp45005, otspargrdp45006, otspargrdp45007, otspargrdp45008, otspargrdp45009, otspargrdp45010, otspargrdp45011, otspargrdp45012, otspargrdp45013, otspargrdp45014, otspargrdp45015, otspargrdp45016, otspargrdp45017, otspargrdp45018, otspargrdp45019 ]             computenodes hpe :  [ otspargrdp45101, otspargrdp45102, otspargrdp45103, otspargrdp45104, otspargrdp45105, otspargrdp45106, otspargrdp45107, otspargrdp45108, otspargrdp45109, otspargrdp45110, otspargrdp45111, otspargrdp45112, otspargrdp45113 ]             tous les computenodes atos sont déjà en prod             les computenodes hpe avaient des soucis avec la version du framework .net (4.8 au lieu de 4.7.2). david nous dira quand c'est corrigé. il faudra alors maj ce fichier https://groupsg001.sharepoint.com/sites/lego4assufollow-up/shared%20documents/general/tests%20de%20performance%20chez%20atos%20et%20hpe/tests%20de%20performance%20atos%20et%20hpe.xlsx?d=wa953529b63104082a8304cb6fd97613b&csf=1&web=1&e=nmfabk             lors des tests, il faut relever le nombre de coeurs alloués à chaque tâche et compléter ce fichier https://groupsg001.sharepoint.com/sites/lego4assufollow-up/shared%20documents/general/qualification%20windows%20server%202019%20%26%20hpc%20pack%202019/poc%20hpc%20pack%202019.xlsx?d=w47d6c35a9c384a56a2d3b153b881a9fc&csf=1&web=1&e=4pyguv         tâches du poc             le headnode du poc : srvlenassud01             les computenodes : otslcngrdp41987, otslcngrdd41983             le problème : le reporting ne marche pas.             la commande pour tester : le reporting du job.                 ex : ufx.exe \"\"         les contacts gts-grid             david.fauveaux-ext@socgen.com             vijayakumar.govindarajalou-ext@socgen.com (vijay)             arnaud.marchaudon@socgen.com"
	},
	{
		"id": 22,
		"date": {
			"dateid": "20231214",
			"cardid": "2023121422",
			"datefull": "2023-12-13T23:00:00.000Z",
			"day": 14,
			"month": 12,
			"year": 2023,
			"dayofweek": 4
		},
		"subject": "lego4assu",
		"status": 3,
		"comment": "epargne le computenodes 40 ne marche pas et est désactivé         prévoyance le computenodes 64, 69, 127, 102 ne marche pas et est désactivé         enlever rafm du 56         nouvelle branche ufx         pour le test nous avons enlevé le node 69 de rafm"
	},
	{
		"id": 23,
		"date": {
			"dateid": "20231229",
			"cardid": "2023122923",
			"datefull": "2023-12-28T23:00:00.000Z",
			"day": 29,
			"month": 12,
			"year": 2023,
			"dayofweek": 5
		},
		"subject": "lego4assu",
		"status": 3,
		"comment": "\t* poc : grid est en attente de la vm pour l'intégrer dans la grille une fois que le middleware sera installé sur la vdi         * poc : accès concurrentiel à un objet com ? => ouvrir un case chez ms (athmane a envoyé les data)         * poc : tests de l'ensemble des use cases à réaliser pour validation         * hpe :\ttest noeuds hpe         * il y a des chances que toutes les emmerdes auxquelles nous avons fait face se reproduisent à l'avenir car personne n'a pris des notes au fur et à mesure chez grid         on a parlé de regression, mais je pense que l'ufx était déjà défaillant         enfin ils sont d'accords sur l'utilité d'une grille de dev                  mettre le delai du retry ufx dans la conf"
	},
	{
		"id": 24,
		"date": {
			"dateid": "202412",
			"cardid": "20241224",
			"datefull": "2024-01-01T23:00:00.000Z",
			"day": 2,
			"month": 1,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "styx devs en cours ?",
		"status": 3,
		"comment": "\t\tathmane : non \t\tisaac \t: oui \t\tconclusion : isaac garde la main sur styx"
	},
	{
		"id": 25,
		"date": {
			"dateid": "202412",
			"cardid": "20241225",
			"datefull": "2024-01-01T23:00:00.000Z",
			"day": 2,
			"month": 1,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "ufx",
		"status": 3,
		"comment": "des tests à faire poc, hpe, "
	},
	{
		"id": 26,
		"date": {
			"dateid": "202412",
			"cardid": "20241226",
			"datefull": "2024-01-01T23:00:00.000Z",
			"day": 2,
			"month": 1,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "moody's esg",
		"status": 3,
		"comment": "voir avec christophe"
	},
	{
		"id": 27,
		"date": {
			"dateid": "202413",
			"cardid": "20241327",
			"datefull": "2024-01-02T23:00:00.000Z",
			"day": 3,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "point ufx avec athmane",
		"status": 3,
		"comment": "\t- recette des devs effectués         - run les usecases sur chaque noeud du poc          - run les usecases sur chaque noeud hpe         - ouvrir un case chez ms (athmane a envoyé les data)         - us à créer la tâche ufx devrait attaquer un template excel     "
	},
	{
		"id": 28,
		"date": {
			"dateid": "202413",
			"cardid": "20241228",
			"datefull": "2024-01-02T23:00:00.000Z",
			"day": 3,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "envoyer un mail à l'équipe chargée des droits sur le vm",
		"status": 3,
		"comment": "\"vm creation - vm srvcldymod002 has been created\" - unity crée https://unity.itsm.socgen/saw/ess/requesttracking/81778279"
	},
	{
		"id": 29,
		"date": {
			"dateid": "202413",
			"cardid": "20241229",
			"datefull": "2024-01-02T23:00:00.000Z",
			"day": 3,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "suivre le mail \"problèmes de run sur les grilles de calculs\"",
		"status": 3,
		"comment": "quality of service gts for-retail resggtsopmrfitig <for-retail.quality-of-service-gts@socgen.com>"
	},
	{
		"id": 30,
		"date": {
			"dateid": "202418",
			"cardid": "20241830",
			"datefull": "2024-01-07T23:00:00.000Z",
			"day": 8,
			"month": 1,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "licences excel",
		"status": 3,
		"comment": "licences excel toujours pas ok sur la prévoyance. j'ai testé et répondu à leur mail"
	},
	{
		"id": 31,
		"date": {
			"dateid": "202418",
			"cardid": "20241831",
			"datefull": "2024-01-07T23:00:00.000Z",
			"day": 8,
			"month": 1,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "computenode 38 ko",
		"status": 3,
		"comment": "le computenode 38 (epargne) ne marche pas et est désactivé         equipe infra assu :              cedric.soullier@socgen.com             dominique.laine@socgen.com (notre facilitateur)"
	},
	{
		"id": 32,
		"date": {
			"dateid": "202419",
			"cardid": "20241932",
			"datefull": "2024-01-08T23:00:00.000Z",
			"day": 9,
			"month": 1,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "demande de reinstall d'excel",
		"status": 3,
		"comment": "demande de reinstall d'excel sur les noeuds en echec surl a grille prev"
	},
	{
		"id": 33,
		"date": {
			"dateid": "202419",
			"cardid": "20241933",
			"datefull": "2024-01-08T23:00:00.000Z",
			"day": 9,
			"month": 1,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "demande de restart du service towers watson",
		"status": 3,
		"comment": "demande de restart du service towers watson sur les noeuds rafm_kp"
	},
	{
		"id": 34,
		"date": {
			"dateid": "2024111",
			"cardid": "202411134",
			"datefull": "2024-01-10T23:00:00.000Z",
			"day": 11,
			"month": 1,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "lego4assu",
		"status": 3,
		"comment": "\t- relancer pour les droits admin du groupe dev en rdp sur les vm         - me donner les droits sur sgcloud"
	},
	{
		"id": 35,
		"date": {
			"dateid": "2024112",
			"cardid": "202411235",
			"datefull": "2024-01-11T23:00:00.000Z",
			"day": 12,
			"month": 1,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "lego4assu",
		"status": 3,
		"comment": "\t- admin access vm denied. j'ai demandé plus de précision au gars         - athmane vous envoie un styx pour tester l'ufx         - gts n'a pas encore trouvé ce qui ne marche pas avec les nouveaux noeuds"
	},
	{
		"id": 36,
		"date": {
			"dateid": "2024115",
			"cardid": "202411536",
			"datefull": "2024-01-14T23:00:00.000Z",
			"day": 15,
			"month": 1,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "lego4assu",
		"status": 3,
		"comment": "\t- pas de retour sur vm admin access denied         - olivier a un styx pour les tests de perf, mais encore un soucis avec l'ufx"
	},
	{
		"id": 37,
		"date": {
			"dateid": "2024117",
			"cardid": "202411737",
			"datefull": "2024-01-16T23:00:00.000Z",
			"day": 17,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - grille musée [nous devons nous rapprocher de alm pour savoir quoi faire]",
		"status": 3,
		"comment": "\t\t\t=> où se trouve le dongle moses ?          => pouvez-vous le déplacer vers le headnode srvrbxassup08 ?         => installer les services rafm sur les noeuds de la grille musée         => où sont les exécutables rafm ? \\srvrbxassufp01hpcsoftwarepackage\riskagilityfm2.4.428.645792"
	},
	{
		"id": 38,
		"date": {
			"dateid": "2024117",
			"cardid": "202411738",
			"datefull": "2024-01-16T23:00:00.000Z",
			"day": 17,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - etat des lieux ufx sur le poc",
		"status": 3,
		"comment": "\t=> les macros ne fonctionnent nulle-part         => l'ufx fonctionne sur les noeuds otslcngrdp41983, otslcngrdp41987         => l'ufx ne fonctionne pas sur les noeuds otslcngrdp41565, otslcngrdp41574         => noeuds à remasteriser par gts"
	},
	{
		"id": 39,
		"date": {
			"dateid": "2024117",
			"cardid": "202411739",
			"datefull": "2024-01-16T23:00:00.000Z",
			"day": 17,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - etat des lieux ufx sur la prod",
		"status": 3,
		"comment": "\t\t\t=> otspargrdp40234 (ok), otspargrdp30970 (ok)         => test perf effectués (~ = ,4m44s)         testings scr : le scr est systématiquement ko"
	},
	{
		"id": 40,
		"date": {
			"dateid": "2024118",
			"cardid": "202411840",
			"datefull": "2024-01-17T23:00:00.000Z",
			"day": 18,
			"month": 1,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - tests de perf",
		"status": 3,
		"comment": "athmane fait les tests de perf"
	},
	{
		"id": 41,
		"date": {
			"dateid": "2024118",
			"cardid": "202411841",
			"datefull": "2024-01-17T23:00:00.000Z",
			"day": 18,
			"month": 1,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - logs ufx",
		"status": 3,
		"comment": "athmane place les logs ufx"
	},
	{
		"id": 42,
		"date": {
			"dateid": "2024118",
			"cardid": "202411842",
			"datefull": "2024-01-17T23:00:00.000Z",
			"day": 18,
			"month": 1,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - grille musée",
		"status": 3,
		"comment": "\t=> licence manager : demander à gts s'ils ont le setup, si non, demander à la dsi         => exécutables rafm : \\srvrbxassufp01hpcsoftwarepackage\riskagilityfm2.4.428.645792 à donner à gts         => doc install rafm : \\assushare.sogecap.socgenassu_projets\featureteammcdocumentationdoc_licence_managerserveur de licences moses & rafm 6.0.docx         => setup licence manager : \\srvrbxassufp01hpcsoftwarewtw_licence_manager_3.5licence_manager         => serveur de licence musée ? est-ce le headnode ?"
	},
	{
		"id": 43,
		"date": {
			"dateid": "2024119",
			"cardid": "202411943",
			"datefull": "2024-01-18T23:00:00.000Z",
			"day": 19,
			"month": 1,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - point install rafm",
		"status": 3,
		"comment": ""
	},
	{
		"id": 44,
		"date": {
			"dateid": "2024119",
			"cardid": "202411944",
			"datefull": "2024-01-18T23:00:00.000Z",
			"day": 19,
			"month": 1,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - install vs community sur srvcldymod002",
		"status": 3,
		"comment": ""
	},
	{
		"id": 45,
		"date": {
			"dateid": "2024119",
			"cardid": "202411945",
			"datefull": "2024-01-18T23:00:00.000Z",
			"day": 19,
			"month": 1,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - gestion bug pfx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 46,
		"date": {
			"dateid": "2024122",
			"cardid": "202412246",
			"datefull": "2024-01-21T23:00:00.000Z",
			"day": 22,
			"month": 1,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - validation résolution bug pfx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 47,
		"date": {
			"dateid": "2024122",
			"cardid": "202412247",
			"datefull": "2024-01-21T23:00:00.000Z",
			"day": 22,
			"month": 1,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - run de styx prod vs srvcldymod002",
		"status": 3,
		"comment": ""
	},
	{
		"id": 48,
		"date": {
			"dateid": "2024122",
			"cardid": "202412248",
			"datefull": "2024-01-21T23:00:00.000Z",
			"day": 22,
			"month": 1,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "styx vulnsec",
		"status": 3,
		"comment": "\t=> https://jira.assu.socgen/browse/vulnsec-693         => https://jira.assu.socgen/browse/vulnsec-692         => s'ils ont besoin d'une charge de travail, il faut prevenir séverine     "
	},
	{
		"id": 49,
		"date": {
			"dateid": "2024123",
			"cardid": "202412349",
			"datefull": "2024-01-22T23:00:00.000Z",
			"day": 23,
			"month": 1,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[prod] - incident sur le noeud otsrbxassup0050",
		"status": 3,
		"comment": "no licenses available on this server. il a été remplacé par le otsrbxassup0010"
	},
	{
		"id": 50,
		"date": {
			"dateid": "2024123",
			"cardid": "202412350",
			"datefull": "2024-01-22T23:00:00.000Z",
			"day": 23,
			"month": 1,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[lego4assu] - config vs sur la vm de dev",
		"status": 3,
		"comment": ""
	},
	{
		"id": 51,
		"date": {
			"dateid": "2024123",
			"cardid": "202412351",
			"datefull": "2024-01-22T23:00:00.000Z",
			"day": 23,
			"month": 1,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[lego4assu] - rédaction doc résumé lego4assu",
		"status": 3,
		"comment": ""
	},
	{
		"id": 52,
		"date": {
			"dateid": "2024124",
			"cardid": "202412452",
			"datefull": "2024-01-23T23:00:00.000Z",
			"day": 24,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - faire le point avec vijay sur la grille musée rafm",
		"status": 3,
		"comment": ""
	},
	{
		"id": 53,
		"date": {
			"dateid": "2024124",
			"cardid": "202412453",
			"datefull": "2024-01-23T23:00:00.000Z",
			"day": 24,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - faire le point avec christophe sur la grille musée rafm",
		"status": 3,
		"comment": ""
	},
	{
		"id": 54,
		"date": {
			"dateid": "2024124",
			"cardid": "202412454",
			"datefull": "2024-01-23T23:00:00.000Z",
			"day": 24,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - faire le point avec athmane sur la vm de dev",
		"status": 3,
		"comment": ""
	},
	{
		"id": 55,
		"date": {
			"dateid": "2024124",
			"cardid": "202412455",
			"datefull": "2024-01-23T23:00:00.000Z",
			"day": 24,
			"month": 1,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[adm] - formation",
		"status": 3,
		"comment": ""
	},
	{
		"id": 56,
		"date": {
			"dateid": "2024125",
			"cardid": "202412556",
			"datefull": "2024-01-24T23:00:00.000Z",
			"day": 25,
			"month": 1,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - follow-up",
		"status": 3,
		"comment": ""
	},
	{
		"id": 57,
		"date": {
			"dateid": "2024125",
			"cardid": "202412557",
			"datefull": "2024-01-24T23:00:00.000Z",
			"day": 25,
			"month": 1,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[res]",
		"status": 3,
		"comment": ""
	},
	{
		"id": 58,
		"date": {
			"dateid": "202427",
			"cardid": "20242758",
			"datefull": "2024-02-06T23:00:00.000Z",
			"day": 7,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - follow-up",
		"status": 3,
		"comment": ""
	},
	{
		"id": 59,
		"date": {
			"dateid": "202427",
			"cardid": "20242759",
			"datefull": "2024-02-06T23:00:00.000Z",
			"day": 7,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - point tests ratio/memoire",
		"status": 3,
		"comment": ""
	},
	{
		"id": 60,
		"date": {
			"dateid": "202427",
			"cardid": "20242760",
			"datefull": "2024-02-06T23:00:00.000Z",
			"day": 7,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] point mep",
		"status": 3,
		"comment": ""
	},
	{
		"id": 61,
		"date": {
			"dateid": "202429",
			"cardid": "20242961",
			"datefull": "2024-02-08T23:00:00.000Z",
			"day": 7,
			"month": 2,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - debug styx sur vm de dev (athmane)",
		"status": 3,
		"comment": ""
	},
	{
		"id": 62,
		"date": {
			"dateid": "202429",
			"cardid": "20242962",
			"datefull": "2024-02-08T23:00:00.000Z",
			"day": 7,
			"month": 2,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[adm] - groupadmin (xtof)",
		"status": 3,
		"comment": ""
	},
	{
		"id": 63,
		"date": {
			"dateid": "202429",
			"cardid": "20242963",
			"datefull": "2024-02-08T23:00:00.000Z",
			"day": 7,
			"month": 2,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - recette styx (isaac)",
		"status": 3,
		"comment": ""
	},
	{
		"id": 64,
		"date": {
			"dateid": "2024212",
			"cardid": "202421264",
			"datefull": "2024-02-11T23:00:00.000Z",
			"day": 12,
			"month": 2,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - test styx sur grille musée (srvlenassumus01, otslenassumus01, otslenassumus02",
		"status": 3,
		"comment": ""
	},
	{
		"id": 65,
		"date": {
			"dateid": "2024212",
			"cardid": "202421265",
			"datefull": "2024-02-11T23:00:00.000Z",
			"day": 12,
			"month": 2,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[hpc] - check des noeuds en erreur sur la grille prev",
		"status": 3,
		"comment": ""
	},
	{
		"id": 66,
		"date": {
			"dateid": "2024212",
			"cardid": "202421266",
			"datefull": "2024-02-11T23:00:00.000Z",
			"day": 12,
			"month": 2,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - excel manquant",
		"status": 3,
		"comment": "\t\t=> quel excel y mettre ?          celui correspondant aux normes actuelles ou alors faut-il demander à gts de calquer le musée sur la prod actuelle ?"
	},
	{
		"id": 67,
		"date": {
			"dateid": "2024213",
			"cardid": "202421367",
			"datefull": "2024-02-12T23:00:00.000Z",
			"day": 13,
			"month": 2,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "certains logs apparraissent encore sous \\srvrbxassufp01hpcworkapplinx_workerlogs. à modifier",
		"status": 3,
		"comment": ""
	},
	{
		"id": 68,
		"date": {
			"dateid": "2024214",
			"cardid": "202421468",
			"datefull": "2024-02-13T23:00:00.000Z",
			"day": 14,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - musée",
		"status": 3,
		"comment": ""
	},
	{
		"id": 69,
		"date": {
			"dateid": "2024214",
			"cardid": "202421469",
			"datefull": "2024-02-13T23:00:00.000Z",
			"day": 14,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - nodes hpe défectueux",
		"status": 3,
		"comment": ""
	},
	{
		"id": 70,
		"date": {
			"dateid": "2024214",
			"cardid": "202421470",
			"datefull": "2024-02-13T23:00:00.000Z",
			"day": 14,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - ",
		"status": 3,
		"comment": ""
	},
	{
		"id": 71,
		"date": {
			"dateid": "2024215",
			"cardid": "202421571",
			"datefull": "2024-02-14T23:00:00.000Z",
			"day": 15,
			"month": 2,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[adm] - c'est quoi idm ?",
		"status": 3,
		"comment": ""
	},
	{
		"id": 72,
		"date": {
			"dateid": "2024215",
			"cardid": "202421572",
			"datefull": "2024-02-14T23:00:00.000Z",
			"day": 15,
			"month": 2,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - debug irdpricer",
		"status": 3,
		"comment": ""
	},
	{
		"id": 73,
		"date": {
			"dateid": "2024215",
			"cardid": "202421573",
			"datefull": "2024-02-14T23:00:00.000Z",
			"day": 15,
			"month": 2,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - review longpath",
		"status": 3,
		"comment": ""
	},
	{
		"id": 74,
		"date": {
			"dateid": "2024215",
			"cardid": "202421574",
			"datefull": "2024-02-14T23:00:00.000Z",
			"day": 15,
			"month": 2,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - review harmful",
		"status": 3,
		"comment": ""
	},
	{
		"id": 75,
		"date": {
			"dateid": "2024216",
			"cardid": "202421675",
			"datefull": "2024-02-15T23:00:00.000Z",
			"day": 16,
			"month": 2,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - debug irdpricer",
		"status": 3,
		"comment": ""
	},
	{
		"id": 76,
		"date": {
			"dateid": "2024216",
			"cardid": "202421676",
			"datefull": "2024-02-15T23:00:00.000Z",
			"day": 16,
			"month": 2,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - débug ufx avec athmane",
		"status": 3,
		"comment": ""
	},
	{
		"id": 77,
		"date": {
			"dateid": "2024219",
			"cardid": "202421977",
			"datefull": "2024-02-18T23:00:00.000Z",
			"day": 19,
			"month": 2,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - debug ufx avec athmane",
		"status": 3,
		"comment": ""
	},
	{
		"id": 78,
		"date": {
			"dateid": "2024219",
			"cardid": "202421978",
			"datefull": "2024-02-18T23:00:00.000Z",
			"day": 19,
			"month": 2,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - config grille musée",
		"status": 3,
		"comment": ""
	},
	{
		"id": 79,
		"date": {
			"dateid": "2024219",
			"cardid": "202421979",
			"datefull": "2024-02-18T23:00:00.000Z",
			"day": 19,
			"month": 2,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 80,
		"date": {
			"dateid": "2024220",
			"cardid": "202422080",
			"datefull": "2024-02-19T23:00:00.000Z",
			"day": 20,
			"month": 2,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[lego4assu] - config grille musée",
		"status": 3,
		"comment": ""
	},
	{
		"id": 81,
		"date": {
			"dateid": "2024220",
			"cardid": "202422081",
			"datefull": "2024-02-19T23:00:00.000Z",
			"day": 20,
			"month": 2,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 82,
		"date": {
			"dateid": "2024221",
			"cardid": "202422182",
			"datefull": "2024-02-20T23:00:00.000Z",
			"day": 21,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - config grille musée - ticket unity",
		"status": 3,
		"comment": ""
	},
	{
		"id": 83,
		"date": {
			"dateid": "2024221",
			"cardid": "202422183",
			"datefull": "2024-02-20T23:00:00.000Z",
			"day": 21,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - config grille musée - debug moses32",
		"status": 3,
		"comment": ""
	},
	{
		"id": 84,
		"date": {
			"dateid": "2024221",
			"cardid": "202422184",
			"datefull": "2024-02-20T23:00:00.000Z",
			"day": 21,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 85,
		"date": {
			"dateid": "2024222",
			"cardid": "202422285",
			"datefull": "2024-02-21T23:00:00.000Z",
			"day": 22,
			"month": 2,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 86,
		"date": {
			"dateid": "2024223",
			"cardid": "202422386",
			"datefull": "2024-02-22T23:00:00.000Z",
			"day": 23,
			"month": 2,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 87,
		"date": {
			"dateid": "2024226",
			"cardid": "202422687",
			"datefull": "2024-02-25T23:00:00.000Z",
			"day": 26,
			"month": 2,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 88,
		"date": {
			"dateid": "2024227",
			"cardid": "202422788",
			"datefull": "2024-02-26T23:00:00.000Z",
			"day": 27,
			"month": 2,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 89,
		"date": {
			"dateid": "2024228",
			"cardid": "202422889",
			"datefull": "2024-02-27T23:00:00.000Z",
			"day": 28,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 90,
		"date": {
			"dateid": "2024228",
			"cardid": "202422890",
			"datefull": "2024-02-27T23:00:00.000Z",
			"day": 28,
			"month": 2,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - soucis données cold",
		"status": 3,
		"comment": ""
	},
	{
		"id": 91,
		"date": {
			"dateid": "2024229",
			"cardid": "202422891",
			"datefull": "2024-02-28T23:00:00.000Z",
			"day": 29,
			"month": 2,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 92,
		"date": {
			"dateid": "2024229",
			"cardid": "202422892",
			"datefull": "2024-02-28T23:00:00.000Z",
			"day": 29,
			"month": 2,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[adm] - droits seif",
		"status": 3,
		"comment": ""
	},
	{
		"id": 93,
		"date": {
			"dateid": "2024229",
			"cardid": "202422893",
			"datefull": "2024-02-28T23:00:00.000Z",
			"day": 29,
			"month": 2,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - copie données cold arnaud",
		"status": 3,
		"comment": ""
	},
	{
		"id": 94,
		"date": {
			"dateid": "202431",
			"cardid": "20243194",
			"datefull": "2024-02-29T23:00:00.000Z",
			"day": 1,
			"month": 3,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 95,
		"date": {
			"dateid": "202431",
			"cardid": "20242395",
			"datefull": "2024-02-29T23:00:00.000Z",
			"day": 1,
			"month": 3,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[hpc] - vulnérabilité chrome sur le serveur srvcldgrdd158",
		"status": 3,
		"comment": ""
	},
	{
		"id": 96,
		"date": {
			"dateid": "202434",
			"cardid": "20243496",
			"datefull": "2024-03-03T23:00:00.000Z",
			"day": 4,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - review styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 97,
		"date": {
			"dateid": "202434",
			"cardid": "20243497",
			"datefull": "2024-03-03T23:00:00.000Z",
			"day": 4,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - thomas daller : y a-t-il déjà eu des runs qui ont été lancés par des auditeurs/inspecteurs",
		"status": 3,
		"comment": ""
	},
	{
		"id": 98,
		"date": {
			"dateid": "202434",
			"cardid": "20243498",
			"datefull": "2024-03-03T23:00:00.000Z",
			"day": 4,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - groupadmin jakub",
		"status": 3,
		"comment": ""
	},
	{
		"id": 99,
		"date": {
			"dateid": "202434",
			"cardid": "20243499",
			"datefull": "2024-03-03T23:00:00.000Z",
			"day": 4,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - unity inspec",
		"status": 3,
		"comment": ""
	},
	{
		"id": 100,
		"date": {
			"dateid": "202435",
			"cardid": "202435100",
			"datefull": "2024-03-04T23:00:00.000Z",
			"day": 5,
			"month": 3,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - dev styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 101,
		"date": {
			"dateid": "202435",
			"cardid": "202435101",
			"datefull": "2024-03-04T23:00:00.000Z",
			"day": 5,
			"month": 3,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - point athmane",
		"status": 3,
		"comment": ""
	},
	{
		"id": 102,
		"date": {
			"dateid": "202436",
			"cardid": "202436102",
			"datefull": "2024-03-05T23:00:00.000Z",
			"day": 6,
			"month": 3,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - dev styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 103,
		"date": {
			"dateid": "202437",
			"cardid": "202437103",
			"datefull": "2024-03-06T23:00:00.000Z",
			"day": 7,
			"month": 3,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - dev styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 104,
		"date": {
			"dateid": "202438",
			"cardid": "202438104",
			"datefull": "2024-03-07T23:00:00.000Z",
			"day": 8,
			"month": 3,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - dev styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 105,
		"date": {
			"dateid": "202438",
			"cardid": "202438105",
			"datefull": "2024-03-07T23:00:00.000Z",
			"day": 8,
			"month": 3,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - \\192.116.160.100\test$, \\192.116.160.101\test$",
		"status": 3,
		"comment": ""
	},
	{
		"id": 106,
		"date": {
			"dateid": "202438",
			"cardid": "202438106",
			"datefull": "2024-03-07T23:00:00.000Z",
			"day": 8,
			"month": 3,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - arnaud (euramarcha_fr) souhaite, accéder aux vm pour configurer les droits",
		"status": 3,
		"comment": ""
	},
	{
		"id": 107,
		"date": {
			"dateid": "202438",
			"cardid": "202438107",
			"datefull": "2024-03-07T23:00:00.000Z",
			"day": 8,
			"month": 3,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - j'ai besoin de quelques users pour tester les accès aux shares (vm, citrix, poste, vpn). en cas d'échec,  noter l'ip",
		"status": 3,
		"comment": ""
	},
	{
		"id": 108,
		"date": {
			"dateid": "2024311",
			"cardid": "2024311108",
			"datefull": "2024-03-10T23:00:00.000Z",
			"day": 11,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - dev styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 109,
		"date": {
			"dateid": "2024311",
			"cardid": "2024311109",
			"datefull": "2024-03-10T23:00:00.000Z",
			"day": 11,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - lego4assu dans le pdp*",
		"status": 3,
		"comment": ""
	},
	{
		"id": 110,
		"date": {
			"dateid": "2024311",
			"cardid": "2024311110",
			"datefull": "2024-03-10T23:00:00.000Z",
			"day": 11,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - rse : purge de logs",
		"status": 3,
		"comment": ""
	},
	{
		"id": 111,
		"date": {
			"dateid": "2024311",
			"cardid": "2024311111",
			"datefull": "2024-03-10T23:00:00.000Z",
			"day": 11,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - rse : job de pugre",
		"status": 3,
		"comment": ""
	},
	{
		"id": 112,
		"date": {
			"dateid": "2024311",
			"cardid": "2024311112",
			"datefull": "2024-03-10T23:00:00.000Z",
			"day": 11,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - comportemental : formation cdp => mettre amélioration des compétences sur le poste de cdp (participer à la formation #num_formation)",
		"status": 3,
		"comment": ""
	},
	{
		"id": 113,
		"date": {
			"dateid": "2024311",
			"cardid": "2024311113",
			"datefull": "2024-03-10T23:00:00.000Z",
			"day": 11,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - 2.3 objectifs de développement comportemental professionnel : commencer par un verbe",
		"status": 3,
		"comment": ""
	},
	{
		"id": 114,
		"date": {
			"dateid": "2024311",
			"cardid": "2024311114",
			"datefull": "2024-03-10T23:00:00.000Z",
			"day": 11,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - fin isaac : 27/06/2023",
		"status": 3,
		"comment": ""
	},
	{
		"id": 115,
		"date": {
			"dateid": "2024311",
			"cardid": "2024311115",
			"datefull": "2024-03-10T23:00:00.000Z",
			"day": 11,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - entretien début juin",
		"status": 3,
		"comment": ""
	},
	{
		"id": 116,
		"date": {
			"dateid": "2024311",
			"cardid": "2024311116",
			"datefull": "2024-03-10T23:00:00.000Z",
			"day": 11,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - prépa ao début avril (2e semaine)",
		"status": 3,
		"comment": ""
	},
	{
		"id": 117,
		"date": {
			"dateid": "2024312",
			"cardid": "2024312117",
			"datefull": "2024-03-11T23:00:00.000Z",
			"day": 12,
			"month": 3,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - styx backlog",
		"status": 3,
		"comment": ""
	},
	{
		"id": 118,
		"date": {
			"dateid": "2024312",
			"cardid": "2024312118",
			"datefull": "2024-03-11T23:00:00.000Z",
			"day": 12,
			"month": 3,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[adm] - prépa pdp",
		"status": 3,
		"comment": ""
	},
	{
		"id": 119,
		"date": {
			"dateid": "2024313",
			"cardid": "2024313119",
			"datefull": "2024-03-12T23:00:00.000Z",
			"day": 13,
			"month": 3,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - styx backlog",
		"status": 3,
		"comment": ""
	},
	{
		"id": 120,
		"date": {
			"dateid": "2024313",
			"cardid": "2024313120",
			"datefull": "2024-03-12T23:00:00.000Z",
			"day": 13,
			"month": 3,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[adm] - prépa pdp",
		"status": 3,
		"comment": ""
	},
	{
		"id": 121,
		"date": {
			"dateid": "2024314",
			"cardid": "2024314121",
			"datefull": "2024-03-13T23:00:00.000Z",
			"day": 14,
			"month": 3,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - styx backlog",
		"status": 3,
		"comment": ""
	},
	{
		"id": 122,
		"date": {
			"dateid": "2024315",
			"cardid": "2024315122",
			"datefull": "2024-03-14T23:00:00.000Z",
			"day": 15,
			"month": 3,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - styx prépa recette",
		"status": 3,
		"comment": "id\ts2401001 : faris : [ok]"
	},
	{
		"id": 123,
		"date": {
			"dateid": "2024318",
			"cardid": "2024318123",
			"datefull": "2024-03-17T23:00:00.000Z",
			"day": 18,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - prépa styx recette",
		"status": 3,
		"comment": ""
	},
	{
		"id": 124,
		"date": {
			"dateid": "2024319",
			"cardid": "2024319124",
			"datefull": "2024-03-18T23:00:00.000Z",
			"day": 19,
			"month": 3,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - recette styx",
		"status": 3,
		"comment": "=> zack : 1 job 12'45 \t\t=> athy : 0"
	},
	{
		"id": 125,
		"date": {
			"dateid": "2024320",
			"cardid": "2024320125",
			"datefull": "2024-03-19T23:00:00.000Z",
			"day": 20,
			"month": 3,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - recette styx",
		"status": 3,
		"comment": "=> zack :  \t\t=> athy : "
	},
	{
		"id": 126,
		"date": {
			"dateid": "2024325",
			"cardid": "2024325126",
			"datefull": "2024-03-24T23:00:00.000Z",
			"day": 25,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - recette styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 127,
		"date": {
			"dateid": "2024325",
			"cardid": "2024325127",
			"datefull": "2024-03-24T23:00:00.000Z",
			"day": 25,
			"month": 3,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - maj cahier de recette",
		"status": 3,
		"comment": ""
	},
	{
		"id": 128,
		"date": {
			"dateid": "2024326",
			"cardid": "2024326128",
			"datefull": "2024-03-25T23:00:00.000Z",
			"day": 26,
			"month": 3,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - débug risklife",
		"status": 3,
		"comment": ""
	},
	{
		"id": 129,
		"date": {
			"dateid": "2024327",
			"cardid": "2024327129",
			"datefull": "2024-03-26T23:00:00.000Z",
			"day": 27,
			"month": 3,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - bouger calculsdev-w de _r et le mettre juste en _c",
		"status": 3,
		"comment": ""
	},
	{
		"id": 130,
		"date": {
			"dateid": "2024327",
			"cardid": "2024327130",
			"datefull": "2024-03-26T23:00:00.000Z",
			"day": 27,
			"month": 3,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - mettre mosesworker admin de tout et le retirer de calculsdev-w [non à préciser lors de la runion de tout à l'heure]",
		"status": 3,
		"comment": ""
	},
	{
		"id": 131,
		"date": {
			"dateid": "2024327",
			"cardid": "2024327131",
			"datefull": "2024-03-26T23:00:00.000Z",
			"day": 27,
			"month": 3,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - créer un groupe team avec un form ou chaque utilisateur a la possibilité de dire ce à quoi il a accès ou pas.",
		"status": 3,
		"comment": ""
	},
	{
		"id": 132,
		"date": {
			"dateid": "2024327",
			"cardid": "2024327132",
			"datefull": "2024-03-26T23:00:00.000Z",
			"day": 27,
			"month": 3,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - tester les accès restreints",
		"status": 3,
		"comment": "\t\t1) utiliser le compte de isaac \t\t2) le déplacer dans chaque groupe unitairement et vérifier qu'il n'a accès qu'au seul répertoire dédié au groupe en question \t\t3) créer une map de validation qui permettra à chaque utilisateur dans chaque groupe de dire ce à quoi il a accès ou pas \t\t\t3.1) x du user, accès dossier d00 -> d13 (oui/non), accès en local, vm, citrix, vpn"
	},
	{
		"id": 133,
		"date": {
			"dateid": "2024328",
			"cardid": "2024328133",
			"datefull": "2024-03-27T23:00:00.000Z",
			"day": 28,
			"month": 3,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - test des droits",
		"status": 3,
		"comment": ""
	},
	{
		"id": 134,
		"date": {
			"dateid": "2024328",
			"cardid": "2024328134",
			"datefull": "2024-03-27T23:00:00.000Z",
			"day": 28,
			"month": 3,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - recette styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 135,
		"date": {
			"dateid": "2024328",
			"cardid": "2024328135",
			"datefull": "2024-03-27T23:00:00.000Z",
			"day": 28,
			"month": 3,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - forms teams",
		"status": 3,
		"comment": ""
	},
	{
		"id": 136,
		"date": {
			"dateid": "2024329",
			"cardid": "2024329136",
			"datefull": "2024-03-28T23:00:00.000Z",
			"day": 29,
			"month": 3,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - test des droits",
		"status": 3,
		"comment": ""
	},
	{
		"id": 137,
		"date": {
			"dateid": "2024329",
			"cardid": "2024329137",
			"datefull": "2024-03-28T23:00:00.000Z",
			"day": 29,
			"month": 3,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - recette styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 138,
		"date": {
			"dateid": "2024329",
			"cardid": "2024329138",
			"datefull": "2024-03-28T23:00:00.000Z",
			"day": 29,
			"month": 3,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - forms teams",
		"status": 3,
		"comment": ""
	},
	{
		"id": 139,
		"date": {
			"dateid": "202441",
			"cardid": "202441139",
			"datefull": "2024-03-31T22:00:00.000Z",
			"day": 1,
			"month": 4,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - test des droits + forms teams",
		"status": 3,
		"comment": ""
	},
	{
		"id": 140,
		"date": {
			"dateid": "202441",
			"cardid": "202441140",
			"datefull": "2024-03-31T22:00:00.000Z",
			"day": 1,
			"month": 4,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - recette styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 141,
		"date": {
			"dateid": "202442",
			"cardid": "202442141",
			"datefull": "2024-04-01T22:00:00.000Z",
			"day": 2,
			"month": 4,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[lego4assu] - storage survey forms + assistance styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 142,
		"date": {
			"dateid": "202443",
			"cardid": "202443142",
			"datefull": "2024-04-02T22:00:00.000Z",
			"day": 3,
			"month": 4,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - storage survey forms",
		"status": 3,
		"comment": ""
	},
	{
		"id": 143,
		"date": {
			"dateid": "202443",
			"cardid": "202443143",
			"datefull": "2024-04-02T22:00:00.000Z",
			"day": 3,
			"month": 4,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - assistance styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 144,
		"date": {
			"dateid": "202443",
			"cardid": "202443144",
			"datefull": "2024-04-02T22:00:00.000Z",
			"day": 3,
			"month": 4,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - sprint review",
		"status": 3,
		"comment": ""
	},
	{
		"id": 145,
		"date": {
			"dateid": "202444",
			"cardid": "202444145",
			"datefull": "2024-04-03T22:00:00.000Z",
			"day": 4,
			"month": 4,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - storage survey forms",
		"status": 3,
		"comment": ""
	},
	{
		"id": 146,
		"date": {
			"dateid": "202444",
			"cardid": "202444146",
			"datefull": "2024-04-03T22:00:00.000Z",
			"day": 4,
			"month": 4,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - assistance styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 147,
		"date": {
			"dateid": "202444",
			"cardid": "202444147",
			"datefull": "2024-04-03T22:00:00.000Z",
			"day": 4,
			"month": 4,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - scrum",
		"status": 3,
		"comment": ""
	},
	{
		"id": 148,
		"date": {
			"dateid": "2024415",
			"cardid": "2024415148",
			"datefull": "2024-04-14T22:00:00.000Z",
			"day": 15,
			"month": 4,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - mails",
		"status": 3,
		"comment": ""
	},
	{
		"id": 149,
		"date": {
			"dateid": "2024415",
			"cardid": "2024415149",
			"datefull": "2024-04-14T22:00:00.000Z",
			"day": 15,
			"month": 4,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - dsi: prise en main retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 150,
		"date": {
			"dateid": "2024416",
			"cardid": "2024416150",
			"datefull": "2024-04-15T22:00:00.000Z",
			"day": 16,
			"month": 4,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[lego4assu] - team review",
		"status": 3,
		"comment": "\t\t=> lego4assu storage : tests d'accès => validés par gts \t\t=> lego4assu copie de fichiers :  \t\t=> recette styx \t\t\tlongpath à revoir par isaac \t\t\tgdc : athmane ?? \t\t=> nouveaux sujets ?"
	},
	{
		"id": 151,
		"date": {
			"dateid": "2024416",
			"cardid": "2024416151",
			"datefull": "2024-04-15T22:00:00.000Z",
			"day": 16,
			"month": 4,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 152,
		"date": {
			"dateid": "2024418",
			"cardid": "2024418152",
			"datefull": "2024-04-17T22:00:00.000Z",
			"day": 18,
			"month": 4,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 153,
		"date": {
			"dateid": "2024418",
			"cardid": "2024418153",
			"datefull": "2024-04-17T22:00:00.000Z",
			"day": 18,
			"month": 4,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - analyse storage testings",
		"status": 3,
		"comment": ""
	},
	{
		"id": 154,
		"date": {
			"dateid": "2024418",
			"cardid": "2024418154",
			"datefull": "2024-04-17T22:00:00.000Z",
			"day": 18,
			"month": 4,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - point recette ",
		"status": 3,
		"comment": "=> isaac doit recréer repartir de la branche 425-202404 \t\t=> athmane ??"
	},
	{
		"id": 155,
		"date": {
			"dateid": "2024419",
			"cardid": "2024419155",
			"datefull": "2024-04-18T22:00:00.000Z",
			"day": 19,
			"month": 4,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 156,
		"date": {
			"dateid": "2024419",
			"cardid": "2024419156",
			"datefull": "2024-04-18T22:00:00.000Z",
			"day": 19,
			"month": 4,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - point recette ",
		"status": 3,
		"comment": "=> isaac : revue copylongpath"
	},
	{
		"id": 157,
		"date": {
			"dateid": "2024422",
			"cardid": "2024422157",
			"datefull": "2024-04-21T22:00:00.000Z",
			"day": 22,
			"month": 4,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 158,
		"date": {
			"dateid": "2024422",
			"cardid": "2024422158",
			"datefull": "2024-04-21T22:00:00.000Z",
			"day": 22,
			"month": 4,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - dev styx 506",
		"status": 3,
		"comment": ""
	},
	{
		"id": 159,
		"date": {
			"dateid": "2024423",
			"cardid": "2024423159",
			"datefull": "2024-04-22T22:00:00.000Z",
			"day": 23,
			"month": 4,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 160,
		"date": {
			"dateid": "2024423",
			"cardid": "2024423160",
			"datefull": "2024-04-22T22:00:00.000Z",
			"day": 23,
			"month": 4,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - dev styx 506",
		"status": 3,
		"comment": ""
	},
	{
		"id": 161,
		"date": {
			"dateid": "2024424",
			"cardid": "2024424161",
			"datefull": "2024-04-23T22:00:00.000Z",
			"day": 24,
			"month": 4,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 162,
		"date": {
			"dateid": "2024424",
			"cardid": "2024424162",
			"datefull": "2024-04-23T22:00:00.000Z",
			"day": 24,
			"month": 4,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - point recette ",
		"status": 3,
		"comment": ""
	},
	{
		"id": 163,
		"date": {
			"dateid": "2024424",
			"cardid": "2024424163",
			"datefull": "2024-04-23T22:00:00.000Z",
			"day": 24,
			"month": 4,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - dev styx 506",
		"status": 3,
		"comment": ""
	},
	{
		"id": 164,
		"date": {
			"dateid": "2024425",
			"cardid": "2024425164",
			"datefull": "2024-04-24T22:00:00.000Z",
			"day": 25,
			"month": 4,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[adm] - dsi meeting",
		"status": 3,
		"comment": ""
	},
	{
		"id": 165,
		"date": {
			"dateid": "2024425",
			"cardid": "2024425165",
			"datefull": "2024-04-24T22:00:00.000Z",
			"day": 25,
			"month": 4,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - install addactis",
		"status": 3,
		"comment": ""
	},
	{
		"id": 166,
		"date": {
			"dateid": "2024425",
			"cardid": "2024425166",
			"datefull": "2024-04-24T22:00:00.000Z",
			"day": 25,
			"month": 4,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - ",
		"status": 3,
		"comment": ""
	},
	{
		"id": 167,
		"date": {
			"dateid": "2024426",
			"cardid": "2024426167",
			"datefull": "2024-04-25T22:00:00.000Z",
			"day": 26,
			"month": 4,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 168,
		"date": {
			"dateid": "2024426",
			"cardid": "2024426168",
			"datefull": "2024-04-25T22:00:00.000Z",
			"day": 26,
			"month": 4,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - point recette *2",
		"status": 3,
		"comment": ""
	},
	{
		"id": 169,
		"date": {
			"dateid": "2024429",
			"cardid": "2024429169",
			"datefull": "2024-04-28T22:00:00.000Z",
			"day": 29,
			"month": 4,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - dsi meetings *3",
		"status": 3,
		"comment": ""
	},
	{
		"id": 170,
		"date": {
			"dateid": "2024429",
			"cardid": "2024429170",
			"datefull": "2024-04-28T22:00:00.000Z",
			"day": 29,
			"month": 4,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - ",
		"status": 3,
		"comment": ""
	},
	{
		"id": 171,
		"date": {
			"dateid": "202452",
			"cardid": "202452171",
			"datefull": "2024-05-01T22:00:00.000Z",
			"day": 2,
			"month": 5,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - voici les informations clusters : ",
		"status": 3,
		"comment": "•\tcluster epargne :         o\tnom du cluster : clustepargne         o\thead node : assuprdhpe01, assuprdlen01     •\tcluster prévoyance :          o\tnom du cluster clustprevoyance         o\thead node : assuprdhpe02, assuprdlen02     "
	},
	{
		"id": 172,
		"date": {
			"dateid": "202456",
			"cardid": "202456172",
			"datefull": "2024-05-05T22:00:00.000Z",
			"day": 6,
			"month": 5,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 173,
		"date": {
			"dateid": "202456",
			"cardid": "202456173",
			"datefull": "2024-05-05T22:00:00.000Z",
			"day": 6,
			"month": 5,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - point recette ",
		"status": 3,
		"comment": ""
	},
	{
		"id": 174,
		"date": {
			"dateid": "2024513",
			"cardid": "2024513174",
			"datefull": "2024-05-12T22:00:00.000Z",
			"day": 13,
			"month": 5,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - politique de compression des dossiers archivés",
		"status": 3,
		"comment": "- est-ce que le fichier copié garde le même statut de compression ?         - le statut de compression peut jouer sur les temps de copie des dossiers         "
	},
	{
		"id": 175,
		"date": {
			"dateid": "2024513",
			"cardid": "2024513175",
			"datefull": "2024-05-12T22:00:00.000Z",
			"day": 13,
			"month": 5,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - recette ",
		"status": 3,
		"comment": ""
	},
	{
		"id": 176,
		"date": {
			"dateid": "2024514",
			"cardid": "2024514176",
			"datefull": "2024-05-13T22:00:00.000Z",
			"day": 14,
			"month": 5,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 177,
		"date": {
			"dateid": "2024515",
			"cardid": "2024515177",
			"datefull": "2024-05-14T22:00:00.000Z",
			"day": 15,
			"month": 5,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 178,
		"date": {
			"dateid": "2024515",
			"cardid": "2024515178",
			"datefull": "2024-05-14T22:00:00.000Z",
			"day": 15,
			"month": 5,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] -  : config nouvelle prod",
		"status": 3,
		"comment": ""
	},
	{
		"id": 179,
		"date": {
			"dateid": "2024517",
			"cardid": "2024517179",
			"datefull": "2024-05-16T22:00:00.000Z",
			"day": 17,
			"month": 5,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - : config nouvelle prod",
		"status": 3,
		"comment": ""
	},
	{
		"id": 180,
		"date": {
			"dateid": "2024517",
			"cardid": "2024517180",
			"datefull": "2024-05-16T22:00:00.000Z",
			"day": 17,
			"month": 5,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - copie hpc",
		"status": 3,
		"comment": ""
	},
	{
		"id": 181,
		"date": {
			"dateid": "2024521",
			"cardid": "2024521180",
			"datefull": "2024-05-20T22:00:00.000Z",
			"day": 21,
			"month": 5,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 182,
		"date": {
			"dateid": "2024522",
			"cardid": "2024522182",
			"datefull": "2024-05-21T22:00:00.000Z",
			"day": 22,
			"month": 5,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 183,
		"date": {
			"dateid": "2024522",
			"cardid": "2024522183",
			"datefull": "2024-05-21T22:00:00.000Z",
			"day": 22,
			"month": 5,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - ne pas changer de machine => eviter de nouvelles ouverture de routes",
		"status": 3,
		"comment": ""
	},
	{
		"id": 184,
		"date": {
			"dateid": "2024522",
			"cardid": "2024522184",
			"datefull": "2024-05-21T22:00:00.000Z",
			"day": 22,
			"month": 5,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - créer un outil d'alerte de sauveragdes et archivage",
		"status": 3,
		"comment": ""
	},
	{
		"id": 185,
		"date": {
			"dateid": "2024523",
			"cardid": "2024523185",
			"datefull": "2024-05-22T22:00:00.000Z",
			"day": 23,
			"month": 5,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - investiguations aggregator",
		"status": 3,
		"comment": ""
	},
	{
		"id": 186,
		"date": {
			"dateid": "2024523",
			"cardid": "2024523186",
			"datefull": "2024-05-22T22:00:00.000Z",
			"day": 23,
			"month": 5,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[adm] - dsi: analyse retours ao",
		"status": 3,
		"comment": ""
	},
	{
		"id": 187,
		"date": {
			"dateid": "2024524",
			"cardid": "2024524187",
			"datefull": "2024-05-23T22:00:00.000Z",
			"day": 24,
			"month": 5,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - recette styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 188,
		"date": {
			"dateid": "2024524",
			"cardid": "2024524188",
			"datefull": "2024-05-23T22:00:00.000Z",
			"day": 24,
			"month": 5,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - point vijay",
		"status": 3,
		"comment": "- nouvelle grille : vijay a reçu des billes de ms. recherche côté database (timeout de connexion) ou dns         - nouvelle grille : captures aurnaud à le lead         "
	},
	{
		"id": 190,
		"date": {
			"dateid": "2024527",
			"cardid": "2024527190",
			"datefull": "2024-05-26T22:00:00.000Z",
			"day": 27,
			"month": 5,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - config styx newgrid",
		"status": 3,
		"comment": ""
	},
	{
		"id": 191,
		"date": {
			"dateid": "2024527",
			"cardid": "2024527191",
			"datefull": "2024-05-26T22:00:00.000Z",
			"day": 27,
			"month": 5,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - recette styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 192,
		"date": {
			"dateid": "2024528",
			"cardid": "2024528192",
			"datefull": "2024-05-27T22:00:00.000Z",
			"day": 28,
			"month": 5,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[lego4assu] - newgrid : réactiver les noeuds inactifs",
		"status": 3,
		"comment": ""
	},
	{
		"id": 193,
		"date": {
			"dateid": "2024531",
			"cardid": "2024531193",
			"datefull": "2024-05-30T22:00:00.000Z",
			"day": 31,
			"month": 5,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - newgrid : réactiver les noeuds inactifs",
		"status": 3,
		"comment": ""
	},
	{
		"id": 194,
		"date": {
			"dateid": "202463",
			"cardid": "202463194",
			"datefull": "2024-06-02T22:00:00.000Z",
			"day": 3,
			"month": 6,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - recette styx : bug corrigé.",
		"status": 3,
		"comment": "à voir avec isaac pour le test. problème de merge. en cas de doute, communiquez !!!"
	},
	{
		"id": 195,
		"date": {
			"dateid": "202463",
			"cardid": "202463195",
			"datefull": "2024-06-02T22:00:00.000Z",
			"day": 3,
			"month": 6,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - dossiers hpc:",
		"status": 3,
		"comment": "tout ce qui est non fonctionnel ne devrait-on pas le déplaccer dans assushare ?"
	},
	{
		"id": 196,
		"date": {
			"dateid": "202463",
			"cardid": "202463196",
			"datefull": "2024-06-02T22:00:00.000Z",
			"day": 3,
			"month": 6,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "congé",
		"status": 4,
		"comment": "je prends mon aprem"
	},
	{
		"id": 197,
		"date": {
			"dateid": "202464",
			"cardid": "202464197",
			"datefull": "2024-06-03T22:00:00.000Z",
			"day": 4,
			"month": 6,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - astreinte du 08+09",
		"status": 3,
		"comment": ""
	},
	{
		"id": 198,
		"date": {
			"dateid": "202465",
			"cardid": "202465198",
			"datefull": "2024-06-04T22:00:00.000Z",
			"day": 5,
			"month": 6,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[lego4assu] - ath + styx newgrid + onemodel",
		"status": 3,
		"comment": ""
	},
	{
		"id": 199,
		"date": {
			"dateid": "202465",
			"cardid": "202465199",
			"datefull": "2024-06-04T22:00:00.000Z",
			"day": 5,
			"month": 6,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - isaac + test styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 200,
		"date": {
			"dateid": "202466",
			"cardid": "202466200",
			"datefull": "2024-06-05T22:00:00.000Z",
			"day": 6,
			"month": 6,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - styx newgrid + onemodel",
		"status": 3,
		"comment": ""
	},
	{
		"id": 201,
		"date": {
			"dateid": "202467",
			"cardid": "202467201",
			"datefull": "2024-06-06T22:00:00.000Z",
			"day": 7,
			"month": 6,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "congé",
		"status": 4,
		"comment": "day off"
	},
	{
		"id": 202,
		"date": {
			"dateid": "2024610",
			"cardid": "2024610202",
			"datefull": "2024-06-09T22:00:00.000Z",
			"day": 10,
			"month": 6,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - dsi",
		"status": 3,
		"comment": ""
	},
	{
		"id": 203,
		"date": {
			"dateid": "2024610",
			"cardid": "2024610203",
			"datefull": "2024-06-09T22:00:00.000Z",
			"day": 10,
			"month": 6,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[adm] - point séverine",
		"status": 3,
		"comment": "le nouveau sciforma"
	},
	{
		"id": 204,
		"date": {
			"dateid": "2024610",
			"cardid": "2024610204",
			"datefull": "2024-06-09T22:00:00.000Z",
			"day": 10,
			"month": 6,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - ath + styx onemodel",
		"status": 3,
		"comment": ""
	},
	{
		"id": 205,
		"date": {
			"dateid": "2024610",
			"cardid": "2024610205",
			"datefull": "2024-06-09T22:00:00.000Z",
			"day": 10,
			"month": 6,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[lego4assu] - tf : ovh a répondu, nous aurons des précisions demain.",
		"status": 3,
		"comment": ""
	},
	{
		"id": 206,
		"date": {
			"dateid": "2024612",
			"cardid": "2024612206",
			"datefull": "2024-06-11T22:00:00.000Z",
			"day": 12,
			"month": 6,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "congé",
		"status": 4,
		"comment": ""
	},
	{
		"id": 207,
		"date": {
			"dateid": "2024613",
			"cardid": "2024613207",
			"datefull": "2024-06-12T22:00:00.000Z",
			"day": 13,
			"month": 6,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - point styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 208,
		"date": {
			"dateid": "2024613",
			"cardid": "2024613208",
			"datefull": "2024-06-12T22:00:00.000Z",
			"day": 13,
			"month": 6,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[adm] - admin",
		"status": 3,
		"comment": ""
	},
	{
		"id": 209,
		"date": {
			"dateid": "2024614",
			"cardid": "2024614209",
			"datefull": "2024-06-13T22:00:00.000Z",
			"day": 14,
			"month": 6,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 210,
		"date": {
			"dateid": "2024617",
			"cardid": "2024617210",
			"datefull": "2024-06-16T22:00:00.000Z",
			"day": 17,
			"month": 6,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "congé",
		"status": 4,
		"comment": ""
	},
	{
		"id": 211,
		"date": {
			"dateid": "2024618",
			"cardid": "2024618211",
			"datefull": "2024-06-17T22:00:00.000Z",
			"day": 18,
			"month": 6,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 212,
		"date": {
			"dateid": "2024618",
			"cardid": "2024618212",
			"datefull": "2024-06-17T22:00:00.000Z",
			"day": 18,
			"month": 6,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[adm] - dsi",
		"status": 3,
		"comment": ""
	},
	{
		"id": 213,
		"date": {
			"dateid": "2024619",
			"cardid": "2024619213",
			"datefull": "2024-06-18T22:00:00.000Z",
			"day": 2,
			"month": 6,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 214,
		"date": {
			"dateid": "2024620",
			"cardid": "2024620214",
			"datefull": "2024-06-19T22:00:00.000Z",
			"day": 20,
			"month": 6,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - styx",
		"status": 3,
		"comment": "// --- note : log the time here @ apphpc.appsubmission.jobmanager 276 && apphpc.services.hpcbridgeservice 78"
	},
	{
		"id": 215,
		"date": {
			"dateid": "2024621",
			"cardid": "2024621215",
			"datefull": "2024-06-20T22:00:00.000Z",
			"day": 21,
			"month": 6,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - configuring meeting notes",
		"status": 3,
		"comment": "-> voir comment ajouter un job ayant déjà toutes les tâches"
	},
	{
		"id": 216,
		"date": {
			"dateid": "2024624",
			"cardid": "2024624216",
			"datefull": "2024-06-23T22:00:00.000Z",
			"day": 24,
			"month": 6,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "congé",
		"status": 4,
		"comment": ""
	},
	{
		"id": 217,
		"date": {
			"dateid": "2024625",
			"cardid": "2024625217",
			"datefull": "2024-06-24T22:00:00.000Z",
			"day": 25,
			"month": 6,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - point styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 218,
		"date": {
			"dateid": "2024625",
			"cardid": "2024625218",
			"datefull": "2024-06-24T22:00:00.000Z",
			"day": 25,
			"month": 6,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - git ",
		"status": 3,
		"comment": ""
	},
	{
		"id": 219,
		"date": {
			"dateid": "2024626",
			"cardid": "2024626219",
			"datefull": "2024-06-25T22:00:00.000Z",
			"day": 26,
			"month": 6,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 220,
		"date": {
			"dateid": "2024627",
			"cardid": "2024627220",
			"datefull": "2024-06-26T22:00:00.000Z",
			"day": 27,
			"month": 6,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 221,
		"date": {
			"dateid": "2024628",
			"cardid": "2024628221",
			"datefull": "2024-06-27T22:00:00.000Z",
			"day": 28,
			"month": 6,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - styx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 222,
		"date": {
			"dateid": "2024628",
			"cardid": "2024628222",
			"datefull": "2024-06-27T22:00:00.000Z",
			"day": 28,
			"month": 6,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[adm] - sciforma: 2405",
		"status": 3,
		"comment": ""
	},
	{
		"id": 223,
		"date": {
			"dateid": "2024628",
			"cardid": "2024628223",
			"datefull": "2024-06-27T22:00:00.000Z",
			"day": 28,
			"month": 6,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[adm] - formation : 137490 - strategie rse groupe societe generale (vf) (csod.com)",
		"status": 3,
		"comment": ""
	},
	{
		"id": 224,
		"date": {
			"dateid": "202471",
			"cardid": "202471224",
			"datefull": "2024-06-30T22:00:00.000Z",
			"day": 1,
			"month": 7,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - recette",
		"status": 3,
		"comment": ""
	},
	{
		"id": 225,
		"date": {
			"dateid": "202471",
			"cardid": "202471225",
			"datefull": "2024-06-30T22:00:00.000Z",
			"day": 1,
			"month": 7,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - merge 425w534",
		"status": 3,
		"comment": ""
	},
	{
		"id": 226,
		"date": {
			"dateid": "202472",
			"cardid": "202472226",
			"datefull": "2024-07-01T22:00:00.000Z",
			"day": 2,
			"month": 7,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - test 534",
		"status": 3,
		"comment": ""
	},
	{
		"id": 227,
		"date": {
			"dateid": "202473",
			"cardid": "202473227",
			"datefull": "2024-07-02T22:00:00.000Z",
			"day": 3,
			"month": 7,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - clean rerun",
		"status": 3,
		"comment": ""
	},
	{
		"id": 228,
		"date": {
			"dateid": "202474",
			"cardid": "202474228",
			"datefull": "2024-07-03T22:00:00.000Z",
			"day": 4,
			"month": 7,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - usecases",
		"status": 3,
		"comment": ""
	},
	{
		"id": 229,
		"date": {
			"dateid": "202475",
			"cardid": "202475229",
			"datefull": "2024-07-04T22:00:00.000Z",
			"day": 5,
			"month": 7,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - usecases",
		"status": 3,
		"comment": ""
	},
	{
		"id": 230,
		"date": {
			"dateid": "202475",
			"cardid": "202475230",
			"datefull": "2024-07-04T22:00:00.000Z",
			"day": 5,
			"month": 7,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[lego4assu] - assistance ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 231,
		"date": {
			"dateid": "202475",
			"cardid": "202475231",
			"datefull": "2024-07-04T22:00:00.000Z",
			"day": 5,
			"month": 7,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - assistance purge",
		"status": 3,
		"comment": ""
	},
	{
		"id": 232,
		"date": {
			"dateid": "202478",
			"cardid": "202478232",
			"datefull": "2024-07-07T22:00:00.000Z",
			"day": 8,
			"month": 7,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - usecases",
		"status": 3,
		"comment": ""
	},
	{
		"id": 233,
		"date": {
			"dateid": "202479",
			"cardid": "202479233",
			"datefull": "2024-07-08T22:00:00.000Z",
			"day": 9,
			"month": 7,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - usecases",
		"status": 3,
		"comment": ""
	},
	{
		"id": 234,
		"date": {
			"dateid": "202479",
			"cardid": "202479234",
			"datefull": "2024-07-08T22:00:00.000Z",
			"day": 9,
			"month": 7,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - logs",
		"status": 3,
		"comment": ""
	},
	{
		"id": 235,
		"date": {
			"dateid": "2024710",
			"cardid": "2024710235",
			"datefull": "2024-07-09T22:00:00.000Z",
			"day": 10,
			"month": 7,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - point inputdescriptor",
		"status": 3,
		"comment": ""
	},
	{
		"id": 236,
		"date": {
			"dateid": "2024710",
			"cardid": "2024710236",
			"datefull": "2024-07-09T22:00:00.000Z",
			"day": 10,
			"month": 7,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - logs",
		"status": 3,
		"comment": ""
	},
	{
		"id": 237,
		"date": {
			"dateid": "2024710",
			"cardid": "2024710237",
			"datefull": "2024-07-09T22:00:00.000Z",
			"day": 10,
			"month": 7,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - styx : new tickets",
		"status": 3,
		"comment": ""
	},
	{
		"id": 238,
		"date": {
			"dateid": "2024710",
			"cardid": "2024710238",
			"datefull": "2024-07-09T22:00:00.000Z",
			"day": 10,
			"month": 7,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - config new pc",
		"status": 3,
		"comment": ""
	},
	{
		"id": 239,
		"date": {
			"dateid": "2024711",
			"cardid": "2024711239",
			"datefull": "2024-07-10T22:00:00.000Z",
			"day": 11,
			"month": 7,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - point inputdescriptor",
		"status": 3,
		"comment": ""
	},
	{
		"id": 240,
		"date": {
			"dateid": "2024712",
			"cardid": "2024712240",
			"datefull": "2024-07-11T22:00:00.000Z",
			"day": 12,
			"month": 7,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - inputdescriptor",
		"status": 3,
		"comment": ""
	},
	{
		"id": 241,
		"date": {
			"dateid": "2024713",
			"cardid": "2024713241",
			"datefull": "2024-07-12T22:00:00.000Z",
			"day": 13,
			"month": 7,
			"year": 2024,
			"dayofweek": 6
		},
		"subject": "astreintes : 3any",
		"status": 3,
		"comment": ""
	},
	{
		"id": 242,
		"date": {
			"dateid": "2024714",
			"cardid": "2024714242",
			"datefull": "2024-07-13T22:00:00.000Z",
			"day": 14,
			"month": 7,
			"year": 2024,
			"dayofweek": 0
		},
		"subject": "astreintes : 3any",
		"status": 3,
		"comment": ""
	},
	{
		"id": 243,
		"date": {
			"dateid": "2024715",
			"cardid": "2024715243",
			"datefull": "2024-07-14T22:00:00.000Z",
			"day": 15,
			"month": 7,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 244,
		"date": {
			"dateid": "2024716",
			"cardid": "2024716244",
			"datefull": "2024-07-15T22:00:00.000Z",
			"day": 16,
			"month": 7,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 245,
		"date": {
			"dateid": "2024717",
			"cardid": "2024717245",
			"datefull": "2024-07-16T22:00:00.000Z",
			"day": 17,
			"month": 7,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 246,
		"date": {
			"dateid": "2024718",
			"cardid": "2024718246",
			"datefull": "2024-07-17T22:00:00.000Z",
			"day": 18,
			"month": 7,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 247,
		"date": {
			"dateid": "2024719",
			"cardid": "2024719247",
			"datefull": "2024-07-18T22:00:00.000Z",
			"day": 19,
			"month": 7,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 248,
		"date": {
			"dateid": "2024722",
			"cardid": "2024722248",
			"datefull": "2024-07-21T22:00:00.000Z",
			"day": 22,
			"month": 7,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 249,
		"date": {
			"dateid": "2024723",
			"cardid": "2024723249",
			"datefull": "2024-07-22T22:00:00.000Z",
			"day": 23,
			"month": 7,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[styx] - ufx",
		"status": 3,
		"comment": ""
	},
	{
		"id": 250,
		"date": {
			"dateid": "2024724",
			"cardid": "2024724250",
			"datefull": "2024-07-23T22:00:00.000Z",
			"day": 24,
			"month": 7,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[styx] - inputdescriptor",
		"status": 3,
		"comment": ""
	},
	{
		"id": 251,
		"date": {
			"dateid": "2024725",
			"cardid": "2024725251",
			"datefull": "2024-07-24T22:00:00.000Z",
			"day": 25,
			"month": 7,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - inputdescriptor",
		"status": 3,
		"comment": ""
	},
	{
		"id": 252,
		"date": {
			"dateid": "2024726",
			"cardid": "2024726252",
			"datefull": "2024-07-25T22:00:00.000Z",
			"day": 26,
			"month": 7,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - inputdescriptor",
		"status": 3,
		"comment": ""
	},
	{
		"id": 253,
		"date": {
			"dateid": "2024730",
			"cardid": "2024730253",
			"datefull": "2024-07-29T22:00:00.000Z",
			"day": 30,
			"month": 7,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[lego4assu] - point",
		"status": 3,
		"comment": "-> semaine prochaîne vijay nous contactera pour avoir un créneau pour l'install du patch         -> véronique : il faudra faire une synchro chaque semaine pour être le plus à jour possible"
	},
	{
		"id": 254,
		"date": {
			"dateid": "202485",
			"cardid": "202485254",
			"datefull": "2024-08-04T22:00:00.000Z",
			"day": 5,
			"month": 8,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "[styx] - inputdescriptor",
		"status": 3,
		"comment": ""
	},
	{
		"id": 255,
		"date": {
			"dateid": "202486",
			"cardid": "202486255",
			"datefull": "2024-08-05T22:00:00.000Z",
			"day": 6,
			"month": 8,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "conf pc",
		"status": 3,
		"comment": ""
	},
	{
		"id": 256,
		"date": {
			"dateid": "202487",
			"cardid": "202487256",
			"datefull": "2024-08-06T22:00:00.000Z",
			"day": 7,
			"month": 8,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "conf pc",
		"status": 3,
		"comment": "[styx] - pour nexus :          diogene moulron, thomas bizouerne"
	},
	{
		"id": 257,
		"date": {
			"dateid": "202488",
			"cardid": "202488257",
			"datefull": "2024-08-07T22:00:00.000Z",
			"day": 8,
			"month": 8,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[styx] - recette inputdescriptor",
		"status": 3,
		"comment": ""
	},
	{
		"id": 258,
		"date": {
			"dateid": "202488",
			"cardid": "202488258",
			"datefull": "2024-08-07T22:00:00.000Z",
			"day": 8,
			"month": 8,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[lego4assu] - il faudra maj excel sur les vm utilisateurs pour matcher la nouvelle prd",
		"status": 3,
		"comment": ""
	},
	{
		"id": 259,
		"date": {
			"dateid": "202489",
			"cardid": "202489259",
			"datefull": "2024-08-08T22:00:00.000Z",
			"day": 9,
			"month": 8,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[styx] - recette inputdescriptor",
		"status": 3,
		"comment": ""
	},
	{
		"id": 260,
		"date": {
			"dateid": "2024812",
			"cardid": "2024812260",
			"datefull": "2024-08-11T22:00:00.000Z",
			"day": 12,
			"month": 8,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "congé",
		"status": 4,
		"comment": ""
	},
	{
		"id": 261,
		"date": {
			"dateid": "2024813",
			"cardid": "2024813261",
			"datefull": "2024-08-12T22:00:00.000Z",
			"day": 13,
			"month": 8,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "congé",
		"status": 4,
		"comment": ""
	},
	{
		"id": 262,
		"date": {
			"dateid": "2024814",
			"cardid": "2024814262",
			"datefull": "2024-08-13T22:00:00.000Z",
			"day": 14,
			"month": 8,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "congé",
		"status": 4,
		"comment": ""
	},
	{
		"id": 263,
		"date": {
			"dateid": "2024815",
			"cardid": "2024815263",
			"datefull": "2024-08-14T22:00:00.000Z",
			"day": 15,
			"month": 8,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "congé",
		"status": 4,
		"comment": ""
	},
	{
		"id": 264,
		"date": {
			"dateid": "2024816",
			"cardid": "2024816264",
			"datefull": "2024-08-15T22:00:00.000Z",
			"day": 16,
			"month": 8,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "congé",
		"status": 4,
		"comment": ""
	},
	{
		"id": 265,
		"date": {
			"dateid": "2024819",
			"cardid": "2024819265",
			"datefull": "2024-08-18T22:00:00.000Z",
			"day": 2,
			"month": 8,
			"year": 2024,
			"dayofweek": 1
		},
		"subject": "congé",
		"status": 4,
		"comment": ""
	},
	{
		"id": 266,
		"date": {
			"dateid": "2024820",
			"cardid": "2024820266",
			"datefull": "2024-08-19T22:00:00.000Z",
			"day": 20,
			"month": 8,
			"year": 2024,
			"dayofweek": 2
		},
		"subject": "[dailyapp]",
		"status": 3,
		"comment": ""
	},
	{
		"id": 267,
		"date": {
			"dateid": "2024821",
			"cardid": "2024821267",
			"datefull": "2024-08-20T22:00:00.000Z",
			"day": 21,
			"month": 8,
			"year": 2024,
			"dayofweek": 3
		},
		"subject": "[dailyapp]",
		"status": 3,
		"comment": ""
	},
	{
		"id": 268,
		"date": {
			"dateid": "2024822",
			"cardid": "2024822268",
			"datefull": "2024-08-21T22:00:00.000Z",
			"day": 22,
			"month": 8,
			"year": 2024,
			"dayofweek": 4
		},
		"subject": "[dailyapp]",
		"status": 3,
		"comment": ""
	},
	{
		"id": 269,
		"date": {
			"dateid": "2024823",
			"cardid": "2024823269",
			"datefull": "2024-08-22T22:00:00.000Z",
			"day": 23,
			"month": 8,
			"year": 2024,
			"dayofweek": 5
		},
		"subject": "[dailyapp]",
		"status": 3,
		"comment": ""
	}
]
