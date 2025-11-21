import { CardFlipProps } from "@/components/server/card-flip";

export const CARDS_DEVOPS : CardFlipProps []= [
    {
        titulo: "CI/CD",
        descricao: "Continuous Integration and Continuous Deployment. Imagine que você está em uma cozinha preparando um prato complexo. A Integração Contínua (CI) é como garantir que todos os ingredientes estejam prontos e misturados corretamente antes de cozinhar, enquanto o Deployment Contínuo (CD) é como servir o prato assim que estiver pronto, sem esperar. No desenvolvimento de software, CI/CD automatiza a integração de código e a entrega de aplicativos, garantindo que as atualizações sejam rápidas e confiáveis."
    },
    {
        titulo: "Load Balancer",
        descricao: "Um Load Balancer é como um maestro em uma orquestra, garantindo que todos os músicos (servidores) toquem em harmonia. Ele distribui o tráfego de rede entre vários servidores para garantir que nenhum deles fique sobrecarregado, melhorando a performance e a disponibilidade do serviço. Imagine que você está organizando um grande evento e precisa garantir que todos os convidados sejam atendidos rapidamente; o Load Balancer faz exatamente isso para os servidores."
    },
    {
        titulo: "Blue-Green Deployment",
        descricao: "Blue-Green Deployment é uma estratégia de implantação que minimiza o tempo de inatividade e o risco ao ter duas versões idênticas do ambiente de produção: Blue (atual) e Green (nova). Imagine que você está trocando de roupa em um palco; você se prepara nos bastidores (Green) enquanto a audiência vê você na roupa atual (Blue). Quando estiver pronto, você simplesmente troca as roupas, garantindo uma transição suave sem interrupções."
    },
    {
        titulo: "Canary Deployment",
        descricao: "Canary Deployment é uma técnica de implantação onde uma nova versão do software é lançada para um pequeno subconjunto de usuários antes de ser disponibilizada para todos. Imagine que você está testando uma nova receita de bolo e decide oferecer uma fatia para alguns amigos antes de servir a todos na festa. Isso permite identificar problemas potenciais com um impacto limitado, garantindo que a nova versão funcione bem antes de um lançamento completo."
    }
]