<?php
session_start();

// Récupération des variables
$azhariAlive = $_SESSION['azhariAlive'] ?? false;
$nikas_offer = $_SESSION['nikas_offer'] ?? null;

// Si on arrive ici sans choix, redirection vers chapitre 3
if ($nikas_offer === null) {
    header('Location: ../chapter3/index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="fr">
<?php
require_once __DIR__ . '/../../includes/globalHead.html';
require_once __DIR__ . '/header.html';
?>

<body class="background-chapter4">
    <div id="narration-box" class="narration-hidden">
        <p id="narration-text"></p>
    </div>
    <div class="page-container">
        <?php if ($azhariAlive): ?>
            <?php if ($nikas_offer === 'refuse'): ?>
                <strong>Fin 1 :</strong> Lysandor meurt. Azhari finit seul à Piltover.
            <?php elseif ($nikas_offer === 'accept'): ?>
                <strong>Fin 2 :</strong> A & L restent 3 mois à Zaun, puis vont à Piltover ensemble.
            <?php endif; ?>
        <?php else: ?>
            <?php if ($nikas_offer === 'accept'): ?>
                <strong>Fin 3 :</strong> Lysandor choisit de rester à Zaun avec Nika.
            <?php elseif ($nikas_offer === 'refuse'): ?>
                <strong>Fin 4 :</strong> Lysandor honore Azhari et part pour Piltover.
            <?php endif; ?>
        <?php endif; ?>
    </div>
    <div id="dialogueBox"></div>
    <button id="cta-button" class="cta-button-dialogue invisible-init">Suivant</button>
    <script>
        const nikasOffer = <?= json_encode($nikas_offer) ?>;
        const azhariAlive = <?= json_encode($azhariAlive) ?>;
        const goodAnswer = <?php echo json_encode($good_answer === 'true'); ?>;
    </script>
    <?php require_once __DIR__ . '/../../includes/footer.html'; ?>
</body>

</html>