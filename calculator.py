from tkinter import *
import ast
import math

root = Tk()

i = 0


def num_buttons(n):
    global i
    display.insert(i, n)
    i += 1


def operation_buttons(op):
    global i
    length = len(str(op))
    if op == "3.141592653589793":
        display.insert(i, str(math.pi))
    else:
        display.insert(i, op)
    i += length


def clear_button():
    display.delete(0, END)


def equals_button():
    equation = display.get()
    try:
        n = ast.parse(equation, mode="eval")
        result = eval(compile(n, "<string>", "eval"))
        clear_button()
        display.insert(0, result)
    except Exception:
        clear_button()
        display.insert(0, "ERROR")


def sqrt_button():
    global i
    try:
        number = float(display.get())
        result = math.sqrt(number)
        clear_button()
        display.insert(0, str(result))
    except ValueError:
        clear_button()
        display.insert(0, "ERROR")


def delete_button():
    entry_len = display.get()
    if len(entry_len):
        el = len(entry_len)
        display.delete(el - 1, END)


display = Entry(root, width=40)
display.grid(row=1, columnspan=8, padx=2, pady=2)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
operations = ["(", ")", "/", "*", "+", "-", ".", "**", "π", "%", "**2"]
all_buttons = ["C", "(", ")", "%", "/", "π", 7, 8, 9, "*", "**", 4, 5, 6, "+", "**2", 1, 2, 3,
               "-", "sqrt", ".", 0, "<-", "="]


def create_calculator(a, op):
    count = 0
    for x in range(5):
        for y in range(5):
            button_text = a[count]
            if button_text in range(10):
                button = Button(root, text=button_text, width=6, height=2,
                                command=lambda text=button_text: num_buttons(text))
            elif button_text in op:
                if button_text == ".":
                    button = Button(root, text=button_text, width=6, height=2,
                                    command=lambda text=button_text: operation_buttons(text))
                elif button_text == "π":
                    button = Button(root, text="π", width=6, height=2, bg="orange",
                                    command=lambda text=math.pi: num_buttons(text))
                else:
                    button = Button(root, text=button_text, width=6, height=2, bg="orange",
                                    command=lambda text=button_text: operation_buttons(text))
            elif button_text == "C":
                button = Button(root, text="C", width=6, height=2, bg="gray", command=clear_button)
            elif button_text == "<-":
                button = Button(root, text="<-", width=6, height=2, bg="gray", command=delete_button)
            elif button_text == "sqrt":
                button = Button(root, text="sqrt", width=6, height=2, bg="orange", command=sqrt_button)
            else:
                button = Button(root, text="=", width=6, height=2, bg="orange", command=equals_button)

            button.grid(row=x + 2, column=y, padx=2, pady=2)
            count += 1


create_calculator(all_buttons, operations)

root.mainloop()
