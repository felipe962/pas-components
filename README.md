# PAS - Painel de Acesso à Saúde

Sistema de monitoramento de hospitais com componentes React para exibição de informações hospitalares em tempo real.

## 🏥 Funcionalidades

- **Lista de Hospitais**: Visualização de hospitais com tempo de espera
- **Busca**: Sistema de busca por nome do hospital
- **Atualização em Tempo Real**: Refresh automático dos dados
- **Design Responsivo**: Interface adaptável para diferentes dispositivos
- **Integração com API**: Pronto para receber dados de APIs externas

## 🎯 Layout Completo

O projeto agora possui uma interface completa com:
- **Painel de hospitais** à esquerda (420px de largura)
- **Barra de busca** no topo com placeholder "Procure por uma unidade..."
- **Botão de fechar** (X) no canto superior direito do painel
- **Área para mapa** ocupando o restante da tela
- **Lista scrollável** de hospitais preenchendo todo o espaço vertical

## 🚀 Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **React 19** - Biblioteca de interface
- **CSS Modules** - Estilização componentizada
- **React Icons** - Ícones

## 📦 Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Entre no diretório
cd pas-components

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

## 🏗️ Estrutura do Projeto

```
pas-components/
├── app/
│   ├── components/
│   │   ├── HospitalCard.tsx      # Componente de card do hospital
│   │   ├── HospitalCard.css      # Estilos do card
│   │   ├── HospitalList.tsx      # Lista de hospitais
│   │   └── HospitalList.css      # Estilos da lista
│   ├── hooks/
│   │   └── useHospitals.ts       # Hook para gerenciar dados dos hospitais
│   ├── services/
│   │   └── hospitalService.ts    # Serviço para API dos hospitais
│   ├── types/
│   │   └── hospital.ts           # Tipos TypeScript
│   ├── global.css               # Estilos globais
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página principal
├── public/
│   └── images/                  # Imagens estáticas
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Componentes

### HospitalCard

Componente para exibir informações de um hospital individual.

```tsx
<HospitalCard
  id="1"
  name="Hospital Municipal de Barueri Dr. Francisco Moran"
  waitTime={5}
  onLearnMore={(hospitalId) => console.log(hospitalId)}
/>
```

**Props:**
- `id`: ID único do hospital
- `name`: Nome do hospital
- `waitTime`: Tempo de espera em minutos
- `onLearnMore`: Callback executado ao clicar em "Saber mais"

### HospitalList

Componente para exibir lista completa de hospitais com funcionalidades de busca e atualização.

```tsx
<HospitalList
  autoRefresh={true}
  refreshInterval={30000}
/>
```

**Props:**
- `autoRefresh`: Habilita atualização automática (padrão: false)
- `refreshInterval`: Intervalo de atualização em ms (padrão: 30000)

## 🌐 Integração com API

### Configuração da API

O sistema está preparado para integrar com APIs externas. Configure o endpoint base no arquivo `hospitalService.ts`:

```typescript
const hospitalService = new HospitalService('https://sua-api.com/api')
```

### Formato da API

A API deve retornar dados no seguinte formato:

```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Hospital Municipal de Barueri Dr. Francisco Moran",
      "waitTime": 5,
      "address": "Rua Angela Mirella, 354 - Jardim Barueri",
      "phone": "(11) 4199-3000",
      "specialties": ["Emergência", "Clínica Geral"],
      "latitude": -23.5505,
      "longitude": -46.6333,
      "capacity": 100,
      "currentOccupancy": 75,
      "emergencyServices": true,
      "lastUpdated": "2024-01-01T12:00:00Z"
    }
  ],
  "message": "Success",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Endpoints Esperados

- `GET /hospitals` - Lista todos os hospitais
- `GET /hospitals/:id` - Detalhes de um hospital específico
- `GET /hospitals/search?q=query` - Busca hospitais por nome
- `PUT /hospitals/:id/wait-time` - Atualiza tempo de espera

## 🎨 Customização

### Cores

As cores principais podem ser alteradas no arquivo CSS:

```css
:root {
  --primary-color: #2563eb;
  --primary-hover: #1d4ed8;
  --background: #ffffff;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
}
```

### Responsividade

O design é responsivo e se adapta a diferentes tamanhos de tela. Breakpoints principais:

- Desktop: > 768px
- Mobile: ≤ 768px

## 📱 Funcionalidades Móveis

- Layout adaptável para dispositivos móveis
- Botões com tamanho adequado para toque
- Texto legível em telas pequenas
- Navegação otimizada

## 🔄 Estados da Aplicação

- **Loading**: Exibe spinner durante carregamento
- **Error**: Mostra mensagem de erro com fallback para dados mock
- **Empty**: Estado vazio quando não há hospitais
- **Success**: Exibe lista de hospitais normalmente

## 🧪 Dados Mock

O sistema inclui dados de exemplo que são exibidos quando:
- A API não está disponível
- Ocorre erro na requisição
- Não há endpoint configurado

## 📄 Licença

ISC License

## 👥 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos issues do GitHub.
# pas-components
# componentes
# componentes
# pas--components
# componentepas
