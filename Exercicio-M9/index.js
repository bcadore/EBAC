$(document).ready(function() {
    if (typeof $ !== 'undefined') {
        console.log('jQuery foi carregado.');
    } else {
        console.log('jQuery não foi carregado.');
    }
    // Função para adicionar uma nova tarefa
    $('#add-task-form').submit(function(event) {
        event.preventDefault(); // Evita o comportamento padrão de submit do formulário

        // Obtém o valor do campo de entrada
        var taskName = $('#add-task').val();

        // Adiciona um novo item à lista
        if (taskName) {
            $('.list ul').append('<li>' + taskName + '</li>');
            $('#add-task').val(''); // Limpa o campo de entrada após adicionar a tarefa
        }
    });

    // Função para aplicar o efeito de linha através do clique
    $('.list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Adiciona evento de clique ao ícone para submeter o formulário
    $('.add-task-icon').click(function() {
        $('#add-task-form').submit();
    });
});