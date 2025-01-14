export const menuPrincipal  = (botInfo)=> { 
    let {prefixo} = botInfo
    return `
|--〖🤖 *FullDev*〗
|
|- *${prefixo}adms* - Lista todos administradores.
|- *${prefixo}regras* - Exibe a descrição do grupo com as regras.
|- *${prefixo}mt* mensagem - Marca todos MEMBROS/ADMINS com uma mensagem.
|
|--〖🧰 *RECURSOS*〗 
|
|- *${prefixo}mutar* - Ativa/desativa o uso de comandos.
|- *${prefixo}alink* - Ativa/desativa o anti-link.
|- *${prefixo}bv* - Ativa/desativa o bem-vindo.
|
|--〖⌨️ *ADMINISTRATIVO*〗
|
|- *${prefixo}add* +55 (21) 9xxxx-xxxx - Adiciona ao grupo.
|- *${prefixo}ban* @marcarmembro - Bane do grupo.
|- *${prefixo}restrito* - Abre/Restringe o grupo só para ADMS.
|- *${prefixo}promover* @marcarmembro - Promove a ADM.
|- *${prefixo}rebaixar* @marcaradmin - Rebaixa a MEMBRO.
|- *${prefixo}link* - Exibe o link do grupo.
|- *${prefixo}rlink* - Redefine o link do grupo.
|- *${prefixo}apg* - Apaga uma mensagem do grupo.
|- *${prefixo}revelar* - Revela o contéudo de uma mensagem de visualização única.
|- *${prefixo}enquete* pergunta,opcao1,opcao2,etc.. - Abre uma enquete com as perguntas.
|
|--〖🚫 *BLOQUEIO DE COMANDOS*〗
|
|- *${prefixo}bcmd* [comando1 comando2 etc] - Bloqueia os comandos escolhidos no grupo.
|- *${prefixo}dcmd* [comando1 comando2 etc] - Desbloqueia os comandos escolhidos no grupo.
|- *${prefixo}bcmdglobal* [comando1 comando2 etc] - Bloqueia todos os comandos no grupo.
|- *${prefixo}dcmdglobal* [comando1 comando2 etc] - Desbloqueia todos os comandos no grupo.
`
}

export const menuUtilidades = (botInfo)=>{
    let {prefixo} = botInfo
    return `|
|>----〖🤖 *FullDev*〗
|
|>---〖⚒️ *UTILITÁRIOS*〗
|
|- *${prefixo}ia* frase - Recebe uma resposta da IA.
|- *${prefixo}calc* expressao - Calcula alguma conta que queira fazer.
`
}

export const menuGrupo = (admin, botInfo)=>{
    let {prefixo} = botInfo
    if(admin){
        return `|
|>----〖🤖 *FullDev*〗
|
|- *${prefixo}adms* - Lista todos administradores.
|- *${prefixo}regras* - Exibe a descrição do grupo com as regras.
|- *${prefixo}mt* mensagem - Marca todos MEMBROS/ADMINS com uma mensagem.
|
|--〖🧰 *RECURSOS*〗 
|
|- *${prefixo}mutar* - Ativa/desativa o uso de comandos.
|- *${prefixo}alink* - Ativa/desativa o anti-link.
|- *${prefixo}bv* - Ativa/desativa o bem-vindo.
|
|--〖⌨️ *ADMINISTRATIVO*〗
|
|- *${prefixo}add* +55 (21) 9xxxx-xxxx - Adiciona ao grupo.
|- *${prefixo}ban* @marcarmembro - Bane do grupo.
|- *${prefixo}restrito* - Abre/Restringe o grupo só para ADMS.
|- *${prefixo}promover* @marcarmembro - Promove a ADM.
|- *${prefixo}rebaixar* @marcaradmin - Rebaixa a MEMBRO.
|- *${prefixo}link* - Exibe o link do grupo.
|- *${prefixo}rlink* - Redefine o link do grupo.
|- *${prefixo}apg* - Apaga uma mensagem do grupo.
|- *${prefixo}revelar* - Revela o contéudo de uma mensagem de visualização única.
|- *${prefixo}enquete* pergunta,opcao1,opcao2,etc.. - Abre uma enquete com uma pergunta e as opçôes.
|
|--〖🚫 *BLOQUEIO DE COMANDOS*〗
|
|- *${prefixo}bcmd* [comando1 comando2 etc] - Bloqueia os comandos escolhidos no grupo.
|- *${prefixo}dcmd* [comando1 comando2 etc] - Desbloqueia os comandos escolhidos no grupo.
|- *${prefixo}bcmdglobal* [comando1 comando2 etc] - Bloqueia todos os comandos no grupo.
|- *${prefixo}dcmdglobal* [comando1 comando2 etc] - Desbloqueia todos os comandos no grupo.
|
`
    } else {
        return `|
|>----〖🤖 *FullDev*〗
|
|>---〖👨‍👩‍👧‍👦 *GRUPO*〗
|
|--〖🛠️ *GERAL*〗
|- *${prefixo}regras* - Exibe a descrição do grupo com as regras.
|- *${prefixo}adms* - Lista todos administradores.
|- *${prefixo}dono* - Mostra dono do grupo.
|
`
    }
}