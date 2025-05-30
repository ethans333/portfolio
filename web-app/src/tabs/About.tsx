export default function About() {
  const handleOpenPdf = () => {
    window.open("Ethan Stein Resume.pdf", "_blank");
  };

  return (
    <div>
      <p>
        Welcome all to my personal portfolio! My name is Ethan Stein, a software
        engineer and recent graduate in Computer Science. Browse around to see
        some of my projects and experience.
        <br />
        <br />I am{" "}
        <p className="italic inline">
          currently looking for Software Engineering roles
        </p>
        . If you have any questions or would like to connect, feel free to{" "}
        <a href="mailto:ethanmstn33@gmail.com">reach out!</a>
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://github.com/ethans333">Github</a>
        <a href="https://www.linkedin.com/in/ethan-stein-231527256/">
          LinkedIn
        </a>
        <a className="cursor-pointer" onClick={handleOpenPdf}>
          Resume
        </a>
      </div>
    </div>
  );
}
