const linkBlock1 = [
  { name: 'Mercado' },
  { name: 'Investimentos' },
  { name: 'Cotações' },
  { name: 'Banco Central' },
  { name: 'Bolsa de Valores' },
  { name: 'Imposto de Renda' },
  { name: 'Finanças Pessoais' },
];
const linkBlock2 = [
  { name: 'Eleições 2024' },
  { name: 'Governo Atual' },
  { name: 'Câmara dos Deputados' },
  { name: 'Senado Federal' },
  { name: 'Supremo Tribunal Federal' },
  { name: 'Políticas Públicas' },
];
const linkBlock3 = [
  { name: 'Alimentação' },
  { name: 'Exercícios Físicos' },
  { name: 'Vacinação' },
];
const linkBlock4 = [
  { name: 'Inteligência Artificial' },
  { name: 'Ciência' },
  { name: 'Curiosidades' },
];
const linkBlock5 = [
  { name: 'Equipe ALT' },
  { name: 'Sobre Nós' },
  { name: 'Fale Conosco' },
  { name: 'Segurança e Privacidade' },
  { name: 'Termos de Uso' },
  { name: 'Denuncie' },
];

function ListItens({ block }) {
  return block.map((link) => (
      <a href={link.name}>
        <li key={link.name}>{link.name}</li>
      </a>
  ));
}

function List({ title, nameBlock }) {
  return <>
    <ul>
      <h1>{title}</h1>
      <ListItens block={nameBlock} />
    </ul>
  </>
}

export default function Bloco() {
  return (
    <div>
      <List title="Economia" nameBlock={linkBlock1} />
      <List title="Política" nameBlock={linkBlock2} />
      <List title="Saúde" nameBlock={linkBlock3} />
      <List title="Tecnologia" nameBlock={linkBlock4} />
      <List title="Mais" nameBlock={linkBlock5} />
    </div>
  );
}
