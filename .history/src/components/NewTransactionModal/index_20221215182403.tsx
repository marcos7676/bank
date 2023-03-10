import Modal from "react-modal";
import closeImg from "../../assets/botaoFechar.svg"
import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saidas.svg"
import { Container, TransactionTypeContainer } from "./style";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return(
        <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
            <img 
            src={closeImg} 
            alt="Fechar modal" />
        </button>

        <Container>
            <h2>Cadastrar Transações</h2>

            <input 
            placeholder="Título"
            />

            <input 
            type="number"
            placeholder="Valor" 
            />

            <TransactionTypeContainer>
                <button
                type="button" 
                >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
                </button>

                <button
                type="button"
                >
                <img src={outcomeImg} alt="Saídas" />
                <span>Saída</span>
                </button>
            </TransactionTypeContainer>

            <input
            placeholder="Categoria"
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
      </Modal>
    )
}