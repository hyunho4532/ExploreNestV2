import './scss/Main.scss';
import {GoogleLogin} from "@react-oauth/google";

function Main() {

    return (
        <header id="project-main-header">
            <img id="project-main-header-logo" src="../../../public/ExploreNestTitle.jpg" width={160} height={50} />
            <nav id="project-main-menu">
                <span onClick={() => window.location.href = "/project/write"}>글 쓰기</span>
                <span>프로필 정보 조회</span>
            </nav>

            <div id="google-login-wrapper">
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log("Login Failed")
                    }}
                />
            </div>
        </header>
    )
}


export default Main