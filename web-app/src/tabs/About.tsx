export default function About() {
  const handleOpenPdf = () => {
    window.open("Ethan Stein Resume.pdf", "_blank");
  };

  return (
    <div>
      <p>
        Qui ea veniam eu excepteur ut nostrud eiusmod pariatur fugiat aliqua
        incididunt. Eu sunt nisi eu minim minim sit ex ullamco cupidatat
        ullamco. Qui sit fugiat excepteur sit Lorem Lorem laboris esse.
        Cupidatat elit cupidatat esse consectetur ex. Cillum irure duis sint
        nulla id ipsum sint proident quis aliqua culpa minim commodo.
        <br />
        <br />
        Duis culpa Lorem sunt culpa consequat nostrud culpa. Elit laboris
        exercitation elit tempor consectetur amet sit ut irure laborum deserunt
        officia consectetur. Irure cillum consequat qui deserunt elit elit.
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
