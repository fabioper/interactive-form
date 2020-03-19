export default interface SectionComponent {
    key: string;
    append(): void;
    mount(): void;
    unmount(): void;
}
