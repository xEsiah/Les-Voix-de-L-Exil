<!DOCTYPE html>
<html>
<?php
require_once __DIR__ . '/../../includes/globalHead.html';
require_once __DIR__ . '/header.html';
?>

<body class="background-chapter1">
    <div id="narration-box" class="narration-hidden">
        <p id="narration-text"></p>
    </div>
    <div class="page-container">
        <img src="../images/Darius.png" alt="Darius" class="sprite sprite-left invisible-init" id="darius" />
        <img src="../images/AzhariShen.png" alt="Azhari" class="sprite sprite-right-right invisible-init" id="azhari" />
        <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right invisible-init"
            id="lysandor" />

        <?php
        $reponse = $_POST['good_answer'] ?? '';
        $good_answer = ($reponse === 'Marcus') ? 'true' : 'false';
        ?>

        <div class="dialogues">
            <?php if ($reponse === 'Marcus'): ?>
                <div><strong>Lysandor : </strong>C’est mon oncle. Il nous a envoyés pour intercepter un marchand itinérant
                    aux abords de la ville. Il transporte une relique shurimienne… Elle ne doit pas tomber entre de
                    mauvaises mains.</div>
                <div><strong>Darius : </strong>
                    Marcus… ça change tout.</div>
                <div><strong>Darius : </strong>Ne traînez pas. Et si j’apprends que vous mentez…</div>
                <div><strong>Lysandor : </strong>Gloire à Noxus.</div>
            <?php elseif ($reponse === 'Ezreal'): ?>
                <div><strong>Darius : </strong>Tu crois me faire avaler ça ? Ezreal ? Ce gamin de Piltover ?</div>
                <div class="murmure"><strong>Lysandor : </strong>
                    On ne peut pas le combattre. Il faut fuir Azhari.</div>
            <?php elseif ($reponse === 'Rammus'): ?>
                <div><strong>Darius : </strong>Tu crois me faire avaler ça ? Ce Rammus est mort depuis un mois.</div>
                <div class="murmure"><strong>Lysandor : </strong>
                    On ne peut pas le combattre. Il faut fuir Azhari.</div>
            <?php else: ?>
                <div><strong>Darius : </strong>Je ne comprends pas ce que vous mijotez, mais ça ne me plaît pas.</div>
            <?php endif; ?>
        </div>
        <div id="dialogueBox"></div>
        <button id="cta-button" class="cta-button-dialogue invisible-init">Suivant</button>
    </div>
    <script>
        const goodAnswer = <?= json_encode($good_answer) ?>;
    </script>

    <?php require_once __DIR__ . '/../../includes/footer.html'; ?>
</body>

</html>