document.addEventListener("DOMContentLoaded", function() {
  // Elementos DOM que serão manipulados
  const inputText = document.getElementById("input-text");
  const outputText = document.getElementById("output-text");
  const btnCriptografar = document.getElementById("btn-criptografar");
  const btnDescriptografar = document.getElementById("btn-descriptografar");
  const btnLimpar = document.getElementById("btn-limpar");
  const btnCopiar = document.querySelector(".botao_copiar");
  const additionalText = document.getElementById("additional-text");
  const alertMessage = document.getElementById("alert-message");

  // Função para habilitar/desabilitar os botões de criptografia e descriptografia
  function toggleButtons() {
    const hasText = inputText.value.trim() !== ""; // Verifica se há texto no input
    btnCriptografar.disabled = !hasText; // Desabilita/habilita o botão criptografar
    btnDescriptografar.disabled = !hasText; // Desabilita/habilita o botão descriptografar
  }

  // Adiciona evento de input para verificar o conteúdo da textarea
  inputText.addEventListener("input", toggleButtons);

  // Evento de clique para criptografar o texto
  btnCriptografar.addEventListener("click", function() {
    const text = inputText.value; // Obtém o texto do input
    const encryptedText = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    
    outputText.value = encryptedText; // Exibe o texto criptografado no output
    outputText.classList.add("sem-imagem"); // Remove a imagem de fundo
    additionalText.classList.add("oculto"); // Oculta o texto adicional
  });

  // Evento de clique para descriptografar o texto
  btnDescriptografar.addEventListener("click", function() {
    const text = inputText.value; // Obtém o texto do input
    const decryptedText = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    
    outputText.value = decryptedText; // Exibe o texto descriptografado no output
    outputText.classList.remove("sem-imagem"); // Mantém a imagem de fundo
    additionalText.classList.add("oculto"); // Oculta o texto adicional
  });

  // Evento de clique para copiar o texto para a área de transferência
  btnCopiar.addEventListener("click", function() {
    outputText.select(); // Seleciona o texto no output
    outputText.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy"); // Copia o texto para a área de transferência

    // Exibe a mensagem de alerta visual
    alertMessage.style.display = "block";
    alertMessage.style.opacity = "1";
    setTimeout(function() {
      alertMessage.style.opacity = "0";
      setTimeout(function() {
        alertMessage.style.display = "none";
      }, 500);
    }, 3000);
  });

  // Evento de clique para limpar os textos e restaurar o estado inicial
  btnLimpar.addEventListener("click", function() {
    inputText.value = ""; // Limpa o texto do input
    outputText.value = ""; // Limpa o texto do output
    outputText.classList.remove("sem-imagem"); // Restaura a imagem de fundo
    additionalText.classList.remove("oculto"); // Mostra o texto adicional
    toggleButtons(); // Verifica o estado dos botões
  });

  toggleButtons();  // Verifica o estado dos botões ao carregar a página
});
