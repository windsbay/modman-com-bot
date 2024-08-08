import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TelegramAvatar = (user_id) => {
    const [photoUrl, setPhotoUrl] = useState(null);
    const [error, setError] = useState(null);
    const userId = user_id; // ID пользователя
    const botToken = '7400849110:AAH4L-pCrJIHGhUBSHa2k4h6m0zzmQQ8rY8';

    useEffect(() => {
        const getPhoto = async () => {
            try {
                const response = await axios.get(`https://api.telegram.org/bot${botToken}/getUserProfilePhotos?user_id=${userId}`);
                const photos = response.data.result;
                if (photos.photos.length > 0) {
                    setPhotoUrl(photos.photos[0].sizes[0].url);
                } else {
                    // Если фотографии нет, используйте аватарку по умолчанию
                    setPhotoUrl('DEFAULT_AVATAR_URL');
                }
            } catch (error) {
                setError(error.message);
            }
        };
        getPhoto();
    }, [userId, botToken]);

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <div>
            {photoUrl && (
                <img src={photoUrl} alt="Аватарка пользователя" />
            )}
        </div>
    );
};

export default TelegramAvatar;