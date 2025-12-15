# #####IS A NUMBER EVEN 

# def is_even (n):
#     return (n & 1) == 0

# # print(is_even(5))    

# arr = str([1,2,3,4,5,6,7,2,2])

# arr_2 = str([1,9,18,4])
# joint = "".join(["hello", "world"])
# # print(joint)

# # print("Hello".split())

# print(id(arr))
# # print(id(list_))

# print(arr.count("2"))

# # print(pow(2,3))    or print(2**3)

# print(format(123.4567, ".2f"))
# print(globals())




# ###max number
# print(max(a + b + abs(a-b))/2)

# def convert_to_celcius (temperature):
#     celcius = float((temperature - 32) * (5/9))
#     return celcius


# def weather_info (temp):
#     c = convert_to_celcius(temp)
#     if (c > 0):
#         return (f"{c} is freezing temperature")
#     else:
#         return (f"{c} is above freezing temperature")
    

# print(weather_info(60))


# capitalized = "$%&".capitalize()
# print(isinstance(capitalized, str))

# def count_positives_sum_negatives(arr):
#     holder = []
#     total = 0
#     neg = 0
#     if len(arr)<=0:
#         return []
#     else:
#         for num in arr:
#             if num>0:
#                 total += 1
#             elif num<0:
#                 neg += num

#         holder.append(total)  
#         holder.append(neg)  
#         return holder if sum(holder)>1 else []

# print(count_positives_sum_negatives([1,0]))

name_1 = "Hello"
name_2 = 'World'

print([name_1, name_2])