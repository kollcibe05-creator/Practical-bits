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
# arr.push("6")
# print(arr.length)          

# print(hasattr(arr,"length"))

# def first_repeated_value(list_):
#     for i in range(0, len(list_)):
#         for j in range(i+1, len(list_)):
#             if list_[i] == list_[j]:
#                 return list_[j]
#     return None            


# print(first_repeated_value([1,2,4,5,7,2]))

# def first_repeated_value(list):
#     number_set = set()
#     for i in range(0, len(list)):
#         if list[i] in number_set:
#             return list[1]
#         number_set.add(list[i])
#     return None        


# print(first_repeated_value([1,2,4,5,7,2]))   


# class MySet:
#     def __init__(self, enumerable=[]):
#         self.dictionary = {}
#         for value in enumerable:
#             self.dictionary[value] = True
#     def has(self, value):
#         return value in self.dictionary[value]

#     def add(self, value):
#         self.dictionary[value] = True
#         return self

#     def delete(self, value):
#         self.dictionary.pop(value, None)  
#         return self
#     def size(self):
#         return len(self.dictionary)      
    #   def clear(self):
    #     self.dictionary.clear()
            

# print(len({"greeting":"Hello", "Name":"Collins"}))



# def reverse_string (string):
#     stack = []
#     for char in string:
#         stack.append(char)
#     reversed = ""
#     while stack:
#         reversed += stack.pop()
#     return reversed    

# print(reverse_string("Coolio"))


# def evaluate_keystrokes(string):
#     i = len(string) - 1
#     result = ""
#     skip = 0
#     while i >= 0:
#         if string[i] == "<":
#             skip += 1
#             i -= 1
#         else:
#             if skip> 0:
#                 i -= skip
#                 skip = 0
#             else:
#                 result = string[i] + result
#                 i -= 1 
#     return result                   


# print(evaluate_keystrokes("abcd<<<fg<h"))


# def evaluate_keystrokes(string):
#     stack = []
#     for char in string:
#         if char =="<":
#             if len(stack) != 0:
#                 stack.pop()
#         else:
#             stack.append(char)
#     result = ''
#     while stack:
#         result = stack.pop() + result
#     return result                    

# print(evaluate_keystrokes("abcd<<<fg<h"))

# string = ["h", "e", "l", "l", "o"]

# print(" ".join(string))


# ##################Singly linked List #######################
# class Node:
#     def __init__(self, data, next_node=None):
#         self.data = data
#         self.next_node = next_node

# class LinkedList:
#     def __init__(self, head=None):
#         self.head = head
#     def append(self, node):
#         if self.head == None:
#             self.head = node
#             return
#         last_node = self.head
#         while last_node.next_node:
#             last_node = last_node.next_node
#         last_node.next_node = node    



# list_ = LinkedList()
# list_.append(Node("Bulldog"))
# list_.append(Node("Chihuahua"))
# list_.append(Node("German Shepherd"))        

# bulldog = Node("Bulldog")

# chihuahua = Node("Chihuahua")                     
# bulldog.next_node = chihuahua                 #inefficient ~ append() in LinkedList
# german_shepherd = Node("German Shepherd")
# chihuahua.next_node = german_shepherd



########Doubly linked list###################
class DoublyLinkedList:
    def __init__(self, head=None, tail=None):
        self.head = head
    def append(self, node):
        if self.head ==None:
            self.head = node
            self.tail = node
            return
        node.prev = self.tail
        self.tail.next_node = node
        self.tail = node    
    def delete_tail(self):
        if self.head ==self.tail:
            self.head = None
            self.tail = None
        else:
            prev = self.tail.prev_node

            prev.next_node = None
            self.tail = prev    




