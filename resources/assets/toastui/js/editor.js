// Пример использования функции
const editorElement = document.querySelector("#editor");
if (editorElement) {
    const editor = new toastui.Editor({
        el: editorElement,
        height: "500px",
        initialEditType: "markdown",
        previewStyle: "vertical",
    });

    editor.on("change", async () => {
        console.log(processedMarkdown); // Здесь вы можете отправить обработанный текст в базу данных
    });
}
