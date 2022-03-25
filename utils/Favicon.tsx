const Favicon = () => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/assets/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/assets/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/assets/favicons/favicon-16x16.png"
      />
      <link rel="icon" href="/public/assets/favicons/favicon.ico" />
      <link rel="manifest" href="/public/assets/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/public/assets/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};
export default Favicon;
