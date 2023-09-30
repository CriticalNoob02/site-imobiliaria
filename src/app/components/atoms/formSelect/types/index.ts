export default interface FormSelectProps {
    options: Array<string>;
    typeLabel: string;
    placeholder: string;
    onChange: (selectedValue: string) => void;
}
