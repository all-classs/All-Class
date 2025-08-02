'use client';

import { useState } from 'react';
import Modal from '@/components/common/modal/Modal';
import styles from './styles/LoginModal.module.css';
import { useLoginMutation, useLoginModal } from '../hooks';
import { setToken, setUserInfo } from '@/utils';
import { UI_MESSAGES } from '@/constants';
import { useQueryClient } from '@tanstack/react-query';

export default function LoginModal() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { isOpen, close } = useLoginModal();
  const queryClient = useQueryClient();

  const loginMutation = useLoginMutation();

  const handleClose = () => {
    setId('');
    setPassword('');
    close();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(
      { id, password },
      {
        onSuccess: (userData) => {
          setToken(userData.token);

          const userInfo = {
            name: userData.name,
            userKey: userData.userKey,
            role: userData.role,
          };

          setUserInfo(userInfo);
          queryClient.setQueryData(['auth', 'user'], userInfo);

          handleClose();
        },
        onError: (error) => {
          alert(error instanceof Error ? error.message : UI_MESSAGES.AUTH.LOGIN_FAILED);
        },
      }
    );
  };

  return (
    <Modal open={isOpen} title="로그인" size="small" onClose={handleClose}>
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
            disabled={loginMutation.isPending}
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
            disabled={loginMutation.isPending}
          />
        </div>
        <button type="submit" className={styles.loginButton} disabled={loginMutation.isPending}>
          {loginMutation.isPending ? '로그인 중...' : '로그인'}
        </button>
      </form>
    </Modal>
  );
}
