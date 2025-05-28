<!DOCTYPE html>
<html>
<?php
require_once __DIR__ . '/../../includes/globalHead.html';
require_once __DIR__ . '/header.html'; ?>

<body class="background-chapter2">
    <div id="narration-box" class="narration-hidden">
        <p id="narration-text"></p>
    </div>

    <div class="page-container">
        <img src="../images/Contrebandier.png" alt="Contrebandier" class="sprite sprite-left invisible-init"
            id="contrebandier" />
        <img src="../images/AzhariShenReversed.png" alt="Azhari" class="sprite sprite-left invisible-init"
            id="azhari" />
        <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right invisible-init"
            id="lysandor" />
        <div class="dialogues"> <!-- Inclure les dialogues selon cette structure -->
            <div><strong>Contrebandier : </strong> Test dialogue contrebandier</div>
            <div><strong>Lysandor : </strong> AHAH</div>
            <div><strong>Azhari : </strong> OHOHO</div>
            <div><strong>Lysandor : </strong> Et pourtant, un autre chemin existe, Azhari... Un lieu où l'esprit
                triomphe du glaive. Piltover.</div>
            <div><strong>Contrebandier : </strong>Alors fu</div>
        </div>

        <button id="cta-button" class="cta-button-dialogue invisible-init" onclick="nextDialogue()">Suivant</button>
        <div id="dialogueBox"></div>

    </div>
    <?php require_once __DIR__ . '/../../includes/footer.html'; ?>
</body>

</html>