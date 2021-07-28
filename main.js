function resize (e) {
    e.preventDefault()

    try {
        const koef = Number(document.getElementById('koef').value || 1)
        const data = JSON.parse(document.getElementById('textArea').value)
        const {walls} = data

        const resized = JSON.stringify({
            ...data,
            walls: walls.map(
                wall => ({
                    ...wall,
                    c: wall.c.map(pos => pos * koef),
                })
            )
        })

        document.getElementById('result').value = resized
    }
    catch (e) {
        console.error('Не удалось распарсить', e)
    }
}

window.resize = resize
