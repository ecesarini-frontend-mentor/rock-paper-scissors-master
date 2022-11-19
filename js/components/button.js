export function buttonBuild(btnClass, btnAttr, btnCb) {
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
	try {
  	if(btnClass) {
      btn.classList.add(...btnClass.split(" "));
    }
    if(btnAttr) { 
      btn.setAttribute("move", btnAttr);
      //btn.setAttribute(btnAttr[0], btnAttr[1]);
    }
		if(btnCb) {
      btn.addEventListener(btnCb[0], btnCb[1]);
    }
  } catch (e) {
    console.log(e.message)
  }
  return btn;
}
