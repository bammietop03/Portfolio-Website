const handleDownload = () => {
  const link = document.createElement("a");
  link.href = `./public/assets/cv.pdf`; // URL of the file
  link.download = "bamiwo_resume.pdf"; // Suggested file name for download
  link.click(); // Trigger the download
};

export default handleDownload;
