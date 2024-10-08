import NoticiasSecundarias from './noticiasSecundarias';
import NoticiaPrincipal from './noticiaPrincipal';
import '../../../../../StyleComponents/Home.css';

export default function BlocoPrincipal({ size = 250, data }) {
  return (
    <>
      <div className="principalCard">
        <NoticiaPrincipal size={size} data={data} />
        <NoticiasSecundarias data={data} />
      </div>
    </>
  );
}
