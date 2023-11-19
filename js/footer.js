const footer = `
    <footer>
        <div class="container py-5">
            <div class="row">
                <a href="index.html" class="col-12 col-sm-6 col-md-3">
                    <img src="imgs/logo.svg" alt="Logo" class="footerLogo img-fluid">
                </a>
                <nav class="d-flex flex-column mt-3 mt-sm-0 col-12 col-sm-6 col-md-3">
                    <a href="parceiros.html">Parceiros</a>
                    <a href="impacto.html">Impacto</a>
                    <a href="fontelimpa.html">FonteLimpa™</a>
                    <a href="comoajudar.html">Como ajudar</a>
                </nav>
                <a href="https://brasil.un.org/pt-br" class="col text-end d-none d-md-block">
                    <img src="imgs/onu.png">
                </a>
            </div>
        </div>
    </footer>`

function loadFooter() {
    const bodyElement = document.querySelector('body');
    bodyElement.insertAdjacentHTML('beforeend', footer);
}

document.addEventListener('DOMContentLoaded', function () {
    loadFooter();
});
