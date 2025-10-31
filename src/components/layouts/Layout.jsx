export default function Layout(props) {
  console.log(props);
  const { children } = props;

  return (
    <>
      <header>
        <h1 className="text-gradient">Copacetic</h1>
      </header>
      <main>{children}</main>
      <footer>
        <small>Created by</small>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jash-parmar-7973b2255/"
        >
          <img
            alt="pfp"
            src="https://i.ibb.co/wN8MJxKr/jash.jpg"
          />
          <p>Jash Parmar</p>
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </footer>
    </>
  );
}
