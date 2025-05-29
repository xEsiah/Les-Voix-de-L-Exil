<!DOCTYPE html>
<html lang="fr">
<?php
require_once __DIR__ . '/../../includes/globalHead.html';
require_once __DIR__ . '/header.html'; ?>

<body class="background-chapter3">
    <!-- Narration d’intro -->
    <div id="narration-box" class="narration-hidden">
        <p id="narration-text"></p>
    </div>

    <div class="page-container">
        <?php
        // Déterminer si Azhari est vivant ou non
        $azhari_is_alive = true;
        $good_answer = true;
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (isset($_POST['azhari_is_alive'])) {
                $azhari_is_alive = ($_POST['azhari_is_alive'] == '1' || $_POST['azhari_is_alive'] === 'true');
            }
            if (isset($_POST['good_answer'])) {
                $good_answer = ($_POST['good_answer'] == '1' || $_POST['good_answer'] === 'true');
            }
        }

        // Sprite d'Azhari ou Lysandor en fonction de l'état
        if ($azhari_is_alive && $good_answer): ?>
            <img src="../images/AzhariShenReversed.png" alt="Azhari" class="sprite sprite-left invisible-init"
                id="azhari" />
            <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right invisible-init"
                id="lysandor" />
        <?php else: ?>
            <img src="../images/LysandorDuCouteau.png" alt="Lysandor" class="sprite sprite-right invisible-init"
                id="lysandor" />
        <?php endif; ?>

        <!-- Dialogue dynamique -->
        <div class="dialogues">
            <?php
            $choix = "option1"; // option1 ou option2 selon tes tests
            
            if ($azhari_is_alive && $good_answer): ?>
                <div><strong>Azhari : </strong> Ce n’est pas une ville. C’est une fièvre.</div>
                <div><strong>Lysandor : </strong> Mais c’est la seule route vers Piltover. Et on aura besoin d’un guide. On
                    est des étrangers ici… et ça se voit.</div>
                <div><strong>Nika : </strong> Deux types paumés, qui évitent les regards et marchent droit dans le
                    territoire de Silco ? Soit vous êtes suicidaires, soit vous êtes très, très intéressants.</div>
                <div><strong>Azhari : </strong> On veut monter. Vers la ville haute.</div>
                <div><strong>Nika : </strong> Personne ne monte à Piltover sans payer un tribut… en métal, en informations…
                    ou en loyauté. Mais j’ai mes raccourcis. Et mes dettes. Si vous m’aidez, je vous guide.</div>

                <?php if ($choix === "option1"): ?>
                    <div><strong>Lysandor : </strong> On a de quoi payer !</div>
                    <div><strong>Azhari : </strong> C’est tout ce qu’il nous reste. Tu prends ça, et tu nous montes.</div>
                    <div><strong>Nika : </strong> Marché conclu. Mais là-haut, vous n’aurez rien. Pas de toit. Pas d’amis. Juste
                        les murs dorés d’une ville qui n’a pas besoin de vous.</div>
                    <div><strong>Lysandor : </strong> On s’est arrachés à Noxus. On peut survivre à Piltover.</div>

                <?php elseif ($choix === "option2"): ?>
                    <div><strong>Lysandor : </strong> Tu veux tout. Mais tu nous connais à peine. Tu dis avoir des dettes.
                        Fais-nous monter… et on t’aide à les régler.</div>
                    <div><strong>Nika : </strong> Une alliance alors ? Vous prenez part à mes ennuis ?</div>
                    <div><strong>Azhari : </strong> Un échange. Pas une soumission. Tu nous aides à monter. On t’aide à
                        survivre.</div>
                    <div><strong>[Narration] : </strong> Nika hésite… puis acquiesce.</div>
                <?php endif; ?>

            <?php else: ?>
                <div><strong>Lysandor : </strong> Azhari… Tu disais qu’on forge notre propre destin. Moi, je me suis forgé
                    un enfer.</div>
                <div><strong>Narration : </strong> Lysandor erre dans les brumes vertes de Zaun, le manteau volé d’un marin
                    dissimulant son uniforme.</div>
                <div><strong>Teeva : </strong> Eh toi! T’as une tête de fuyard, mon garçon. Tu veux monter là-haut n'est-ce
                    pas ?</div>
                <div><strong>Teeva : </strong> Il te faudra un guide. Et un nom propre.</div>
                <div><strong>Lysandor : </strong> Oui s'il vous plaît je paierai. En services ou en secrets.</div>
                <div><strong>Teeva : </strong> Alors suis-moi. Et oublie qui tu étais.</div>
            <?php endif; ?>
        </div>

        <!-- Bouton et boîte de dialogue (utilisés par le JS) -->
        <button id="cta-button" class="cta-button-dialogue invisible-init">Suivant</button>
        <div id="dialogueBox"></div>
    </div>
</body>

<?php require_once __DIR__ . '/../../includes/footer.html'; ?>

</html>