import './scss/Main.scss';

function Main() {
    return (
        <header id="project-main-header">
            <img id="project-main-header-logo" src="../../../public/ExploreNestTitle.jpg" width={160} height={50} />
            <nav id="project-main-menu">
                <span>로그인</span>
                <span onClick={() => window.location.href = "/project/write"}>글 쓰기</span>
                <span>프로필 정보 조회</span>
            </nav>
        </header>
    )
}


export default Main