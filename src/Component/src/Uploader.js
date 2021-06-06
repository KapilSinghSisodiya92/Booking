import React, { useState } from 'react'
import ImageUploader from 'react-images-upload';

const Uploader = ({ onSelect }) => {
    return (
        <div>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onSelect}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
            />
        </div>
    )
}

export default Uploader
