package com.book.model;

//import java.time.Instant;
//import javax.persistence.*;
//
//@Entity
//@Table(name = "order")
//public class Order {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Basic(optional = false)
//    @Column(name = "id", unique = true, nullable = false)
//    private Long id;
//
//    @Column(name = "id_book", nullable = false)
//    private Long bookId;
//
//    @Column(name = "id_user", nullable = false)
//    private Long userId;
//
//    @Column(name = "price_per_book")
//    private Integer pricePerBook;
//
//    @Column(name = "count")
//    private Integer count;
//
//    @Column(name = "buy_date")
//    private Instant buyDate;
//
//    @Column(name = "summary_price")
//    private Integer summaryPrice;
//
//    public Order(Long bookId, Long userId, Integer pricePerBook, Integer count, Instant buyDate, Integer summaryPrice) {
//        this.bookId = bookId;
//        this.userId = userId;
//        this.pricePerBook = pricePerBook;
//        this.count = count;
//        this.buyDate = buyDate;
//        this.summaryPrice = summaryPrice;
//    }
//
//    public Order() {}
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Long getBookId() {
//        return bookId;
//    }
//
//    public void setBookId(Long bookId) {
//        this.bookId = bookId;
//    }
//
//    public Long getUserId() {
//        return userId;
//    }
//
//    public void setUserId(Long userId) {
//        this.userId = userId;
//    }
//
//    public Integer getPricePerBook() {
//        return pricePerBook;
//    }
//
//    public void setPricePerBook(Integer pricePerBook) {
//        this.pricePerBook = pricePerBook;
//    }
//
//    public Integer getCount() {
//        return count;
//    }
//
//    public void setCount(Integer count) {
//        this.count = count;
//    }
//
//    public Instant getBuyDate() {
//        return buyDate;
//    }
//
//    public void setBuyDate(Instant buyDate) {
//        this.buyDate = buyDate;
//    }
//
//    public Integer getSummaryPrice() {
//        return summaryPrice;
//    }
//
//    public void setSummaryPrice(Integer summaryPrice) {
//        this.summaryPrice = summaryPrice;
//    }
//}




