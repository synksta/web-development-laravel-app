const editorElement = document.querySelector("#editor");

if (editorElement) {
    console.log("editor");
    const editor = new toastui.Editor({
        el: editorElement,
        height: "500px",
        initialEditType: "markdown",
        previewStyle: "vertical",
    });

    editor.getMarkdown();
}
