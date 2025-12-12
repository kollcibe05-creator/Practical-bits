dict_ = { 
 "english": "Welcome",
 "czech": "Vitejte",
 "danish": "Velkomst",
 "dutch": "Welkom",
 "estonian": "Tere tulemast",
 "finnish": "Tervetuloa",
 "flemish": "Welgekomen",
 "french": "Bienvenue",
 "german": "Willkommen",
 "irish": "Failte",
 "italian": "Benvenuto",
 "latvian": "Gaidits",
 "lithuanian": "Laukiamas",
 "polish": "Witamy",
 "spanish": "Bienvenido",
 "swedish": "Valkommen",
 "welsh": "Croeso",
}
# def greet(language):
#         for greeting in languages:
#             # print(greeting)
#             # print(greeting[0])
#             if greeting[0] == language:
#                 salutation = greeting[1]
#                 return (salutation)
#         return "Welcome"        

def greet(language):
    if language in dict_.keys():
        return dict_[language]
    else:
        return "Welcome"     

# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))
# print(greet("french"))




list_ = [1,2,3,4,5,6,7,8,9,10, 21]

# remove(li)
# list_.insert(0, 0)
# print(list_)

print(list_)