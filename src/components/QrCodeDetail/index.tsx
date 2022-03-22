import { QrCode } from '../../hooks/useQrCodes';
import { formatDate } from '../../utils/formatDate';
import styles from './styles.module.scss';

interface QrCodeDetail {
    qrCodeDetail: QrCode;
    isActive: boolean;
}

export function QrCodeDetail({ qrCodeDetail, isActive }: QrCodeDetail) {
    return (
        <>
            { isActive &&
                <div className={styles.detailsQrCodeId}>
                    <div className={styles.detailsContent}>
                        <strong>Detalhes do(a) vendeddor(a)</strong>
        
                        <div>
                            <p>Nome</p>
                            <span>{qrCodeDetail.payer ? qrCodeDetail.payer.name : 'Nome não informado'}</span>
        
                            <p>CPF/CNPJ</p>
                            <span>{qrCodeDetail.payer ? qrCodeDetail.payer.taxIdNumber.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4") : 'CPF não informado'}</span>
        
                        </div>
                    </div>
                    <div className={styles.detailsContent}>
                        <strong>Detalhes da cobrança</strong>
        
                        <div>
                            <p>ID de cobrança</p>
                            <span>{qrCodeDetail.transactionId ? qrCodeDetail.transactionId : 'Não informado'}</span>
        
                            <p>Data de criação da cobrança</p>
                            <span>{formatDate(qrCodeDetail.createdAt)}</span>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}