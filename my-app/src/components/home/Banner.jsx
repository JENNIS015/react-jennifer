import React from 'react'
import Link from 'next/link'
function Banner() {
  const content = [
    {
      title: 'Herramientas',
      description: 'Hasta 35% off',
      description2: 'y 6x sin interés',
      imageurl: '/image/home/banner1.png',
      link: '#',
    },
    {
      title: 'Herramientas',
      description: 'Hasta 35% off',
      description2: 'y 6x sin interés',
      imageurl: '/image/home/banner2.png',
      link: '#',
    },
  ]
  return (
    <div className="row">
      {content.map((banner) => (
        <div className="col l6 m6 s12">
          <Link href={banner.link}>
            <div class="advertising">
              <div class="advertising__info">
                <span class="advertising__info__title">{banner.title}</span>
                <span class="advertising__info__text advertising__info__text--bold">
                  {banner.descripcion}
                </span>
                <span class="advertising__info__text advertising__info__text--bold">
                  {banner.description2}
                </span>
              </div>

              <div class="advertising__image">
                <img src={banner.imageurl} alt="" className="banner__image" />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Banner
