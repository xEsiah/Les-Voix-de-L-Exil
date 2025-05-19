<!DOCTYPE html>
<html>
<?php
require_once __DIR__ . '/../../includes/globalHead.html';
require_once __DIR__ . '/header.html'; ?>

<body class="background-prologue">
    <div class="page-container">
        <img src="../images/AzhariShenReversed.png" alt="Azhari" class="sprite sprite-left" id="azhari" />
        <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right" id="lysandor" />
        <div class="dialogues">
            <div><strong>Azhari :</strong> Nous devons agir maintenant.</div>
            <div><strong>Lysandor :</strong> Ce n’est pas encore le moment.</div>
            <div><strong>Azhari :</strong> Trop de temps a déjà été perdu.</div>
            <div><strong>Lysandor :</strong> Alors, faisons-le à ma manière.</div>
        </div>
        <button class="cta-button-dialogue" onclick="nextDialogue()">Suivant</button>
        <div id="dialogueBox"></div>

    </div>
    <?php require_once __DIR__ . '/../../includes/footer.html'; ?>
</body>

</html>