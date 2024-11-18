// Пример использования функции

const editorElement = document.querySelector("#editor");
if (editorElement) {
    alert("works");
    const editor = new toastui.Editor({
        el: editorElement,
        height: "500px",
        initialEditType: "markdown",
        previewStyle: "vertical",
    });

    editor.on("change", async () => {
        console.log(editor.getMarkdown()); // Здесь вы можете отправить обработанный текст в базу данных
    });
}
