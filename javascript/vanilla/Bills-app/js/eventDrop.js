const ModificationData = (function () {
    let drag;
    return class {
        constructor(element, trash, classDataPrint) {
            this.element = element;
            this.trash = trash;
            this.classDataPrint = classDataPrint;
            this.eventDragAndDrop();
        }
        Subscribe(boolean) {
            this.boolean = boolean;
            if (this.boolean == true) this.setclass();
        }
        clearStyles(){
            this.element.forEach(i => {
                i.style.opacity = "1";
                i.style.color = "white";
                i.setAttribute("draggable", false);
            });
        }
        setclass(){
            this.element.forEach(i => {
                i.addEventListener('click',(e)=>{
                    this.clearStyles()
                    const parent = e.target.parentNode
                    parent.style.opacity = "0.5";
                    parent.style.color = "rgb(0, 128, 94)";
                    parent.setAttribute("draggable", true);
                })
            });
        }
        eventDragAndDrop() {
            this.drag = drag;
            document.addEventListener('dragstart', (e) => {
                drag = e.target;
                this.trash.style.opacity='1';
            }, false)
            document.addEventListener('dragover', (e) => {e.preventDefault();}, false)
            document.addEventListener('drop', (e) => {
                e.preventDefault();
                this.CollectObject();
            }, false)
        }
        CollectObject() {
            this.classDataPrint;
            this.classDataPrint.array.splice(drag.id, 1);
            drag.remove();
        }
    }
}())