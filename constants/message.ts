export const ERROR_MESSAGES = {
  LECTURE_FETCH_FAILED: '강의 목록을 불러오는데 실패했습니다.',
  LECUTRE_FETCH_UNKNOWN_ERROR: '강의 목록을 불러오는데 알 수 없는 오류가 발생했습니다.',
  REVIEW_FETCH_EMPTY: '수강 후기가 없습니다.',
  REVIEW_FETCH_FAILED: '리뷰 목록을 불러오는데 실패했습니다.',
  REVIEW_FETCH_UNKNOWN_ERROR: '리뷰 목록을 불러오는데 알 수 없는 오류가 발생했습니다.',
  LECUTRE_INFO_FETCH_FAILED: '강의 정보를 불러오는데 실패했습니다.',
  LECUTRE_INFO_FETCH_UNKNOWN_ERROR: '강의 정보를 불러오는데 알 수 없는 오류가 발생했습니다.',
  REVIEW_POST_FAILED: '리뷰 등록에 실패했습니다.',
  REVIEW_POST_UNKNOWN_ERROR: '리뷰 등록에 알 수 없는 오류가 발생했습니다.',
  REVIEW_POST_FORBIDDEN: '접근 권한이 없습니다.',
  REVIEW_POST_UNAUTHORIZED: '로그인이 필요합니다.',
  REVIEW_LIKE_SUCCESS: '좋아요가 추가되었습니다.',
  REVIEW_LIKE_CANCEL_SUCCESS: '좋아요가 취소되었습니다.',
  REVIEW_LIKE_UNKNOWN_ERROR: '좋아요에 알 수 없는 오류가 발생했습니다.',
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
  REVIEW: {
    POST_SUCCESS: '리뷰가 성공적으로 등록되었습니다.',
    POST_FAILED: '리뷰 등록에 실패했습니다. 다시 시도해주세요.',
    LECTURE_INFO_MISSING: '강의 정보를 불러올 수 없습니다. 페이지를 새로고침 후 다시 시도해주세요.',
    NO_REVIEW: '아직 수강 후기가 없습니다.',
    WRITE_REVIEW: '첫 번째 리뷰를 작성해보세요!',
    FETCH_FAILED: '수강 후기를 불러오는데 실패했습니다.',
    NETWORK_ERROR: '네트워크 오류가 발생했습니다. 다시 시도해주세요.',
  },
  CONFIRM: {
    LOGIN_REQUIRED: '로그인이 필요합니다. 로그인하시겠습니까?',
  },
} as const;
