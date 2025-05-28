<!DOCTYPE html>
<html>
<?php
require_once __DIR__ . '/../../includes/globalHead.html';
require_once __DIR__ . '/header.html'; ?>

<body class="background-chapter1">
    <div id="narration-box" class="narration-hidden">
        <p id="narration-text"></p>
    </div>

    <div class="page-container">
        <img src="../images/Darius.png" alt="Darius" class="sprite sprite-left invisible-init" id="darius" />
        <img src="../images/AzhariShenReversed.png" alt="Azhari" class="sprite sprite-left invisible-init"
            id="azhari" />
        <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right invisible-init"
            id="lysandor" />
        <div class="dialogues"> <!-- Inclure les dialogues selon cette structure -->
            <div><strong>Azhari : </strong> Si on est vus en train de quitter la place haute du bastion on risque
                d’éveiller les soupçons non ?</div>
            <div><strong>Lysandor : </strong> Effectivement mais avec ma réputation on devrait pouvoir se justifier à
                n’importe qui ! Enfin tant que nous n’avons pas à faire à Darius </div>
            <div><strong>Darius : </strong> HALTE VOUS DEUX! ---- te voir dans la partie basse à cette heure est
                surprenant… J’ai presque l’impression de voir deux jeunes âmes qui fuient Noxus... …Pathétique. </div>
            <div><strong>Darius : </strong>Dites-moi, pourquoi ne devrais-je pas vous abattre sur-le-champ ?</div>
            <div><strong>Azhari : </strong>Nous ne fuyons pas, nous partons en mission. Une tâche confiée par un
                supérieur, hors des frontières.</div>
            <div><strong>Darius : </strong>Une mission, hein ? Et qui est ce fameux supérieur ?</div>
        </div>

        <button id="cta-button" class="cta-button-dialogue invisible-init" onclick="nextDialogue()">Suivant</button>
        <div id="dialogueBox"></div>

    </div>
    <?php require_once __DIR__ . '/../../includes/footer.html'; ?>
</body>

</html>