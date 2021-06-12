export default function decideWhatsApp(Mobile, Desktop) {
    if (window.screen.width <= 899) {
        return (
            <Mobile />
        );
    } else if (window.screen.height <= 500) {
        return (
            <Mobile />
        );
    } else {
        return (
            <Desktop />
        );
    }
}