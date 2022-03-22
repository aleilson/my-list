import Head from 'next/head';
import { useState } from 'react';
import { ContentQrCodes } from '../components/ContentQrCodes';
import { QrCode, useQrCodes } from '../hooks/useQrCodes';
import styles from './home.module.scss';


export default function Home() {
    const [qrCodeDetail, setQrCodeDetail] = useState<QrCode>({} as QrCode);
    const { qrCodes } = useQrCodes()

    async function handleKnowMoreQrCode(codeId: string) {
        // Requisição está retornando somente um usuário mesmo passando um id diferente.
        // const response = await api.get(`qrcodes/${codeId}/transactions`).then(response => response);
        // const { qrCodeId } = response.data[0];
        
        qrCodes.find(qrCode => {
            qrCode.qrCodeId === codeId && setQrCodeDetail(qrCode);
        });
    }

    return (
        <>
            <Head>
                <title>Home | Minhas Cobranças</title>
            </Head>

            <main className={styles.contentContainer}>
                <ContentQrCodes 
                    openDetails={(id) => handleKnowMoreQrCode(id)}
                    qrCodes={qrCodes}
                    qrCodeDetail={qrCodeDetail}
                />
            </main>
        </>
    )
}