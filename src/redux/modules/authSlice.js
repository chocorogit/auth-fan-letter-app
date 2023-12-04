const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    isLoginPage: true,
    isLogin: false,
    accessToken: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // 로그인, 회원가입 페이지 전환
        setIsLoginPage: (state, action) => {
            if (state.isLoginPage !== action.payload) {
                return {
                    ...state,
                    isLoginPage: action.payload,
                };
            }
        },
        setIsLogin: (state, action) => {
            if (action.payload) {
                return {
                    ...state,
                    isLogin: action.payload,
                };
            }
            return state;
        },
        logout: (state) => {
            localStorage.clear();
            state.isLogin = false;
        },
    },
});

export default authSlice.reducer;
export const { setIsLoginPage, setIsLogin, logout } = authSlice.actions;
