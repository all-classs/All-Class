import styles from './styles/Selector.module.css';
import { getUniversityBySlug } from '@/utils';
import Image from 'next/image';

interface SelectorOption {
  value: string;
  label: string;
}

interface SelectorProps {
  title: string;
  universityName: string;
  options: {
    department: SelectorOption[];
    grade: SelectorOption[];
    classification: SelectorOption[];
  };
}

export default function Selector({ title, universityName, options }: SelectorProps) {
  const university = getUniversityBySlug(universityName);

  return (
    <div className={styles.selectorContainer}>
      <div className={styles.selectorTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.selectorOptions}>
        <div className={styles.selectorOption}>
          <span>학과</span>
          <select>
            {options.department.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectorOption}>
          <span>학년</span>
          <select>
            {options.grade.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectorOption}>
          <span>이수구분</span>
          <select>
            {options.classification.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.selectorImage}>
        {university && (
          <Image src={university.imageSrc} alt={university.name} width={100} height={50} priority />
        )}
      </div>
    </div>
  );
}
