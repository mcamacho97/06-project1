import { useForm } from "react-hook-form";

const EditMovieComponent = () => {
  const title_component = "Editar película";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="edit_form">
      <h3 className="title">{title_component}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="title"
          type="text"
          className="titulo_editado"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && (
          <span className="required_text">This field is required</span>
        )}

        <textarea
          name="description"
          className="descripcion_editada"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && (
          <span className="required_text">This field is required</span>
        )}
        <br />
        <input type="submit" className="editar" />
      </form>
    </div>
  );
};

export default EditMovieComponent;
