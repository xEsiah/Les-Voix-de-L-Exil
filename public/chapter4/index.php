<?php
session_start();

// Récupération sécurisée des variables depuis la session
$azhariAlive = isset($_SESSION['azhariAlive']) ? filter_var($_SESSION['azhariAlive'], FILTER_VALIDATE_BOOLEAN) : false;
$nikas_offer = $_SESSION['nikas_offer'] ?? null;

// Redirection si aucune décision n’a été prise
if (!in_array($nikas_offer, ['accept', 'refuse'], true)) {
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
        <div id="narration-text"></div>
    </div>
    <div class="page-container">
        <?php if ($azhariAlive === true): ?>
            <?php if ($nikas_offer === 'refuse'): ?>
                <!-- Fin 1 : Lysandor meurt, Azhari seul à Piltover -->
                <img src="../images/Nika.png" alt="Nika" class="sprite sprite-left" id="nika" />
                <img src="../images/AzhariShen.png" alt="Azhari" class="sprite sprite-right" id="azhari" />
            <?php elseif ($nikas_offer === 'accept'): ?>
                <!-- Fin 2 : Les 2 restent 3 mois à Zaun puis partent à Piltover -->
                <img src="../images/AzhariShen.png" alt="Azhari" class="sprite sprite-right-right" id="azhari" />
                <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right" id="lysandor" />
                <img src="../images/Nika.png" alt="Nika" class="sprite sprite-left" id="nika" />
            <?php endif; ?>
        <?php else: ?>
            <?php if ($nikas_offer === 'accept'): ?>
                <!-- Fin 3 : Rester à Zaun avec Nika -->
                <img src="../images/LysandorDuCouteauReversed.png" alt="Lysandor" class="sprite sprite-left" id="lysandor" />
                <img src="../images/Teeva.png" alt="Teeva" class="sprite sprite-right-right invisible-init" id="teeva" />
                <img src="../images/Nika.png" alt="Nika" class="sprite sprite-right invisible-init" id="nika" />
            <?php elseif ($nikas_offer === 'refuse'): ?>
                <!-- Fin 4 : Aller à Piltover -->
                <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-left" id="lysandor" />
                <img src="../images/Teeva.png" alt="Teeva" class="sprite sprite-right invisible-init" id="teeva" />
                <img src="../images/Nika.png" alt="Nika" class="sprite sprite-right-right invisible-init" id="nika" />
            <?php endif; ?>
        <?php endif; ?>
        <div class="dialogues">
            <?php if ($azhariAlive): ?>
                <?php if ($nikas_offer === 'refuse'): ?>
                    <!-- Fin 1 : Lysandor meurt, Azhari seul -->
                    <div><strong>Nika :</strong> Lysandor n’est plus là... C’est dur à accepter.</div>
                    <div><strong>Azhari :</strong> Je continuerai seul à Piltover, pour nous deux.</div>
                <?php elseif ($nikas_offer === 'accept'): ?>
                    <!-- Fin 2 : Azhari + Lysandor + Nika, 3 persos -->
                    <div><strong>Lysandor :</strong> Trois mois à Zaun, Piltover nous voilà enfin.</div>
                    <div><strong>Nika :</strong> Ce nouveau départ va nous changer tous.</div>
                    <div><strong>Azhari :</strong> Je suis prêt à tout pour Piltover.</div>
                <?php endif; ?>
            <?php else: ?>
                <?php if ($nikas_offer === 'accept'): ?>
                    <!-- Fin 3 : Lysandor + Nika -->
                    <div><strong>Lysandor :</strong> Je choisis de rester, Zaun est ma maison.</div>
                    <div><strong>Nika :</strong> Ensemble, nous affronterons les ombres.</div>
                <?php elseif ($nikas_offer === 'refuse'): ?>
                    <!-- Fin 4 : Lysandor + Teeva -->
                    <div><strong>Lysandor :</strong> Je pars pour Piltover, en mémoire d’Azhari.</div>
                    <div><strong>Teeva :</strong> Piltover est plus fournie en soleil mais tu n'échapperas pas aux ombres pour
                        autant...</div>
                <?php endif; ?>
            <?php endif; ?>
        </div>
        <div id="dialogueBox"></div>
        <button id="cta-button" class="cta-button-dialogue invisible-init">Suivant</button>
    </div>
    <script>
        const nikasOffer = <?= json_encode($nikas_offer) ?>;
        const azhariAlive = <?= json_encode($azhariAlive) ?>;
    </script>
    <?php require_once __DIR__ . '/../../includes/footer.html'; ?>
</body>

</html>