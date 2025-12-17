import { Link } from "react-router"

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Algo sobre mi</h1>
      <hr />

      <div className="flex flex-col gap-2 mt-4">
        <Link to="/profile" className="hover:text-blue-500 underline">Perfil</Link>
        <Link to="/auth" className="hover:text-blue-500 underline">Iniciar Sesion</Link>
      </div>
    </div>
  )
}
