const header = `
    <header>
        <div class="container pt-3 pb-3" >
            <nav class="navbar navbar-expand-md">
                <a class="navbar-brand" href="index.html">
                    <img src="imgs/logo.svg" alt="Logo" class="headerLogo">
                </a>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item my-auto">
                            <a class="nav-link" href="parceiros.html">Parceiros</a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link" href="impacto.html">Impacto</a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link" href="fontelimpa.html">FonteLimpa™</a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link" href="comoajudar.html">Como ajudar</a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link" href="doacao.html?valor=13">
                            <button type="button" class="btn">Doe R$13 agora</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>`;

function loadHeader() {
    const bodyElement = document.querySelector('body');
    bodyElement.insertAdjacentHTML('afterbegin', header);
}

document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
});
