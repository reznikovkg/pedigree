interface Univercity {
    type: string; // Тип образования
    level: string; // Уровень образования
    name: string; // Полное название образовательного учреждения
    city: string; // Город
    startDate: DateString; // Дата начала обучения
    endDate: DateString; // Дата завершения обучения
}

interface School {
    name: string; // Полное название образовательного учреждения
    city: string; // Город
    startDate: DateString; // Дата начала обучения
    endDate: DateString; // Дата завершения обучения
}
