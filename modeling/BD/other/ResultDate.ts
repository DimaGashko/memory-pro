interface ResultData {
   template: string; // Шаблон показа запоминаемых данных (пример: "xx xxx")
   data: number[]; // Массив правильных ответов (элементы - id данных)
   errors: number[]; // Массив индексов ошибок (индексов в массиве data)
   wrongData: number[]; // Массив данных которые были указаны неверно
   itemsTime: number[]; // Время запоминания элементов
}