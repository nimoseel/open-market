<h1> 아우어마켓 | 모두들 위한 오픈마켓 </h1>

### [ 배포 ]

-   URL : https://sominopenmarket.netlify.app/

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

|                               1. 메인화면 ( + 로그인 전 상품 상세 페이지)                               |                                               2. 회원가입                                                |
| :-----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/e7dfe743-15fd-4eba-a4af-5094f26aea65/image.gif"/> | <img src="https://velog.velcdn.com/images/miniso/post/760c7da9-e080-4430-879e-e306b5aed2c3/image.gif" /> |

|                                                3. 로그인                                                |                                               4. 장바구니                                               |
| :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/1f30c758-bbee-4d95-86aa-2868aaa9f7d2/image.gif"/> | <img src="https://velog.velcdn.com/images/miniso/post/051b675c-6673-4f00-82f3-83c13307b55c/image.gif"/> |

|                                                                                5. 상품 주문하기                                                                                |                                                               6. 상품 결제하기                                                                |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/27603a04-f9e4-48cf-b8cc-a5c3a48fca4f/image.gif" /><span>상세 페이지 내 바로 주문, 장바구니내 개별 주문, 전체 주문</span> | <img src="https://velog.velcdn.com/images/miniso/post/89e6edd0-fa3c-4703-b058-9ca9885fbd32/image.gif"/> <span>react-daum-postcode 사용</span> |

|                          7. 판매회원 홈 화면 + 상품 상세 페이지 + 판매자 센터                           |                                           8. 판매 상품 업로드                                           |
| :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/5d79b37b-58fe-4da1-9112-665ba7414ba3/image.gif"/> | <img src="https://velog.velcdn.com/images/miniso/post/56990375-108b-4aa6-a1e6-d303f082ee6d/image.gif"/> |

|                                         9. 판매 상품 정보 수정                                          |                                           10. 판매 상품 삭제                                            |
| :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/730241f1-61b3-42e8-b37f-adb6097a4415/image.gif"/> | <img src="https://velog.velcdn.com/images/miniso/post/9813535e-ce3a-423e-97e3-2322f81db25f/image.gif"/> |

|                                                11. 검색                                                 |                                              12. 로그아웃                                               |
| :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/14146b3f-5012-44cf-80b7-44fc9da7b02b/image.gif"/> | <img src="https://velog.velcdn.com/images/miniso/post/88737117-d664-4230-ba59-5e6aaeb85a9f/image.gif"/> |

|                                                      13. 반응형                                                      |
| :------------------------------------------------------------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/miniso/post/4ef7fd40-dc6f-4ce6-bacc-200c046288b6/image.gif" width="70%" /> |

<br/>

### [ 주요 코드 ]

#### 1. 디자인 시스템 (네이밍 규칙) 적용

-   일반적인 리액트 컴포넌트와 스타일드 컴포넌트가 혼합되어 있기 때문에 <br/>
    코드의 가독성을 향상시키기 위해 스타일드 컴포넌트 임포트시 컴포넌트 앞에 S. 붙여 구분이 용이하도록 했습니다.

```js
//Home.jsx
return (
    <>
        {loading && <Loading />}
        <Header />
        <Carousel />
        <S.Main>
            {!loading && products && (
                <S.ProductUl className={loading ? '' : 'show'}>
                    {products.map((item) => (
                        <Link
                            key={item.product_id}
                            to={`/product/${item.product_id}`}
                        >
                            <ProductCard {...item} key={item.product_id} />
                        </Link>
                    ))}
                </S.ProductUl>
            )}
        </S.Main>
    </>
);
```

<br/>

### 2. useContext를 활용한 인증 관련 값 관리

-   사용자 인증 관련 값들을 관리합니다.
-   토큰값 가져오기, token 설정하기, useType 확인하기, 로그아웃 하기가 필요한 컴포넌트에서
    useContext를 이용해 값을 사용할 수 있습니다.

```js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [userType, setUserType] = useState(
        localStorage.getItem('user_type') || null,
    );

    const setAuthToken = (newToken, newUserType) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('user_type', newUserType);
        setToken(newToken);
        setUserType(newUserType);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_type');
        setToken(null);
        setUserType(null);
    };

    return (
        <AuthContext.Provider value={{ token, userType, setAuthToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
```

<br/>

### 3. useInput 훅 사용, 유효성 검사 디바운싱 적용

-   커스텀 훅을 정의하여 input 요소와 관련된 처리를 효율적으로, 직관적으로 관리하고자 했습니다.
-   파라미터를 통해 input 요소의 초기값, 유효성 검사 함수, input 요소의 이름을 받을 수 있으며<br/>
    이때 유효성 검사를 진행하지 않는 input의 경우를 대비해 validator 파라미터의 default 값은 null로 설정했습니다.
-   handleChange 함수는 input값이 변경될 때 호출되는 함수로 input 요소의 현재 값을 useState를 사용하여 변경합니다.
-   디바운싱 적용 전엔 handleKeyUp 함수를 사용하여 input 값 변경이 이루어질 때마다 유효성 검사를 수행하고 오류를 처리했습니다.
-   디바운싱 적용 후엔 입력 후 0.3초 동안 입력이 이루어지지 않으면 입력이 완료되었다고 판단하여 유효성 검사를 실시합니다.
-   디바운싱 적용으로 불필요한 유효성 검사 실행을 감소 시켰습니다.

```js
// 주석 처리된 코드는 디바운싱 적용전 코드이며 디바운싱 적용 후 handleKeyUp 대신 useEffect 코드가 추가되었습니다.
import { useState, useEffect, useRef } from 'react';

const useInput = (initialValue, validator = null, inputName) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);

    const debounceTimeout = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log('입력중...');
    };

    //  const handleKeyUp = validator
    //         ? (e) => {
    //               try {
    //                   console.log('입력 완료, 유효성 검사 실시');
    //                   setError(validator(e.target.value));
    //               } catch (error) {
    //                   setError(error.message);
    //               }
    //           }
    //         : null;

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        if (validator && value !== '') {
            debounceTimeout.current = setTimeout(() => {
                console.log('입력 완료, 유효성 검사 실시');
                try {
                    setError(validator(value));
                } catch (error) {
                    setError(error.message);
                }
            }, 300);
        }

        return () => {
            clearTimeout(debounceTimeout.current);
        };
    }, [value, validator]);

    return {
        value,
        setValue,
        error,
        isValid,
        setIsValid,
        onChange: handleChange,
        // onKeyUp: handleKeyUp, - 삭제
        name: inputName,
        id: inputName,
    };
};

export default useInput;
```

<br/>

### 4. 검색 기능 구현

헤더에서 검색어를 입력하고 검색을 실시하면 실행되는 함수

1. 검색어를 url에서 사용할 수 있는 형태로 변환
2. 검색 결과 페이지로 이동. 이때 URL의 쿼리 파라미터로 검색어를 전달
3. 검색어 입력 필드를 초기화

```js
// Header 컴포넌트에서 검색어를 받아 url 쿼리 파라미터로 전달하면
const searchData = async () => {
    try {
        const encodedSearchValue =
            searchWord.value.trim() === ''
                ? ''
                : encodeURIComponent(searchWord.value);

        navigate(`/search?search=${encodedSearchValue}`);
        searchWord.setValue('');
    } catch (error) {
        console.error(error);
    }
};
```

```js
// SearchResult 페이지 컴포넌트에서 값을 보여줌
// 가져온 값을 getSearchData api 호출을 통해 검색을 실시하고 결과값을 렌더링함.
useEffect(() => {
    setLoading(true);
    if (searchValue) {
        try {
            const encodedSearchValue = encodeURIComponent(searchValue);
            getSearchData(activePage, encodedSearchValue).then((res) => {
                setSearchData(res.data);
                setSearchResults(res.data.results);
                setLoading(false);
            });
        } catch (error) {
            console.error(error);
        }
    } else {
        setSearchData({});
        setSearchResults([]);
        setLoading(false);
    }
}, [searchValue, activePage]);
```

<br/>

### 5. onKeyDown 이벤트 사용

-   버튼 클릭과 더불어 엔터 키를 사용하여 입력값을 전송할 수 있도록 했습니다.

```js
const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        if (e.nativeEvent.isComposing === false) {
            searchData();
        }
    }
};
```

<br/>

### 6. svg 이미지를 다크모드 테마에 따라 색상 변경

-   svg 파일에서 다크모드 값에 따라 변경할 속성에 current 값을 설정한다.

```js
<svg>
    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
fill="current" stroke="none">
</svg>
```

-   svg 파일을 컴포넌트처럼 사용하기 위해 ReactComponent로 임포트한다.

```js
import { ReactComponent as LogoImg } from '../../../assets/icon-logo.svg';
```

-   fill에 원하는 색상값을 넣어준다.

```js
export const LogoIcon = () => {
    return <LogoImg fill={'var(--main)'} alt="로고 이미지" />;
};
```

<br/>

### 7. useContext를 활용한 다크 모드 테마 관리

```js
// useTheme을 통해 현재 ThemeContext 값을 가져옴
export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error('error');
    }
    return theme;
};

export const ThemeProvider = ({ children }) => {
    const storedValue = localStorage.getItem('isDarkMode');

    // 초기 다크모드 상태 설정, storedValue가 없다면 false값 설정.
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return storedValue ? JSON.parse(storedValue) : false;
    });

    // toggle 함수, 다크 모드 상태를 토글하고 변경된 상태를 로컬 스토리지에 저장
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('isDarkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    // 컴포넌트가 마운트 될때, storedValue 바뀔 때 실행.
    useEffect(() => {
        if (storedValue !== null) {
            setIsDarkMode(JSON.parse(storedValue));
        }
    }, [storedValue]);

    // 테마 정보를 담은 객체 생성
    const theme = {
        isDarkMode,
        toggleTheme,
    };

    // useContext를 사용하여 ThemeContext 값을 제공.
    // isDarkMode, toggleTheme함수가 제공되고 이를 StyledProvider의 theme props로 전달
    return (
        <ThemeContext.Provider value={theme}>
            <StyledProvider theme={theme}>{children}</StyledProvider>
        </ThemeContext.Provider>
    );
};
```

<br/>

### 8. 기타

-   리액트 라이브러리를 사용했습니다.<br/>
    (react-slick, react-spinners, react-js-pagination, react-daum-postcode)
-   반응형 웹을 구현했습니다.<br/>
    (기존 디자인에서 최대 화면 너비를 1280px로 설정했기 때문에 미디어 쿼리에서도 max-width를 1280px로 설정)
-   정규식을 const로 선언하여 여러 컴포넌트에서 재사용 가능하도록 했습니다.
-   페이지 폴더 구조를 buyer, seller, common으로 분류하여 직관성을 높였습니다.

<br/>

### [ 폴더 트리 ]

```
📦src
 ┣ 📂API
 ┃ ┣ 📜cartApi.jsx
 ┃ ┣ 📜orderApi.jsx
 ┃ ┣ 📜productApi.jsx
 ┃ ┣ 📜searchApi.jsx
 ┃ ┣ 📜sellerApi.jsx
 ┃ ┗ 📜userApi.jsx
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Carousel
 ┃ ┃ ┃ ┣ 📜Carousel.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂DetailContent
 ┃ ┃ ┃ ┣ 📜DetailContent.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┣ 📂buyer
 ┃ ┃ ┣ 📂CartItem
 ┃ ┃ ┃ ┣ 📜CartItem.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂CartTotal
 ┃ ┃ ┃ ┣ 📜CartTotal.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┗ 📂PaymentItem
 ┃ ┃ ┃ ┣ 📜PaymentItem.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂Etc
 ┃ ┃ ┃ ┣ 📜AmountBtn.jsx
 ┃ ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┃ ┣ 📜CartCheckBox.jsx
 ┃ ┃ ┃ ┣ 📜CheckBox.jsx
 ┃ ┃ ┃ ┣ 📜Dropdown.jsx
 ┃ ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┃ ┣ 📜MyPageDropdown.jsx
 ┃ ┃ ┃ ┗ 📜Price.jsx
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┣ 📜SellerCenterHeader.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂HeaderBtn
 ┃ ┃ ┃ ┣ 📜HeaderBtn.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┃ ┣ 📜Loading.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂Paging
 ┃ ┃ ┃ ┣ 📜Paging.jsx
 ┃ ┃ ┃ ┗ 📜_style.css
 ┃ ┃ ┗ 📂ProductCard
 ┃ ┃ ┃ ┣ 📜ProductCard.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┗ 📂seller
 ┃ ┃ ┗ 📂SellerItem
 ┃ ┃ ┃ ┣ 📜SellerItem.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┣ 📂constants
 ┃ ┣ 📜API_URL.js
 ┃ ┗ 📜regex.js
 ┣ 📂contexts
 ┃ ┣ 📜AuthContext.js
 ┃ ┗ 📜ThemeContext.js
 ┣ 📂hooks
 ┃ ┗ 📜useInput.jsx
 ┣ 📂pages
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂404Page
 ┃ ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂DetailPage
 ┃ ┃ ┃ ┗ 📜Detail.jsx
 ┃ ┃ ┣ 📂HomePage
 ┃ ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂JoinPage
 ┃ ┃ ┃ ┣ 📜Join.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┣ 📂LoginPage
 ┃ ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┃ ┣ 📜_style.jsx
 ┃ ┃ ┃ ┗ 📜_styleLoginJoin.jsx
 ┃ ┃ ┗ 📂SearchResultPage
 ┃ ┃ ┃ ┣ 📜SearchResult.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┣ 📂buyer
 ┃ ┃ ┣ 📂CartPage
 ┃ ┃ ┃ ┣ 📜Cart.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┗ 📂PaymentPage
 ┃ ┃ ┃ ┣ 📜Payment.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┗ 📂seller
 ┃ ┃ ┣ 📂ProductUploadPage
 ┃ ┃ ┃ ┣ 📜ProductUpload.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┃ ┃ ┗ 📂SellerCenterPage
 ┃ ┃ ┃ ┣ 📜SellerCenter.jsx
 ┃ ┃ ┃ ┗ 📜_style.jsx
 ┣ 📜App.jsx
 ┣ 📜GlobalStyle.jsx
 ┣ 📜Portal.js
 ┗ 📜index.js
```
