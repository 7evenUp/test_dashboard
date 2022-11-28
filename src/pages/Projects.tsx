import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="flex flex-col gap-14 items-center">
      <h1 className="text-5xl">Выберите проект:</h1>
      <div className="flex gap-8">
        <Link className="border border-slate-400 h-64 p-8 rounded-lg" to={'/1'}>Go to project num: 1</Link>
        <Link className="border border-slate-400 h-64 p-8 rounded-lg" to={'/2'}>Go to project num: 2</Link>
        <Link className="border border-slate-400 h-64 p-8 rounded-lg" to={'/3'}>Go to project num: 3</Link>
      </div>
    </div>
  )
}

export default Projects