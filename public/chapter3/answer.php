<?php
session_start();

// Récupère 'nikas_offer' depuis POST, sinon redirige si absent ou invalide
if (!isset($_POST['nikas_offer']) || !in_array($_POST['nikas_offer'], ['accept', 'refuse'], true)) {
    header('Location: ../index.php');
    exit;
}
$good_answer = $_SESSION['good_answer'];
$nikas_offer = $_POST['nikas_offer'];
$_SESSION['nikas_offer'] = $nikas_offer;

// Récupère 'azhariAlive' depuis POST si disponible, sinon depuis session
if (isset($_POST['azhariAlive'])) {
    $azhariAlive_raw = $_POST['azhariAlive'];
    $azhariAlive = ($azhariAlive_raw === 'true' || $azhariAlive_raw === '1');
    $_SESSION['azhariAlive'] = $azhariAlive;
} elseif (isset($_SESSION['azhariAlive'])) {
    $azhariAlive = $_SESSION['azhariAlive'];
} else {
    // Valeur par défaut si absente partout
    $azhariAlive = false;
}
?>


<!DOCTYPE html>
<html lang="fr">
<?php
require_once __DIR__ . '/../../includes/globalHead.html';
require_once __DIR__ . '/header.html';
?>

<body class="background-chapter3">
    <div id="narration-box" class="narration-hidden">
        <p id="narration-text"></p>
    </div>
    <div class="page-container">
        <?php if ($azhariAlive): ?>
            <img src="../images/AzhariShen.png" alt="Azhari" class="sprite sprite-right-right invisible-init" id="azhari" />
            <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right invisible-init"
                id="lysandor" />
            <img src="../images/Nika.png" alt="Nika" class="sprite sprite-left invisible-init" id="nika" />
        <?php else: ?>
            <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right invisible-init"
                id="lysandor" />
            <img src="../images/Teeva.png" alt="Teeva" class="sprite sprite-right invisible-init hidden" id="teeva" />
        <?php endif; ?>
        <div class="dialogues">
            <?php
            if ($azhariAlive) {
                if ($nikas_offer === 'accept') { ?>
                    <div><strong>Nika : </strong> Vraiment, vous avez accepté mon marché?! Vous allez en suer!</div>
                    <div><strong>Lysandor : </strong> Tant qu'on rejoint bientôt Piltover ça nous va !</div>
                    <div><strong>Azhari : </strong> J'ai hâte d'atteindre cette nouvelle vie !</div>
                <?php } else { ?>
                    <div><strong>Azhari : </strong> Je ne sais pas si on peut lui faire confiance...</div>
                    <div><strong>Lysandor : </strong> On peut essayer de se débrouiller par nous-mêmes tu as
                        raison !</div>
                    <div><strong>Nika : </strong> Vraiment vous refusez mon aide?! Vous faites une grave erreur.</div>
                <?php }
            } ?>
        </div>

        <div id="dialogueBox"></div>
        <button id="cta-button" class="cta-button-dialogue invisible-init">Suivant</button>
    </div>
    <script>
        const nikasOffer = <?= json_encode($nikas_offer) ?>;
        const azhariAlive = <?= json_encode($azhariAlive) ?>;
    </script>

    <?php require_once __DIR__ . '/../../includes/footer.html'; ?>
    <script>
        const goodAnswer = <?php echo json_encode($good_answer === 'true'); ?>;
    </script>
</body>

</html>