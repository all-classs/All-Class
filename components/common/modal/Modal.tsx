'use client';

import { useCallback, useEffect, useImperativeHandle, forwardRef, useState } from 'react';
import { X } from 'lucide-react';
import styles from './Modal.module.css';

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  onClose?: () => void;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(
  ({ title, children, size = 'medium', onClose }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    const handleClose = useCallback(() => {
      setIsOpen(false);
      onClose?.();
    }, [onClose]);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [isOpen, handleClose]);

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
