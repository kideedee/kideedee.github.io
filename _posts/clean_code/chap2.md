Chương 2: Meaningful Names
===
# 1. Sử dụng tên thể hiện mục đích
- Tên biến, hàm và class phải rõ ràng, thể hiện được mục đích tồn tại, công việc thực hiện và cách sử dụng.
```java
// Tồi - không rõ ý nghĩa
public List<int[]> getThem() {
    List<int[]> list1 = new ArrayList<int[]>();
    for (int[] x : theList)
        if (x[0] == 4)
            list1.add(x);
    return list1;
}

// Tốt - rõ ràng mục đích (game minesweeper)
public List<Cell> getFlaggedCells() {
    List<Cell> flaggedCells = new ArrayList<Cell>();
    for (Cell cell : gameBoard)
        if (cell.isFlagged())
            flaggedCells.add(cell);
    return flaggedCells;
}
```

# 2. Tránh thông tin sai lệch
- Không sử dụng những tên có thể gây hiểu nhầm hoặc có ý nghĩa khác với mục đích thực tế.

# 3. Tạo sự phân biệt có ý nghĩa
- Khi cần đặt tên khác nhau, hãy đảm bảo chúng thể hiện sự khác biệt thực sự về ý nghĩa.
```java
// Tồi - không phân biệt được ý nghĩa
getActiveAccount();
getActiveAccounts(); 
getActiveAccountInfo();

// Tồi - noise words
ProductInfo vs ProductData
CustomerObject vs Customer
```

# 4. Sử dụng tên có thể phát âm được
- Chọn tên có thể đọc và thảo luận được 1 cách tự nhiên
```java
// Tồi - không thể phát âm
class DtaRcrd102 {
    private Date genymdhms; // generation date, year, month, day, hour, minute, second
    private Date modymdhms;
    private final String pszqint = "102";
}

// Tốt - có thể phát âm và thảo luận
class Customer {
    private Date generationTimestamp;
    private Date modificationTimestamp;
    private final String recordId = "102";
}
```

# 5. Sử dụng tên có thể tìm kiếm
- Tên dài, có ý nghĩa đễ tìm kiếm hơn các ký tự đơn hoặc magic number

# 6. Tránh mã hóa
- Không cần thêm thông tin kiểu dữ liệu vào tên biến trong ngôn ngữ hiện đại.

# 7. Tránh xa ánh xạ tinh thần
- Người đọc không nên phải dịch tên biến sang ý nghĩa khác trong đầu.

# 8. Tên class
- Class và Object nên có tên là danh từ hoặc cụm danh từ

# 9. Tên method
- Method nên có tên là động từ hoặc cụm động từ

# 10. Đừng cố tỏ ra thông minh
- Tránh dùng tiếng lóng, từ văn hóa địa phương, hoặc chơi chữ

# 11. Chọn 1 từ cho 1 khái niệm
- Dùng từ nhất quán cho cùng 1 khái niệm trong toàn bộ project.

# 12. Sử dụng tên từ lĩnh vực giải pháp
- Ưu tiên dùng thuật ngữ khoa học máy tính, tên thuật toán, pattern khi phù hợp.

# 13. Sử dụng tên từ lĩnh vực bài toán
- Khi không có thuật ngữ kỹ thuật phù hợp, dùng thuật ngữ từ domain của bài toán

# 14. Thêm ngữ cảnh có ý nghĩa
- Đặt tên trong ngữ cảnh rõ ràng bằng class, function hoặc namespace.
```java
// Tồi - thiếu ngữ cảnh
private void printGuessStatistics(char candidate, int count) {
    String number;
    String verb; 
    String pluralModifier;
    // ...
}

// Tốt - có ngữ cảnh rõ ràng
public class GuessStatisticsMessage {
    private String number;
    private String verb;
    private String pluralModifier;
    
    public String make(char candidate, int count) {
        createPluralDependentMessageParts(count);
        return String.format("There %s %s %s%s", 
                           verb, number, candidate, pluralModifier);
    }
}
```

# 15. Đừng thêm ngữ cảnh thừa thãi
- Không sử dụng prefix hay postfix nếu không cần thiết.


