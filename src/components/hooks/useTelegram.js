export const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tg.close();
    }

    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
        username: tg.initDataUnsafe?.user.username,
        avatar: tg.initDataUnsafe?.user?.avatar,
    }
}