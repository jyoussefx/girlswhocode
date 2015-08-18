range(-10000000,100000000)
def add(number,number2):
    for i in range(number2):
        number=number+1
    return number
def subtract(number,number2):
    for i in range(number2):
        number=number-1
    return number
def multiply(number,number2):
    for i in range(number2):
        number=number+number
    return number
def divide(number,number2):
    for i in range(number2):
        number=number-number
    return number
x=multiply(6,5)
print (x)