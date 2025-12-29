import React from 'react'
import Container from '../../commonComponent/Container'
import { imagesProvider } from '../../../helpers/ImgProvider'
const Display = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-2 gap-5 pt-15">
          <div className="">
            <picture>
              <img src={imagesProvider.displayone} alt={imagesProvider.displayone} />
            </picture>
          </div>
          <div className="">
            <picture>
              <img src={imagesProvider.displaytwo} alt={imagesProvider.displaytwo} />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Display