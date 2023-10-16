export default interface ImobiDescriptionProps {
    title: string;
    cod: string | number;
    description: string;
    price: string | number;
    Characteristics: {
        area: number;
        dormitory: number;
        suite: number;
        bathroom: number;
        garage: number
    }
}