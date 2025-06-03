# Java Encapsulation - Đóng gói

## Tổng quan
Encapsulation (Đóng gói) là một trong bốn nguyên lý cơ bản của OOP, bao gồm:
- **Access modifiers** (private, protected, public, package-private)
- **Getter/Setter best practices**
- **Data hiding** và **Information hiding**
- **Immutable objects**

---

## 1. Access Modifiers

### 1.1 Private
Chỉ truy cập được trong chính class đó.

```java
public class BankAccount {
    private double balance; // Chỉ truy cập được trong class này
    private String accountNumber;
    
    private boolean isValidAmount(double amount) {
        return amount > 0;
    }
}
```

### 1.2 Protected
Truy cập được từ subclass và các class trong cùng package.

```java
public class Vehicle {
    protected String engine; // Truy cập được từ subclass và cùng package
    
    protected void startEngine() {
        // Logic khởi động engine
    }
}

public class Car extends Vehicle {
    public void drive() {
        startEngine(); // OK - có thể truy cập protected method từ parent
    }
}
```

### 1.3 Package-private (Default)
Chỉ truy cập được trong cùng package.

```java
class DatabaseConfig {
    String connectionString; // Chỉ truy cập được trong cùng package
    
    void connect() {
        // Logic kết nối
    }
}
```

---

## 2. Getter/Setter Best Practices

**Nguyên tắc chung:** Sử dụng getter/setter khi cần behavior, không dùng khi chỉ là pure data.

### 2.1 Getter/Setter cơ bản

```java
public class Person {
    private String name;
    private int age;
    
    // Getter
    public String getName() {
        return name;
    }
    
    // Setter với validation
    public void setAge(int age) {
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("Invalid age: " + age);
        }
        this.age = age;
    }
}
```

### 2.2 Defensive Copying cho Mutable Objects

```java
public class Order {
    private List<Item> items;
    private Date orderDate;
    
    // Trả về copy để tránh external modification
    public List<Item> getItems() {
        return new ArrayList<>(items);
    }
    
    // Defensive copy cho Date
    public Date getOrderDate() {
        return new Date(orderDate.getTime());
    }
    
    public void setOrderDate(Date orderDate) {
        this.orderDate = new Date(orderDate.getTime());
    }
}
```

---

## 3. Immutable Objects

### Cách thiết kế Immutable Class

```java
public final class Money {
    private final BigDecimal amount;
    private final Currency currency;
    
    public Money(BigDecimal amount, Currency currency) {
        this.amount = amount;
        this.currency = currency;
    }
    
    public BigDecimal getAmount() {
        return amount; // BigDecimal đã immutable
    }
    
    public Currency getCurrency() {
        return currency;
    }
    
    // Thay vì modify, tạo object mới
    public Money add(Money other) {
        if (!this.currency.equals(other.currency)) {
            throw new IllegalArgumentException("Currency mismatch");
        }
        return new Money(this.amount.add(other.amount), this.currency);
    }
}
```

---

## 4. Information Hiding

**Information Hiding** - Che dấu implementation details khỏi client code.

```java
public class EmailService {
    private SMTPClient smtpClient;
    private TemplateEngine templateEngine;
    
    // Public interface - che giấu complexity bên trong
    public void sendWelcomeEmail(User user) {
        String template = loadTemplate("welcome");
        String content = renderTemplate(template, user);
        sendEmail(user.getEmail(), "Welcome", content);
    }
    
    // Private implementation details
    private String loadTemplate(String templateName) { /* ... */ }
    private String renderTemplate(String template, User user) { /* ... */ }
    private void sendEmail(String to, String subject, String content) { /* ... */ }
}
```

---

## 5. Encapsulation Violations Cần Tránh

### 5.1 Returning Mutable Internal State

#### ❌ Cách sai:
```java
public class BadExample {
    private List<String> items = new ArrayList<>();
    
    public List<String> getItems() {
        return items; // Caller có thể modify internal state
    }
}
```

#### ✅ Cách đúng:
```java
public class GoodExample {
    private List<String> items = new ArrayList<>();
    
    public List<String> getItems() {
        return Collections.unmodifiableList(items);
    }
    
    public void addItem(String item) {
        items.add(item);
    }
}
```

### 5.2 Exposing Mutable Objects Through Setters

#### ❌ Cách sai:
```java
public void setItems(List<String> items) {
    this.items = items; // Caller vẫn giữ reference
}
```

#### ✅ Cách đúng:
```java
public void setItems(List<String> items) {
    this.items = new ArrayList<>(items);
}
```

---

## 6. Các Câu Hỏi Phỏng Vấn Thường Gặp

### Câu hỏi về Access Modifiers:
- Sự khác biệt giữa `private`, `protected`, `public` và `package-private`?
- Khi nào nên sử dụng từng loại access modifier?

### Câu hỏi về Encapsulation:
- Tại sao cần encapsulation?
- Làm thế nào để đảm bảo class được encapsulate tốt?
- Defensive copying là gì và khi nào cần sử dụng?

### Câu hỏi về Immutable Objects:
- Làm thế nào để tạo một immutable class?
- Lợi ích của immutable objects là gì?
- String trong Java có phải là immutable không? Tại sao?

---

## Tóm tắt

**Encapsulation** giúp:
- **Bảo vệ dữ liệu** khỏi việc truy cập trái phép
- **Kiểm soát** cách thức tương tác với object
- **Che giấu implementation details** khỏi client code
- **Tăng tính bảo trì** và **flexibility** của code
- **Tạo ra clear interface** giữa các component