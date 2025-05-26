// Objets pour suivre l'état des touches pressées
const keys = {
    left: false,  // Flèche gauche
    right: false, // Flèche droite
    up: false     // Saut (Espace ou Flèche haut)
};
// Gestion des appuis sur les touches
document.addEventListener("keydown", e => {
    if (e.code === "ArrowLeft") keys.left = true;  // Aller à gauche
    if (e.code === "ArrowRight") keys.right = true; // Aller à droite
    if (e.code === "ArrowUp") keys.up = true; // Sauter
});
// Gestion des relâchements des touches
document.addEventListener("keyup", e => {
    if (e.code === "ArrowLeft") keys.left = false;
    if (e.code === "ArrowRight") keys.right = false;
    if (e.code === "ArrowUp") keys.up = false;
});
// uuddlrlrBA
// Récup du code de kahis