# Clone_Youtube
내가 유튜브를 사용하면서 있었으면 좋겠다고 생각한 기능을 추가하기

#목표
- 유튜브 Oauth기능으로 로그인
- Youtube Api 사용해서 구독 목록 불러오기
- 보고싶은 구독한 유튜버를 폴더 별로 정리
- 폴더로 들어갈시 구독학 유튜버의 영상이 순서대로 나옴
- 유튜브 영상 검색기능
- 유튜브 숏츠 저장기능
- 배포

#달성
- 유튜브 로그인
- 구독 목록
- 유튜브 영상 검색 기능

#미달성
- 구독 목록 정리 기능
- 유튜브 숏츠 저장 기능
- 배포

-개인평
- db를 사용함에 있어서 익숙하지 않아서 JWT토큰을 발급하고 사용함에 있어서 미숙함 점들이 많이 보였음
- 프로젝트를 여기서 마무리 하지 않고 목표치를 완성후 배포 까지 해보려고함
- Api를 어떤식으로 사용해야 하는지 경험 할 수 있었음
- css가 아닌 scss를 사용했는데 익숙해지면 더 좋을꺼 같음
- 무작정 APi를 불러오다보면 금세 할당량을 다써버리고 페이지 로딩 속도도 너무 느려짐 db를 통해서 값을 저장해줘 랜더링 할 때마다 호출되는 방식을 수정해야함
- 토큰을 보안성이 낮게 저장했음 프론트 엔드와 벡엔드 서버를 따로 구축해보려 했으나 라우터등을 넘겨주는 실력이 부족했음

env 파일을 추가하고 아래 내용을 적어야 돌아감
REACT_APP_YOUTUBE_API_KEY=
REACT_APP_GOOGLE_CLIENT_ID=
REACT_APP_REDIRECT_URI=
