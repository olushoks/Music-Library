const handleAlert = (context, msg) => {
  context(msg);

  let clearInfo = setTimeout(() => {
    context("");
  }, 5000);

  return () => clearTimeout(clearInfo);
};

export default handleAlert;
