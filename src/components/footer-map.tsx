import type { CommunityType } from '@/App'
import MyImage from '../../public/Logomarca-da-Defesa-Civil-Amazonas-01.png'
import yImage from '../../public/icone-localização-02.png'


interface FooterMapProps {
  totalCommunities: number
  totalResidence: number
  totalPopulation: number
}

export function FooterMap({ totalCommunities, totalPopulation, totalResidence }: FooterMapProps) {
  return (
    <div className='fixed w-[1300px] right-[310px] bg-blue-950 rounded-xl m-0 p-20 bottom-14'>
      <img
        src={MyImage}
        alt="Descrição da imagem"
        className="fixed w-[142px] bottom-[65px] right-[350px] h-auto"
      />

      <div className = 'fixed rounded-xl inset-x-0 mx-auto p-2 text-blue-950 font-bold bg-white bottom-[70px] w-[330px]'>
        { totalCommunities && totalPopulation && totalResidence ? (
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
        className="fixed w-[265px] left-[300px] bottom-[50px] h-auto"
      />
    </div>
  )
}
