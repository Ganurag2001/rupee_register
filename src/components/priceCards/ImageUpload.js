
import React, { useState } from 'react';

function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
                <div>
                    <img src={selectedImage} alt="Uploaded" style={{ width: '300px' }} />
                </div>
            )}
        </div>
    );
}

export default ImageUpload;