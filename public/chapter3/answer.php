<?php
session_start();

if (
    !isset($_POST['nikas_offer']) ||
    (!in_array($_POST['nikas_offer'], ['accept', 'refuse'], true) && $_POST['nikas_offer'] !== "")
) {
    header('Location: ../index.php');
    exit;
}

$good_answer = $_SESSION['good_answer'];
$nikas_offer = $_POST['nikas_offer'];
$_SESSION['nikas_offer'] = $nikas_offer;

if (isset($_POST['azhariAlive'])) {
    $azhariAlive_raw = $_POST['azhariAlive'];
    $azhariAlive = ($azhariAlive_raw === 'true' || $azhariAlive_raw === '1');
    $_SESSION['azhariAlive'] = $azhariAlive;
} elseif (isset($_SESSION['azhariAlive'])) {
    $azhariAlive = $_SESSION['azhariAlive'];
} else {
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
            <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-left invisible-init"
                id="lysandor" />
            <img src="../images/Teeva.png" alt="Teeva" class="sprite sprite-right invisible-init" id="teeva" />
            <img src="../images/Nika.png" alt="Nika" class="sprite sprite-right invisible-init hidden" id="nika" />
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
            } else { ?>
                <div><strong>Lysandor : </strong> Six mois déjà... Chaque jour, cette ville semble un peu plus étrangère.
                </div>
                <div><strong>Teeva : </strong> Zaun n’est pas tendre avec ceux qui marchent seuls. La solitude creuse plus
                    que des blessures.</div>
                <div><strong>Lysandor : </strong> J’ai l’impression que l’ombre d’Azhari plane partout où je vais... et
                    pourtant, il n’est plus là.</div>
                <div><strong>Teeva : </strong> Le passé pèse lourd, mais il ne doit pas devenir une prison. Tu dois choisir
                    où poser tes pas.</div>
                <div><strong>Lysandor : </strong> La promesse qu’on s’est faite à Piltover... Elle m’appelle encore. Mais
                    cette ville, elle me retient.</div>
                <div><strong>Teeva : </strong> Piltover est une lumière lointaine. Zaun, elle est sombre, mais c’est ici que
                    tu vis aujourd’hui.</div>
                <div><strong>Lysandor : </strong> Parfois je crois entendre la voix d’Azhari dans le vent qui s’engouffre
                    dans ces ruelles. Comme s’il me disait de ne pas abandonner.</div>
                <div><strong>Teeva : </strong> Ou peut-être te pousse-t-il à forger un nouveau chemin, même si ce n’est pas
                    celui prévu.</div>
                <div><strong>Lysandor : </strong> Cette ville grouille d’âmes perdues et d’histoires
                    brisées... Mais parfois, une lumière inattendue perce à travers les fissures.</div>
                <div><strong>Teeva : </strong> Comme cette fille que tu as vue ?</div>
                <div><strong>Lysandor : </strong> Oui... elle est passée, silencieuse, presque un mirage. Son regard m’a
                    frappé. Quelque chose d’étrangement familier.</div>
                <div><strong>Teeva : </strong> Parfois, ce sont ces rencontres fugaces qui changent tout. Zaun cache plus
                    que de la misère, Lysandor.</div>
                <div><strong>Lysandor : </strong> Elle ne m’a rien dit… mais il y avait quelque chose dans ses yeux. Comme
                    une histoire pas encore écrite.</div>
                <div><strong>Teeva : </strong> Parfois, il suffit d’un regard pour réveiller ce qu’on pensait éteint.</div>
                <div><strong>Lysandor : </strong> Je ne sais pas si c’est un espoir... ou juste un autre détour pour éviter
                    le vide.</div>
                <div><strong>Teeva : </strong> On évite rarement le vide, Lysandor. Mais on peut choisir avec qui on y fait
                    face.</div>
                <div><strong>Lysandor : </strong> Piltover, c’était notre rêve, à Azhari et moi. Mais ici… ici, il y a
                    quelque chose d’inattendu. Fragile, mais réel.</div>
                <div><strong>Teeva : </strong> Les choix les plus difficiles forgent ceux que nous devenons.</div>
                <div><strong>Lysandor : </strong> Demain, je déciderai... Pour l’instant, je dois
                    apprendre à écouter cette ville, et peut-être... elle aussi, à m’accepter.</div>
                <div><strong>Nika : </strong> Lysandor... Je peux t’accompagner dans cette obscurité,
                    si tu le souhaites.</div>
                <div><strong>Lysandor : </strong> Nika!... Tu étais là, tout ce temps?</div>
                <div><strong>Nika : </strong> Toujours. Parfois, il suffit juste d’oser regarder au-delà des ombres.</div>
            <?php } ?>
        </div>

        <div id="dialogueBox"></div>
        <button id="cta-button" class="cta-button-dialogue invisible-init">Suivant</button>
        <?php if (!$azhariAlive): ?>
            <form id="choice-form" method="post" action="../chapter4/index.php" style="display:none;">
                <input type="hidden" name="azhariAlive" value="false">
                <button type="submit" name="nikas_offer" value="accept" class="choice-button">Rester à Zaun avec
                    Nika</button>
                <button type="submit" name="nikas_offer" value="refuse" class="choice-button">Honorer Azhari et aller à
                    Piltover</button>
            </form>
        <?php endif; ?>
    </div>
    <script>
        const nikasOffer = <?= json_encode($nikas_offer) ?>;
        const azhariAlive = <?= json_encode($azhariAlive) ?>;
        const goodAnswer = <?php echo json_encode($good_answer === 'true'); ?>;
    </script>

    <?php require_once __DIR__ . '/../../includes/footer.html'; ?>
</body>

</html>