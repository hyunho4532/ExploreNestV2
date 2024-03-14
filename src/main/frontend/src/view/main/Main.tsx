import './scss/Main.scss';
import {GoogleLogin} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import sendDataToServerResponse from "../../@api/response/SendDataToServerResponse.tsx";

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
                        if (credentialResponse.credential != null) {
                            const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                            sendDataToServerResponse(credentialResponseDecoded);
                            console.log(credentialResponseDecoded);
                        }
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