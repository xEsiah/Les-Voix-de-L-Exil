<?php
require_once __DIR__ . '/../includes/header.html';
?>

<body class="background-introduction">

    <!-- inclure les renders des personnages et le code permettant d'alterner leur positions (et leur luminosité en fonction de qui parle) 
     sur le background quand le joueur passse au dialogue suivant -->
    <section class="introduction">
        <div class="intro-box">
            <p>
                Dans les profondeurs du <strong>Bastion Immortel</strong>, là où résonnent les cris des combattants des
                arènes et où le sang sèche à même la pierre, deux jeunes hommes rêvent de liberté.
                <strong>Azhari</strong>, ancien érudit réduit au rôle de gladiateur, et <strong>Lysandor</strong>,
                héritier d’un nom maudit, souhaitent fuir l’ombre de Noxus dans l’espoir d’un renouveau.
            </p>
            <p>
                Leur chemin les mènera à travers les <strong>Terres Déchirées</strong>, les ruelles toxiques de
                <strong>Zaun</strong>
                et les hauteurs étincelantes de <strong>Piltover</strong>. À chaque pas, des choix décisifs les
                attendent : fuir ou combattre, trahir ou
                espérer.
            </p>
            <p class="quote">
                « Je suis prêt à naître de nouveau. »
            </p>
            <p class="author">
                Lysandor du Couteau
            </p>

            <a href="chapter0/index.php" class="cta-button">
                Commencer l’aventure
            </a>
        </div>
    </section>
    <img src="images/AzhariShenReversed.png" alt="Azhari" class="sprite sprite-left" />
    <img src="images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right" />
</body>
<?php require_once __DIR__ . '/../includes/footer.html'; ?>