'use client';

import { useCallback, useEffect, useImperativeHandle, forwardRef, useState } from 'react';
import { X } from 'lucide-react';
import styles from './styles/Modal.module.css';

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  onClose?: () => void;
  open?: boolean;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(
  ({ title, children, size = 'medium', onClose, open }, ref) => {
    const [internalOpen, setInternalOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setInternalOpen(true),
      close: () => setInternalOpen(false),
    }));

    const handleClose = useCallback(() => {
      setInternalOpen(false);
      onClose?.();
    }, [onClose]);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

      const isOpen = typeof open === 'boolean' ? open : internalOpen;
      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [open, internalOpen, handleClose]);

    const isOpen = typeof open === 'boolean' ? open : internalOpen;
    if (!isOpen) return null;

    return (
      <div className={styles.overlay} onClick={handleClose}>
        <div className={`${styles.modal} ${styles[size]}`} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            {title && <h2 className={styles.modalTitle}>{title}</h2>}
            <button className={styles.closeButton} onClick={handleClose}>
              <X size={20} />
            </button>
          </div>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;
