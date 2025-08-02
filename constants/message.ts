export const ERROR_MESSAGES = {
  LECTURE_FETCH_FAILED: '강의 목록을 불러오는데 실패했습니다.',
  LECUTRE_FETCH_UNKNOWN_ERROR: '강의 목록을 불러오는데 알 수 없는 오류가 발생했습니다.',
  REVIEW_FETCH_FAILED: '리뷰 목록을 불러오는데 실패했습니다.',
  REVIEW_FETCH_UNKNOWN_ERROR: '리뷰 목록을 불러오는데 알 수 없는 오류가 발생했습니다.',
  LECUTRE_INFO_FETCH_FAILED: '강의 정보를 불러오는데 실패했습니다.',
  LECUTRE_INFO_FETCH_UNKNOWN_ERROR: '강의 정보를 불러오는데 알 수 없는 오류가 발생했습니다.',
};

export const UI_MESSAGES = {
  VALIDATION: {
    TITLE_REQUIRED: '제목을 입력해주세요.',
    CONTENT_REQUIRED: '내용을 입력해주세요.',
    RATING_REQUIRED: '별점을 선택해주세요.',
  },
  AUTH: {
    LOGIN_REQUIRED: '로그인이 필요합니다.',
    LOGIN_FAILED: '로그인 실패',
  },
  CONFIRM: {
    LOGIN_REQUIRED: '로그인이 필요합니다.\n로그인하시겠습니까?',
  },
} as const;
