import React, { useState } from 'react';

import Editor, { Value } from '@react-page/editor';
import '@react-page/editor/lib/index.css';

// The rich text area plugin (Slate)
import slate from '@react-page/plugins-slate';
import '@react-page/plugins-slate/lib/index.css';

// The image display plugin
import image from '@react-page/plugins-image';
import '@react-page/plugins-image/lib/index.css';


import { cellPlugins } from './ReactPage/cellPlugins';
// Define which plugins we want to use.
//const cellPlugins = [slate(), image];

const ReactPage = () => {
    const [value, setValue] = useState();

    const TRANSLATIONS = {
        'Edit blocks': 'Редактировать блоки',
        'Add blocks': 'Добавить блоки',
        'Move blocks': 'Передвинуть блоки',
        'Resize blocks': 'Изменить размер блоков',
        'Preview page': 'Предпросмотр',
        'Video': 'Видео',
        'Text': 'Текст',
        'Divider': 'Разделитель',
        'Spacer': 'Пустое пространство',
        'Add blocks to page': 'Добавить блоки на страницу',
        'Search for blocks': 'Поиск блоков',
        'Remove Plugin': 'Удалить',
        'Duplicate Plugin': 'Дублировать',
        'Write here...': 'Напишите здесь',
        'Image': 'Изображение',
        'OR': 'Или',
        'Open link in new window': 'Открыть ссылку в новом окне',
        'Code snippet': 'Вставка фрагмента Кода',
        'Background': 'Фон',
        'Color': 'Цвет',
        'Cancel': 'Отмена',
        'Katex': 'Формула (формат - KaTex)',
        'Set Color': 'Установить цвет',
        'Heading 1': 'Заголовок 1',
        'Heading 2': 'Заголовок 2',
        'Heading 3': 'Заголовок 3',
        'Heading 4': 'Заголовок 4',
        'Heading 5': 'Заголовок 5',
        'Heading 6': 'Заголовок 6',
        'Link': 'Ссылка',
        'Ordered List': 'Упорядоченный список',
        'Unordered List': 'Неупорядоченный список',
        'Quote': 'Цитата',
        'Code Block': 'Блок Кода',
        'Align Left': 'По левому краю',
        'Align Center': 'По центру',
        'Align Right': 'По правому краю',
        'Align Justify': 'По ширине',
        'Change size of this window': 'Изменить размер панели',
        'Decrease Indentation': 'Уменьшите отступ',
        'Increase Indentation': 'Увеличить отступ',
        'An advanced rich text area.': 'Текстовый редактор с множеством возможностей',
        'Resizeable, horizontal and vertical empty space.': 'Изменяемое, Горизонтальное или Вертикальное',
        'Loads an image from an url.': 'Загрузить изображение по ссылке-url',
        'Include videos from Vimeo or YouTube': 'Добавить видео по ссылке из YouTube',
        'A horizontal divider': 'Горизонатальный разделитель',
        'A code snippet': '',
        'Add background color, image or gradient': '',
        'No blocks found': 'Ничего не найдено',
        'Click to add or drag and drop it somewhere on your page!': 'Кликните, чтобы добавить, или перетащите в любое место вашей страницы!',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',






    };
    const uiTranslator = React.useCallback((label) => {
        if (TRANSLATIONS[label] !== undefined) {
            return TRANSLATIONS[label];
        }
        return `${label}(to translate)`;
    }, []);

    // ....

    // for editing
    return (
        <Editor uiTranslator={uiTranslator} cellPlugins={cellPlugins} value={value} onChange={setValue} />
    )
    // for displaying saved content
    // <Editor cellPlugins={cellPlugins} value={value} readOnly />;

    // ....
};

export default ReactPage