export default function About() {
  const handleOpenPdf = () => {
    window.open("Ethan_Stein_Resume.pdf", "_blank");
  };

  return (
    <div className="py-2">
      <p>
        Welcome to my personal portfolio! I'm Ethan Stein, a Software Engineer and recent Computer Science graduate from
        the University of Central Florida. Feel free to browse around and see some of my projects and industry
        experience!
        <br />
        <br />
        I'm <p className="italic inline">currently looking for Software Engineering roles</p>. If you have any questions
        or would like to connect, feel free to <a href="mailto:ethanmstn33@gmail.com">reach out!</a>
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://github.com/ethans333">Github</a>
        <a href="https://www.linkedin.com/in/ethan-stein-231527256/">LinkedIn</a>
        <a className="cursor-pointer" onClick={handleOpenPdf}>
          Resume
        </a>
      </div>
    </div>
  );
}
