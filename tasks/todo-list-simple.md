# Технічне завдання: Простий To-Do List (без масивів)

## Мета проекту
Розробити простий To-Do List, який працює з одним завданням, що дозволить студентам освоїти змінні, функції та умовні конструкції.

## Функціональні вимоги

### 1. Додавання завдання (`addTask`)
- Якщо завдання ще не створено → зберегти його та повідомити користувача.
- Якщо завдання вже існує → вивести повідомлення, що потрібно його оновити.

### 2. Перегляд завдання (`getTask`)
- Якщо завдання існує → вивести його в консоль.
- Якщо завдання відсутнє → вивести повідомлення, що завдань немає.

### 3. Оновлення завдання (`updateTask`)
- Якщо завдання існує → оновити його та повідомити користувача.
- Якщо завдання відсутнє → повідомити, що немає що оновлювати.
- Якщо нове завдання збігається з поточним → повідомити, що оновлення не потрібне.

### 4. Видалення завдання (`deleteTask`)
- Якщо завдання існує → видалити його та повідомити користувача.
- Якщо завдання вже видалено → повідомити, що видаляти нічого.

### 5. Введення нового завдання (`enterTask`)
- Користувач вводить завдання через `prompt()`.
- Якщо завдання ще не створено → зберегти його та повідомити користувача.
- Якщо завдання вже існує → вивести повідомлення, що потрібно його оновити.

## Приклад виконання

### Взаємодія в консолі
```plaintext
addTask("Купити молоко")
> Завдання додано: Купити молоко

addTask("Купити хліб")
> Завдання вже існує. Використовуйте updateTask() для змін.

getTask()
> Поточне завдання: Купити молоко

updateTask("Купити хліб")
> Завдання оновлено: Купити хліб

updateTask("Купити хліб")
> Нове завдання таке саме, як поточне. Оновлення не потрібно.

deleteTask()
> Завдання видалено: Купити хліб

deleteTask()
> Немає завдання для видалення.

getTask()
> Немає активного завдання.

enterTask()
> Введіть нове завдання: (користувач вводить "Купити молоко")
> Завдання додано: Купити молоко

enterTask()
> Введіть нове завдання: (користувач вводить "Купити хліб")
> Завдання вже існує. Використовуйте updateTask() для змін.

getTask()
> Поточне завдання: Купити молоко
```
