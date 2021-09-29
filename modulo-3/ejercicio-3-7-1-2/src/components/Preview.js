const Preview = (props) => {
  const paymentType = () => {

  }
  return (
    <>
      <div className="preview">
        <h2>Tus datos son:</h2>
        <ul>
          <li>Nombre: {props.name}</li>
          <li>Email: {props.email}</li>
          <li>Región: {props.region}</li>
          <li>Método de pago: {paymentType()}</li>
          <li>
            Has aceptado nuestros términos legales:{' '}
            {props.legal === true ? 'Sí' : 'No'}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Preview;
