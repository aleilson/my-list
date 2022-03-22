import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface QrCode {
    id: string;
    qrCodeId: string;
    requestAmount: number;
    paidAmount: number;
    type: string;
    createdAt: string;
    createdBy: string;
    payer: Payer;
    transactionId: string;
}

interface Payer {
    name: string;
    taxIdNumber: string;
    documentType: string;
    city: string;
    codIspb: number
}

interface QrCodesProviderProps {
    children: ReactNode;
}

interface QrCodesContextData {
    qrCodes: QrCode[];
}

const QrCodesContext = createContext<QrCodesContextData>({} as QrCodesContextData);

export function QrCodesProvider({ children }: QrCodesProviderProps) {
    const [qrCodes, setQrCodes] = useState<QrCode[]>([]);

    useEffect(() => {
        api.get('qrcodes')
            .then(response => setQrCodes(response.data))
    }, []);

    return (
        <QrCodesContext.Provider value={{ qrCodes }}>
            {children}
        </QrCodesContext.Provider>
    )
}

export function useQrCodes() {
    const context = useContext(QrCodesContext);

    return context;
}
