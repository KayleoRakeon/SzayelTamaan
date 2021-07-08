let btn = document.querySelectorAll('.select button');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        x = i + 1;
        let chapter = document.querySelector('.chapitre' + x);

        if (btn[i].classList.contains('actif')) {
            return;
        }
        else {
            let oldBtn = document.querySelector('button.actif');
            let oldChapter = document.querySelector('article.actif');

            btn[i].classList.add('actif');
            chapter.classList.add('actif');

            oldBtn.classList.remove('actif');
            oldChapter.classList.remove('actif');
        }
    })
}