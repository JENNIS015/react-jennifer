import { isEmpty, isArray } from 'lodash'
import ImageGallery from 'react-image-gallery'

const GalleryCarousel = ({ gallery }) => {
  if (isEmpty(gallery) || !isArray(gallery)) {
    return null
  }

  let images = []

  gallery.forEach((item) =>
    images.push({
      original: [item.mediaItemUrl],
      thumbnail: [item.mediaItemUrl],
    }),
  )
  console.log(images)
  return (
    <ImageGallery
      items={images}
      thumbnailPosition={'right'}
      showFullscreenButton={'false'}
      useTranslate3D={'false'}
      showPlayButton={'false'}
    />
  )
}

export default GalleryCarousel
