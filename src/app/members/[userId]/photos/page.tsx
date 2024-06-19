import { getMemberPhotosByUserId } from '@/app/actions/membersActions'
import { CardBody, CardHeader, Divider } from '@nextui-org/react'
import Image from 'next/image'

const PhotosPage =async  ({ params }: { params: { userId: string } }) => {
    const photos = await getMemberPhotosByUserId(params.userId)
    return (
        <>
   <CardHeader   className="text-2xl font-semibold to-secondary-50">
         <div className="flex justify-center items-center">Photos</div>  
      </CardHeader>
      <Divider />
      <CardBody>
                <div className="grid grid-cols-5 md:grid-cols-7 gap-3">
                    {photos && photos.map((photo) => (
                        <div className="" key={photo.id}>
                            <Image
                                src={photo.url}
                                alt={`${photo.publicId}`}
                            width={300}
                                height={300}
                                className='object-cover aspect-square'
                            />
                  </div>
              ))}      
 </div>
      </CardBody>
  </>
  )
}

export default PhotosPage
