export function buttonBuild(btnClass) {
    const btn = document.createElement("button");        
    btn.setAttribute("type", "button");
    if(btnClass) btn.classList.add(...btnClass.split(' '));
    return btn;
}
