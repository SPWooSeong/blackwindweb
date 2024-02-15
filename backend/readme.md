fastapi를 실행시킬 때, venv 가상환경에 들어가는 법

.venv\Scripts\activate.bat

fastapi를 끝내는 것

deactivate

next js 할 때 webproject 안으로 들어가서 npm run dev ㄱㄱ

nextjs 쓸 때, 리엑트 버전 html css가 필요하다. 크게 다른 점이 4가지가 있는데, 
1. return() 안에 html 집어 넣을 때, tag들은 한 줄에 하나만 쓸 수 있다. 태그들이 한 줄에 여러게 있을 수 없다는 뜻
2. css 문법을 적용할 때, class attribute를 사용하게 되는데, 이걸 className으로 바꿔 사용한다.
3. html안에 js 변수를 넣으려면, { variable name } 와 같이 사용하면 된다. 파이썬처럼
4. css까지 안가고 style attribute로 css문법을 넣으려면, {{}} 으로 중괄호 2개 안에서 문법을 작성해야함.(명령어에서 대쉬기호 삭제 + 그 이후 문자 대문자 처리)


터미널 관련 명령어
ls : 현재 경로를 나타냄
cd {file_name} : 파일 안으로 위치가 이동
g++ {file_name}.cpp -o {file_name} : cpp파일 실행 파일이 생김
./{file_name} : 파일 실행

파일 여러 개를 실행할 때는 다르게 한다.

fastapi 관련 명령어
powershell terminal에서
python -m uvicorn main:app --reload