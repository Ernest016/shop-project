function Footer() {
    return <footer className="page-footer accent-4 purple">
        <div className="footer-copyright ">
            <div className="container">
                © {new Date().getFullYear()} Kayumov E.
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };