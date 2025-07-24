# 빈번히 변경되는 항목을 가장 마지막에 선언할 것!
################################################
## WORKDIR      - 유닉스의 cd 개념
## COPY         - 복사하기
## RUN          - 실행하기
## CMD          - 기본 실행하기 (덮어쓸 수 있음)
## ENTRYPOINT   - 무조건 실행하기
################################################
# 빌드 명령어 !
#   1. 빌드
##     → docker build -t <도커 이미지 이름> .
##       ex) docker build -t my-vite-app .

#   2. 실행 (로컬 포트 5173과 연결)
##     → docker run -p 5173:5173 <도커 이미지 이름>
##       ex) docker run -p 5173:5173 my-vite-app
################################################

# 1. Node 기반 이미지 사용
FROM node:20

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. 종속성 설치를 위해 package 파일만 먼저 복사
COPY package.json package-lock.json ./

# 4. 종속성 설치
RUN npm ci

# 5. 나머지 모든 파일 복사
COPY . .

# 6. 개발 서버 포트 노출 (Vite 기본 포트)
EXPOSE 5173

# 7. 개발 서버 실행
CMD ["npm", "run", "dev"]