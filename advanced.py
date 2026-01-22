# class MyArray:
#     def __init__(self):
#         self.dictionary = {}
#         self.length = 0
#     def push(self, value):
#         self.dictionary[self.length] = value
#         self.length += 1
#     def pop(self):
#         if self.length ==0:
#             return None
#         self.length -= 1
#         return self.dictionary.pop(self.length)  


# arr = MyArray()
# arr.push(6)
# arr.push(612)
# print(arr.length)          

# def first_repeated_value(list_):
#     for i in range(0, len(list_)):
#         for j in range(i+1, len(list_)):
#             if list_[i] == list_[j]:
#                 return list_[j]
#     return None            


# print(first_repeated_value([1,2,4,5,7,2]))