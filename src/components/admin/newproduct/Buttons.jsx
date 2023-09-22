import { AddCircle, ImportSquare } from 'iconsax-react'
 

export const SaveandPublishBtn = () => {
    <div className='flex px-3 py-2 gap-2 bg-light-green-100 rounded-md items-center'>
            <p className='text-[#eeeeee] text-sm'>Save and Publish</p>
            <AddCircle size="24" color="#eeeeee" variant="TwoTone"/>
    </div>
}


export const EditDraftBtn = () => {
    <div className='border-[0.5px] 
            border-light-green-100 
            bg-white
            xs:max-md:w-3
            flex gap-2 items-center 
            p-3 rounded-md shadow-md'
    >
            <h1 className='text-[#003937B2]
                font-normal xs:max-md:text-xs'
            >
                Edit Draft
            </h1>
            <ImportSquare size="20" color="#003937B2"/>
    </div>

}