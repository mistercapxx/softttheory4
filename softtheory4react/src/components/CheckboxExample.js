import React, { useState } from 'react';

function CheckboxExample() {
    // Состояние для хранения значения состояния чекбокса
    const [isChecked, setIsChecked] = useState(false);

    // Обработчик изменения состояния чекбокса
    const handleCheckboxChange = () => {
        // Инвертируем текущее состояние isChecked
        setIsChecked(!isChecked);
    };

    return (
        <div>
            {/* Создаем чекбокс и связываем его с состоянием isChecked */}
            <input
                type="checkbox"
                checked={isChecked} // Передаем текущее значение состояния
                onChange={handleCheckboxChange} // Устанавливаем обработчик изменений
            />
            {/* Выводим текст в зависимости от состояния чекбокса */}
            <label>{isChecked ? 'Выбрано' : 'Не выбрано'}</label>
        </div>
    );
}

export default CheckboxExample;
