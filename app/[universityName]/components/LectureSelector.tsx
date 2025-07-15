import styles from './styles/LectureSelector.module.css';
import { Selector } from '@/components/common';

const selectorOptions = {
  department: [
    { value: '1', label: '소프트웨어학과' },
    { value: '2', label: '컴퓨터공학과' },
    { value: '3', label: '정보보안학과' },
  ],
  grade: [
    { value: '1', label: '1학년' },
    { value: '2', label: '2학년' },
    { value: '3', label: '3학년' },
    { value: '4', label: '4학년' },
  ],
  classification: [
    { value: '1', label: '전공' },
    { value: '2', label: '교양' },
    { value: '3', label: '기타' },
  ],
};

export default function LectureSelector({ universityName }: { universityName: string }) {
  return (
    <div className={styles.lectureSelectorContainer}>
      <Selector title="수강목록" universityName={universityName} options={selectorOptions} />
    </div>
  );
}
