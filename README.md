# Feature Register

    1. Validasi Inputan check vuln => sql,lfi,rce
    2. check length password
    3. check email used ?
    4. hash session db
    5. hash password

# Feature Login

    1. Validasi Inputan check vuln => sql,lfi,rce
    2. check password length
    3. check validasi session
    4. check validasi role => next time

# Flow Endpoint

    ** Register **

    endpoint => "/api/register"
    method => "POST"
    content-type: "application/json"
    body: {
        "email": "userTest@gmail.com" => bisa all
        "username": "userTest"
        "password": "userTest" => ketika dikirim ke service nanti di hash
    }

    response succes => statusCode=201 {status: "succes", message: "succes created account"}

    error code => 1. inputan tadak valid
                  2. not empety fields (email, username, password)
                  3. password length < 8

"ok": true,
"hits":
{
"id": "697689a78e868d054439a61d",
"published_at": "2026-01-25T21:22:45.598Z",
"website": "www.freelance-informatique.fr",
"website_id": "68356e80f56cb4b9bf53b6d3",
"url": "https://www.freelance-informatique.fr/mission-x1f6e1-lead-avant-vente-cyber-soc-siem-soar-edr-xdr-260123E001",
"title": " Lead Avant-Vente Cyber / SOC, SIEM, SOAR, EDR/XDR",
"description": " Lead Avant-Vente Cyber / SOC, SIEM, SOAR, EDR/XDR Localisation : Paris Présentiel : 100 % sur site Client : Acteur majeur de la Cyber Défense Démarrage : ASAP ContexteDans le cadre du développement de ses activités SOC et services de cybersécurité, notre client recherche un Lead Avant-Vente Cyber jouant un rôle clé à l’interface entre les équipes commerciales, techniques et les clients.Missions•\tIntervenir en avant-vente sur des projets SOC et cyber (build & run)•\tAnalyser les besoins clients et les traduire en architectures et solutions cyber•\tConstruire les réponses techniques aux appels d’offres (RFP/RFI)•\tParticiper activement au cycle de vente aux côtés des commerciaux•\tPorter la valeur des offres cyber lors des soutenances et présentations clients•\tChallenger les besoins et proposer des solutions adaptées et innovantes•\tContribuer à l’évolution des offres SOC et cyber défenseProfil recherché•\tExpérience solide en avant-vente cyber, idéalement sur des projets SOC•\tTrès bonne maîtrise de l’écosystème cyber :•\tSOC, SIEM, SOAR, EDR/XDR, Threat Intelligence•\tServices managés et supervision sécurité•\tCapacité à combiner expertise technique et dimension commerciale•\tExcellente communication orale et écrite•\tLeadership naturel et posture de référent•\tFrançais courant, anglais professionnel requis✨ Pourquoi rejoindre ce projet ?•\tProjets cyber critiques et à forte visibilité•\tRôle stratégique dans le processus de vente•\tCollaboration étroite avec des experts cyber•\tEnvironnement exigeant et stimulant",
"skills_requirements": [
"Cybersécurité"
],
"created_at": "2026-01-25T21:22:47.016Z"
},
