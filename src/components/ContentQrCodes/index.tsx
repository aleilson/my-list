import { QrCode } from '../../hooks/useQrCodes';
import { QrCodeDetail } from '../QrCodeDetail';
import { formatDate } from '../../utils/formatDate';
import { useState } from 'react';
import styles from './styles.module.scss';

interface ContentQrCodesProps {
    openDetails: (id: string) => void;
    qrCodes: QrCode[];
    qrCodeDetail: QrCode;
}

export function ContentQrCodes({ openDetails, qrCodes, qrCodeDetail }: ContentQrCodesProps) {
    const [isShowing, setIsShowing] = useState(false);
    
    function handleOpenDetail(qrCodeId: string) {
        openDetails(qrCodeId);
        setIsShowing(!isShowing);
    };

    return (
        <>
            <div className={styles.titlesGrid}>
                <span>ID da cobrança</span>
                <span>Data da criação</span>
                <span>Valor da cobrança</span>
            </div>
            <div className={styles.contentGrid}>
                { qrCodes.length >= 1 ? (
                    qrCodes.map( qrCode => (
                        <button onClick={()=> handleOpenDetail(qrCode.id)}
                            key={qrCode.id}
                            type="button"
                        >
                            <div className={styles.boxGrid}>
                                <span>{qrCode.qrCodeId}</span>
                                <span>{formatDate(qrCode.createdAt)}</span>
                                <span>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                    }).format(qrCode.paidAmount)
                                }</span>

                            </div>
                            { qrCode.qrCodeId === qrCodeDetail.qrCodeId  &&
                                (
                                    <QrCodeDetail 
                                        qrCodeDetail={qrCodeDetail}
                                        isActive={isShowing}
                                    />
                                ) 
                            }
                            
                        </button>
                    ))
                ) :
                (
                    <span className={styles.loading}>Carregando...</span>
                )}
            </div>
        </>
    );
}