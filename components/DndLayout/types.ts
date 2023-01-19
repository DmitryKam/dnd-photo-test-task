import { TPagesData } from "../../types";

export type TDndLayoutProps = {
    pages: TPagesData[];
    onPhotosChange: (items: TPagesData[]) => void;
    children: JSX.Element;
};