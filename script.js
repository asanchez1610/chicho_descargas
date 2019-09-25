document.addEventListener('DOMContentLoaded', () => {
    const btnProcesar = document.querySelector('#btnProcesar');
    const btnLimpiar = document.querySelector('#btnLimpiar');
    const linkDescarga = document.querySelector('#linkDescarga');
    const textArea = document.querySelector('#hasBase64Text');
    const selectTheme = document.querySelector('#selectTheme');

    selectTheme.addEventListener('change', (e) => {
        console.log(e.target.value);
        var link = document.querySelector('#linkTheme');
        link.setAttribute('href', `bootstrap/css/${e.target.value}.bootstrap.min.css`);
    });

    btnProcesar.addEventListener('click', () => {
        if (textArea.value) {
            linkDescarga.download = 'descarga_directa.zip';
            linkDescarga.href = 'data:application/octet-stream;base64,' + textArea.value;
            linkDescarga.classList.remove('hidden');
        } else {
            linkDescarga.classList.add('hidden');
        }

    });

    btnLimpiar.addEventListener('click', () => {
        textArea.value = '';
        linkDescarga.classList.add('hidden');
    });

});