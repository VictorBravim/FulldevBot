import { Mensagem } from '../modelos/Mensagem.js';
import { WAProto } from '@whiskeysockets/baileys';

export class MensagemControle {
    constructor() {
        this.mensagem = new Mensagem();
    }

    // Método para validar mensagem antes de processar
    validarMensagem(mensagem) {
        if (!mensagem?.key?.remoteJid || !mensagem?.key?.id || !mensagem?.message) {
            throw new Error('Mensagem inválida: campos obrigatórios ausentes.');
        }
    }

    // Método para formatar os dados da mensagem
    formatarMensagem(mensagem) {
        return {
            chatId: mensagem.key.remoteJid,
            mensagemId: mensagem.key.id,
            mensagem: JSON.stringify(mensagem.message),
        };
    }

    // Armazena uma única mensagem no banco
    async armazenarMensagem(mensagem) {
        this.validarMensagem(mensagem); // Validação antes de salvar
        const dadosMensagem = this.formatarMensagem(mensagem);
        await this.mensagem.armazenarMensagem(dadosMensagem);
    }

    // Armazena múltiplas mensagens em lote (opcional, otimizado para grandes volumes)
    async armazenarMensagensEmLote(mensagens) {
        if (!Array.isArray(mensagens)) {
            throw new Error('O parâmetro "mensagens" deve ser um array.');
        }
        for (const mensagem of mensagens) {
            await this.armazenarMensagem(mensagem); // Reutiliza a lógica do método individual
        }
    }

    // Recupera uma mensagem específica do banco
    async recuperarMensagem(remoteJid, mensagemId) {
        const dadosMensagem = await this.mensagem.obterMensagem(remoteJid, mensagemId);
        return dadosMensagem
            ? WAProto.Message.fromObject(JSON.parse(dadosMensagem.mensagem))
            : undefined;
    }

    // Limpa todas as mensagens armazenadas no banco
    async limparMensagensArmazenadas() {
        await this.mensagem.limparMensagens();
    }
}