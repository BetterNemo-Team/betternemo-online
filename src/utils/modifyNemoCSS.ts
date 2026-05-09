export function modifyTheatre(iframeWin: Window) {
  if (!iframeWin) {
    return
  }
  const injectionDiv: HTMLDivElement | null = iframeWin.document.querySelector('.injectionDiv')
  const blocklyFlyout: HTMLDivElement | null = iframeWin.document.querySelector('.blocklyFlyout')
  const theatre: HTMLDivElement | null = iframeWin.document.querySelector('#theatre')
  const theatreContainer: HTMLDivElement | null =
    iframeWin.document.querySelector('#theatre_container')
  const theatreCanvas: HTMLDivElement | null = iframeWin.document.querySelector('#theatre canvas')
  const askDialog: HTMLDivElement | null = iframeWin.document.querySelector('.ask_dialog')
  if (iframeWin) {
    if (injectionDiv && blocklyFlyout && theatre && theatreContainer && theatreCanvas) {
      theatreContainer.style.setProperty('left', '0px', 'important')
      injectionDiv.style.setProperty('width', 'calc(100% - 337.5px)', 'important')
      injectionDiv.style.setProperty('position', 'static')
      theatre.style.setProperty('height', '100%')
      theatre.style.setProperty('width', '100%')
      theatreCanvas.style.setProperty('height', '100%')
      theatreCanvas.style.setProperty('width', '100%')
      theatreContainer.style.setProperty('height', '100%', 'important')
      theatreContainer.style.setProperty('aspect-ratio', '281/450')
      theatreContainer.style.setProperty('width', '')
    }
    if (askDialog) {
      askDialog.style.setProperty('height', '100%')
      askDialog.style.setProperty('width', '100%')
    }
  }
}
