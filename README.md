<h1> 호두마켓 | 모두들 위한 오픈마켓 </h1>
<br>

### [ 프로젝트 기간 ] <br>
    22년 12월 22일 ~ 2월 24일

<br>

### [ 프로젝트 소개 ] <br>
    - 호두마켓은 구매회원, 판매회원으로 나뉘어 물건을 사고, 팔 수 있는 오픈마켓 서비스입니다.

    - 회원가입
        - 원하는 사용자 성격에 따라 가입할 수 있습니다. (구매회원, 판매회원)
        - 아이디 중복 검사가 필요합니다.
        - 판매회원의 경우 사업자 등록번호 확인이 필요합니다.
        - 유효한 정보를 모두 입력 후 정보제공 동의를 마쳐야 가입할 수 있습니다.
    
    - 로그인
        - 사용자 성격에 맞는 로그인 화면에서 로그인을 진행합니다. 
        - 판매회원이 구매회원 로그인을 진행할 경우 로그인 유형 확인 경고가 나타납니다.

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

### [ 배포 ]
- URL : https://sominopenmarket.netlify.app/
- 구매자 계정 
    - ID : iambuyer
    - PW : ghen123!!

- 판매자 계정
    - ID : iamseller
    - PW : ghen123!!

<br/>

### [ 실행 화면 ]

|                            0. 메인화면 ( + 로그인 전 상품 상세 페이지)                            |                           1. 구매회원 회원가입                            |
| :-------------------------------------------------------------: | :--------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/85738589/222374987-79e6cbe3-ddec-4410-b065-f138710c2303.gif"/> | <img src="https://user-images.githubusercontent.com/85738589/222368203-3f6f5942-8d57-406d-9bbb-0305de3fb148.gif" /> |

|                           2. 구매회원 로그인                           |                          3. 장바구니                          |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/85738589/222367778-f37afedc-9b0f-45a5-b0fd-9c1c0b349611.gif" width="390px" /> | <img src="https://user-images.githubusercontent.com/85738589/222376629-fab7cd1d-c4bf-4b11-a3a1-4c4a2524a489.gif" width="390px" /> |

|                        4. 상품 주문하기                        |                     5. 상품 결제하기                     |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/85738589/222378137-858421a1-f127-419b-a889-23bdb7e6120d.gif" /><span>상세 페이지 내 바로 주문, 장바구니내 개별 주문, 전체 주문</span>| <img src="https://user-images.githubusercontent.com/85738589/222379337-77775cdb-3733-432f-9459-fb43dce962b8.gif"/> <span>react-daum-postcode 사용</span>|


<br/>
<hr/>
<br/>


|                      6. 판매회원 회원가입                       |                         7. 판매회원 로그인                          |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/85738589/222368074-b8b9b90a-0bac-41ca-8aad-36b1bd983d71.gif"/> | <img src="https://user-images.githubusercontent.com/85738589/222401487-6e9295c1-e572-4060-9825-0b4dfa8a9b46.gif"/> |

|                     8. 판매회원 홈 화면 + 상품 상세 페이지                      |                          9. 판매 상품 업로드                          |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/85738589/222401935-81de14f1-b6b0-4ddc-ab60-993d51ec3f8d.gif"/> | <img src="https://user-images.githubusercontent.com/85738589/222402870-5d930b25-4a44-412c-a072-74c09e98fa25.gif"/> |

|                     10. 판매 상품 정보 수정 페이지                      |                          11. 판매 상품 삭제                          |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/85738589/222403414-715be1af-a08e-4dd4-b977-6c2912f721ad.gif"/> | <img src="https://user-images.githubusercontent.com/85738589/222403958-28711456-75d5-4ec2-8200-7327e3e95cd5.gif"/> |

|                     12. 로그아웃                      |
| :-------------------------------------------------------------:|
| <img src="https://user-images.githubusercontent.com/85738589/222404574-11e66378-373c-4ebc-ba94-9124fd4511f9.gif" width="50%"/> |



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

### 3. 로그인 타입에 따른 다른 로그인 인증 로직 실행
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
    - seller 버튼 클릭시 setSLoginType을 통해 로그인 타입의 상태를 변경하고, 해당 값을 loginCheck 내부 로그인 로직에서 사용한다.
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
```
📦OpenMarket
 📂 src
 ┣ 📂 API
 ┃ ┣ cartApi.jsx
 ┃ ┣ orderApi.jsx
 ┃ ┣ productApi.jsx
 ┃ ┣ sellerApi.jsx
 ┃ ┗ userApi.jsx
 ┣ 📂 assets
 ┣ 📂 components
 ┃ ┣ 📂 Carousel
 ┃ ┣ 📂 CartItem
 ┃ ┣ 📂 CartTotal
 ┃ ┣ 📂 DetailContent
 ┃ ┣ 📂 Etc
 ┃ ┣ 📂 Footer
 ┃ ┣ 📂 Header
 ┃ ┣ 📂 HeaderBtn
 ┃ ┣ 📂 PaymentItem
 ┃ ┣ 📂 ProductCard
 ┃ ┗ 📂 SellerItem
 ┣ 📂 constants
 ┃ ┣ API_URL.js
 ┃ ┗ token.js
 ┣ 📂 pages
 ┃ ┣ 📂 404Page
 ┃ ┣ 📂 CartPage
 ┃ ┣ 📂 DetailPage
 ┃ ┣ 📂 HomePage
 ┃ ┣ 📂 JoinPage
 ┃ ┣ 📂 LoginPage
 ┃ ┣ 📂 PaymentPage
 ┃ ┣ 📂 ProductUploadPage
 ┃ ┣ 📂 SearchResultPage
 ┃ ┗ 📂 SellerCenterPage
 ┣ App.jsx
 ┣ GlobalStyle.jsx
 ┣ index.js
 ┗ Portal.js
 ```