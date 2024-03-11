import './scss/Main.scss';
import {useGoogleLogin} from "@react-oauth/google";
import axios from "axios";

function Main() {

    const googleSocialLogin = useGoogleLogin({
        scope: "email profile",
        onSuccess: async ({ code }) => {
            axios
                .post("http://localhost:8085/login/oauth2/code/google", { code })
                .then(({ data }) => {
                    console.log(data);
                });
        },

        onError: (errorResponse) => {
            console.error(errorResponse);
        },
        flow: "auth-code"
    })

    return (
        <header id="project-main-header">
            <img id="project-main-header-logo" src="../../../public/ExploreNestTitle.jpg" width={160} height={50} />
            <nav id="project-main-menu">
                <span onClick={googleSocialLogin}>로그인</span>
                <span onClick={() => window.location.href = "/project/write"}>글 쓰기</span>
                <span>프로필 정보 조회</span>
            </nav>
        </header>
    )
}


export default Main