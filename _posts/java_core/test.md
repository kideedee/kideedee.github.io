- Corpus:
("hug", 10), ("pug", 5), ("pun", 12), ("bun", 4), ("hugs", 5)
- Bộ từ điển khởi tạo:
["b", "g", "h", "n", "p", "s", "u"]
Biểu diễn corpus thông qua bộ từ điển:
("h" "u" "g", 10), ("p" "u" "g", 5), ("p" "u" "n", 12), ("b" "u" "n", 4), ("h" "u" "g" "s", 5)

Vòng lặp 1:
- Cặp token ("u", "g") xuất hiện nhiều nhất: 20 lần => thêm token "ug" vào từ điển
- Bộ từ điển mới:
["b", "g", "h", "n", "p", "s", "u", "ug"]
- Corpus mới:
("h" "ug", 10), ("p" "ug", 5), ("p" "u" "n", 12), ("b" "u" "n", 4), ("h" "ug" "s", 5)

Vòng lặp 2:
- Cặp token ("u", "n") xuất hiện nhiều nhất: 16 lần => thêm token "un" vào từ điển
- Bộ từ điển mới:
["b", "g", "h", "n", "p", "s", "u", "ug", "un"]
- Corpus mới:
("h" "ug", 10), ("p" "ug", 5), ("p" "un", 12), ("b" "un", 4), ("h" "ug" "s", 5)

Vòng lặp 3: 
- Cặp token ("h", "ug") xuất hiện nhiều nhất: 15 lần => thêm token "hug" vào từ điển
- Bộ từ điển mới:
["b", "g", "h", "n", "p", "s", "u", "ug", "un", "hug"]
- Corpus mới:
("hug", 10), ("p" "ug", 5), ("p" "un", 12), ("b" "un", 4), ("hug" "s", 5)