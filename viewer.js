document.addEventListener('DOMContentLoaded', () => {
    const btnProcesar = document.querySelector('#btnProcesar');
    const btnLimpiar = document.querySelector('#btnLimpiar');
    const textArea = $('#hasBase64Text');
    const selectTheme = document.querySelector('#selectTheme');

    selectTheme.addEventListener('change', (e) => {
        var link = document.querySelector('#linkTheme');
        link.setAttribute('href', `bootstrap/css/${e.target.value}.bootstrap.min.css`);
    });

    btnProcesar.addEventListener('click', () => {
        try {
            var input = eval('(' + textArea.val() + ')');
        }
        catch (error) {
            return alert("Cannot eval JSON: " + error);
        }
        var options = {
            collapsed: false,
            rootCollapsable: true,
            withQuotes: false,
            withLinks: true
        };
        $('.root').jsonViewer(input, options);

    });

    btnLimpiar.addEventListener('click', () => {
        textArea.val('');
        $('.root').html('');
    });

});