<!DOCTYPE html>
<html lang="fr">
<?php
require_once __DIR__ . '/../../includes/globalHead.html';
require_once __DIR__ . '/header.html'; ?>

<body class="background-chapter4">
    <!-- Narration d’intro -->
    <div id="narration-box" class="narration-hidden">
        <p id="narration-text"></p>
    </div>

    <div class="page-container">
        <?php
        $azhariAlive = false;

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (isset($_POST['good_answer']) && ($_POST['good_answer'] == '1' || $_POST['good_answer'] === 'true')) {
                $azhariAlive = isset($_POST['azhariAlive']) && ($_POST['azhariAlive'] == '1' || $_POST['azhariAlive'] === 'true');
            }
        }
        if ($azhariAlive): ?>
            <img src="../images/AzhariShen.png" alt="Azhari" class="sprite sprite-right invisible-init" id="azhari" />
            <img src="../images/LysandorDuCouteauReversed.png" alt="Lysandor" class="sprite sprite-left invisible-init"
                id="lysandor" />
            <img src="../images/Nika.png" alt="Nika" class="sprite sprite-left invisible-init hidden" id="nika" />
        <?php else: ?>
            <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right invisible-init"
                id="lysandor" />
            <img src="../images/Teeva.png" alt="Teeva" class="sprite sprite-right invisible-init hidden" id="teeva" />
        <?php endif; ?>

        <!-- Dialogue dynamique -->
        <div class="dialogues">
            <?php if ($azhariAlive): ?>
                <!-- Version 1 — Azhari est vivant -->
                <?php if ($choix === "option1"): ?>
                    <div><strong>Narration : </strong> Ils émergent dans un entrepôt oublié, aux murs tapissés de rouages et
                        d'engrenages figés. Piltover s’étend au-delà, dorée, majestueuse… mais indifférente.</div>
                    <div><strong>Nika : </strong> Voilà. Vous y êtes. Mais là-haut, personne ne vous attend. Pas d’accueil, pas
                        de salut. Juste des portes fermées et des regards qui pèsent.</div>
                    <div><strong>Azhari : </strong> Alors on frappera. Et on frappera encore. Jusqu’à ce que l’une d’elles cède.
                    </div>
                    <div><strong>Lysandor : </strong> On n’a plus rien. Mais on a l’un l’autre. Et la rage d’exister.</div>
                    <div><strong>Narration : </strong> Les deux exilés s’enfoncent dans les artères de la ville haute. Clochards
                        aux rêves trop grands. Chaque pas une déclaration de guerre à leur passé.</div>
                <?php elseif ($choix === "option2"): ?>
                    <div><strong>Narration : </strong> Les tuyaux s’ouvrent sur un quartier industriel oublié, derrière un
                        atelier de contrebande. Nika se tourne vers eux, essuyant ses gants tachés.</div>
                    <div><strong>Nika : </strong> Pas mal pour deux types qui savaient pas marcher dans Zaun. Vous avez tenu
                        parole. Et moi aussi. Vous êtes là.</div>
                    <div><strong>Azhari : </strong> C’est peut-être ça, une nouvelle vie. Pas des promesses, juste… des
                        engagements tenus.</div>
                    <div><strong>Lysandor : </strong> Ce qu’on vous a donné… c’est peu, comparé à ce qu’on va construire ici.
                    </div>
                    <div><strong>Narration : </strong> Nika leur tend une enveloppe, discrète. À l’intérieur, un contact à
                        Piltover. Un horloger, mécène discret des réfugiés. Une première pierre.</div>
                    <div><strong>Nika : </strong> Vous avez des dettes ici. Mais aussi des amis. N’oubliez aucun des deux.</div>
                    <div><strong>Narration : </strong> Azhari et Lysandor s’avancent dans Piltover. Moins perdus. Moins pauvres.
                        Pas encore libres. Mais ensemble.</div>
                <?php endif; ?>
            <?php else: ?>
                <!-- Version 2 — Azhari est mort pendant la traversée -->
                <div><strong>Narration : </strong> Six mois ont passé.<br>
                    Zaun a dévoré le soldat. Lysandor est devenu une ombre, un nom effacé. Entre trafics, trahisons et
                    silence, il a appris à survivre.<br>
                    Puis vient Nika.<br>
                    Contrebandière aux yeux d’ambre. Elle voit en lui un homme sans passé — donc prêt à tout.</div>

                <div><strong>Nika : </strong> J’ai entendu parler de toi Lysandor, tu ne respires plus comme un soldat. Tu
                    respires comme un fantôme. Et ici c’est peut-être ce qu’il faut durer.</div>
                <?php if ($choix === "option1"): ?>
                    <div><strong>Lysandor : </strong> Ici, au moins, je suis libre. Invisible. Je connais les règles. Piltover
                        n’est qu’un autre piège doré.</div>
                    <div><strong>Nika : </strong> Alors sois l’ombre… mais rappelle-toi : même les fantômes finissent oubliés.
                    </div>
                    <div><strong>Narration : </strong> Chaque contact, chaque ruelle, chaque rumeur devient son champ de
                        bataille — et son seul espoir de redevenir quelqu’un.</div>
                <?php elseif ($choix === "option2"): ?>
                    <div><strong>Lysandor : </strong> Je ne veux pas survivre, Nika. Je veux renaître. Même si ça veut dire
                        grimper seul jusqu'à la lumière.</div>
                    <div><strong>Nika : </strong> Alors il te faudra un masque. Et quelques dettes à rembourser.</div>
                    <div><strong>Narration : </strong> Chaque pas vers la lumière est une dette en plus, mais aussi un pas de
                        plus vers un nom nouveau — et une histoire à réécrire.</div>
                <?php endif; ?>
            <?php endif; ?>
        </div>
        <button id="cta-button" class="cta-button-dialogue invisible-init" onclick="nextDialogue()">Suivant</button>
        <div id="dialogueBox"></div>
    </div>
</body>

<?php require_once __DIR__ . '/../../includes/footer.html'; ?>

</html>