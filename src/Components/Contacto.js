import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="titulares">Contacto</h1>
      <form className="formulario " onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        ></input>
        <br></br>
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        ></input>
        <br></br>
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        ></input>
        <br></br>

        <button className="btn btn-primary mt-3" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
