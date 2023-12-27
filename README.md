<h1> 아우어마켓 | 모두들 위한 오픈마켓 </h1>

### [ 배포 ]
- URL : https://sominopenmarket.netlify.app/
```
- 구매자 계정 
    - ID : ourbuyer
    - PW : our123!!

- 판매자 계정
    - ID : ourseller
    - PW : our123!!
```

<br/>

### [ 프로젝트 기간 ] <br>
    ver1. 22년 12월 22일 ~ 2월 24일
    ver2. 23년 11월 16일 ~ 코드 수정
<br>

### [ 프로젝트 소개 ] <br>
    - 아우어마켓은 구매회원, 판매회원으로 나뉘어 물건을 사고, 팔 수 있는 오픈마켓 서비스입니다.

    - 회원가입
        - 원하는 사용자 성격에 따라 가입할 수 있습니다. (구매회원, 판매회원)
        - 아이디 중복 검사가 필요합니다.
        - 판매회원의 경우 사업자 등록번호 확인이 필요합니다.
        - 유효한 정보를 모두 입력 후 정보제공 동의를 마쳐야 가입할 수 있습니다.
    
    - 로그인
        - 사용자 성격에 맞는 로그인 화면에서 로그인을 진행합니다. 
        - 판매회원이 구매회원 로그인을 진행할 경우 로그인 유형 확인 경고가 나타납니다.
        - 상품 검색의 경우 로그인하지 않더라도 이용할 수 있습니다.
    - 구매회원
        - 원하는 상품을, 원하는 수량으로 장바구니에 담을 수 있습니다.
        - 장바구니 내에서 상품 수량을 변경 및 삭제할 수 있습니다.
        - 상품 상세 페이지 내에서 바로 구매 하거나 장바구니 내에서 상품을 구매할 수 있습니다.
        - 결제 페이지에서 모든 정보를 입력후 정보 제공 동의를 마쳐야 결제할 수 있습니다.

    - 판매회원
        - 판매회원은 상세페이지에 들어가더라도 상품을 주문할 수 없습니다. 
        - 판매자 센터 페이지에서 판매중인 상품을 확인할 수 있습니다.
        - 판매중인 상품을 수정하거나 삭제할 수 있습니다.
        - 상품 업로드 및 수정 페이지 내의 모든 정보를 유효하게 입력해야 상품 정보를 저장할 수 있습니다.

<br>

### [ 실행 화면 ]

|                            0. 메인화면 ( + 로그인 전 상품 상세 페이지 )                            |                           1. 회원가입                            |
| :-------------------------------------------------------------: | :--------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/nimoseel/post/0f2fc255-ab31-4a88-90ba-12861ab79e02/image.gif"/> | <img src="https://velog.velcdn.com/images/nimoseel/post/1318298a-c702-4fdf-90c9-1232daccade1/image.gif" /> |

|                           2. 로그인                           |                          3. 장바구니                          |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/nimoseel/post/be17323b-0c9f-4968-aefa-f9e203961cdf/image.gif"/> | <img src="https://velog.velcdn.com/images/nimoseel/post/9b4217f1-85a1-4a08-bc53-ce8517aa3e18/image.gif" /> |

|                        4. 상품 주문하기                        |                     5. 상품 결제하기                     |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/nimoseel/post/b63876e0-986a-4a3a-b17b-14b475bf1cfa/image.gif" /><span>상세 페이지 내 바로 주문, 장바구니내 개별 주문, 전체 주문</span>| <img src="https://velog.velcdn.com/images/nimoseel/post/93f085ed-6c4a-441b-8566-be48e66d4cfa/image.gif"/> <span>react-daum-postcode 사용</span>|


<br/>
<hr/>
<br/>

|                     6. 판매회원 홈 화면 + 상품 상세 페이지                      |                          7. 판매 상품 업로드                          |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/0517d413-2f89-41bf-8ada-c0af208910cb/image.gif"/> | <img src="https://velog.velcdn.com/images/miniso/post/6df64bfc-3dd2-4f22-868c-a93535873b3c/image.gif"/> |

|                     8. 판매 상품 정보 수정                      |                          9. 판매 상품 삭제                          |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/12b16b8b-9b8c-47c3-a242-cf656987c052/image.gif"/> | <img src="https://velog.velcdn.com/images/miniso/post/9aeed45b-79be-4edc-86bd-7be64bf5a211/image.gif"/> |

|                     10. 검색                      |                     11. 로그아웃                      |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/67cb49f6-14e3-4155-b1e2-b68665c0ab84/image.gif"/> | <img src="https://velog.velcdn.com/images/miniso/post/cef1e82f-8fe0-4c75-a2d5-91e528a942db/image.gif"/>|

|                     12. 반응형                       |
| :-------------------------------------------------------------: | 
| <img src="https://velog.velcdn.com/images/miniso/post/aa3b3c55-3c40-4548-9a37-6b9fb8a90eae/image.gif" width="70%"/> | 

### [ 주요 코드 ]
#### 1. 스타일드 컴포넌트 임포트시 컴포넌트 앞에 S. 붙여 구분이 용이하도록 함. 
```js
//Home.jsx
return (
        <>
            <Header/>
            <Carousel/>
            <S.Main>
            {loading && <Loading/>}
                <S.ProductUl>
                    {products && products.map((item) => 
                        <Link 
                            key={item.product_id} 
                            to={`/product/${item.product_id}`}
                        >
                            <ProductCard
                                {...item}
                                key={item.product_id}
                            />
                        </Link>
                    )}
                </S.ProductUl>
            </S.Main>
            <Footer/>
        </>
    )
```

#### 2. react-daum-postcode 사용
```js
    // 우편번호 검색 관련
    const [ isOpenPostCode, setIsOpenPostCode ] = useState(false);

    const onCompletePost = (post) => {
        setInputs({
            ...inputs,
            post_code : post.zonecode,
            address_1 : post.buildingName ? post.address + ' ('+ post.buildingName +')' : post.address ,
        })
        setIsOpenPostCode(false);
    }

    const postCodeStyle = {
        width: '450px',
        height: '450px',
    }
```

```js
<> ...

    {isOpenPostCode && 
    <ModalPortal>
        <S.ModalBg isOpenPostCode={isOpenPostCode}>
            <S.PostCodeContent>
                <S.PostCodeTitle>주소찾기</S.PostCodeTitle>
                <S.DeleteBtn onClick={()=>{setIsOpenPostCode(false)}}/>
                <DaumPostCode style={postCodeStyle} autoClose onComplete={onCompletePost}/>
            </S.PostCodeContent>
        </S.ModalBg>
    </ModalPortal>
    }
</>
```

### 3. 로그인 타입에 따른 로그인 인증 로직 실행
- 기본적인 로그인 타입은 buyer로 설정
```js
const [ loginType, setLoginType ] = useState('BUYER');
```

- 로그인 메뉴 클릭에 따라 loginType 값 변경
```js
<SC.MenuUl>
    <SC.MenuLi 
        isSelected={isSelected} 
        onClick={()=>{ 
            setIsSelected(true); 
            setLoginType('BUYER'); 
    }}>
        구매회원 로그인
    </SC.MenuLi>
    <SC.MenuLi 
        isSelected={!isSelected} 
        onClick={()=>{ 
            setIsSelected(false); 
            setLoginType('SELLER'); 
    }}>
        판매회원 로그인
    </SC.MenuLi>
</SC.MenuUl>
```
```js
<S.LoginBtn type='button' onClick={()=>{loginCheck()}}>로그인</S.LoginBtn>
```

- 로그인 버튼 클릭시 실행되는 loginCheck 함수
    - seller 버튼 클릭시 setSLoginType을 통해 로그인 타입의 상태를 변경하고, 해당 값을 loginCheck 내부 로그인 로직에서 사용
```js
// 로그인 체크
const loginCheck = async() => {
    const username = id;
    const password = pw;
    const login_type = loginType;

    const loginData = {
        username,
        password,
        login_type,
    };

    try{
        const response = await login(loginData);

        if(loginData.username === '' && loginData.password === ''){
            setIsValid(false);
            setErrTxt('아이디 또는 비밀번호를 입력해주세요.');
            idInput.current.focus();
        } else if(loginData.username === ''){
            setIsValid(false);
            setErrTxt('아이디를 입력해주세요');
            idInput.current.focus();
        } else if(loginData.password === ''){
            setIsValid(false);
            setErrTxt('비밀번호를 입력해주세요');
            pwInput.current.focus();
        }

        if(loginData.username !== '' && loginData.password !== ''){
            if(response.FAIL_Message){
                setIsValid(false);
                setErrTxt(response.FAIL_Message);
                setId('');
                setPw('');
                idInput.current.focus();
            }else if(response.token && response.status !== 422){
                localStorage.setItem('token', response.token);
                localStorage.setItem('user_type', response.user_type);
                setErrTxt('');
                navigate('/');
            }
        }
    }
    catch(error){
        console.error(error);
    }
}
```
<br/>

### [ 폴더 트리 ]