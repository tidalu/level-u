import FileDownload from '@/components/file-download'
import React from 'react'

const FilesToDownloadPage = () => {
    return (
        <div className='h-full max-w-screen-lg mx-auto'>
            <div className='px-3 mt-32 mb-20'>
                <FileDownload />
            </div>
        </div>
    )
}

export default FilesToDownloadPage