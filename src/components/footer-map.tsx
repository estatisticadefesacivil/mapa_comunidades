import MyImage from '../../public/Logomarca-da-Defesa-Civil-Amazonas-01.png'
import yImage from '../../public/icone-localização-02.png'


interface FooterMapProps {
  totalCommunities: number
  totalResidence: number
  totalPopulation: number
}

export function FooterMap({ totalCommunities, totalPopulation, totalResidence }: FooterMapProps) {
  return (
    <div className='fixed left-1/2 transform -translate-x-1/2 w-[1300px] max-h-screen items-center justify-between bg-blue-950 rounded-xl mx-auto p-20 bottom-14'>

  <img
    src={MyImage}
    alt="Descrição da imagem"
    className="absolute right-10 bottom-[8px] w-[142px] h-auto"
  />

  <div className='absolute inset-x-0 mx-auto p-2 text-blue-950 font-bold bg-white rounded-xl bottom-[15px] w-[330px]'>
    {totalCommunities && totalPopulation && totalResidence ? (
      <div>
        <p>Quantidade de Comunidades: {totalCommunities}</p>
        <p>Quantidade de Domicílios: {totalResidence}</p>
        <p>População: {totalPopulation}</p>
      </div>
    ) : (
      <>
        <p>Quantidade Total de Municípios: 62</p>
        <p>Quantidade Total de Comunidades: 4.557</p>
        <p>Quantidade Total de Domicílios: 149.434</p>
        <p>População: 581.670</p>
        <p>Média de Famílias: 145.418</p>
      </>
    )}
  </div>

  <img
    src={yImage}
    alt="Descrição da imagem"
    className="absolute left-0 bottom-[1px] w-[265px] h-auto"
  />
</div>

  )
}
