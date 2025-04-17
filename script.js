document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // evita o envio padrão do formulário
  
    // Captura os valores dos inputs
    const nome = document.getElementById('name').value.trim();
    const descricao = document.getElementById('desc').value.trim();
    const data = document.getElementById('date').value;
    const hora = document.getElementById('time').value;
    const email = document.getElementById('email').value.trim();
    const url = document.getElementById('url').value.trim();
  
    // Monta o conteúdo do arquivo txt
    let conteudo = `Nome do documento: ${nome}\n\n`;
    conteudo += `Descrição: ${descricao}\n\n`;
    conteudo += `Data: ${data}\n\n`;
    conteudo += `Hora: ${hora}\n\n`;
    conteudo += `Email do remetente: ${email}\n\n`;
    if (url) {
      conteudo += `Link: ${url}\n\n`;
    }
  
    // Cria o Blob com o conteúdo
    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
  
    // Cria um link temporário para download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nome || 'documento'}.txt`; // nome do arquivo baseado no nome do documento
  
    // Adiciona o link ao DOM, dispara o clique e remove o link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    // Revoga a URL para liberar memória
    URL.revokeObjectURL(link.href);
  
    // Opcional: limpar o formulário após salvar
    this.reset();
  });
  
