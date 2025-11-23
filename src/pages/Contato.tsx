import { useForm } from 'react-hook-form'; 

const Contato = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);  
    alert('Mensagem enviada! Obrigado pelo interesse na AlphaTec.');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary-600 mb-8">Fale Conosco</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
        <input {...register('nome')} placeholder="Seu Nome" className="w-full p-3 border rounded" required />
        <input {...register('email')} type="email" placeholder="Seu Email" className="w-full p-3 border rounded" required />
        <textarea {...register('mensagem')} placeholder="Sua Mensagem" rows={4} className="w-full p-3 border rounded" required />
        <button type="submit" className="w-full bg-primary-600  py-3 rounded hover:bg-secondary text-gray-700">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contato;