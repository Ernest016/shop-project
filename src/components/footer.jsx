function Footer() {
    return <footer className="red page-footer accent-4">
        <div className="footer-copyright ">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };