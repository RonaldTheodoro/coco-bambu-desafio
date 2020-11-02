class Example(object):

    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Example, cls).__new__(cls)

        return cls.instance

    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name


example = Example('name example')
example2 = Example('name example2')


print(example)
print(example2)


"""
Saída, linha 18: name example2
Saída, linha 19: name example2
"""