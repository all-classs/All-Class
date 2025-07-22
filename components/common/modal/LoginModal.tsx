'use client';

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Modal, { ModalRef } from './Modal';
import styles from './LoginModal.module.css';

interface LoginModalProps {
  onClose?: () => void;
}

export interface LoginModalRef {
  open: () => void;
  close: () => void;
}

const LoginModal = forwardRef<LoginModalRef, LoginModalProps>(({ onClose }, ref) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const modalRef = useRef<ModalRef>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      modalRef.current?.open();
    },
    close: () => {
      modalRef.current?.close();
    },
  }));

  const handleClose = () => {
    setId('');
    setPassword('');
    onClose?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <Modal ref={modalRef} title="로그인" size="small" onClose={handleClose}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="login-id" className={styles.label}>
            아이디
          </label>
          <input
            id="login-id"
            type="text"
            className={styles.input}
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="login-password" className={styles.label}>
            비밀번호
          </label>
          <input
            id="login-password"
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          로그인
        </button>
      </form>
    </Modal>
  );
});

export default LoginModal;
