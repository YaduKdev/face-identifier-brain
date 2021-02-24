

const Navigation = (props) => {
    if(props.isSignedIn) {
    return (
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
            <p className= "f3 link dim black underline pa3 pointer" onClick={() => props.onRouteChange("signOut")}>Sign Out</p>
        </nav>
    )
    } else {
        return (
            <nav style={{display: "flex", justifyContent: "flex-end"}}>
                <p className= "f3 link dim black underline pa3 pointer" onClick={() => props.onRouteChange("signIn")}>Sign In</p>
                <p className= "f3 link dim black underline pa3 pointer" onClick={() => props.onRouteChange("register")}>Register</p>
            </nav>
        )
    }
}

export default Navigation;