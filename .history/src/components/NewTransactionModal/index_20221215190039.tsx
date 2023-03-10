import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/botaoFechar.svg"
import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saidas.svg"
import { Container, TransactionTypeContainer, RadioBox } from "./style";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
    }

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

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transações</h2>

            <input 
            placeholder="Título"
            />

            <input 
            type="number"
            placeholder="Valor" 
            />

            <TransactionTypeContainer>
                <RadioBox
                type="button" 
                onClick={() => { setType('deposit'); }}
                IsActive={type === 'deposit'}
                activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                type="button"
                onClick={() => { setType('withdraw'); }}
                IsActive={type === 'withdraw'}
                activeColor="red"

                >
                    <img src={outcomeImg} alt="Saídas" />
                    <span>Saída</span>
                </RadioBox>
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