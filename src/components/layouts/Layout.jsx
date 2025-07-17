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
            src="https://media.licdn.com/dms/image/v2/D4D03AQHLTdNb5MJZHg/profile-displayphoto-shrink_400_400/B4DZZYZC4JG0Ag-/0/1745239685512?e=1758153600&v=beta&t=lpb-CJK6-gK2lrBUA5LTpi9zaiIheYZaidG86V2YU2E"
          />
          <p>Jash Parmar</p>
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </footer>
    </>
  );
}
