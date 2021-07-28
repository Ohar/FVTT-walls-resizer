# FVTT-walls-resizer
Wall resizer for Foundry VTT

Написанный на коленке скрипт для растягивания стен в Foundry VTT, в тех случаях, когда после расстановки стен пришлось менять масштаб сцены и всё поехало.

## Как пользоваться?

1. Экспортируете в Foundry VTT сцену в JSON-файл.
1. Откройте файл `index.html` в браузере
1. Скопируйте текст JSON-файла сцены
1. Вставьте скопированный текст в поле «JSON сцены»
1. Укажите коэффициент перетяжки, на который будут умножены все координаты стен в сцене (Вам надо рассчитать его самостоятельно).
1. Нажмите кнопку «Пересчитать».
1. Если всё в порядке, в поле «Результат» появится новый код для файла сцены, с изменёнными координатами.
1. Скопируйте содержимое поля «Результат» и замените им всё содержимое JSON-файла сцены.
1. Импортируйте JSON-файл сцены с новым содержимым в Foundry VTT и проверьте размеры стен.
