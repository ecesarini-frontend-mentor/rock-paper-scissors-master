import * as btn from '/js/components/buttons/buttons.js';


// Specialze "main-play-container-classList", compare with index.html
export function mainContainer(cl, toApp) {
    const mc = document.createElement('div');
    cl.forEach(element => {
      mc.classList.add(element);  
    });
    mc.append(toApp);
    return mpc;
}