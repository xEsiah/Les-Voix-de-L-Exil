<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../includes/header.html';
?>

<body><img class="characterRightSide" src="images/LysandorDuCouteur.png" alt="Sprite Lysandor">
    <!-- inclure les renders des personnages et le code permettant d'alterner leur positions (et leur luminosité en fonction de qui parle) 
     sur le background quand le joueur passse au dialogue suivant -->
</body>
<?php require_once __DIR__ . '/../includes/footer.html'; ?>